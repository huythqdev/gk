<!DOCTYPE html>
<html lang="vi">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Đặt lịch hẹn Salon Ken</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            background: linear-gradient(to right, #ffecd2, #fcb69f);
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background: white;
            padding: 25px;
            border-radius: 15px;
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
            width: 380px;
            text-align: center;
        }

        h2 {
            color: #333;
            font-size: 24px;
            margin-bottom: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 10px;
        }

        h2::before {
            content: "💇‍♂️";
            font-size: 30px;
        }

        label {
            font-weight: bold;
            display: block;
            text-align: left;
            margin: 10px 0 5px;
        }

        .input-group {
            position: relative;
        }

        .input-group input {
            width: 100%;
            padding: 12px 40px 12px 15px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 16px;
            transition: 0.3s;
        }

        .input-group input:focus {
            border-color: #ff6f61;
            box-shadow: 0px 0px 5px rgba(255, 111, 97, 0.5);
            outline: none;
        }

        .input-group {
            position: relative;
            display: flex;
            align-items: center;
        }

        .input-group input {
            width: calc(100% - 40px);
            /* Giữ khoảng cách để icon không đẩy input dài ra */
            padding: 12px 12px 12px 15px;
            border: 1px solid #ccc;
            border-radius: 8px;
            font-size: 16px;
            transition: 0.3s;
        }

        .input-group i {
            position: absolute;
            right: 12px;
            /* Đưa icon sát mép phải */
            color: gray;
            font-size: 18px;
            top: 50%;
            transform: translateY(-50%);
        }
        button {
    width: 100%;
    padding: 12px;
    font-size: 18px;
    font-weight: bold;
    color: white;
    background: linear-gradient(45deg, #ff4b5c, #ff7170); /* Hiệu ứng màu chuyển */
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.2);
}

button:hover {
    background: linear-gradient(45deg, #ff7170, #ff4b5c);
    transform: scale(1.05); /* Phóng to nhẹ khi hover */
}

button:active {
    transform: scale(0.98); /* Nhấn vào sẽ thu nhỏ một chút */
}

    </style>
</head>

<body>

    <div class="container">
        <h2>Đặt lịch hẹn tại Salon Ken</h2>
        <form id="bookingForm" action="save_booking.php" method="POST">

            <label for="name">Tên:</label>
            <div class="input-group">
                <input type="text" id="name" name="name" placeholder="Nhập tên của bạn" required>
                <i>👤</i>
            </div>

            <label for="email">Email:</label>
            <div class="input-group">
                <input type="email" id="email" name="email" placeholder="Nhập email" required>
                <i>📧</i>
            </div>

            <label for="phone">Số điện thoại:</label>
            <div class="input-group">
                <input type="tel" id="phone" name="phone" placeholder="Nhập số điện thoại" required>
                <i>📞</i>
            </div>

            <label for="datetime">Ngày & Giờ đặt lịch:</label>
            <div class="input-group">
                <input type="datetime-local" id="datetime" name="datetime" required>
                <!-- <i>📅</i> -->
            </div>

            <button type="submit">Đặt lịch ngay</button>
        </form>
    </div>

</body>

</html>