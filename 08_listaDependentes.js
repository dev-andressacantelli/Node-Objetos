// Verificar a melhor forma de agregar a informação de um novo dependente ao objeto cliente.

/*1° Passo: copiar o último objeto;
  2° Passo: trazer o campo "dependentes" com o valor de objeto: {}
  3° Passo: transformá-lo em um array: [] */
const clienteObjeto = {
    nome:'Andressa',
    idade: 28,
    cpf: '12332112332',
    email: 'andressa_fulana@email.com',
    fones: ["989784147","25255252"],
    dependentes: [{
        nome: "Sara ferreira",
        parentesco: "filha",
        DN: "20/03/2011",
        escola: "Clemente Quaglio"
    }]    
}

/* 4° Passo: chamar o OBJPRINCIPAL.OBJSECUNDARIO.PUSH({OBJETO do tipo "dependente"})
O Método "push" adiciona no último indice do array. */
clienteObjeto.dependentes.push( {
    nome: "Ana Furtado",
    parentesco: "filha",
    DN:"04/01/2014",
    escola: "Mario Marques de Oliveira"
})
//console.log(clienteObjeto)



/* Localizar o nome da filha mais nova.

Para filtrar um dado dentro do array dependentes:
1 -> Criar uma nova const que definirá 
OBJPRINCIPAL.OBJSECUNDARIO.filter(objeto => objeto.campo==="valor") */
const filhaMaisNova = clienteObjeto.dependentes.filter(dependente => dependente.DN==="04/01/2014")


/* Para chamar: console.log(const[numeroDaPosicaoNoArray].campo) 
O filter é um método de array que sempre retorna o que ele filtra dentro de um array, 
mesmo se não encontrar nada, irá retornar vazio. */
console.log(filhaMaisNova[0].nome)

// Digamos que preciamos saber o nome da escola que a filha mais nova estuda:
console.log(filhaMaisNova[0].escola)