// splice = adicionar um elemento no meio da frase
var arr = [1,2,3,4,5];
arr.splice(2, 0, 999);
console.log(arr);

// remover com splice (no exemplo remove o número 4 que está no indice 4)
arr.splice(4, 1);
console.log(arr)

// indexOf
console.log(arr.indexOf(5));

// join = transformar array em string
var arr2 = ['O', 'rato', 'roeu', 'a', 'roupa'];
console.log(arr2.join(' '));

// reverse = inverter a frase, de trás para frente
console.log(arr2.reverse());

