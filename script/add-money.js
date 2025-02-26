// document.getElementById('add-money').addEventListener('click', function(event){
//     event.preventDefault();
//     const amount = document.getElementById('amount').value;
//     const convertedAmount = parseFloat(amount);
//     const pin = document.getElementById('pin').value;
//     const convertedPin = parseInt(pin);
//     const mainBalance = document.getElementById('main-balance').innerText;
//     const convetedMainbalance = parseFloat(mainBalance);


//     if(convertedPin === 1234){
//         const sum = convetedMainbalance + convertedAmount;
//         document.getElementById('main-balance').innerText = sum;
//     }
//     else{
//         console.log('pin shotik na')
//     }
// })


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
        if (!/^\d{11,}$/.test(accountNumber)) {
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