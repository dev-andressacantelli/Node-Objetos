//Acessar um objeto com informa��es de um cliente e eibir essas informa��es no console.

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
console.log(`Ol�, meu nome � ${clienteObjeto.nome} e tenho ${clienteObjeto.idade} anos.`)

//Vamos supor que pecise acessar os 3 primeiros d�gitos do CPF, para isso, utiliza-se o m�todo substring:
console.log(`Os primeiros d�gitos do meu CPF s�o: ${clienteObjeto.cpf.substring(0,3)}`)
/* o m�todo substring funciona com o chamado de um par�metro (0,0) 
onde o primeiro � onde inicia e o segundo onde acaba. */

//Supondo que precise acessar os 2 �ltimos d�gitos do CPF:
console.log(`Os �ltimos d�gitos do meu CPF s�o: ${clienteObjeto.cpf.substring(9,12)}`)