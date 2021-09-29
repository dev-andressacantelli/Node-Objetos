
// Aproveitar o Cliente que já existe e criar a partir dele um novo tipo de cliente p/ contas poupança.

//Criar Classe mãe:
class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo 
    }
   
    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(`O seu saldo atual é de: ${this.saldo}`)
    }
 
}

//Criar classe filha que utilizará herança para herdar atributos e métodos:
class ClientePoupanca extends Cliente{
    constructor(nome, email, cpf, saldo, saldoPoupanca){
        super(nome, email, cpf, saldo) //Propriedades que eu quero herdar da classe Cliente
        this.saldoPoupanca = saldoPoupanca //Nova Propriedade
    }

    //Novo comportamento
    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }   
} 


//Cria objeto da classe filha:
const andressa = new ClientePoupanca("Andressa", "andressa@email.com", "123.321.123-32",100,200)
console.log(andressa)

//Chama o comportamento da classe mãe e lança um novo parâmetro:
andressa.depositar(50)

//chama o comportamento da classe filha e lança um novo parâmetro:
andressa.depositarPoupanca(50)

//Verifica as mudanças nos saldos:
console.log(andressa)