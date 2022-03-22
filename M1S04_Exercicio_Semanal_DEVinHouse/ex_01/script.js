var idade = parseInt(prompt("Digite a sua idade"))
if (idade <= 15) {
        classificacao = "Jovem"
} else if (idade > 15 && idade <= 64) {
    classificacao = "Adulto"
} else if (idade >= 65) {
    classificacao = "Idoso"
}

alert(classificacao)