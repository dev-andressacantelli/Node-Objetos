/* Acessar a lista de n�meros de telefone das pessoas cadastradas no sistema e imprimi-la, 
verificando se h� mais de um n�mero em algum cadastro. */

//1� Passo, adicionar o campo fones como um ARRAY diretamente dentro do objeto:
const clienteObjeto = {
    nome:'Andressa',
    idade: 28,
    cpf: '12332112332',
    email: 'andressa_fulana@email.com',
    fones: ["989784147","25255252"]
}

/*2� Passo, chamar o objeto, utilizar nota��o de ponto p/ indicar o campo desejado,
executar o m�todo forEach que ir� percorrer o array do objeto que trar� o campo solicitado dentro da arrow function.*/
clienteObjeto.fones.forEach(fone => console.log(fone))


/* Ex que daria erro: 
clienteObjeto.nome.forEach(nome => console.log(nome))
O m�todo forEach s� funciona p/ arrays, como nome n�o � um array, d� erro. */