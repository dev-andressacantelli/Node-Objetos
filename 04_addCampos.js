/* Adicionar informa��es importantes que ainda est�o faltando, 
como telefone e tamb�m seus valores. (adicionar conjuntos de chave e valor) */

//1� Passo: colar o objeto do arquivo anterior
const cliente = {
    nome:'Andressa',
    idade: 28,
    cpf: '12332112332',
    email: 'andressa_fulana@email.com'
}
console.log(cliente)

//2� Passo: adicionar campo com a nota��o de PONTO ao objeto:
cliente.fone = "(11)9.9898-98989"
console.log(cliente)

//Caso escrever novamente .fone, ir� subscrever: 
cliente.fone = "(11)9.7272-7272"
console.log(cliente)

//De mesma forma para qualquer outra chave j� existente no objeto atual:
cliente.idade = 30
console.log(cliente)
