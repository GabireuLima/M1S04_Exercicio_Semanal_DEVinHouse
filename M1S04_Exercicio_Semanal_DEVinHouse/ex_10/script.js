const contasClientes = [
    { id: 1, saldo: 500, },
    { id: 2, saldo: 30000, },
    { id: 3, saldo: 50, },
]

const saque = ((valorSaque, id) => {
    let idClient = contasClientes.find(idClient => idClient.id === id)

    if (valorSaque <= 0) {
        console.log('Infelizmente o valor é inválido para o saque')
    } else if (valorSaque > idClient.saldo) {
        console.log('Saldo insuficiente para essa transação')
    } else {
        let saldoAtual = idClient.saldo -= valorSaque
        console.log(`Sua operação foi realizada com sucesso! seu saldo atual é ${saldoAtual}`)
    }
})

const deposito = ((valorDeposito, id) => {
    let idClient = contasClientes.find(idClient => idClient.id === id)
    
    if (valorDeposito <= 0) {
        console.log(`Infelizmente não foi possível realizar a sua operação, valor inválido`)
    } else {
        let saldoAtual = idClient.saldo += valorDeposito
        console.log(`Sua operação foi realizada com sucesso! Seu saldo atual é de ${saldoAtual}`)
    }
    
})


deposito(250, 1)
saque(500, 1)
console.log(contasClientes)

