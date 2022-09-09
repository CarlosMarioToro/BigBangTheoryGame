const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonPersonajeJugador = document.getElementById('boton-personaje')

const sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')

const spanPersonajeJugador = document.getElementById('personaje-jugador')

const spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

const spanVictoriasJugador = document.getElementById('victorias-jugador')
const spanVictoriasEnemigo = document.getElementById('victorias-enemigo')

const turno = document.getElementById('turno')
// const ataques = document.getElementById('ataques')
const ataquesJugador = document.getElementById('ataques-jugador')
const ataquesEnemigo = document.getElementById('ataques-enemigo')
const resultadoAtaque = document.getElementById('resultadoAtaque')

const sectionMensaje = document.getElementById('resultado')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorArmas = document.getElementById('contenedorArmas')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

var resultadosAtaques = []
let jugadorId = null
let enemigoId = null
let result = []
let jugadores = []
let jugadoresEnemigos = []
let ataqueEnemigo
let ataqueJugador =[]
let ataquesPersonaje
let opcionDePersonajes
let inputAmy
let inputBernadette
let inputHoward
let inputLeonard
let inputPenny
let inputRajesh
let inputSheldon
let inputStuart
let ataquePersonaje
let botonPiedra
let botonPapel
let botonTijera
let botonLagarto
let botonSpock
let botones = []
let personajeJugador
let personajeJugadorObjeto
let contadorTurno = 0
let victoriasJugador = 0
let victoriasEnemigo = 0
let lienzo = mapa.getContext("2d")
let intervalo
let mapaBackground = new Image()
mapaBackground.src = './Imagenes/mapa.png'
let alturaQueBuscamos
let anchoDelMapa = window.innerWidth - 278

alturaQueBuscamos= anchoDelMapa * (494 / 1005)

mapa.width = anchoDelMapa
mapa.height = alturaQueBuscamos

class Personaje {
    constructor(nombre, foto, vida, fotoMapa, x, y ) {
        this.nombre = nombre
        this.foto = foto
        this.vida = vida
        this.ataques = []
        this.x = x
        this.y = y
        this.ancho = 20
        this.alto = 31,6
        this.mapaFoto = new Image()
        this.mapaFoto.src = fotoMapa
        this.velocidadX = 0
        this.velocidadY = 0
    }
    pintarPersonaje() {
        lienzo.drawImage(
            this.mapaFoto,
            this.x,
            this.y,
            this.ancho,
            this.alto
        )
    }
}

let amy = new Personaje('Amy', './Imagenes/Amy.png', 3, './Imagenes/Amy.png', (mapa.width/mapaBackground.naturalWidth) * 405, (mapa.height/mapaBackground.naturalHeight) * 420);
// let amy = new Personaje('Amy', './Imagenes/Amy.png', 3, './Imagenes/Amy2.png', 405, 420);
let bernadette = new Personaje('Bernadette', './Imagenes/Bernadette.png', 3, './Imagenes/Bernadette.png',  (mapa.width/mapaBackground.naturalWidth) * 295, (mapa.height/mapaBackground.naturalHeight) * 420);
let howard = new Personaje('Howard', './Imagenes/Howard.png', 3, './Imagenes/Howard.png',  (mapa.width/mapaBackground.naturalWidth) * 295, (mapa.height/mapaBackground.naturalHeight) * 340);
let leonard = new Personaje('Leonard', './Imagenes/Leonard.png', 3, './Imagenes/Leonard.png',  (mapa.width/mapaBackground.naturalWidth) * 730, (mapa.height/mapaBackground.naturalHeight) * 370);
let penny = new Personaje('Penny', './Imagenes/Penny.png', 3, './Imagenes/Penny.png',  (mapa.width/mapaBackground.naturalWidth) * 45, (mapa.height/mapaBackground.naturalHeight) *400);
let rajesh = new Personaje('Rajesh', './Imagenes/Rajesh.png', 3, './Imagenes/Rajesh.png',  (mapa.width/mapaBackground.naturalWidth) * 405, (mapa.height/mapaBackground.naturalHeight) * 340);
let sheldon = new Personaje('Sheldon', './Imagenes/Sheldon.png', 3, './Imagenes/Sheldon.png',  (mapa.width/mapaBackground.naturalWidth) * 540, (mapa.height/mapaBackground.naturalHeight) * 330);
let stuart = new Personaje('Stuart', './Imagenes/Stuart.png', 3, './Imagenes/Stuart.png',  (mapa.width/mapaBackground.naturalWidth) * 350, (mapa.height/mapaBackground.naturalHeight) * 380);

