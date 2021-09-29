/* O m�todo Object.create() cria um novo objeto utilizando como prot�tipo o objeto passado via par�metro.
Dessa forma, objPersonagem2 � uma inst�ncia diferente de objPersonagem
e pode ser trabalhada de forma independente. */

const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
   }
   
   const objPersonagem2 = Object.create(objPersonagem)
   objPersonagem2.nome = "Gandalf, o Cinzento"
   
   console.log(objPersonagem.nome) //Gandalf
   console.log(objPersonagem2.nome) //Gandalf, o Cinzento