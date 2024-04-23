// adicionar atributo
var titulo = document.querySelector('#titulo');
// adicionar classe e o nome da classe
titulo.setAttribute('class', 'testando-atributo');
// imprimir
console.log(titulo);
// selecionar o elemento (botão)
var btn = document.querySelector('#btn');
// desabilitar o botão
btn.setAttribute('disabled', 'disabled')
// selecionar o elemento
var titulo2 = document.querySelector('.titulo2');
// adicionar o id e nome do id
titulo2.setAttribute('id', 'tit2');

// remover atributo
// adicionar o elemento
var lista = document.querySelector('#lista');
// remover o elemento
lista.removeAttribute('id');


