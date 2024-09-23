document.getElementById('noakhali-add')
    .addEventListener('click', function(){
        
        // console.log('added the event handler');
      
        const initialAmount = document.getElementById('initial-amount').innerText;
        // const initialAmountNumber = parseFloat(initialAmount);
         console.log(initialAmount)

        const addAmount = document.getElementById('n-taka').value;
        // const addAmountNumber = parseFloat(addAmount);
        console.log(addAmount)

        const newBalance = initialAmount - addAmount;
        console.log(newBalance)

        if(addAmount >0){
            
            
                document.getElementById('initial-amount').innerText = newBalance;
            }
            else{
                alert('Failed to add money. Please try again later.')
            }



        
    });