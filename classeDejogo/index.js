// Função que define o ataque com base no tipo de herói
function definirAtaque(tipo) {
    let ataque;
  
    switch (tipo.toLowerCase()) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "ataque desconhecido";
        break;
    }
  
    return ataque;
  }
  
  // Classe Hero que usa a função de ataque
  class Hero {
    constructor(nome, idade, tipo) {
      this.nome = nome;
      this.idade = idade;
      this.tipo = tipo;
    }
  
    atacar() {
      const ataque = definirAtaque(this.tipo);
      console.log(`O ${this.tipo} atacou usando ${ataque}`);
    }
  }
  
  // Exemplo de uso:
  const mago = new Hero("Gandalf", 300, "mago");
  const guerreiro = new Hero("Conan", 35, "guerreiro");
  
  mago.atacar();        // Saída: O mago atacou usando magia
  guerreiro.atacar();   // Saída: O guerreiro atacou usando espada
  
  