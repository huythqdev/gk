<?php
session_start();
ob_start();

$conn = mysqli_connect("localhost", "root", "", "salon");
if (!$conn) {
    die("Kết nối đến cơ sở dữ liệu thất bại: " . mysqli_connect_error());
}
echo "<pre>";
var_dump($_POST);
echo "</pre>";


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $conn = mysqli_connect("localhost", "root", "", "salon");

    // Bảo mật trước SQL Injection sử dụng Prepared Statements
    $sql = "SELECT id ,name FROM users WHERE email = ? AND password = ?";
    $stmt = mysqli_prepare($conn, $sql);
    mysqli_stmt_bind_param($stmt, 'ss', $email, $password);
    mysqli_stmt_execute($stmt);
    mysqli_stmt_store_result($stmt);

    // Kiểm tra xem có kết quả trả về từ truy vấn hay không
    if (mysqli_stmt_num_rows($stmt) > 0) {

        // Lấy thông tin khách hàng từ kết quả truy vấn
        mysqli_stmt_bind_result($stmt, $id, $name);
        mysqli_stmt_fetch($stmt);

        // Lưu thông tin khách hàng vào cookie (với thời gian sống là 1 ngày)
        setcookie('id', $id, time() + 3600 * 24, '/');
        setcookie('name', $name, time() + 3600 * 24, '/');

        header('Location: home.php');
    } else {
        echo 'Đăng nhập thất bại';
    }
    // Đóng Prepared Statement và kết nối CSDL
    mysqli_stmt_close($stmt);
    mysqli_close($conn);
}
