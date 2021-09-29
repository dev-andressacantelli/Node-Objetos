
/*
Orienta��o a objetos:
- Paradigma de programa��o/modelo de programar;
- Trazer para o c�digo, conceitos do mundo rea;
- Pegar informa��es do mundo real, trazer para o computador;

O que s�o Classes?
- S�o modelos usados para a cria��o de objetos;
- Na classe definimos propriedades, informa��es e comportamentos de um objeto; 
- A classe define os atributos(caracter�sticas) e os m�todos(comportamentos) de um objeto;

O que � Heran�a?
- � um mecanismo da Orienta��o a Objetos
que permite que uma classe herde caracter�sticas de uma outra classe;


O que � um objeto?
- O objeto � a inst�ncia de uma classe; 

O que � instanciar uma classe?
- Uma inst�ncia de uma classe � um novo objeto criado dessa classe, com o operador new;
- Instanciar uma classe � criar um novo objeto do mesmo tipo dessa classe;
*/


//Exemplo de Classe em JavaScript:
class Pessoa {
    constructor(nome,sobrenome,cpf,email){
        this.nome = nome
        this.sobrenome = sobrenome
        this.cpf = cpf
        this.email = email
    }

    //Exemplo de comportamento de classe:
    exibirNomeCompleto(){
        console.log(`${this.nome} ${this.sobrenome}`)
    }
}


//Exemplo de Heran�a em JavaScript:
class Programador extends Pessoa{
    constructor(nome,sobrenome,cpf,email,linguagem){
        super(nome,sobrenome,cpf,email)
        this.linguagem = this.linguagem
    }
}
/* Classe Programador herda de Pessoa as caracter�sticas (nome,sobrenome,cpf,email) atrav�s do m�todo SUPER;
A classe Programador, al�m de herdar algumas caracter�sticas da superclass, possui caracter�stica nova,
linguagem, que � chamada atrav�s do m�todo this.linguagem; */


//Exemplo de inst�ncia:
const novoDev = new Programador("Andressa", "Cantelli", "241.741.963-45", "andressa@email.com", "JavaScript")
console.log(novoDev)