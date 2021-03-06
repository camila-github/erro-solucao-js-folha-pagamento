//SOLUCAO 1 
/* Utilizando variaveis constantes (const) e ajustado nomenclatura das constantes (Uso de conceitos CleanCode) */ 
const numeroDoFuncionario = parseInt(gets());
const quantidadeHora = parseInt(gets());
const valorHora = parseFloat(gets());
console.log("NUMBER = " + numeroDoFuncionario);
console.log("SALARY = U$ " + parseFloat(quantidadeHora * valorHora).toFixed(2));

//SOLUCAO 2
var numFunc = parseInt(gets());
var qHora = parseInt(gets());
var vHora = parseFloat(gets());
var salario = parseFloat(qHora * vHora).toFixed(2);
console.log("NUMBER = " + numFunc);
console.log("SALARY = U$ " + salario);


//SOLUCAO 3 - Resumido
var numFunc = parseInt(gets());
var salario = parseFloat(parseInt(gets()) * parseFloat(gets())).toFixed(2);
console.log("NUMBER = " + numFunc);
console.log("SALARY = U$ " + salario);

//SOLUCAO 4 - Resumido
console.log("NUMBER = " + parseInt(gets()));
console.log("SALARY = U$ " + (parseFloat(parseInt(gets()) * parseFloat(gets())).toFixed(2)));