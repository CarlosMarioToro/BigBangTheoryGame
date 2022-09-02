const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciar = document.getElementById('reiniciar')
const botonPersonajeJugador = document.getElementById('boton-personaje')

const sectionSeleccionarPersonaje = document.getElementById('seleccionar-personaje')

const spanPersonajeJugador = document.getElementById('personaje-jugador')

const spanPersonajeEnemigo = document.getElementById('personaje-enemigo')

const spanVictoriasJugador = document.getElementById('victorias-jugador')
const spanVictoriasEnemigo = document.getElementById('victorias-enemigo')

const turno = document.getElementById('turno')
const ataquesJugador = document.getElementById('ataques-jugador')
const ataquesEnemigo = document.getElementById('ataques-enemigo')
const resultadoAtaque = document.getElementById('resultadoAtaque')

const sectionMensaje = document.getElementById('resultado')
const contenedorTarjetas = document.getElementById('contenedorTarjetas')
const contenedorArmas = document.getElementById('contenedorArmas')
const botonReiniciar = document.getElementById('boton-reiniciar')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

let jugadorId = null
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

let amy = new Personaje('Amy', './Imagenes/Amy.png', 3, './Imagenes/Amy2.png', (mapa.width/mapaBackground.naturalWidth) * 405, (mapa.height/mapaBackground.naturalHeight) * 420);
// let amy = new Personaje('Amy', './Imagenes/Amy.png', 3, './Imagenes/Amy2.png', 405, 420);
let bernadette = new Personaje('Bernadette', './Imagenes/Bernadette.png', 3, './Imagenes/Bernadette2.png',  (mapa.width/mapaBackground.naturalWidth) * 295, (mapa.height/mapaBackground.naturalHeight) * 420);
let howard = new Personaje('Howard', './Imagenes/Howard.png', 3, './Imagenes/Howard2.png',  (mapa.width/mapaBackground.naturalWidth) * 295, (mapa.height/mapaBackground.naturalHeight) * 340);
let leonard = new Personaje('Leonard', './Imagenes/Leonard.png', 3, './Imagenes/Leonard2.png',  (mapa.width/mapaBackground.naturalWidth) * 730, (mapa.height/mapaBackground.naturalHeight) * 370);
let penny = new Personaje('Penny', './Imagenes/Penny.png', 3, './Imagenes/Penny2.png',  (mapa.width/mapaBackground.naturalWidth) * 45, (mapa.height/mapaBackground.naturalHeight) *400);
let rajesh = new Personaje('Rajesh', './Imagenes/Rajesh.png', 3, './Imagenes/Rajesh2.png',  (mapa.width/mapaBackground.naturalWidth) * 405, (mapa.height/mapaBackground.naturalHeight) * 340);
let sheldon = new Personaje('Sheldon', './Imagenes/Sheldon.png', 3, './Imagenes/Sheldon2.png',  (mapa.width/mapaBackground.naturalWidth) * 540, (mapa.height/mapaBackground.naturalHeight) * 330);
let stuart = new Personaje('Stuart', './Imagenes/Stuart.png', 3, './Imagenes/Stuart.png',  (mapa.width/mapaBackground.naturalWidth) * 350, (mapa.height/mapaBackground.naturalHeight) * 380);

