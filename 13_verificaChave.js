/* Percorrer um objeto, verificar se existe a chave "dependentes" e, 
caso exista, enviar uma mensagem de oferta de seguro. */

/* Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível
e de forma automatizada para fornecer a outros departamentos do banco. */


//1° Passo: Declara o objeto com arrays e função;
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

    saldo:100,
    depositar:function(valor){
      this.saldo += valor
    }
}

/*2° Passo: criar uma função que verifica se o objeto tem dependentes:

1 - function nomeDaFunction(obj)
2 - Criar const com as propriedades do objeto, chamando o método object.keys:
    const nomeDaConst    = MÉTODO.CHAVE(OBJ) 
3 - gerar uma condicional com o método includes, 
que verifica se no array possui a string desejada 
    if (nomeDaConsr.includes("string"))                                    */

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj)
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

//3° Passo: chamar a função criada, passar o objeto;
oferecerSeguro(clienteObjeto)



/*Para curiosidade: chamar o método "Object.values", que retorna os valores das keys:
                   método       (objeto)                                           */
//console.log(Object.values(clienteObjeto))


/*Para curiosidade: chamar o método "Object.entries", 
que trás um array com várias arrays dentro dele  com conjunto de chaves+valores, 
porém em estrutura de array -> índice 0: chave, índice 1: valor.              */

//console.log(Object.entries(clienteObjeto))


/* Então essas são as 3 formas de converter valores de um objeto para array:
- Object.keys -> trás as chaves;
- Object.values -> trás os valores;
- Object.entries -> trás pares de chaves e valores;                       */






