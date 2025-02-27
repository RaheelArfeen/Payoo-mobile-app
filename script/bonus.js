document.addEventListener("DOMContentLoaded", function () {
    const balanceElement = document.getElementById("main-balance");
    const applyBtn = document.getElementById("apply-btn");
    const couponInput = document.getElementById("coupon-input");

    // Store the balance as a data attribute
    balanceElement.dataset.balance = parseFloat(balanceElement.innerText) || 0;

    applyBtn.addEventListener("click", function () {
        if (couponInput.value.trim() !== "") {
            const randomAmount = Math.floor(Math.random() * (200 - 10 + 1)) + 10;
            balanceElement.dataset.balance = parseFloat(balanceElement.dataset.balance) + randomAmount;
            console.log("New Balance:", balanceElement.dataset.balance);
        }
    });
});
