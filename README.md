## Treinamento Digital Innovation One - Exercicio - Folha de Pagamento

O exercicio publicado é referente ao treinamento do BOOTCAMP - Desenvolvedor NodeJS - Introdução a Programação Com Java Script 
(https://digitalinnovation.one)

#### Descrição do Desafio:

Precisamos saber quanto uma determinada empresa deve pagar para seus colaboradores, porém temos apenas a quantidade de horas trabalhadas e o valor hora. Escreva um programa que leia o número de um colaborador, seu número de horas trabalhadas, o valor que recebe por hora e calcula o salário desse colaborador. Em seguida, apresente o número e o salário do colaborador, com duas casas decimais.


#### Entrada: 

Você receverá 2 números inteiros e 1 número com duas casas decimais, representando o número, quantidade de horas trabalhadas e o valor que o funcionário recebe por hora trabalhada.


#### Saída: 

Exiba o número e o salário do colaborador, conforme exemplo abaixo, com um espaço em branco antes e depois da igualdade. No caso do salário, também deve haver um espaço em branco após o $.

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
25 | NUMBER = 25
100 | SALARY = U$ 550.00
5.50 | 

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
1 | NUMBER = 1
200 | SALARY = U$ 550.00
20.50 |

Exemplos de Entrada  | Exemplos de Saída
------------- | -------------
6 | NUMBER = 6
145 | SALARY = U$ 2254.75
15.55 |



#### Update:
06-03-2021 - Utilizando variaveis constantes (const) e ajustado nomenclatura das constantes (Uso de conceitos CleanCode)

#### Javascript　

```javascript
//SOLUCAO 1 
/* Utilizando variaveis constantes (const) e ajustado nomenclatura das constantes (Uso de conceitos CleanCode) */ 

/*Leitura da primeira entrada (gets()) referente o numero do funcionario.*/
const numeroDoFuncionario = parseInt(gets());

/*Leitura da quantidadeHora e valorHora.*/ 
const quantidadeHora = parseInt(gets());
const valorHora = parseFloat(gets());

/*Mostra resultado do numero do funcionario no console*/
console.log("NUMBER = " + numeroDoFuncionario);

/*Calcula e Mostra resultado do salario no console retirando no final duas casas decimais (.toFixed())*/
console.log("SALARY = U$ " + parseFloat(quantidadeHora * valorHora).toFixed(2));


//SOLUCAO 2
/*Leitura dos dados de entrada (gets())*/
var numFunc = parseInt(gets());
var qHora = parseInt(gets());
var vHora = parseFloat(gets());
/*Calcula, retirando no final do resultado, duas cadas decimais (.toFixed())*/
var salario = parseFloat(qHora * vHora).toFixed(2);
/*Mostra os dados*/
console.log("NUMBER = " + numFunc);
console.log("SALARY = U$ " + salario);


//SOLUCAO 3 - Resumido
/*Leitura da primeira entrada (gets) referente o numero do funcionario*/
var numFunc = parseInt(gets());
/*Leitura da quantidadeHora e valorHora. Calcula, retirando no final do resultado, duas cadas decimais (.toFixed())*/
var salario = parseFloat(parseInt(gets()) * parseFloat(gets())).toFixed(2);
/*Mostra o resultado no console*/
console.log("NUMBER = " + numFunc);
console.log("SALARY = U$ " + salario);


//SOLUCAO 4 - Resumido
/*Leitura da primeira entrada (gets()) referente o numero do funcionario. Mostra resultado no console*/
console.log("NUMBER = " + parseInt(gets()));
/*Leitura da quantidadeHora e valorHora. Calcula. Mostra resultado no console retirando no final duas casas decimais (.toFixed())*/
console.log("SALARY = U$ " + (parseFloat(parseInt(gets()) * parseFloat(gets())).toFixed(2)));
```
