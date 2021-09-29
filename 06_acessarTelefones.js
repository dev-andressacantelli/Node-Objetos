/* Acessar a lista de números de telefone das pessoas cadastradas no sistema e imprimi-la, 
verificando se há mais de um número em algum cadastro. */

//1° Passo, adicionar o campo fones como um ARRAY diretamente dentro do objeto:
const clienteObjeto = {
    nome:'Andressa',
    idade: 28,
    cpf: '12332112332',
    email: 'andressa_fulana@email.com',
    fones: ["989784147","25255252"]
}

/*2° Passo, chamar o objeto, utilizar notação de ponto p/ indicar o campo desejado,
executar o método forEach que irá percorrer o array do objeto que trará o campo solicitado dentro da arrow function.*/
clienteObjeto.fones.forEach(fone => console.log(fone))


/* Ex que daria erro: 
clienteObjeto.nome.forEach(nome => console.log(nome))
O método forEach só funciona p/ arrays, como nome não é um array, dá erro. */