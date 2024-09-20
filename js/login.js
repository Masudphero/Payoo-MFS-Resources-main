// console.log('button clicking file added')
// form submit reloading the page

document.getElementById('button-id'),addEventListener('click', function(event){
//    vejal to beginners      (reloading browser)
    event.preventDefault()  
console.log('login button clicked');

// step3.
const phoneNumber=document.getElementById('phone-number').value;
const pinNumber=this.document.getElementById('pin-number').value;


console.log(phoneNumber,pinNumber);

if(phoneNumber==='5'&& pinNumber==='1234'){
    console.log('you are login');
    window.location.href='/home.html';
}
else{
    alert('Wrong phone number or pin');
}

})

