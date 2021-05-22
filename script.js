let modal = document.getElementById('sobre');
let meuMundo = document.getElementById('meuMundo');
let fechar = document.getElementById('fechar');

function active(){
    modal.addEventListener('click', function(){
        meuMundo.style.display = "flex";
    })
}

function desactive(){
    fechar.addEventListener('click', function(){
        meuMundo.style.display = "none";
        alert('Estou disponivel para contato, para saberem mais de meu Perfil !!!');
    })
}

active();
desactive();