amy.ataques.push(
    { nombre: 'piedra', id: 'boton-piedra', pic: './Imagenes/Piedra.png'},
    { nombre: 'lagarto', id: 'boton-lagarto', pic: './Imagenes/Lagarto.png'},
    { nombre: 'papel', id: 'boton-papel', pic: './Imagenes/Papel.png'}
)
bernadette.ataques.push(
    { nombre: 'papel', id: 'boton-papel', pic: './Imagenes/Papel.png'},
    { nombre: 'spock', id: 'boton-spock', pic: './Imagenes/Spock.png'},
    { nombre: 'tijera', id: 'boton-tijera', pic: './Imagenes/Tijeras.png'}
)
howard.ataques.push(
    { nombre: 'tijera', id: 'boton-tijera', pic: './Imagenes/Tijeras.png'},
    { nombre: 'piedra', id: 'boton-piedra', pic: './Imagenes/Piedra.png'},
    { nombre: 'lagarto', id: 'boton-lagarto', pic: './Imagenes/Lagarto.png'}
)
leonard.ataques.push(
    { nombre: 'lagarto', id: 'boton-lagarto', pic: './Imagenes/Lagarto.png'},
    { nombre: 'papel', id: 'boton-papel', pic: './Imagenes/Papel.png'},
    { nombre: 'spock', id: 'boton-spock', pic: './Imagenes/Spock.png'}
)
penny.ataques.push(
    { nombre: 'spock', id: 'boton-spock', pic: './Imagenes/Spock.png'},
    { nombre: 'tijera', id: 'boton-tijera', pic: './Imagenes/Tijeras.png'},
    { nombre: 'piedra', id: 'boton-piedra', pic: './Imagenes/Piedra.png'}
)
rajesh.ataques.push(
    { nombre: 'piedra', id: 'boton-piedra', pic: './Imagenes/Piedra.png'},
    { nombre: 'lagarto', id: 'boton-lagarto', pic: './Imagenes/Lagarto.png'},
    { nombre: 'spock', id: 'boton-spock', pic: './Imagenes/Spock.png'}
)
sheldon.ataques.push(
    { nombre: 'papel', id: 'boton-papel', pic: './Imagenes/Papel.png'},
    { nombre: 'spock', id: 'boton-spock', pic: './Imagenes/Spock.png'},
    { nombre: 'lagarto', id: 'boton-lagarto', pic: './Imagenes/Lagarto.png'}
)
stuart.ataques.push(
    { nombre: 'tijera', id: 'boton-tijera', pic: './Imagenes/Tijeras.png'},
    { nombre: 'piedra', id: 'boton-piedra', pic: './Imagenes/Piedra.png'},
    { nombre: 'papel', id: 'boton-papel', pic: './Imagenes/Papel.png'}
)

jugadores.push(amy, bernadette, howard, leonard, penny, rajesh, sheldon, stuart)

