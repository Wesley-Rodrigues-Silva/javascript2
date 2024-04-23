// criar um elemento
var el = document.createElement('h3');
// criar classe
el.classList = 'testando-classe';
// criar um texto
var texto = document.createTextNode('Esse é o texto novo');
// adicionar o texto
el.appendChild(texto);
console.log(el)

// selecionar o elemento que quero trocar
var titulo = document.querySelector('#titulo')
console.log(titulo)
// selecionar o pai do elemento
var pai = titulo.parentNode;
// trocar os elementos
pai.replaceChild(el, titulo);