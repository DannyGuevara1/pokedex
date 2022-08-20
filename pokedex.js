function Pokemon(nickname,tipo){
    this.nickname = nickname;
    this.tipo = tipo;
    

}

function TipoFuego(nickname,tipo){
    Pokemon.call(this, nickname,tipo);
     
    
}
function TipoAgua(nickname,tipo){
    Pokemon.call(this, nickname , tipo);
}

function TipoPlanta(nickname,tipo){
    Pokemon.call(this, nickname , tipo);
}

TipoFuego.prototype = Object.create(Pokemon.prototype);
TipoFuego.prototype.constructor =  TipoFuego;
TipoFuego.prototype.debilidades = function(){
    return {
        debilidades: "Agua , Roca",
    }
}
TipoAgua.prototype = Object.create(Pokemon.prototype);
TipoAgua.prototype.constructor =  TipoAgua;
TipoAgua.prototype.debilidades = function(){
    return {
        debilidades: "Planta , Trueno",
    }
}
TipoPlanta.prototype = Object.create(Pokemon.prototype);
TipoPlanta.prototype.constructor =  TipoPlanta;
TipoPlanta.prototype.debilidades = function(){
    return {
        debilidades: "Fuego, Psiquico, Volador",
    }
}
const PokemonTipoFuego = new TipoFuego("Charizar","Fuego");
const PokemonTipoAgua = new TipoAgua("Blastoise","Agua");
const PokemonTipoPlanta = new TipoPlanta("Venasaur","Planta");

function Charizar (ataques){
    this.ataques = ataques;
}

function Blastoise (ataques){
    this.ataques = ataques;
}

function Venasaur (ataques){
    this.ataques = ataques;
}

Charizar.prototype = Object.create(TipoFuego.prototype);
Charizar.prototype.constructor =  Charizar;

Blastoise.prototype = Object.create(TipoAgua.prototype);
Blastoise.prototype.constructor =  Blastoise;

Venasaur.prototype = Object.create(TipoPlanta.prototype);
Venasaur.prototype.constructor =  Venasaur;

let charizar = new Charizar({
    ataque_1: 'Lanzallamas',
    ataque_2: 'Volar',
    ataque_3: 'Tornado',
    ataque_4: 'Exp.Volcanica'
})

let blastoise = new Blastoise({
    ataque_1: 'Cascada',
    ataque_2: 'Cabezaso zen',
    ataque_3: 'Puno hielo',
    ataque_4: 'Terremoto'
})

let venasaur = new Venasaur({
    ataque_1: 'Bomba Germen',
    ataque_2: 'Cortar',
    ataque_3: 'Enfado',
    ataque_4: 'Hoja afilada'
})

console.log(PokemonTipoFuego);
console.log(charizar);
console.log(charizar.debilidades());

console.log(PokemonTipoAgua);
console.log(blastoise);
console.log(blastoise.debilidades());

console.log(PokemonTipoPlanta);
console.log(venasaur);
console.log(venasaur.debilidades());