const AMY_ATAQUES = [
    { nombre: 'piedra', id: 'boton-piedra', pic: './Imagenes/Piedra.png'},
    { nombre: 'lagarto', id: 'boton-lagarto', pic: './Imagenes/Lagarto.png'},
    { nombre: 'papel', id: 'boton-papel', pic: './Imagenes/Papel.png'}
]

const BERNADETTE_ATAQUES = [
    { nombre: 'papel', id: 'boton-papel', pic: './Imagenes/Papel.png'},
    { nombre: 'spock', id: 'boton-spock', pic: './Imagenes/Spock.png'},
    { nombre: 'tijera', id: 'boton-tijera', pic: './Imagenes/Tijeras.png'}
]

const HOWARD_ATAQUES = [
    { nombre: 'tijera', id: 'boton-tijera', pic: './Imagenes/Tijeras.png'},
    { nombre: 'piedra', id: 'boton-piedra', pic: './Imagenes/Piedra.png'},
    { nombre: 'lagarto', id: 'boton-lagarto', pic: './Imagenes/Lagarto.png'}
]

const LEONARD_ATAQUES = [
    { nombre: 'lagarto', id: 'boton-lagarto', pic: './Imagenes/Lagarto.png'},
    { nombre: 'papel', id: 'boton-papel', pic: './Imagenes/Papel.png'},
    { nombre: 'spock', id: 'boton-spock', pic: './Imagenes/Spock.png'}
]

const PENNY_ATAQUES = [
    { nombre: 'spock', id: 'boton-spock', pic: './Imagenes/Spock.png'},
    { nombre: 'tijera', id: 'boton-tijera', pic: './Imagenes/Tijeras.png'},
    { nombre: 'piedra', id: 'boton-piedra', pic: './Imagenes/Piedra.png'}
]

const RAJESH_ATAQUES = [
    { nombre: 'piedra', id: 'boton-piedra', pic: './Imagenes/Piedra.png'},
    { nombre: 'lagarto', id: 'boton-lagarto', pic: './Imagenes/Lagarto.png'},
    { nombre: 'spock', id: 'boton-spock', pic: './Imagenes/Spock.png'}
]

const SHELDON_ATAQUES = [
    { nombre: 'papel', id: 'boton-papel', pic: './Imagenes/Papel.png'},
    { nombre: 'spock', id: 'boton-spock', pic: './Imagenes/Spock.png'},
    { nombre: 'lagarto', id: 'boton-lagarto', pic: './Imagenes/Lagarto.png'}
]

const STUART_ATAQUES = [
    { nombre: 'tijera', id: 'boton-tijera', pic: './Imagenes/Tijeras.png'},
    { nombre: 'piedra', id: 'boton-piedra', pic: './Imagenes/Piedra.png'},
    { nombre: 'papel', id: 'boton-papel', pic: './Imagenes/Papel.png'}
]

amy.ataques.push(...AMY_ATAQUES)
bernadette.ataques.push(...BERNADETTE_ATAQUES)
howard.ataques.push(...HOWARD_ATAQUES)
leonard.ataques.push(...LEONARD_ATAQUES)
penny.ataques.push(...PENNY_ATAQUES)
rajesh.ataques.push(...RAJESH_ATAQUES)
sheldon.ataques.push(...SHELDON_ATAQUES)
stuart.ataques.push(...STUART_ATAQUES)

