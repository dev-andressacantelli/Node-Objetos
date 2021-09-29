// Aproveitar o obj Cliente e criar a partir dele um novo tipo de cliente p/ contas poupança.

//1° Passo: Trazer a function Cliente:
function Cliente(nome, cpf, email, saldo){
    this.nome = nome,
    this.cpf = cpf,
    this.email = email,
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

//2° Passo: Criar a function cliente poupança:
function ClientePoupanca(nome, cpf, email, saldo, saldoPoupa){
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoupa = saldoPoupa
}
/* Através do método .call, chamamos o construtor de dentro do Cliente para ClientePoupanca,
então ClientePoupanca herda as propriedades e os comportamentos do CLiente.
Dentro desse método, chamamos as propriedades que queremos herdar através de parâmetros,
não precisando chamar todos os parâmetros do objeto Cliente:
ObjetoMãe.call(this,parametro1, parametro2, etc);
 
Após herdar as propriedades de Cliente através de .call,
declaramos o parâmetro que difere ClientePoupanca, através do método this. 
this.parâmetroDiferente = parâmetroDiferente 
*/

//3° Passo: Criar uma instância de ClientePoupanca:
const maria = new ClientePoupanca("Maria", "123.741.596-78", "maria@email.com", 100, 200)
console.log(maria)


/* 4° Passo: criar um método para depositar na poupança através da chamada:
ObjetoMae.prototype.nomeDaFuncao = function(parametro) */
ClientePoupanca.prototype.depositarPoupa = function(valor){
    this.saldoPoupa += valor
}

//5° Passo: chamar a const + método criado e passar um vaor de parâmetro:
maria.depositarPoupa(30)
console.log(`Seu novo saldo é de ${maria.saldoPoupa} após depósito efetuado.`)