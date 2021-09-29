// Adicionar dependentes p/ um dos clientes cadastrados, com nome, idade e parentesco.

//1° Passo: utilizar o último objeto:
const clienteObjeto = {
    nome:'Andressa',
    idade: 28,
    cpf: '12332112332',
    email: 'andressa_fulana@email.com',
    fones: ["989784147","25255252"]
}

//2° Passo: criar um objeto dentro do objeto principal, através da notação de ponto:

//OBJETOPRINCIPAL . OBJETONOVO { chave: "valor" }
clienteObjeto.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    DN: "20/03/2011",
    escola: "Clemente Quaglio"
}

console.log(clienteObjeto)

//Para alterar alguma propriedade dentro do objeto dependentes:
//ObjPrincipal.objSecundario.propriedade = "valor"
clienteObjeto.dependentes.nome = "Sara Ferreira"
console.log(clienteObjeto)
