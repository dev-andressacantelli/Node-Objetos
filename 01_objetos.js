//Diferença entre um array e um objeto:

//Um array normal:
const listaCPF = ['12332112332','14774114774','45665445656']

//Um array errado que tenta conter várias informações:
const cliente = ['nome', 'André', 'idade', 36]

//Um objeto seria melhor para definir as informações do array cliente:
const clienteObjeto = {
    nome:'Andressa',
    idade: 28,
    cpf: '12332112332',
    email: 'andressa_fulana@email.com'
}

/* Um objeto é definido com chave e valor: 
const nomeDoObjeto = { 
    chave:valor,
    chave:valor,
 }
 */