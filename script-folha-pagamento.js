//Solução 1
/*Leitura dos dados de entrada*/
var numFunc = parseInt(gets());
var qHora = parseInt(gets());
var vHora = parseFloat(gets());
/*Calcula, retirando no final do resultado, duas cadas decimais*/
var salario = parseFloat(qHora * vHora).toFixed(2);
/*Mostra os dados*/
console.log("NUMBER = " + numFunc);
console.log("SALARY = U$ " + salario);


//Solução 2 - Resumido
/*Leitura da primeira entrada referente o numero do funcionario*/
var numFunc = parseInt(gets());
/*Leitura da quantidadeHora e valorHora. Calcula, retirando no final do resultado, duas cadas decimais*/
var salario = parseFloat(parseInt(gets()) * parseFloat(gets())).toFixed(2);
/*Mostra o resultado no console*/
console.log("NUMBER = " + numFunc);
console.log("SALARY = U$ " + salario);


//Solução 3 - Resumido
/*Leitura da primeira entrada referente o numero do funcionario. Mostra resultado no console*/
console.log("NUMBER = " + parseInt(gets()));
/*Leitura da quantidadeHora e valorHora. Calcula. Mostra resultado no console retirando no final duas casas decimais*/
console.log("SALARY = U$ " + (parseFloat(parseInt(gets()) * parseFloat(gets())).toFixed(2)));