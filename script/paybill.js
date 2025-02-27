document.addEventListener("DOMContentLoaded", () => {
    const payBillBtn = document.getElementById("pay-bill");
    const payAmountInput = document.getElementById("payAmount");
    const payPinInput = document.getElementById("payPin");
    const balanceEl = document.getElementById("main-balance");
    
    payBillBtn.addEventListener("click", () => {
        const payAmount = parseFloat(payAmountInput.value);
        const payPin = payPinInput.value.trim();
        let currentBalance = parseFloat(balanceEl.textContent.replace("$", ""));

        if (isNaN(payAmount) || payAmount <= 0) {
            alert("Please enter a valid cashout amount.");
            return;
        }
        
        if (payPin !== "1234") {
            alert("Please enter your valid 4-digit PIN.");
            return;
        }
        
        if (payAmount > currentBalance) {
            alert("Insufficient balance.");
            return;
        }
        
        currentBalance -= payAmount;
        balanceEl.textContent = `$ ${currentBalance.toFixed(2)}`;

        alert("Cashout successful!");

        // Clear input fields after transaction
        payAmountInput.value = "";
        payPinInput.value = "";
    });
});
