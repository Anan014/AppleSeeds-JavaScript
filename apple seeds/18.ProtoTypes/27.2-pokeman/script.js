function Pokemon(pokemonName, pokemonType, pokemonAttackList) {
    this.name = pokemonName;
    this.type = pokemonType;
    this.attackList = pokemonAttackList;

    this.callPokemon = function() {
        console.log(`I choose you, ${this.name}`);
    };

    this.attack = function(attackNum) {
        console.log(`${this.name} used ${this.attackList[attackNum]}`);
    };

}

let pikachu = new Pokemon("Pikachu", "Electric", ["Electro Ball", "Spark", "Thunder"]);
pikachu.callPokemon();
pikachu.attack(1);

let mewtwo = new Pokemon("Mewtwo", "Psychic", ["Power Swap", "Psystrike", "Future Sight"]);
mewtwo.callPokemon();
mewtwo.attack(2);

let charizard = new Pokemon("Charizard", "Fire", ["Fire Spin", "Inferno", "Flare Blitz"]);
mewtwo.callPokemon();
mewtwo.attack(0);