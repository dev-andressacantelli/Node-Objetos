
/*
Orientação a objetos:
- Paradigma de programação/modelo de programar;
- Trazer para o código, conceitos do mundo rea;
- Pegar informações do mundo real, trazer para o computador;

O que são Classes?
- São modelos usados para a criação de objetos;
- Na classe definimos propriedades, informações e comportamentos de um objeto; 
- A classe define os atributos(características) e os métodos(comportamentos) de um objeto;

O que é Herança?
- É um mecanismo da Orientação a Objetos
que permite que uma classe herde características de uma outra classe;


O que é um objeto?
- O objeto é a instância de uma classe; 

O que é instanciar uma classe?
- Uma instância de uma classe é um novo objeto criado dessa classe, com o operador new;
- Instanciar uma classe é criar um novo objeto do mesmo tipo dessa classe;
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


//Exemplo de Herança em JavaScript:
class Programador extends Pessoa{
    constructor(nome,sobrenome,cpf,email,linguagem){
        super(nome,sobrenome,cpf,email)
        this.linguagem = this.linguagem
    }
}
/* Classe Programador herda de Pessoa as características (nome,sobrenome,cpf,email) através do método SUPER;
A classe Programador, além de herdar algumas características da superclass, possui característica nova,
linguagem, que é chamada através do método this.linguagem; */


//Exemplo de instância:
const novoDev = new Programador("Andressa", "Cantelli", "241.741.963-45", "andressa@email.com", "JavaScript")
console.log(novoDev)