<?php
$servername = "localhost";  // Hoặc IP server database
$username = "root";         // Tài khoản MySQL
$password = "";             // Mật khẩu (mặc định XAMPP là rỗng)
$database = "salon";        // Tên database

// Kết nối MySQL
$conn = new mysqli($servername, $username, $password, $database);

// Kiểm tra lỗi kết nối
if ($conn->connect_error) {
    die("Kết nối thất bại: " . $conn->connect_error);
}

// Lấy dữ liệu từ bảng appointments
$sql = "SELECT * FROM appointments ORDER BY datetime ASC";
$result = $conn->query($sql);

$appointments = array();
while ($row = $result->fetch_assoc()) {
    $appointments[] = $row;
}

// Xuất dữ liệu JSON
header('Content-Type: application/json');
echo json_encode($appointments);

$conn->close();
?>