jugadores.push(amy, bernadette, howard, leonard, penny, rajesh, sheldon, stuart)

// jugadoresEnemigos = Object.values(jugadores)

function iniciarJuego() {

    sectionSeleccionarAtaque.style.display = 'none'
    sectionVerMapa.style.display = 'none'
    sectionReiniciar.style.display = 'none'

    jugadores.forEach((Personaje) => {
        opcionDePersonajes = `
        <input type="radio" name="personaje" id=${Personaje.nombre}>
        <label class="tarjeta-de-personaje" for=${Personaje.nombre}>
          <p>${Personaje.nombre}</p>
          <img src=${Personaje.foto} alt=${Personaje.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML += opcionDePersonajes

        inputAmy = document.getElementById('Amy')
        inputBernadette = document.getElementById('Bernadette')
        inputHoward = document.getElementById('Howard')
        inputLeonard = document.getElementById('Leonard')
        inputPenny = document.getElementById('Penny')
        inputRajesh = document.getElementById('Rajesh')
        inputSheldon = document.getElementById('Sheldon')
        inputStuart = document.getElementById('Stuart')
    })

    botonPersonajeJugador.addEventListener('click', seleccionarPersonajeJugador)
    botonReiniciar.addEventListener('click',reiniciarJuego)

    unirseAlJuego()
}

function unirseAlJuego() {
    fetch("http://192.168.1.14:8080/unirse")
    .then(function (res) {
        if (res.ok) {
            res.text()
                .then(function(respuesta) {
                    // console.log(respuesta)
                    jugadorId = respuesta
                })
        }
    })
}

function seleccionarPersonajeJugador() {
    if (inputAmy.checked) {
        spanPersonajeJugador.innerHTML = inputAmy.id
        personajeJugador = inputAmy.id
    } else if (inputBernadette.checked) {
        spanPersonajeJugador.innerHTML = inputBernadette.id
        personajeJugador = inputBernadette.id
    } else if (inputHoward.checked) {
        spanPersonajeJugador.innerHTML = inputHoward.id
        personajeJugador = inputHoward.id
    } else if (inputLeonard.checked) {
        spanPersonajeJugador.innerHTML = inputLeonard.id
        personajeJugador = inputLeonard.id
    } else if (inputPenny.checked) {
        spanPersonajeJugador.innerHTML = inputPenny.id
        personajeJugador = inputPenny.id
    } else if (inputRajesh.checked) {
        spanPersonajeJugador.innerHTML = inputRajesh.id
        personajeJugador = inputRajesh.id
    } else if (inputSheldon.checked) {
        spanPersonajeJugador.innerHTML = inputSheldon.id
        personajeJugador = inputSheldon.id
    } else if (inputStuart.checked) {
        spanPersonajeJugador.innerHTML = inputStuart.id
        personajeJugador = inputStuart.id
    } else {
        alert("Debes Seleccionar un Personaje")
        return
    }

    //CON ESTO PUEDO SOLUCIONAR LOS ATAQUES 

    seleccionarPersonaje(personajeJugador)

    sectionSeleccionarPersonaje.style.display = 'none'

    iniciarMapa()

    pintarCanvas()

    //sectionSeleccionarAtaque.style.display = 'block'

    extraerAtaques(personajeJugador)
}

function seleccionarPersonaje(personajeJugador) {
    fetch(`http://192.168.1.14:8080/thebig/${jugadorId}`, {
        method:"post",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            personaje: personajeJugador
        })
    })
}

