// length = verificar quantos carecteres tem na string

var nome = 'Wesley';
console.log(nome.length);

var obj = 'Bola';
console.log(obj.length)

// indexOf

console.log(nome[2]);

var frase = 'O rato roeu a roupa do rei de Roma';
// mostra em qual carecter começa a frase roeu
console.log(frase.indexOf('roeu'));

// slice = remover uma palavra da frase

var roeu = frase.slice(7, 11);

// replace = substituir uma palavra pela outra

var novaFrase = frase.replace('roeu', 'teste');
console.log(novaFrase);