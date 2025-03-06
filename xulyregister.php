<?php
session_start();
ob_start();

$conn = mysqli_connect("localhost", "root", "", "salon");
if (!$conn) {
    die("Kết nối đến cơ sở dữ liệu thất bại: " . mysqli_connect_error());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['createName'];
    $user = $_POST['createEmail'];
    $password = $_POST['createPassword'];

    // Kiểm tra xem email đã tồn tại chưa
    $check_email = "SELECT id FROM users WHERE email = ?";
    $stmt_check = mysqli_prepare($conn, $check_email);
    mysqli_stmt_bind_param($stmt_check, 's', $user);
    mysqli_stmt_execute($stmt_check);
    mysqli_stmt_store_result($stmt_check);

    if (mysqli_stmt_num_rows($stmt_check) > 0) {
        die("Email đã được sử dụng. Vui lòng chọn email khác.");
    }

    // Thêm tài khoản mới vào CSDL (ĐÃ SỬA LỖI SQL)
    $create_account = "INSERT INTO users (name, password, email) VALUES (?, ?, ?)";
    $stmt1 = mysqli_prepare($conn, $create_account);
    mysqli_stmt_bind_param($stmt1, 'sss', $name, $password, $user);
    mysqli_stmt_execute($stmt1);

    if (mysqli_stmt_affected_rows($stmt1) > 0) {
        // Lấy thông tin người dùng vừa tạo
        $sql = "SELECT id, name FROM users WHERE email = ? AND password = ?";
        $stmt2 = mysqli_prepare($conn, $sql);
        mysqli_stmt_bind_param($stmt2, 'ss', $user, $password);
        mysqli_stmt_execute($stmt2);
        mysqli_stmt_store_result($stmt2);

        if (mysqli_stmt_num_rows($stmt2) > 0) {
            mysqli_stmt_bind_result($stmt2, $id, $name);
            mysqli_stmt_fetch($stmt2);

            // Lưu thông tin vào cookie
            setcookie('id', $id, time() + 3600 * 24, '/');
            setcookie('name', $name, time() + 3600 * 24, '/');

            header('Location: home.html');
            exit();
        } else {
            echo 'Tạo tài khoản thất bại';
        }
    } else {
        echo 'Lỗi khi tạo tài khoản';
    }

    // Đóng kết nối
    mysqli_stmt_close($stmt_check);
    mysqli_stmt_close($stmt1);
    mysqli_stmt_close($stmt2);
    mysqli_close($conn);
}

ob_end_flush();
