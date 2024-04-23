// removendo elemento filho (tag filho)
// selecionar o elemento
var container = document.querySelector('#container');
// selecionar o elemento filho
var p = document.querySelector('#container p');
// remover o elemento
container.removeChild(p);

// remover o elemento pai (tag pai)
// selecionar o elemento
var titulo2 = document.querySelector('.titulo2');
// remover o elemento
titulo2.remove();