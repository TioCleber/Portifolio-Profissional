const modal = document.getElementById('sobre');
const meuMundo = document.getElementById('meuMundo');
const fechar = document.getElementById('fechar');

function ative(){
    meuMundo.style.display = "flex";
}

modal.addEventListener('click', ative);

function desative(){
    meuMundo.style.display = "none";
    alert('Estou disponivel para contato, para saberem mais de meu Perfil !!!');
}

fechar.addEventListener('click', desative);
