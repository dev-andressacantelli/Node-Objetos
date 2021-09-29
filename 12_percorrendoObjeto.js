/* Percorrer um objeto e extrair informações básicas do cliente em um formato mais legível
e de forma automatizada para fornecer a outros departamentos do banco. */

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

let relatorio = "";

for ( let info in clienteObjeto){
    if(typeof clienteObjeto[info] === "object" || typeof clienteObjeto[info] === "function") {
        continue
    } else {
        relatorio  +=  `
        ${info} ==> ${clienteObjeto[info]}
        `
    }
}
console.log(relatorio)



