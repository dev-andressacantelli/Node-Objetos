/* Adicionar uma propriedade que permita "a��es", 
p/ que os clientes que est�o cadastrados consigam fazer opera��es banc�rias.
Ou seja, adicionar comportamento ao objeto. */

//1� Passo: copiar o �ltimo objeto;
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

    /*2� Passo: adicionar um campo com chave:valor, denomidado saldo:valor, e determinar uma fun��o,
    ou seja, este campo receber� um comportamento. 
    Neste caso cria-se a fun��o "depositar" que recebe um valor e soma este valor ao saldo j� existente.*/
    saldo:100,
    depositar:function(valor)
    {
      this.saldo += valor
    }
}

//O this � uma palavra reservada, e funciona� como: essa inst�ncia deste objeto receber� tal coisa 

//3� Passo: Verificar quanto � o saldo inicial;
console.log(`Seu saldo inicial � de: ${clienteObjeto.saldo}`)

/*4� Passo: chamar a fun��o depositar para o objeto, passar um valor no par�metro, simulando um dep�sito;
objeto.       function(parametro) */
clienteObjeto.depositar(30)

//5� Passo: verificar quanto ficou o saldo com o dep�sito;
console.log(`Voc� recebeu um dep�sito! Seu saldo atual � de: ${clienteObjeto.saldo}`)

//M�todos s�o fun��es que trabalham no contexto de um objeto.


