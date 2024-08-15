// Declaração de constante
const messagem = "Cadastrado com sucesso!"

let nomePokemon;
let generoPokemon;
let nivelPokemon;
let pontosDeVidaPokemon;

//cadastro de pokemon
i = 1;
while(i <= 2) {
  nomePokemon = prompt('Digite o nome do pokemon: ');
  generoPokemon = prompt('Informe o gênero do pokemon: ');
  nivelPokemon = prompt('Informe o nível do pokemon: ');
  pontosDeVidaPokemon = prompt('Informe os pontos de vida do pokemon: ');
  i++;
  // Log to console
  console.log("Pokemon: " + nomePokemon +
  "Sexo: " + generoPokemon +
  "Nível: " + nivelPokemon +
  "Pontos de vida: " + pontosDeVidaPokemon +
  "\n\n" + messagem
  )
}
