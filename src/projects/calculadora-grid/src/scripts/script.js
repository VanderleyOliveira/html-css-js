function addCaracter(caracter){
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = valorInput + caracter
}

function cleanScreen(){
    document.querySelector('.display').value = ''
}

function calculate(){
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = eval(valorInput)
}

function invert(){
    const valorInput = document.querySelector('.display').value

    document.querySelector('.display').value = valorInput * -1
}