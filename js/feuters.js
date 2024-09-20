// show cash out form
document.getElementById('btn-show-cash-out').addEventListener('click', function(){

    console.log('show cas oute shdsdvgb');
    document.getElementById('cash-out-form').classList.remove('hidden');


    document.getElementById('add-money-form').classList.add('hidden')
});

document.getElementById('show-add-money').addEventListener('click', function(){

    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden')
})