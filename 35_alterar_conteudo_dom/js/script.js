// selecionar elemento
var titulo = document.querySelector('#titulo');

// innerHTML
titulo.innerHTML = 'Testando o título alterado'

// textContent - > RECOMENDADO!!!

var titulo2 = document.querySelector('.titulo2')
titulo2.textContent = 'Testando o título2 alterado'