function pintarCanvas() {
    personajeJugadorObjeto.x = personajeJugadorObjeto.x + personajeJugadorObjeto.velocidadX
    personajeJugadorObjeto.y = personajeJugadorObjeto.y + personajeJugadorObjeto.velocidadY
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        mapaBackground,
        0,
        0,
        mapa.width,
        mapa.height
    )

    personajeJugadorObjeto.pintarPersonaje()

    enviarPosicion(personajeJugadorObjeto.x, personajeJugadorObjeto.y)

    // console.log(jugadoresEnemigos);

    for (let index = 0; index < jugadoresEnemigos.length; index++) {
        jugadoresEnemigos[index].pintarPersonaje()
        revisarColision(jugadoresEnemigos[index])
    }

    // if(personajeJugadorObjeto.velocidadX !== 0 || personajeJugadorObjeto.velocidadY !== 0) {
    //     for (let i = 0; i < jugadoresEnemigos.length; i++) {
    //         revisarColision(jugadoresEnemigos[i])
    //     }
    // }
}

function enviarPosicion(x, y) {
    fetch(`http://192.168.1.14:8080/thebig/${jugadorId}/posicion`, {
        method:"post",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
    })
    .then(function(res) {
        if(res.ok) {
            res.json()
                .then(function({ enemigos }) {
                    enemigos.forEach(function (enemigo){
                        jugadores.forEach(Personaje => {
                            if(enemigo.jugador.nombre === Personaje.nombre){
                                result.push(Personaje)
                                jugadoresEnemigos = result.filter((item,index)=>{
                                    return result.indexOf(item) === index;
                                  })
                                //   console.log("jugadoresEnemigos", jugadoresEnemigos)
                                //   console.log("jugadoresEnemigos.length", jugadoresEnemigos.length);
                                  for (let i = 0; i < jugadoresEnemigos.length; i++) {
                                    jugadoresEnemigos[i].x = enemigo.x
                                    jugadoresEnemigos[i].y = enemigo.y
                                    // jugadoresEnemigos[i].pintarPersonaje()
                                  }
                            }
                            enemigoId = enemigo.id
                        })
                    })
                })
        }
    })
}

function moverDerecha() {
    personajeJugadorObjeto.velocidadX = 3
}

function moverIzquierda() {
    personajeJugadorObjeto.velocidadX = -3
}

function moverAbajo() {
    personajeJugadorObjeto.velocidadY = 3
}

function moverArriba() {
    personajeJugadorObjeto.velocidadY = -3
}

function detenerMovimiento() {
    personajeJugadorObjeto.velocidadX = 0
    personajeJugadorObjeto.velocidadY = 0
}

function iniciarMapa() {
    personajeJugadorObjeto = obtenerObjetoPersonaje(personajeJugador)
    sectionVerMapa.style.display = 'flex'
    intervalo = setInterval(pintarCanvas,50)

    window.addEventListener('keydown', tecladoFlechas)

    window.addEventListener('keyup', detenerMovimiento)
}

function obtenerObjetoPersonaje() {
    for (let i = 0; i < jugadores.length; i++) {
        if (personajeJugador === jugadores[i].nombre) {
            return jugadores[i]
        }
    }
}

function tecladoFlechas(event) {
    switch (event.key) {
        case 'ArrowUp':
            moverArriba()
            break
        case 'ArrowDown':
            moverAbajo()
            break
        case 'ArrowRight':
            moverDerecha()
            break
        case 'ArrowLeft':
            moverIzquierda()
            break
        default:
            break
    }
}

function revisarColision(enemigo) {
    // console.log("enemigo", enemigo)
    const arribaEnemigo = enemigo.y
    const abajoEnemigo = enemigo.y + enemigo.alto
    const derechaEnemigo = enemigo.x + enemigo.ancho
    const izquierdaEnemigo = enemigo.x

    const arribaPersonaje = personajeJugadorObjeto.y
    const abajoPersonaje = personajeJugadorObjeto.y + personajeJugadorObjeto.alto
    const derechaPersonaje = personajeJugadorObjeto.x + personajeJugadorObjeto.ancho
    const izquierdaPersonaje = personajeJugadorObjeto.x

    if(
        abajoPersonaje < arribaEnemigo ||
        arribaPersonaje > abajoEnemigo ||
        derechaPersonaje < izquierdaEnemigo ||
        izquierdaPersonaje > derechaEnemigo
    ) {
        return
    }
    detenerMovimiento()
    clearInterval(intervalo)
    sectionSeleccionarAtaque.style.display = 'block'
    sectionVerMapa.style.display = 'none'
    seleccionarPersonajeEnemigo(enemigo)
    // alert("Hay colision con " + enemigo.nombre)
}

