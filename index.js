const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())

const jugadores = []

class Jugador {
    constructor(id) {
        this.id = id
    }
    asignarMokepon(jugador){this.jugador=jugador}}
    class Jugador{constructor(nombre){this.nombre=nombre}
}


app.get("/unirse", (req, res) => {
    const id = `${Math.random()}`

    const jugador = new Jugador(id)

    jugadores.push(jugador)

    res.setHeader("Access-Control-Allow-Origin", "*")

    res.send(id)
})

app.post("/tbbt/:jugadorId", (req, res) => {
    const jugadorId = req.params.jugadorId || ""
    console.log(jugadores);
    console.log(jugadorId);
    res.end()
})

app.listen(8080, () => {
    console.log("Servidor Funcionando");
})