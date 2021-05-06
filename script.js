let number = 0
let sentence = 'hello, this is the number 9.'

document.getElementById('button').addEventListener('click',addition)

function addition () {

  number = document.getElementById('input').value

  number = parseInt(number)

  number = number * 4

  alert(number)
}