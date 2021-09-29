/* Sintaxe de espalhamento ou spread operator com destructuring */


const numerosPares = [2, 4, 6]
const numerosImpares = [1, 3, 5]

//Forma errada: um array com os 2 arrays:
const numeros = [numerosPares,numerosImpares]
console.log(numeros)
console.table(numeros)

/* Return:
[ [ 2, 4, 6 ], [ 1, 3, 5 ] ]
+---------------------+
¦ (index) ¦ 0 ¦ 1 ¦ 2 ¦
+---------+---+---+---¦
¦    0    ¦ 2 ¦ 4 ¦ 6 ¦
¦    1    ¦ 1 ¦ 3 ¦ 5 ¦
+---------------------+ */


//Forma certa: um array único:
const numerosDestructuring = [...numerosPares,...numerosImpares]
console.log(numerosDestructuring)
console.table(numerosDestructuring)

/* Return: 
[ 2, 4, 6, 1, 3, 5 ]
+------------------+
¦ (index) ¦ Values ¦
+---------+--------¦
¦    0    ¦   2    ¦
¦    1    ¦   4    ¦
¦    2    ¦   6    ¦
¦    3    ¦   1    ¦
¦    4    ¦   3    ¦
¦    5    ¦   5    ¦
+------------------+ */


//Outro exemplo de como funciona o "..." antes de uma variável:

//Maneira tradicional de imprimir os números de um array:
const [num1, num2] = [1,2]
console.log(num1, num2)
//retorna: 1 2


/*Maneira errada de tentar imprimir todos os números, pois:
  num3 corresponde à 1;
  num4 corresponde à 2;
  outrosNumeros1 corresponde à 3, não pega os demais números descritos.*/
const [num3, num4, outrosNumeros1] = [1,2,3,4,5]
console.log(num3, num4, outrosNumeros1)
//retorna: 1 2 3


//Maneira correta de imprimir todos os números:
const [num5, num6, ...outrosNumeros2] = [1,2,3,4,5]
console.log(num1, num2, outrosNumeros2)
//retorna: 1 2 [ 3, 4, 5 ]



//Outro exemplo de como usar o destructuring:

//Criar um objeto:
const pessoa = {
    nome: 'Andressa',
    idade: 28
}
console.log(pessoa)
//retorna: { nome: 'Andressa', idade: 28 }
    
//Criar um segundo objeto que pega as informações do primeiro e inclui mais informações:
const pessoaComTelefone = {...pessoa, telefone:999999999}
console.log(pessoaComTelefone)
//retorna: { nome: 'Andressa', idade: 28, telefone: 999999999 }




//Outra maneira de utilizar destructuring:
const { idade } = pessoa

function imprimeDados({ nome, idade
}) {
   console.log(nome, idade)
}

imprimeDados(pessoa)
//retorna: Andressa 28