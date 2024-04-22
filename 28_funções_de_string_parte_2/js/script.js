// .toLowerCase() = deixar a frase toda em minusculo

var fraseMin = 'Quero Deixar Essa Frase Toda Em Minuscula';
console.log(fraseMin.toLowerCase())

// toUpperCase() = deixar a frase toda em maisculo

var fraseMai = 'quero deixar essa frase toda em maiusculo';
console.log(fraseMai.toUpperCase());

// trim = remove os espaços desnecessários de uma string

var nome = '        Wesley          '
var nomeTrim = nome.trim();

console.log(nome);
console.log(nomeTrim);

// split = separar as frases com o carecter que você escolher

console.log(fraseMin.split(' '));

var tags = 'PHP, JavaScript, HTML, CSS';
console.log(tags.split(', '));



