// Vamos iniciar um bloco
{
  //Aqui dentro é um bloco e posso colocar qualquer código
  let w = 0;
  console.log(w);
} // Aqui fechamos o bloco

console.log("Escopo de var");

// o que vc escreve
console.log(" -> existe x antes do bloco ? ", x);

{
  var x = 0;
}

console.log(" -> existe x depois do bloco ?", x);

// o que o sistema faz por debaixo dos panos
//Hoisting - Elevação da var y

var y;
console.log("-> existe x antes do bloco ?", y);

{
  y = 0;
}

console.log("-> existe x depois do bloco ?", y);

console.log("Escopo de let e const");

/* const e let são locais e  só funcionam no escopo onde foi criada


console.log("-> Existe z antes do bloco ?", z);

{
  let z = 0;
}

console.log("-> Existe z depois do bloco ?", y);

Dá erro 
*/

// Dá certo

let z = 1;

{
  let z = 0;
  console.log("-> Existe z", z);
}

console.log(" -> existe z depois do bloco ?", z);

//Fato interessante

let n = 1;

{
  n = 0;
  console.log("-> Qual valor de n ?", n);
}

console.log("-> Qual valor de n depois do bloco ?", n);

/* Ficou 0 pois  a variavel let foi substituida por n = 0 que estava dentro do
scope. ATENÇÃO : COM A CONST NÃO FUNCIONA */
