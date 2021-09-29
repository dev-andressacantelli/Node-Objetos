/* JS é uma linguagem baseada em protótipos, então tudo em JS é objeto. 
portando o Prototype é um objeto implícito que está disponível para todas as funções construtoras do JS. 
É um atributo da função Object, de onde as funções herdam.
A funcionalidade dele basicamente é compartilhar funções e propriedades,
de forma a não duplicar essas coisas em vários objetos do código. 
É muito utilizado para herança e compartilhamento de dados e comportamento entre objetos. */

/* A propriedade .__proto__ guarda todas as definições de todo o array criado,
portanto, no console do navegador, se criarmos uma const comum e chamar o método .__proto__ ,
teremos o retorno de tudo o que esse objeto guarda: */
const meuAarray = [1, 2, 3]
meuAarray.__proto__
//Testar no navegador!


/* Por isso, por transformar as coisas em objetos, é possível herdar comportamentos e métodos de objetos,
sendo assim, podemos construir um array da seguinte forma: */
const outroArray = new Array ([55, 890, 459])
console.log(outroArray)
//Testar no terminal



/* Outros exemplos p/ testar no navegador: */
const obj = {a:1 , b:2}
obj.__proto__
//Retorna as propriedades desse objeto, por exemplo um construtor;


//Exemplo de dados primitivos (string, boolean, number):
const texto = "Alura"
texto.__proto__
/* Um dado primitivo não tem por si só propriedades pois é um dado básico,
porém o JS fornece mesmo assim esse objeto que envolve esse dado para poder utilizar os métodos de String,
por exemplo acessar substring ou utilizar Upercase; 

ATENÇÃO: .__prototype__ não roda bem no terminal, 
pois não trás as propriedades como funciona bem no console navegador */








