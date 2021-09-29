/* Adicionar uma propriedade que permita "ações", 
p/ que os clientes que estão cadastrados consigam fazer operações bancárias.
Ou seja, adicionar comportamento ao objeto. */

//1° Passo: copiar o último objeto;
const clienteObjeto = {
    nome:'Andressa',
    idade: 28,
    cpf: '12332112332',
    email: 'andressa_fulana@email.com',
    fones: ["989784147","25255252"],
    dependentes: [
      {
        nome: "Sara ferreira",
        parentesco: "filha",
        DN: "20/03/2011",
        escola: "Clemente Quaglio" },
      {
        nome: "Ana Furtado",
        parentesco: "filha",
        DN:"04/01/2014",
        escola: "Mario Marques de Oliveira"
      }
    ],

    /*2° Passo: adicionar um campo com chave:valor, denomidado saldo:valor, e determinar uma função,
    ou seja, este campo receberá um comportamento. 
    Neste caso cria-se a função "depositar" que recebe um valor e soma este valor ao saldo já existente.*/
    saldo:100,
    depositar:function(valor)
    {
      this.saldo += valor
    }
}

//O this é uma palavra reservada, e funcionaá como: essa instância deste objeto receberá tal coisa 

//3° Passo: Verificar quanto é o saldo inicial;
console.log(`Seu saldo inicial é de: ${clienteObjeto.saldo}`)

/*4° Passo: chamar a função depositar para o objeto, passar um valor no parâmetro, simulando um depósito;
objeto.       function(parametro) */
clienteObjeto.depositar(30)

//5° Passo: verificar quanto ficou o saldo com o depósito;
console.log(`Você recebeu um depósito! Seu saldo atual é de: ${clienteObjeto.saldo}`)

//Métodos são funções que trabalham no contexto de um objeto.


