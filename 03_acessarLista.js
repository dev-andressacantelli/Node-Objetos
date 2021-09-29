/*Consultar um objeto utilizando uma lista de chaves relativas a
informa��es de clientes gerada pelo sistema e printar o resultado na tela. */

//1� Passo: declara-se um objeto
const cliente = {
    nome:'Andressa',
    idade: 28,
    cpf: '12332112332',
    email: 'andressa_fulana@email.com'
}

/*2� Passo: cria-se um array com os valores passados no objeto:
                     0,       1,     2,       3              */
const chaves = ["nome", "idade", "cpf", "email"]

//3� Passo: imprime o valor na l�gica de: (objeto[array[posi��onoarray]])
console.log(cliente[chaves[0]])

//Op��o mais verbosa:
console.log(`Ol�, meu nome � ${cliente[chaves[0]]}`)

//Acessando idade:
console.log(`Minha idade � ${cliente[chaves[1]]}`)

//Acessando CPF:
console.log(`Meu CPF � ${cliente[chaves[2]]}`)

//Acessando email:
console.log(`Meu e-mail � ${cliente[chaves[3]]}`)



//Acessando todas as chaves ao mesmo tempo atrav�s do m�todo foreach:
chaves.forEach(info => console.log(cliente[info])) /*
 array.forEach(parametro => console.log(objeto[parametro]))  
 
 Traduzindo: 
 Cria-se uma arrow function para percorrer cada parte do array com o m�todo forEach,
 o par�emtro info torna-se a posi��o no array,
 na 1� vez que o forEach roda, info � nome,
 na 2� vez, info � idade, 
 na 3� vez, info � cpf,
 na 4� vez, info � email.
 Sendo assim, o que � impresso s�o todas as posi��es do array,
 ou seja, todas as chaves (info). 

 Outra forma de acessar o valor da chave � sabendo o nome dessa chave,
 utiliza-se a l�gica:

 console.log(objeto["chave"])

 por exemplo, para imprimir o valor da chave "nome":       */
 console.log(cliente["nome"])

 //Da mesma forma, acessando a chave cpf:
 console.log(cliente["cpf"])

//Se acessar uma chave que n�o existe, a sa�da ser� UNDEFINED:
console.log(cliente["telefone"])