

var num1 = Number(prompt("Digite o primeiro valor"))
var num2 = Number(prompt("Digite o segundo valor"))
operacao = prompt("Digite a operação que deseja fazer (+, -, *, /)")

calculo(num1, num2, operacao)

alert(`O resultado dessa operação é ${resultado}`)

function calculo(num1, num2, operacao) {
    
    if (operacao != "+" && operacao != "-" && operacao != "*" && operacao != "/") {
        alert("Infelizmente não foi possível realizar essa operação")
    } 

    switch (operacao) {
        case "+":
            resultado = num1+num2
            return (resultado)
    
        case "-":
            resultado = num1-num2
            return (resultado)
    
        case "*":
            resultado = num1*num2
            return (resultado)
    
        case "/":
            resultado = num1/num2
            return (resultado)           
    }
        
}


