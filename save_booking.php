<?php
$servername = "localhost";  // Hoặc IP của server database
$username = "root";         // Tài khoản MySQL
$password = "";             // Mật khẩu MySQL (mặc định XAMPP là rỗng)
$database = "salon";        // Tên database

// Kết nối MySQL
$conn = new mysqli($servername, $username, $password, $database);

// Kiểm tra lỗi kết nối
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

// Lấy dữ liệu từ form
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$datetime = $_POST['datetime'];

// Chuẩn bị câu lệnh SQL
$stmt = $conn->prepare("INSERT INTO appointments (name, email, phone, datetime) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $name, $email, $phone, $datetime);

// Thực thi và kiểm tra kết quả
if ($stmt->execute()) {
    echo "<script>alert('Đặt lịch thành công!'); window.location.href = 'index.html';</script>";
} else {
    echo "Lỗi: " . $stmt->error;
}

// Đóng kết nối
$stmt->close();
$conn->close();
?>
