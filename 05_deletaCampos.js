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

//Deletando com nota��o de PONTO:  
delete objPersonagem.aliado

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem)



//Deletando com nota��o de colchetes:
delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined
console.log(objPersonagem)

/* O valor de retorno do operador delete � um booleano, ou seja, 
retorna sempre true ou false para cada opera��o. 
Por�m, � importante notar que ele n�o retorna false se tentarmos remover, 
por exemplo, uma propriedade que n�o existe no objeto. 

O operador delete n�o remove propriedades herdadas de outro objeto, 
e a� sim, neste caso, retornar� false se tentarmos fazer isso. 
Vamos entender melhor o tema �heran�as� mais adiante. */