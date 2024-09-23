document.getElementById('noakhali-add')
    .addEventListener('click', function(){
        
        // console.log('added the event handler');



       // get money and the pin number
        const initialAmount = document.getElementById('initial-amount').value;
        const addMoneyNumber = parseFloat(initialAmount);
        const addAmount = document.getElementById('input-pin-number').value;



        // // get money and the pin number
        // const addMoney = document.getElementById('input-add-money').value;
        // const addMoneyNumber = parseFloat(addMoney);
        // const pinNumber = document.getElementById('input-pin-number').value;

        // // console.log(addMoney, pinNumber)

        // if(pinNumber === '1234'){
        //     // add money to the account
        //     const balance = document.getElementById('account-balance').innerText;
        //     const balanceNumber = parseFloat(balance);

        //     // new balance 
        //     const newBalance = balanceNumber + addMoneyNumber;

        //     // update the DOM with updated balance
        //     document.getElementById('account-balance').innerText = newBalance;
        // }
        // else{
        //     alert('Failed to add money. Please try again later.')
        // }
    });