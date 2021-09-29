

/* Na representa��o do cliente, 
o objeto � composto por outras propriedades de diversos tipos e objetos.
O cliente possui uma propriedade chamada animalEstimacao, 
um array de objetos, o que nos permite usar fun��es comuns a arrays como filter() */

const cliente = {
    nome: "Jose",
    idade:33,
    email: "jose@email.com",
    telefones: ["+550033338888", "+550033334444"]
   }
    cliente.animalEstimacao = [{
    nome: "Kripto",
    ra�a: "C�o",
    vacinado: true
   }]
    cliente.animalEstimacao.push({
    nome: "Lex",
    ra�a: "Gato",
    vacinado: false
   })


const animalPreferido = cliente.animalEstimacao.filter(animalEstimacao => animalEstimacao.ra�a==="C�o")
console.log(animalPreferido[0].ra�a)