function extraerAtaques(personajeJugador) {
    let ataquesPersonaje

    for (let i = 0; i < jugadores.length; i++) {
        if (personajeJugador === jugadores[i].nombre) {
            ataquesPersonaje = jugadores[i].ataques
        }
    }
    mostrarAtaques(ataquesPersonaje)
}

function mostrarAtaques(ataquesPersonaje) {
    ataquesPersonaje.forEach((ataquesEnemigo) => {
        ataquePersonaje = `
        <button id=${ataquesEnemigo.id} class="BAtaque"><img src=${ataquesEnemigo.pic} height="80"; width="80" alt=${ataquesEnemigo.nombre}><span id="btn-text">${ataquesEnemigo.nombre}</span></button>
        `
        contenedorArmas.innerHTML += ataquePersonaje
    })

    botonPiedra = document.getElementById('boton-piedra')
    botonPapel = document.getElementById('boton-papel')
    botonTijera = document.getElementById('boton-tijera')
    botonLagarto = document.getElementById('boton-lagarto')
    botonSpock = document.getElementById('boton-spock')

    botones= document.querySelectorAll('.BAtaque')
}

function clearBox(elementID) { 
    console.log("borrar", elementID);
    document.getElementById(elementID).innerHTML = ""; 
}

function SeleccionarBotonAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === 'piedra' || e.target.alt === 'piedra') {
                ataqueJugador.push('PIEDRA')
            }
            if (e.target.textContent === 'papel' || e.target.alt === 'papel') {
                ataqueJugador.push('PAPEL')
            }
            if (e.target.textContent === 'tijera' || e.target.alt === 'tijera') {
                ataqueJugador.push('TIJERA')
            }
            if (e.target.textContent === 'lagarto' || e.target.alt === 'lagarto') {
                ataqueJugador.push('LAGARTO')
            }
            if (e.target.textContent === 'spock' || e.target.alt === 'spock') {
                ataqueJugador.push('SPOCK')
            }

            // document.getElementById('ataques').innerHTML=""

           console.log("SeleccionarBotonAtaque-ataqueJugador", ataqueJugador)
            // ataqueAleatorioEnemigo()
            if(ataqueJugador.length > 0) {
                // console.log("ataqueJugador > 0", ataqueJugador)
                enviarAtaques()
            }
        })
    })
}

function enviarAtaques() {
    fetch(`http://192.168.1.14:8080/thebig/${jugadorId}/ataques`, {
        method: "post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            ataques : ataqueJugador
        })
    })

    // console.log("enviarAtaques-ataques", ataques)
    if((victoriasEnemigo < 5 && ataqueJugador.length > 0) || (victoriasJugador < 5 && ataqueJugador.length > 0 )) {
        // intervalo = setInterval(obtenerAtaques, 50)
        obtenerAtaques()
    }
}

// function seleccionarPersonaje(personajeJugador) {
//     fetch(`http://192.168.1.14:8080/thebig/${jugadorId}`, {
//         method:"post",
//         headers: {
//             "Content-Type" : "application/json"
//         },
//         body: JSON.stringify({
//             personaje: personajeJugador
//         })
//     })
// }

function obtenerAtaques() {
    fetch(`http://192.168.1.14:8080/thebig/${enemigoId}/ataques`)
        .then(function (res) {
            if (res.ok) {
                res.json()
                    .then(function({ ataques }) {
                        // console.log("ataques.length", ataques.length)
                            if(ataques.length > 0) {
                                // console.log("victoriasEnemigo ", victoriasEnemigo )
                                ataqueEnemigo = ataques
                                if(victoriasEnemigo != 5 || victoriasJugador != 5){
                                    combate()
                                }
                        }
                    })
            }
        })
}

