function obtienePokemon () {
    let nombre = document.getElementById('inPokemon').value;
    if(nombre !== '') {
        buscaPokemon(nombre.toLowerCase());
    }
}

function buscaPokemon(nombre) {
    const url = 'https://pokeapi.co/api/v2/pokemon/';
    fetch(url + nombre)
    .then(res => {
        if(res.ok) {
            return res.json();
        } else {
            return null;
        } 
    })
    .then(data => {
        if(data == null) {
            sinInformacion();
        } else {
            separaInfo(data);
        }
    });
}

function separaInfo(data) {
    let info = {
        'nombre': data.name,
        'id'    : data.id,
        'img': data.sprites.front_default,
        'habilidades': data.abilities,
        'tipo': data.types[0].type.name,
        'hp': data.stats[0].base_stat,
        'attack': data.stats[1].base_stat,
        'defense': data.stats[2].base_stat
    }

    muestraInfo(info)
}

function muestraInfo(info) {
    let div = document.getElementById('general-info');

    div.innerHTML = `
        <div class="poke-info">
            <div class="img">
                <img src="${info.img}" alt="">
            </div>
            <div class="nombre">
                <h1>${info.nombre.toUpperCase()} #${info.id}</h1>
            </div>
            <div class="tipo">
                <h2>Tipo:</h2>
                <div class="tipo-color">
                    <h2>${info.tipo}</h2>
                </div>
            </div>
        </div>

        <div class="stats">
            <div class="base-stats">
                <h3>Stats</h2>
                <div class="chart">
                    <div class="hp" style="width: ${info.hp}px"></div>
                    <span>hp</span>
                    <div class="attack" style="width: ${info.attack}px"></div>
                    <span>ataque</span>
                    <div class="defense" style="width: ${info.defense}px"></div>
                    <span>defensa</span>
                </div>                       
            </div>

            <div class="abilities">
                <h3>Habilidades</h3>
                <div class="ability">
                    <ul id="habilidades">
                        
                    </ul>
                </div>
            </div>                         
        </div>
    `;

    muestraHabilidades(info.habilidades);
}

function muestraHabilidades(habilidades) {
    let ul = document.getElementById('habilidades');
    for (let i = 0; i < habilidades.length; i++) {
        let habilidad = habilidades[i].ability.name;
        let li = document.createElement('li');
        li.appendChild(document.createTextNode(habilidad));
        ul.appendChild(li);
    }
}

function sinInformacion() {
    let div = document.getElementById('general-info');
    div.innerHTML = `
        <div class="flex-pokeball">
            <div class="pokeball">
                <div class="centro"></div>
            </div>
            <h1 class="noData">No se encontró información</h1>
        </div>
    `;
}

var estaEncendido = false;

function enUso() {
    if(estaEncendido == false) {
        encender();
    } else {
        apagar();
    }
}

function encender() {
    document.getElementById('encendido').disabled = true;
    document.getElementById('buscar').disabled = true;
    document.getElementById('inPokemon').style.backgroundColor = "#3abd66";
    let div = document.getElementById('pantalla');

    div.style.transition = "1s";
    div.style.backgroundColor = "#bcb9c6";

    setTimeout(function() {
        div.innerHTML = `
        <h1>POKEDEX</h1>
        <div class="general-info" id="general-info">
            <div class="flex-pokeball">
                <div class="pokeball">
                    <div class="centro"></div>
                </div>
                <h1 class="noData" id="noData">Buscar un Pokémon</h1>
            </div>
        </div>
    `;
    document.getElementById('encendido').disabled = false;
    document.getElementById('buscar').disabled = false;
    document.getElementById('inPokemon').disabled = false;
    }, 1000);
    
    estaEncendido = true;
}

function apagar() {
    document.getElementById('encendido').disabled = true;
    document.getElementById('buscar').disabled = true;
    document.getElementById('inPokemon').disabled = true;
    document.getElementById('inPokemon').style.backgroundColor = "#22703c";
    let div = document.getElementById('pantalla');

    div.innerHTML = ``;

    setTimeout(function() {
        div.style.transition = "1s";
        div.style.backgroundColor = "#222e22";
        document.getElementById('encendido').disabled = false;
        document.getElementById('buscar').disabled = false;
    }, 100);

    estaEncendido = false;
}