/* Percorrer um objeto, verificar se existe a chave "dependentes" e, 
caso exista, enviar uma mensagem de oferta de seguro. */

/* Percorrer um objeto e extrair informa��es b�sicas do cliente em um formato mais leg�vel
e de forma automatizada para fornecer a outros departamentos do banco. */


//1� Passo: Declara o objeto com arrays e fun��o;
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

/*2� Passo: criar uma fun��o que verifica se o objeto tem dependentes:

1 - function nomeDaFunction(obj)
2 - Criar const com as propriedades do objeto, chamando o m�todo object.keys:
    const nomeDaConst    = M�TODO.CHAVE(OBJ) 
3 - gerar uma condicional com o m�todo includes, 
que verifica se no array possui a string desejada 
    if (nomeDaConsr.includes("string"))                                    */

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj)
    if(propsClientes.includes("dependentes"))
    {
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
}

//3� Passo: chamar a fun��o criada, passar o objeto;
oferecerSeguro(clienteObjeto)



/*Para curiosidade: chamar o m�todo "Object.values", que retorna os valores das keys:
                   m�todo       (objeto)                                           */
//console.log(Object.values(clienteObjeto))


/*Para curiosidade: chamar o m�todo "Object.entries", 
que tr�s um array com v�rias arrays dentro dele  com conjunto de chaves+valores, 
por�m em estrutura de array -> �ndice 0: chave, �ndice 1: valor.              */

//console.log(Object.entries(clienteObjeto))


/* Ent�o essas s�o as 3 formas de converter valores de um objeto para array:
- Object.keys -> tr�s as chaves;
- Object.values -> tr�s os valores;
- Object.entries -> tr�s pares de chaves e valores;                       */






