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
