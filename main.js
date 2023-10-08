let emailValue = document.getElementById('emailValue');
let loginBtn = document.getElementById('loginBtn');
let cancelBtn = document.getElementById('btnClose');
let openBtn = document.getElementById('openBtn');
openBtn.addEventListener('click',showModal)

cancelBtn.addEventListener('click', closeModal)
loginBtn.addEventListener('click', displayEmail)

function showModal(){    
    document.getElementById('form').style.top = "50%";
    
}

function closeModal(){
    document.getElementById('form').style.top = "-50%";
}

function displayEmail() {
    alert('Your email is ' + emailValue.value)
}