
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
console.log('cash out btn clicked');

// step 2
const inputCashOut=document.getElementById('inpute-cash-out').value;
const cashOutNumber=parseFloat(inputCashOut);
const inputCashOutPin=document.getElementById('input-cash-outpin').value;
console.log(inputCashOut, inputCashOutPin);
if(inputCashOutPin==='1234'){
   const balance=document.getElementById('account-balance').innerText;
   const balanceNumber=parseFloat(balance);

   const newBalence=balanceNumber-cashOutNumber;
document.getElementById('account-balance').innerText=newBalence
   
}
else{
    alert('failed to cash out. please try again later.')
}

});
