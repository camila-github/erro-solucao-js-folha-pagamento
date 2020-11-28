//Solução 1
var numFunc = parseInt(gets());
var qHora = parseInt(gets());
var vHora = parseFloat(gets());
var salario = parseFloat(qHora * vHora).toFixed(2);
console.log("NUMBER = " + numFunc);
console.log("SALARY = U$ " + salario);

//Solução 2 - Resumido
var numFunc = parseInt(gets());
var salario = parseFloat(parseInt(gets()) * parseFloat(gets())).toFixed(2);
console.log("NUMBER = " + numFunc);
console.log("SALARY = U$ " + salario);

//Solução 3 - Resumido
console.log("NUMBER = " + parseInt(gets()));
console.log("SALARY = U$ " + (parseFloat(parseInt(gets()) * parseFloat(gets())).toFixed(2)));