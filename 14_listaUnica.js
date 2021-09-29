/* Sintaxe de espalhamento ou spread operator:

Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista única, 
para análise de outos departamentos do banco. */

//1° Passo: Criar uma const com um array descrevendo uma lista de clientes com dependentes:
const clientes = [
  {
    nome:"Andressa",
    cpf: "12332112332",
    dependentes: [{
      nome: "Sara",
      parentesco: "filha",
      DN: "20/03/2011"
    },
    {
      nome: "Ana",
      parentesco: "filha",
      DN:"04/01/2014"
    }],
  },
  {
    nome:"Juliana",
    cpf: "56565656556",
    dependentes: [{
      nome: "Sofia",
      parentesco: "filha",
      DN: "30/08/2020"
    }],
  },
  {
    nome:"Silvia",
    cpf: "12345678959",
    dependentes: [{
      nome: "Laura",
      parentesco: "filha",
      DN: "04/07/2011"
    }],
  }
]


/*2° Passo: criar uma const que irá listar os dependentes com a sintaxe de espalhamento "..."
[...na const clientes[no indice 0].puxar a chave dependentes,
...na const clientes[no indice 1].puxar a chave dependentes];

              VARIÁVEL = [...OBJETO[INDEX].CAMPO,...OBJETO[INDEX].CAMPO]    */
const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes]
console.table(listaDependentes)
//console.log(listaDependentes)


//Testar apenas a posição 0:
//const listaDependentes = [...clientes[0].dependentes]
//console.log(listaDependentes)

//Testar 3 posições:
//const listaDependentes = [...clientes[0].dependentes,...clientes[1].dependentes,...clientes[2].dependentes]
//console.log(listaDependentes)






