document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const pin = document.getElementById('pin').value;
    const convertPin = parseInt(pin)

    if(accountNumber.length >= 11){
        if(parseInt(pin) === 1234){
            console.log('okay thik ache')
        }
    }else{
        console.log('nooo')
    }
})