
//Criando classe CLiente
class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo 
    }
    // ^ Atributos

    depositar(valor){
        this.saldo += valor
    }
    // ^ Comportamento depositar

    exibirSaldo(){
        console.log(`O seu saldo atual é de: ${this.saldo}`)
    }
    // ^ Comportamento exibirSaldo
}


//Criando objeto andressa = Instância da classe Cliente
const andressa = new Cliente("Andressa", "andressa@email.com", "123.3456.789-87", 100)
//Para exibir o objeto andressa completo:
console.log(andressa)

//Para exibir apenas o saldo, chama o objeto.método()
andressa.exibirSaldo()