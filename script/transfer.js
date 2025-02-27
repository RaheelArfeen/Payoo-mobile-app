document.addEventListener("DOMContentLoaded", () => {
    const transferBtn = document.getElementById("transfer-money");
    const transferAmountInput = document.getElementById("transferAmount");
    const transferPinInput = document.getElementById("transferPin");
    const mainBalanceEl = document.getElementById("main-balance");
    
    transferBtn.addEventListener("click", () => {
        const transferAmount = parseFloat(transferAmountInput.value);
        const transferpin = transferPinInput.value.trim();
        let currentBalance = parseFloat(mainBalanceEl.textContent.replace("$", ""));

        if (isNaN(transferAmount) || transferAmount <= 0) {
            alert("Please enter a valid cashout amount.");
            return;
        }
        
        if (transferpin !== "1234") {
            alert("Please enter your valid 4-digit PIN.");
            return;
        }
        
        if (transferAmount > currentBalance) {
            alert("Insufficient balance.");
            return;
        }
        
        currentBalance -= transferAmount;
        mainBalanceEl.textContent = `$ ${currentBalance.toFixed(2)}`;

        alert("Transfer Money successful!");

        // Clear input fields after transaction
        transferAmountInput.value = "";
        transferPinInput.value = "";
    });
});