jugadoresEnemigos = Object.values(jugadores)

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
    fetch("http://localhost:8080/unirse")
    .then(function (res) {
        if (res.ok) {
            res.text()
                .then(function(respuesta) {
                    console.log(respuesta)
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

    seleccionarPersonaje(personajeJugador)

    sectionSeleccionarPersonaje.style.display = 'none'

    iniciarMapa()

    pintarCanvas()
    
    //sectionSeleccionarAtaque.style.display = 'block'

    extraerAtaques(personajeJugador)
}

function seleccionarPersonaje(personajeJugador) {
    fetch(`http://localhost:8080/thebig/${jugadorId}`, {
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

    for (let i = 0; i < jugadoresEnemigos.length; i++) {
        if (personajeJugadorObjeto.nombre === jugadoresEnemigos[i].nombre) {
            jugadoresEnemigos.splice(i,1)
        }
    }

    for (let i = 0; i < jugadoresEnemigos.length; i++) {
        jugadoresEnemigos[i].pintarPersonaje()
    }
    if(personajeJugadorObjeto.velocidadX !== 0 || personajeJugadorObjeto.velocidadY !== 0) {
        for (let i = 0; i < jugadoresEnemigos.length; i++) {
            revisarColision(jugadoresEnemigos[i])
        }
    }
}

function enviarPosicion(x, y) {
    fetch(`http://localhost:8080/thebig/${jugadorId}/posicion`, {
        method:"post",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify({
            x,
            y
        })
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
    // mapa.width = 1005
    // mapa.height = 494
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

function SeleccionarBotonAtaque() {
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            if (e.target.textContent === 'piedra' || e.target.alt === 'piedra') {
                ataqueJugador.push('PIEDRA')
                ataqueAleatorioEnemigo()
            }
            if (e.target.textContent === 'papel' || e.target.alt === 'papel') {
                ataqueJugador.push('PAPEL')
                ataqueAleatorioEnemigo()
            }
            if (e.target.textContent === 'tijera' || e.target.alt === 'tijera') {
                ataqueJugador.push('TIJERA')
                ataqueAleatorioEnemigo()
            }
            if (e.target.textContent === 'lagarto' || e.target.alt === 'lagarto') {
                ataqueJugador.push('LAGARTO')
                ataqueAleatorioEnemigo()
            }
            if (e.target.textContent === 'spock' || e.target.alt === 'spock') {
                ataqueJugador.push('SPOCK')
                ataqueAleatorioEnemigo()
            }
        })
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

function ataqueAleatorioEnemigo() {
    let ataqueAleatorio = aleatorio(0, ataquesPersonaje.length -1)

    if (ataquesPersonaje[ataqueAleatorio].nombre === 'piedra') {
        ataqueEnemigo = 'PIEDRA'
    }else if (ataquesPersonaje[ataqueAleatorio].nombre === 'papel') {
        ataqueEnemigo = 'PAPEL'
    }else if (ataquesPersonaje[ataqueAleatorio].nombre === 'tijera') {
        ataqueEnemigo = 'TIJERA'
    }else if (ataquesPersonaje[ataqueAleatorio].nombre === 'lagarto') {
        ataqueEnemigo = 'LAGARTO'
    }else if (ataquesPersonaje[ataqueAleatorio].nombre === 'spock') {
        ataqueEnemigo = 'SPOCK'
    }       
    
    combate()
}

function combate() {    
    contadorTurno += 1
    if (ataqueEnemigo == ataqueJugador[ataqueJugador.length - 1]) {
        crearMensaje("EMPATE");
    } else if (
        (ataqueJugador[ataqueJugador.length - 1] == 'PIEDRA' &&  ataqueEnemigo == 'TIJERA') ||
        (ataqueJugador[ataqueJugador.length - 1] == 'PIEDRA' &&  ataqueEnemigo == 'LAGARTO') ||
        (ataqueJugador[ataqueJugador.length - 1] == 'PAPEL' &&  ataqueEnemigo == 'PIEDRA') ||
        (ataqueJugador[ataqueJugador.length - 1] == 'PAPEL' &&  ataqueEnemigo == 'SPOCK') ||
        (ataqueJugador[ataqueJugador.length - 1] == 'TIJERA' &&  ataqueEnemigo == 'PAPEL') ||
        (ataqueJugador[ataqueJugador.length - 1] == 'TIJERA' &&  ataqueEnemigo == 'LAGARTO') ||
        (ataqueJugador[ataqueJugador.length - 1] == 'LAGARTO' &&  ataqueEnemigo == 'SPOCK') ||
        (ataqueJugador[ataqueJugador.length - 1] == 'LAGARTO' &&  ataqueEnemigo == 'PAPEL') ||
        (ataqueJugador[ataqueJugador.length - 1] == 'SPOCK' &&  ataqueEnemigo == 'TIJERA') ||
        (ataqueJugador[ataqueJugador.length - 1] == 'SPOCK' &&  ataqueEnemigo == 'PIEDRA')
    ) {
        crearMensaje("GANASTE");
        victoriasJugador++
    } else {
        // perdidas++;
        crearMensaje("PERDISTE");
        victoriasEnemigo++
    }
    // console.log("Combate: ", victoriasJugador)
    spanVictoriasJugador.innerHTML = victoriasJugador
    spanVictoriasEnemigo.innerHTML = victoriasEnemigo
    revisarVidas()
}

function revisarVidas() {
    // console.log("Revisar vidas: ", victoriasJugador)
    if (victoriasJugador == 5) {
        crearMensajeFinal("FELICITACIONES! Ganaste")
    }else if (victoriasEnemigo == 5) {
        crearMensajeFinal("Lo siento, Perdiste")
    }
}

function crearMensaje(resultado) {
    let nuevoAtaqueJugador = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')
    let resultadoA = document.createElement('p')
    let turnoA = document.createElement('p')

    turnoA.innerHTML = "Turno " + contadorTurno + ":"
    // sectionMensaje.innerHTML = resultado
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo
    nuevoAtaqueJugador.innerHTML = ataqueJugador[ataqueJugador.length - 1]
    resultadoA.innerHTML = resultado

    turno.appendChild(turnoA)
    ataquesJugador.appendChild(nuevoAtaqueJugador)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)
    if (resultado === "PERDISTE") {
        resultadoA.style.backgroundColor = "rgba(216, 31, 95, 0.4)"
        nuevoAtaqueJugador.style.backgroundColor = "rgba(216, 31, 95, 0.4)"
        nuevoAtaqueEnemigo.style.backgroundColor = "rgba(216, 31, 95, 0.4)"
        turnoA.style.backgroundColor = "rgba(216, 31, 95, 0.4)"
    }else if (resultado === "GANASTE") {
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