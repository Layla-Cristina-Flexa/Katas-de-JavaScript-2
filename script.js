function add (num1, num2){
    return num1 + num2
}

function multiply (num1, num2){

    let soma = num1
    let resultado = 0

    for(let i = 0; i < num2; i = add(i , 1)){
        resultado = add(soma, resultado)
    }
    return resultado
}

function power(num1, num2){

    let resultado = 1

    for(let i = 0; i < num2; i = add(i,1)){
        resultado = multiply(num1 , resultado)
    }
    return resultado
}

function factorial(num){

    let resultado = 1
    
    for(let i = 1; i <= num; i = add(i,1)){
        resultado = multiply(i, resultado)
    }
    return resultado
}

function fibonacci(num){
    let num1 = 0
    let num2 = 1
    let resultado = 0

    if(num ===1 ){
        return 0
    }
    for(let i = 2; num > i; i = add(i,1)){

        resultado = add(num1, num2)
        num1 = num2
        num2 = resultado
    }
    return num2
}