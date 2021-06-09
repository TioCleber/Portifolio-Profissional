const next = document.querySelector('.js-next');
const back = document.querySelector('.js-back');
const content = document.querySelectorAll('.js-content .h1, .js-content p');
const max = content.length;
let currentP = 0;

content[currentP].classList.add('ativo');

function nextText(){

    content[currentP].classList.remove('ativo');
   
    currentP++;
    
    if(currentP >= max){
        currentP = max - 1;
    }
    
    content[currentP].classList.add('ativo');
}

function backText(){
    content[currentP].classList.remove('ativo');
    
    --currentP;
    
    if(currentP <= 0){
        currentP = 0;
    }

    
    content[currentP].classList.add('ativo');
}

next.addEventListener('click', nextText);
back.addEventListener('click', backText);

