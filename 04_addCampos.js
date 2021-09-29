/* Adicionar informações importantes que ainda estão faltando, 
como telefone e também seus valores. (adicionar conjuntos de chave e valor) */

//1° Passo: colar o objeto do arquivo anterior
const cliente = {
    nome:'Andressa',
    idade: 28,
    cpf: '12332112332',
    email: 'andressa_fulana@email.com'
}
console.log(cliente)

//2° Passo: adicionar campo com a notação de PONTO ao objeto:
cliente.fone = "(11)9.9898-98989"
console.log(cliente)

//Caso escrever novamente .fone, irá subscrever: 
cliente.fone = "(11)9.7272-7272"
console.log(cliente)

//De mesma forma para qualquer outra chave já existente no objeto atual:
cliente.idade = 30
console.log(cliente)