function seleccionarPersonajeEnemigo(enemigo) {
    let enemigoAleatorio = aleatorio(0, Personaje.length - 1)

    /* NO REPITO EL MISMO PERSONAJE */
    while (personajeJugador == jugadores[enemigoAleatorio].nombre) {
        enemigoAleatorio = aleatorio(0, Personaje.length - 1)
    }
    spanPersonajeEnemigo.innerHTML = enemigo.nombre

    // console.log(jugadores[enemigoAleatorio].nombre)

    extraerAtaquesEnemigo(enemigo.nombre)

    SeleccionarBotonAtaque()
}

function extraerAtaquesEnemigo(personajeJugador) {
    for (let i = 0; i < jugadores.length; i++) {
        if (personajeJugador === jugadores[i].nombre) {
            ataquesPersonaje = jugadores[i].ataques
        }
    }
}

function combate() {
    console.log("combate-ataqueEnemigo", ataqueEnemigo);
    contadorTurno += 1
    victoriasJugador = 0
    victoriasEnemigo = 0
    // let resultadosAtaques = []
    // var resultadosAtaques = new Array(ataqueEnemigo.length)

    for(index=0; index<ataqueEnemigo.length; index++) {
        resultadosAtaques[index] = new Array(4);
      }

    //   for (i=0; i<ataqueEnemigo.length; i++){
    //     for (j=0; j<4; j++){
    //         resultadosAtaques[i][j]= i*j;
    //     }
    //   }
    
    
    for (let i = 0; i < ataqueEnemigo.length; i++) {
        console.log("ataqueEnemigo[i]", ataqueEnemigo[i]);
        console.log("ataqueJugador[i]", ataqueJugador[i]);
        if (ataqueEnemigo[i] == ataqueJugador[i]) {
            resultadosAtaques[i][0] = i + 1
            resultadosAtaques[i][1] = ataqueJugador[i]
            resultadosAtaques[i][2] = ataqueEnemigo[i]
            resultadosAtaques[i][3] = "EMPATE"
            // crearMensaje("EMPATE", i);
        } else if (
            (ataqueJugador[i] == 'PIEDRA' &&  ataqueEnemigo[i] == 'TIJERA') ||
            (ataqueJugador[i] == 'PIEDRA' &&  ataqueEnemigo[i] == 'LAGARTO') ||
            (ataqueJugador[i] == 'PAPEL' &&  ataqueEnemigo[i] == 'PIEDRA') ||
            (ataqueJugador[i] == 'PAPEL' &&  ataqueEnemigo[i] == 'SPOCK') ||
            (ataqueJugador[i] == 'TIJERA' &&  ataqueEnemigo[i] == 'PAPEL') ||
            (ataqueJugador[i] == 'TIJERA' &&  ataqueEnemigo[i] == 'LAGARTO') ||
            (ataqueJugador[i] == 'LAGARTO' &&  ataqueEnemigo[i] == 'SPOCK') ||
            (ataqueJugador[i] == 'LAGARTO' &&  ataqueEnemigo[i] == 'PAPEL') ||
            (ataqueJugador[i] == 'SPOCK' &&  ataqueEnemigo[i] == 'TIJERA') ||
            (ataqueJugador[i] == 'SPOCK' &&  ataqueEnemigo[i] == 'PIEDRA')
        ) {
            resultadosAtaques[i][0] = i + 1
            resultadosAtaques[i][1] = ataqueJugador[i]
            resultadosAtaques[i][2] = ataqueEnemigo[i]
            resultadosAtaques[i][3] = "GANASTE"
            // crearMensaje("GANASTE" , i);
            victoriasJugador++
        } else {
            resultadosAtaques[i][0] = i + 1
            // perdidas++;
            resultadosAtaques[i][1] = ataqueJugador[i]
            resultadosAtaques[i][2] = ataqueEnemigo[i]
            resultadosAtaques[i][3] = "PERDISTE"
            // crearMensaje("PERDISTE", i);
            victoriasEnemigo++
        }
        // console.log("Combate: ", victoriasJugador)
        spanVictoriasJugador.innerHTML = victoriasJugador
        spanVictoriasEnemigo.innerHTML = victoriasEnemigo
        // console.table(resultadosAtaques);
    
        // console.log("victoriasEnemigo == 5", victoriasEnemigo == 5);
    
        if(victoriasEnemigo == 5 || victoriasJugador == 5) {
            crearMensaje()
            revisarVidas()
        }
    }
    console.log(resultadosAtaques)
}

