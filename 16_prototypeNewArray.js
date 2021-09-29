/* JS � uma linguagem baseada em prot�tipos, ent�o tudo em JS � objeto. 
portando o Prototype � um objeto impl�cito que est� dispon�vel para todas as fun��es construtoras do JS. 
� um atributo da fun��o Object, de onde as fun��es herdam.
A funcionalidade dele basicamente � compartilhar fun��es e propriedades,
de forma a n�o duplicar essas coisas em v�rios objetos do c�digo. 
� muito utilizado para heran�a e compartilhamento de dados e comportamento entre objetos. */

/* A propriedade .__proto__ guarda todas as defini��es de todo o array criado,
portanto, no console do navegador, se criarmos uma const comum e chamar o m�todo .__proto__ ,
teremos o retorno de tudo o que esse objeto guarda: */
const meuAarray = [1, 2, 3]
meuAarray.__proto__
//Testar no navegador!


/* Por isso, por transformar as coisas em objetos, � poss�vel herdar comportamentos e m�todos de objetos,
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
/* Um dado primitivo n�o tem por si s� propriedades pois � um dado b�sico,
por�m o JS fornece mesmo assim esse objeto que envolve esse dado para poder utilizar os m�todos de String,
por exemplo acessar substring ou utilizar Upercase; 

ATEN��O: .__prototype__ n�o roda bem no terminal, 
pois n�o tr�s as propriedades como funciona bem no console navegador */








