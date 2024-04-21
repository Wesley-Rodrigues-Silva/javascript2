var lista = ['Laranja', 'Maçã', 'Pera', 'Jaca', 'Limão'];

var listaUl = document.createElement('ul');

var body = document.getElementsByName('body');

body[0].appendChild(listaUl);

var listaBody = document.getElementsByName('ul');

console.log(listaBody[0]);

for(var i = 0; i < lista.length; i++){
    
    var liFor = document.createElement('li');
    
    var textoLi = document.createTextNode(lista[i]);
    
    liFor.appendChild(textoLi);
    
    listaBody[0].appendChild(liFor);
}
