// inserir o elemento no body
// criar a tag
var novoParagrafo = document.createElement('p');
// criar o texto
var texto = document.createTextNode('Esse é o conteúdo do paragráfo!')
// adicionar o texto
novoParagrafo.appendChild(texto);
// imprimir o texto
console.log(novoParagrafo);
// adicionar o body
var body = document.querySelector('body');
// imprimir o body
console.log(body);
// adicionar o texto ao body
body.appendChild(novoParagrafo);

// inserir em um container
// chamar o container
var container = document.querySelector('container');
// imprimir
console.log(container);
// criar a tag
var el = document.createElement('span')
// adicionar o texto
el.appendChild(document.createTextNode('texto do span'));
// imprimir
console.log(ei);
// adicionar o container a tag
container.appendChild(el);

