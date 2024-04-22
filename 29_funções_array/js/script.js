// length
var arr = [1,2,3,4,5];
console.log(arr.length);

// push = adicionar elementos em último
arr.push(6);
arr.push('Qualquer coisa')

console.log(arr)

// pop = remover o último elemento da variável
arr.pop();
console.log(arr);

// unshit = adicionar no inicio da frase
arr.unshift(0);
arr.unshift('Teste');

console.log(arr);

// shift = remover a primeira frase
arr.shift();
console.log(arr);

// acessar o último elemento
console.log(arr[arr.length - 1]);

// verificar se é Array
console.log(Array.isArray(5));

console.log(Array.isArray(arr));