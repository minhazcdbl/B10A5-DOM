
const initialAmount = document.getElementById('initial-amount').innerText;


document.getElementById('noakhali-add')
    .addEventListener('click', function(){
        
        // console.log('added the event handler');
      
        // const initialAmount = document.getElementById('initial-amount').innerText;
        // const initialAmountNumber = parseFloat(initialAmount);
         console.log(initialAmount)

        const addAmount = document.getElementById('n-taka').value;
        const addAmountNumber = parseFloat(addAmount);
        console.log(addAmount)

        const newBalance = initialAmount - addAmount;
        console.log(newBalance)


        const aTaka = document.getElementById('n-t-taka').innerText;
        console.log(aTaka)
        const aTakaAmount = parseFloat(aTaka);
        const updateBalance =  aTakaAmount + addAmountNumber;
        document.getElementById('n-t-taka').innerText = updateBalance;


        if(addAmount >0){
            
            
                document.getElementById('initial-amount').innerText = newBalance;
            }
            else{
                alert('Failed to add money. Please try again later.')
            }

    

        
    });


    // 2



    document.getElementById('feni-add')
    .addEventListener('click', function(){
        
        // console.log('added the event handler');
      
        // const initialAmount = document.getElementById('initial-amount').innerText;
        // const initialAmountNumber = parseFloat(initialAmount);
         console.log(initialAmount)

        const addAmount = document.getElementById('f-taka').value;
        const addAmountNumber = parseFloat(addAmount);
        console.log(addAmount)

        const newBalance = initialAmount - addAmount;
        console.log(newBalance)


        const aTaka = document.getElementById('f-t-taka').innerText;
        console.log(aTaka)
        const aTakaAmount = parseFloat(aTaka);
        const updateBalance =  aTakaAmount + addAmountNumber;
        document.getElementById('f-t-taka').innerText = updateBalance;


        if(addAmount >0){
            
            
                document.getElementById('initial-amount').innerText = newBalance;
            }
            else{
                alert('Failed to add money. Please try again later.')
            }

    

        
    });



    // 3


    document.getElementById('q-add')
    .addEventListener('click', function(){
        
        // console.log('added the event handler');
      
        // const initialAmount = document.getElementById('initial-amount').innerText;
        // const initialAmountNumber = parseFloat(initialAmount);
         console.log(initialAmount)

        const addAmount = document.getElementById('q-taka').value;
        const addAmountNumber = parseFloat(addAmount);
        console.log(addAmount)

        const newBalance = initialAmount - addAmount;
        console.log(newBalance)


        const aTaka = document.getElementById('q-t-taka').innerText;
        console.log(aTaka)
        const aTakaAmount = parseFloat(aTaka);
        const updateBalance =  aTakaAmount + addAmountNumber;
        document.getElementById('q-t-taka').innerText = updateBalance;


        if(addAmount >0){
            
            
                document.getElementById('initial-amount').innerText = newBalance;
            }
            else{
                alert('Failed to add money. Please try again later.')
            }

    

        
    });
