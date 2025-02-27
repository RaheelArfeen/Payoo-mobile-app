// Set the "Add Money" box as active when the page loads
document.addEventListener("DOMContentLoaded", function() {
    // Add active classes to Add Money box by default
    document.getElementById('addMoney-box').classList.add('bg-[#f3f8fe]');
    document.getElementById('addMoney-box').classList.add('border-[#0874F2]');
    document.getElementById('addMoney-box').classList.remove('border-[#dadada]');
    
    // Show Add Money section and hide Cashout section by default
    document.getElementById('cashout').style.display = 'none';
    document.getElementById('transfer').style.display = 'none';
    document.getElementById('bonus').style.display = 'none';
    document.getElementById('add-money').style.display = 'block';
});

// Event listener for Add Money box click
document.getElementById('addMoney-box').addEventListener('click', function() {
    // Hide cashout section and show add money section
    document.getElementById('cashout').style.display = 'none';
    document.getElementById('transfer').style.display = 'none';
    document.getElementById('bonus').style.display = 'none';
    document.getElementById('add-money').style.display = 'block';
    
    // Add active styles to the Add Money box and remove from Cashout box
    document.getElementById('addMoney-box').classList.add('bg-[#f3f8fe]');
    document.getElementById('addMoney-box').classList.add('border-[#0874F2]');
    document.getElementById('addMoney-box').classList.remove('border-[#dadada]');
    
    // Remove active styles from Cashout box (if it's not already in its primary state)
    document.getElementById('cashout-box').classList.remove('bg-[#f3f8fe]');
    document.getElementById('cashout-box').classList.remove('border-[#0874F2]');
    document.getElementById('cashout-box').classList.add('border-[#dadada]');
    document.getElementById('transfer-box').classList.remove('bg-[#f3f8fe]');
    document.getElementById('transfer-box').classList.remove('border-[#0874F2]');
    document.getElementById('transfer-box').classList.add('border-[#dadada]');
    document.getElementById('bonus-box').classList.remove('bg-[#f3f8fe]');
    document.getElementById('bonus-box').classList.remove('border-[#0874F2]');
    document.getElementById('bonus-box').classList.add('border-[#dadada]');
});

// Event listener for Cashout box click
document.getElementById('cashout-box').addEventListener('click', function() {
    // Hide add money section and show cashout section
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('transfer').style.display = 'none';
    document.getElementById('bonus').style.display = 'none';
    document.getElementById('cashout').style.display = 'block';
    
    // Add active styles to the Cashout box and remove from Add Money box
    document.getElementById('cashout-box').classList.add('bg-[#f3f8fe]');
    document.getElementById('cashout-box').classList.add('border-[#0874F2]');
    document.getElementById('cashout-box').classList.remove('border-[#dadada]');
    
    // Remove active styles from Add Money box (if it's not already in its primary state)
    document.getElementById('addMoney-box').classList.remove('bg-[#f3f8fe]');
    document.getElementById('addMoney-box').classList.remove('border-[#0874F2]');
    document.getElementById('addMoney-box').classList.add('border-[#dadada]');
    document.getElementById('transfer-box').classList.remove('bg-[#f3f8fe]');
    document.getElementById('transfer-box').classList.remove('border-[#0874F2]');
    document.getElementById('transfer-box').classList.add('border-[#dadada]');
    document.getElementById('bonus-box').classList.remove('bg-[#f3f8fe]');
    document.getElementById('bonus-box').classList.remove('border-[#0874F2]');
    document.getElementById('bonus-box').classList.add('border-[#dadada]');
});

// Event listener for Transfer box click
document.getElementById('transfer-box').addEventListener('click', function() {
    // Hide add money section and show cashout section
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('cashout').style.display = 'none';
    document.getElementById('bonus').style.display = 'none';
    document.getElementById('transfer').style.display = 'block';
    
    // Add active styles to the Cashout box and remove from Add Money box
    document.getElementById('transfer-box').classList.add('bg-[#f3f8fe]');
    document.getElementById('transfer-box').classList.add('border-[#0874F2]');
    document.getElementById('transfer-box').classList.remove('border-[#dadada]');
    
    // Remove active styles from Add Money box (if it's not already in its primary state)
    document.getElementById('addMoney-box').classList.remove('bg-[#f3f8fe]');
    document.getElementById('addMoney-box').classList.remove('border-[#0874F2]');
    document.getElementById('addMoney-box').classList.add('border-[#dadada]');
    document.getElementById('cashout-box').classList.remove('bg-[#f3f8fe]');
    document.getElementById('cashout-box').classList.remove('border-[#0874F2]');
    document.getElementById('cashout-box').classList.add('border-[#dadada]');
    document.getElementById('bonus-box').classList.remove('bg-[#f3f8fe]');
    document.getElementById('bonus-box').classList.remove('border-[#0874F2]');
    document.getElementById('bonus-box').classList.add('border-[#dadada]');
});

// Event listener for Bonus box click
document.getElementById('bonus-box').addEventListener('click', function() {
    // Hide add money section and show cashout section
    document.getElementById('add-money').style.display = 'none';
    document.getElementById('cashout').style.display = 'none';
    document.getElementById('bonus').style.display = 'block';
    document.getElementById('transfer').style.display = 'none';
    
    // Add active styles to the Cashout box and remove from Add Money box
    document.getElementById('bonus-box').classList.add('bg-[#f3f8fe]');
    document.getElementById('bonus-box').classList.add('border-[#0874F2]');
    document.getElementById('bonus-box').classList.remove('border-[#dadada]');
    
    // Remove active styles from Add Money box (if it's not already in its primary state)
    document.getElementById('addMoney-box').classList.remove('bg-[#f3f8fe]');
    document.getElementById('addMoney-box').classList.remove('border-[#0874F2]');
    document.getElementById('addMoney-box').classList.add('border-[#dadada]');
    document.getElementById('cashout-box').classList.remove('bg-[#f3f8fe]');
    document.getElementById('cashout-box').classList.remove('border-[#0874F2]');
    document.getElementById('cashout-box').classList.add('border-[#dadada]');
    document.getElementById('transfer-box').classList.remove('bg-[#f3f8fe]');
    document.getElementById('transfer-box').classList.remove('border-[#0874F2]');
    document.getElementById('transfer-box').classList.add('border-[#dadada]');
});