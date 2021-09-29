/* Gerar uma função que permita a criação de novos clientes a partir de um modelo. */

//1° Passo: cliar uma function com parâmetros definidos e utilizar o método this. 
function Cliente(nome, cpf, email, saldo){
    this.nome = nome,
    this.cpf = cpf,
    this.email = email,
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}
//Essa "function Cliente" é uma função construtora do objeto cliente!

/*2° Passo: Criar uma const com o nome do cliente, 
atribuir o objeto criado, passar os parâmetros que definem o objeto; */
const andressa = new Cliente("Andressa", "123.452.789-12", "andressa@email.com", 100 )
// A criação dessa const é uma INSTÂNCIA de Cliente, criado à partir da função construtora
console.log(andressa)

/* 3° Passo: rodar no terminal, retorna:
$ node 17_propriedadesPrototype.js
Cliente {
  nome: 'Andressa',
  cpf: '123.452.789-12',
  email: 'andressa@email.com',
  saldo: 100,
  depositar: [Function]
} 

4° Passo: Ir ao console do navegador, colar a function Cliente e a const andressa, rodar:
andressa.__proto__ 
retorna:
        {constructor: ƒ}
        constructor: ƒ Cliente(nome, cpf, email, saldo)
        __proto__: Object */
