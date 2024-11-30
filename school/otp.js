<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>OTP Verification</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f4f4f4;
        }
        #otpSection, #verificationMessage {
            display: none; /* Initially hidden */
        }
    </style>
</head>
<body>
    <div class="container mt-5">
        <h2 class="text-center">Enter Phone Number</h2>
        <input type="text" class="form-control" id="phone" placeholder="Enter your phone number" maxlength="10">
        <button class="btn btn-primary btn-block mt-3" onclick="sendOTP()">Send OTP</button>

        <div id="otpSection" class="mt-4">
            <h2 class="text-center">Enter OTP</h2>
            <input type="text" class="form-control" id="otp" placeholder="Enter your OTP" maxlength="6">
            <button class="btn btn-success btn-block mt-3" onclick="verifyOTP()">Verify OTP</button>
        </div>

        <p id="verificationMessage" class="text-center mt-2"></p>
    </div>

    <script>
        function sendOTP() {
            const phone = document.getElementById('phone').value;
            if (phone.length === 10) {
                // Here you would typically send the OTP to the user's phone
                // For this example, we will just simulate sending OTP
                alert("OTP sent to " + phone);
                document.getElementById('otpSection').style.display = 'block'; // Show OTP section
            } else {
                alert("Please enter a valid phone number.");
            }
        }

        function verifyOTP() {
            const enteredOTP = document.getElementById('otp').value;
            const correctOTP = "123456"; // Replace with actual OTP generation logic

            if (enteredOTP.length === 0) {
                document.getElementById('verificationMessage').innerText = "Please enter OTP.";
            } else if (enteredOTP === correctOTP) {
                document.getElementById('verificationMessage').innerText = "OTP Verified! Login Successful.";
            } else {
                document.getElementById('verificationMessage').innerText = "Invalid OTP. Please try again.";
            }
        }
    </script>
</body>
</html>
