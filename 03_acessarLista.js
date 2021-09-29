/*Consultar um objeto utilizando uma lista de chaves relativas a
informações de clientes gerada pelo sistema e printar o resultado na tela. */

//1° Passo: declara-se um objeto
const cliente = {
    nome:'Andressa',
    idade: 28,
    cpf: '12332112332',
    email: 'andressa_fulana@email.com'
}

/*2° Passo: cria-se um array com os valores passados no objeto:
                     0,       1,     2,       3              */
const chaves = ["nome", "idade", "cpf", "email"]

//3° Passo: imprime o valor na lógica de: (objeto[array[posiçãonoarray]])
console.log(cliente[chaves[0]])

//Opção mais verbosa:
console.log(`Olá, meu nome é ${cliente[chaves[0]]}`)

//Acessando idade:
console.log(`Minha idade é ${cliente[chaves[1]]}`)

//Acessando CPF:
console.log(`Meu CPF é ${cliente[chaves[2]]}`)

//Acessando email:
console.log(`Meu e-mail é ${cliente[chaves[3]]}`)



//Acessando todas as chaves ao mesmo tempo através do método foreach:
chaves.forEach(info => console.log(cliente[info])) /*
 array.forEach(parametro => console.log(objeto[parametro]))  
 
 Traduzindo: 
 Cria-se uma arrow function para percorrer cada parte do array com o método forEach,
 o parâemtro info torna-se a posição no array,
 na 1° vez que o forEach roda, info é nome,
 na 2° vez, info é idade, 
 na 3° vez, info é cpf,
 na 4° vez, info é email.
 Sendo assim, o que é impresso são todas as posições do array,
 ou seja, todas as chaves (info). 

 Outra forma de acessar o valor da chave é sabendo o nome dessa chave,
 utiliza-se a lógica:

 console.log(objeto["chave"])

 por exemplo, para imprimir o valor da chave "nome":       */
 console.log(cliente["nome"])

 //Da mesma forma, acessando a chave cpf:
 console.log(cliente["cpf"])

//Se acessar uma chave que não existe, a saída será UNDEFINED:
console.log(cliente["telefone"])