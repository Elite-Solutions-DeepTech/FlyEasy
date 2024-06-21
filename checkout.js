document.getElementById('payButton').addEventListener('click', function () {
    const selectedPaymentMethod = document.querySelector('input[name="paymentMethod"]:checked').value;
    const options = {
        "key": "YOUR_RAZORPAY_KEY", // Replace with your Razorpay key
        "amount": document.getElementById('totalAmount').innerText * 100, // Amount in paise
        "currency": "INR",
        "name": "JetSetFly",
        "description": "Flight Booking Payment",
        "handler": function (response) {
            alert('Payment successful. Payment ID: ' + response.razorpay_payment_id);
            // Redirect to a success page or perform further processing
            window.location.href = 'success.html';
        },
        "prefill": {
            "name": document.getElementById('cardName').value,
            "email": "customer@example.com", // Replace with customer email
            "contact": "9999999999" // Replace with customer contact
        },
        "theme": {
            "color": "#8e244d"
        }
    };

    if (selectedPaymentMethod === 'upi') {
        options.method = 'upi';
        options.prefill = { "contact": "" }; // UPI doesn't need prefills
    }

    const rzp1 = new Razorpay(options);
    rzp1.open();
});
