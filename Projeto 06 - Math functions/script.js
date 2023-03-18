

let firstNumber = prompt('Digite o primeiro número');
let secondNumber = prompt('Digite o segundo número');

firstNumber = Number(firstNumber);
secondNumber = Number(secondNumber);

const sum = firstNumber + secondNumber
const sub = firstNumber - secondNumber
const multi = firstNumber * secondNumber
const div = firstNumber / secondNumber
const restDiv = firstNumber % secondNumber


alert('Soma: ' + sum)
alert('Subtração: ' + sub)
alert('Multiplicação: ' + multi)
alert('Divisão: ' + div)
alert('Resto: ' + restDiv)

const pair = sum % 2

if(pair == 0){
    alert('A soma dos números é par.')
} else{
    alert('A soma dos números é impar.')
}

if(firstNumber == secondNumber){
    alert('Os números digitados são iguais.')
}else{
    alert('Os números digitados são diferentes.')
}