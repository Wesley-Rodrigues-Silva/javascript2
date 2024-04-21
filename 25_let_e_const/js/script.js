let x = 5;
// Faz a variavel virar local

const y = 10;
// Faz a variavel viarar local e não permite alterar seu valor

x = 12;

console.log(x);

if(true){
    let x = 20;

    console.log(x);

    const y = 50;

    console.log(y);
}

console.log(x);



