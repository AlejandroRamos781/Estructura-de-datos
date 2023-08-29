function ruleta() {
    let numero = Math.floor(Math.random() * 100 + 1)
    return numero
}
class Tortuga {
    constructor() {
        this.posicion = 0
    }
    avanzar(numero) {
        if (numero <= 25) {

            return this.posicion -= 6
        } else if (numero <= 55) {

            return this.posicion += 1
        } else {

            return this.posicion += 3
        }
    }
}
class Liebre {
    constructor() {
        this.posicion = 0
    }
    avanzar(numero) {
        if (numero <= 20) {

            return this.posicion += 0
        } else if (numero <= 40) {

            return this.posicion += 9
        } else if (numero <= 50) {

            return this.posicion -= 12
        } else if (numero <= 85) {

            return this.posicion += 1
        } else {

            return this.posicion -= 2
        }
    }
}

const tortugaTrabajadora = new Tortuga()
const liebreFloja = new Liebre()
let tiros = 0

while (tortugaTrabajadora.posicion <= 100 && liebreFloja.posicion <= 100) {
    tortugaTrabajadora.avanzar(ruleta())
    liebreFloja.avanzar(ruleta())
    console.log(`La tortuga esta en la posicion: ${tortugaTrabajadora.posicion} y la Liebre se encuentra en la posicion: ${liebreFloja.posicion}`)
    tiros++
}
if (tortugaTrabajadora.posicion == liebreFloja.posicion) {
    console.log("Hubo un empate entre la liebre y la tortuga despues de esta cantidad de tiros:", tiros)
} else if (tortugaTrabajadora.posicion > liebreFloja.posicion) {
    console.log("La tortuga gana despues de esta cantidad de tiros", tiros)
} else {
    console.log("La liebre gana despues de esta cantidad de tiros", tiros)
}