function revisarVidas() {
    // console.log("Revisar vidas: ", victoriasJugador)
    if (victoriasJugador == 5) {
        crearMensajeFinal("FELICITACIONES! Ganaste")
        clearInterval(intervalo)
    }else if (victoriasEnemigo == 5) {
        crearMensajeFinal("Lo siento, Perdiste")
        clearInterval(intervalo)
    }
    // if(victoriasEnemigo != 5 || victoriasJugador != 5){
    //     console.log("envio ataques");
    // //     enviarAtaques()
    // }
}

function crearMensaje(resultado, index) {
    for (let i = 0; i < resultadosAtaques.length; i++) {
        let nuevoAtaqueJugador = document.createElement('p')
        let nuevoAtaqueEnemigo = document.createElement('p')
        let resultadoA = document.createElement('p')
        let turnoA = document.createElement('p')

        turnoA.innerHTML = "Turno " + resultadosAtaques[i][0] + ":"
        // sectionMensaje.innerHTML = resultado
        // console.log("ataqueEnemigo[ataqueEnemigo.length - 1]", ataqueEnemigo[ataqueEnemigo.length - 1])
        nuevoAtaqueEnemigo.innerHTML = resultadosAtaques[i][2]
        nuevoAtaqueJugador.innerHTML = resultadosAtaques[i][1]
        resultadoA.innerHTML = resultadosAtaques[i][3]

        turno.appendChild(turnoA)
        ataquesJugador.appendChild(nuevoAtaqueJugador)
        ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)
        if (resultadosAtaques[i][3] === "PERDISTE") {
            resultadoA.style.backgroundColor = "rgba(216, 31, 95, 0.4)"
            nuevoAtaqueJugador.style.backgroundColor = "rgba(216, 31, 95, 0.4)"
            nuevoAtaqueEnemigo.style.backgroundColor = "rgba(216, 31, 95, 0.4)"
            turnoA.style.backgroundColor = "rgba(216, 31, 95, 0.4)"
        }else if (resultadosAtaques[i][3] === "GANASTE") {
            resultadoA.style.backgroundColor = "rgba(64, 216, 31, 0.4)"
            nuevoAtaqueJugador.style.backgroundColor = "rgba(64, 216, 31, 0.4)"
            nuevoAtaqueEnemigo.style.backgroundColor = "rgba(64, 216, 31, 0.4)"
            turnoA.style.backgroundColor = "rgba(64, 216, 31, 0.4)"
        }else {
            resultadoA.style.backgroundColor = "rgba(31, 216, 185, 0.4)"
            nuevoAtaqueJugador.style.backgroundColor = "rgba(31, 216, 185, 0.4)"
            nuevoAtaqueEnemigo.style.backgroundColor = "rgba(31, 216, 185, 0.4)"
            turnoA.style.backgroundColor = "rgba(31, 216, 185, 0.4)"
        }
        resultadoAtaque.appendChild(resultadoA)
    }
    
}

function crearMensajeFinal(resultadoFinal) {
    sectionMensaje.innerHTML = resultadoFinal

    botones.forEach((boton) => {
        boton.disabled = true
    })

     sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener('load', iniciarJuego)