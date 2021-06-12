const next = document.querySelector('.js-next');
const back = document.querySelector('.js-back');
const content = document.querySelectorAll('.js-content .h1, .js-content p');
const max = content.length;
let currentP = 0;
let contador = 1;
let span = document.querySelector('span');

content[currentP].classList.add('ativo');

function nextText(){

    content[currentP].classList.remove('ativo');
   
    currentP++;
    
    if(currentP >= max){
        currentP = max - 1;
    }
    content[currentP].classList.add('ativo');
    
    function contagem(){
        contador++;
        if(contador >= max){
            contador = max;
        }
        span.innerHTML = contador;
    }
    contagem();
}

function backText(){
    content[currentP].classList.remove('ativo');
    
    currentP--;
    
    if(currentP <= 0){
        currentP = 0;
    }

    content[currentP].classList.add('ativo');
    
     function contagemRegressiva(){
        contador--;
        if(contador <= 1){
            contador = 1;
        }
        span.innerHTML = contador;
    }
    contagemRegressiva();
}

next.addEventListener('click', nextText);
back.addEventListener('click', backText);

