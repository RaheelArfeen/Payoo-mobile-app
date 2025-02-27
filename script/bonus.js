document.getElementById("apply-coupon-btn").addEventListener("click", function () {
    const couponInput = document.getElementById("coupon");
    const mainBalance = document.getElementById("main-balance");
    
    const couponCode = couponInput.value.trim();
    
    if (couponCode !== "") {
        // Generate a random amount between 10 and 200
        const randomAmount = Math.floor(Math.random() * (200 - 10 + 1)) + 10;
        
        // Get current balance correctly
        let currentBalance = parseFloat(mainBalance.innerText.replace("$", "")) || 4500;
        currentBalance += randomAmount;
        
        // Update the balance display
        mainBalance.innerText = `$${currentBalance.toFixed(2)}`;
        
        // Clear the coupon input field
        couponInput.value = "";
        
        alert(`Coupon applied! $${randomAmount} added to your balance.`);
    } else {
        alert("Please enter a valid coupon code.");
    }
});
