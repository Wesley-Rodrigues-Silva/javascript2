// inserir click
var btn = document.querySelector('#btn');
console.log(btn);
btn.addEventListener('click', function(){
    console.log('clikou');
    console.log(this);
    this.style.color = 'red'
})

// click afetando outros eventos
var titulo = document.querySelector('#titulo');
titulo.addEventListener('click', function(){
    var titulo2 = document.querySelector('.titulo2');
    titulo2.style.display = 'none';
})

// double click
var titulo2 = document.querySelector('.titulo2');

titulo2.addEventListener('dblclick', function() {
    
    console.log('duplo click!');
});