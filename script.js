const form = document.querySelector('.form');
const email = document.querySelector('.email');
const boxicon = document.querySelector('.boxicon');
const emailbox = document.querySelector('.emailbox');
const emailicon = document.querySelector('.emailicon');
const box = document.querySelector('.box');
const erroricon = document.querySelector('.error');
const password = document.querySelector('.password');
const blockbox = document.querySelector('.blockbox');
const blockicon = document.querySelector('.block');
const error1 = document.querySelector('.error1');
const btn = document.querySelector('.btn');
const text = document.querySelector('.text');
const text2 = document.querySelector('.text2');
const errorbox = document.querySelector('.erorbox');
const errorbox2 = document.querySelector('.errorbox2');


form.addEventListener('submit', function(e) {
    e.preventDefault;
    if(!email.value.includes("@gmail.com")) {
        text.textContent = "Iltimos @gmail.com qo'ying"
        errorbox.style.display = 'block'
        email.classList.add('red')
        form.classList.add('animation')
    }
    else {
        text.textContent = ""
        errorbox.style.display = "none"
        email.classList.remove('red')
        
    }

    if(password.value.length < 'aaaa'.length) {
        text2.textContent = "Parol kamida 3ta harifli bo'lishi kerak"
        errorbox2.style.display = 'block'
        password.classList.add('red')
        form.classList.add('animation')
    }
    else {
        text2.textContent = ""
        errorbox2.style.display = "none"
        password.classList.remove('red')
        
    }

})