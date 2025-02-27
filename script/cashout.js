document.addEventListener("DOMContentLoaded", () => {
    const cashoutBtn = document.getElementById("cashout-money");
    const cashoutAmountInput = document.getElementById("cashoutAmount");
    const cashoutPinInput = document.getElementById("cashoutPin");
    const mainBalanceEl = document.getElementById("main-balance");
    
    cashoutBtn.addEventListener("click", () => {
        const cashoutAmount = parseFloat(cashoutAmountInput.value);
        const cashoutPin = cashoutPinInput.value.trim();
        let currentBalance = parseFloat(mainBalanceEl.textContent.replace("$", ""));

        if (isNaN(cashoutAmount) || cashoutAmount <= 0) {
            alert("Please enter a valid cashout amount.");
            return;
        }
        
        if (cashoutAmount !== "1234") {
            alert("Please enter your valid 4-digit PIN.");
            return;
        }
        
        if (cashoutAmount > currentBalance) {
            alert("Insufficient balance.");
            return;
        }
        
        currentBalance -= cashoutAmount;
        mainBalanceEl.textContent = `$ ${currentBalance.toFixed(2)}`;

        alert("Cashout successful!");

        // Clear input fields after transaction
        cashoutAmountInput.value = "";
        cashoutPinInput.value = "";
    });
});
