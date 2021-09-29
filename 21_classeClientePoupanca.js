
// Aproveitar o Cliente que j� existe e criar a partir dele um novo tipo de cliente p/ contas poupan�a.

//Criar Classe m�e:
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
        console.log(`O seu saldo atual � de: ${this.saldo}`)
    }
 
}

//Criar classe filha que utilizar� heran�a para herdar atributos e m�todos:
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

//Chama o comportamento da classe m�e e lan�a um novo par�metro:
andressa.depositar(50)

//chama o comportamento da classe filha e lan�a um novo par�metro:
andressa.depositarPoupanca(50)

//Verifica as mudan�as nos saldos:
console.log(andressa)