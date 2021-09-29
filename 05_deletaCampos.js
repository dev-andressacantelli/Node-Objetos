//Para deletar campos.

//Supondo que o objeto seja:
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

//Deletando com notação de PONTO:  
delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem)



//Deletando com notação de colchetes:
delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined
console.log(objPersonagem)

/* O valor de retorno do operador delete é um booleano, ou seja, 
retorna sempre true ou false para cada operação. 
Porém, é importante notar que ele não retorna false se tentarmos remover, 
por exemplo, uma propriedade que não existe no objeto. 

O operador delete não remove propriedades herdadas de outro objeto, 
e aí sim, neste caso, retornará false se tentarmos fazer isso. 
Vamos entender melhor o tema “heranças” mais adiante. */