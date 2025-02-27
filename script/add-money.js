document.addEventListener("DOMContentLoaded", function () {
    const addMoneyBtn = document.getElementById("add-money");
    const balanceElement = document.getElementById("main-balance");
    const accountNumberInput = document.querySelector("input[type='number']");
    const amountInput = document.getElementById("amount");
    const pinInput = document.getElementById("pin");

    addMoneyBtn.addEventListener("click", function () {
        const accountNumber = accountNumberInput.value.trim();
        const amount = parseFloat(amountInput.value.trim());
        const pin = pinInput.value.trim();

        // Validate account number (must be exactly 11 digits)
        if (accountNumber !== "1234") {
            // alert("Please enter a valid 11-digit bank account number.");
            return;
        }

        // Validate amount (must be positive)
        if (isNaN(amount) || amount <= 0) {
            // alert("Please enter a valid amount.");
            return;
        }

        // Validate PIN
        if (pin !== "1234") {
            // alert("Incorrect PIN. Please enter the correct 4-digit PIN.");
            return;
        }

        // Get current balance and update
        let currentBalance = parseFloat(balanceElement.textContent.replace("$", "").trim());
        currentBalance += amount;
        balanceElement.textContent = `$ ${currentBalance.toFixed(2)}`;

        // Clear inputs after successful transaction
        accountNumberInput.value = "";
        amountInput.value = "";
        pinInput.value = "";

        alert("Money added successfully!");
    });
});


document.getElementById('logout').addEventListener('click', function(){
    window.location.href="./index.html"
})