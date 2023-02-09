var mesAtual = 'janeiro';
var entradas = [{
  description: 'salario em dolar',
  value: 1000000,
},8000];
var saidas = 400;
var saldo = 1000;
var salario = {
  description: 'salario em dolar',
  value: 1000000,
};
var alimentacao = 800;

// Mês
document.getElementById('month').innerHTML = mesAtual;

// Entradas
document.getElementById('total-earnings').innerHTML = entradas[0];

// Saídas
document.getElementById('total-expenses').innerHTML = saidas;

// Saldo
document.getElementById('final-balance').innerHTML = saldo;

// Minha receita: Salário
document.getElementById('salary').innerHTML = salario.description + ' : R$ '+ salario.value;

// Meus gastos: Alimentação
document.getElementById('food').innerHTML = alimentacao;
