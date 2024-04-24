// eventos de mouseover
var titulo = document.querySelector('#titulo');

titulo.addEventListener('mouseover', function(){

    this.style.backgroundColor = 'yellow';
});

// evento de mousout
titulo.addEventListener('mouseout', function(){
    
    this.style.backgroundColor = 'white';
});

// afetar outro elemento com mouseover
var titulo2 = document.querySelector('.titulo2')
titulo2.addEventListener('mouseover', function(){
    var legenda = document.querySelector('#legenda');
    legenda.classList.remove('hide');
});

titulo2.addEventListener('mouseout', function(){

    var legenda = document.querySelector('#legenda');
    
    legenda.classList.add('hide');
});

