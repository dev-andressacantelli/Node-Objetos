// Aproveitar o obj Cliente e criar a partir dele um novo tipo de cliente p/ contas poupan�a.

//1� Passo: Trazer a function Cliente:
function Cliente(nome, cpf, email, saldo){
    this.nome = nome,
    this.cpf = cpf,
    this.email = email,
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

//2� Passo: Criar a function cliente poupan�a:
function ClientePoupanca(nome, cpf, email, saldo, saldoPoupa){
    Cliente.call(this,nome,cpf,email,saldo)
    this.saldoPoupa = saldoPoupa
}
/* Atrav�s do m�todo .call, chamamos o construtor de dentro do Cliente para ClientePoupanca,
ent�o ClientePoupanca herda as propriedades e os comportamentos do CLiente.
Dentro desse m�todo, chamamos as propriedades que queremos herdar atrav�s de par�metros,
n�o precisando chamar todos os par�metros do objeto Cliente:
ObjetoM�e.call(this,parametro1, parametro2, etc);
 
Ap�s herdar as propriedades de Cliente atrav�s de .call,
declaramos o par�metro que difere ClientePoupanca, atrav�s do m�todo this. 
this.par�metroDiferente = par�metroDiferente 
*/

//3� Passo: Criar uma inst�ncia de ClientePoupanca:
const maria = new ClientePoupanca("Maria", "123.741.596-78", "maria@email.com", 100, 200)
console.log(maria)


/* 4� Passo: criar um m�todo para depositar na poupan�a atrav�s da chamada:
ObjetoMae.prototype.nomeDaFuncao = function(parametro) */
ClientePoupanca.prototype.depositarPoupa = function(valor){
    this.saldoPoupa += valor
}

//5� Passo: chamar a const + m�todo criado e passar um vaor de par�metro:
maria.depositarPoupa(30)
console.log(`Seu novo saldo � de ${maria.saldoPoupa} ap�s dep�sito efetuado.`)