//Acessar um objeto com informações de um cliente e eibir essas informações no console.

const clienteObjeto = {
    nome:'Andressa',
    idade: 28,
    cpf: '12332112332',
    email: 'andressa_fulana@email.com'
}

//Para acessar o VALOR da CHAVE nome:
console.log(clienteObjeto.nome)
//Ou seja, utiliza-se a classe.chave

//Pode-se usar um console.log mais verboso:
console.log(`Olá, meu nome é ${clienteObjeto.nome} e tenho ${clienteObjeto.idade} anos.`)

//Vamos supor que pecise acessar os 3 primeiros dígitos do CPF, para isso, utiliza-se o método substring:
console.log(`Os primeiros dígitos do meu CPF são: ${clienteObjeto.cpf.substring(0,3)}`)
/* o método substring funciona com o chamado de um parâmetro (0,0) 
onde o primeiro é onde inicia e o segundo onde acaba. */

//Supondo que precise acessar os 2 últimos dígitos do CPF:
console.log(`Os últimos dígitos do meu CPF são: ${clienteObjeto.cpf.substring(9,12)}`)