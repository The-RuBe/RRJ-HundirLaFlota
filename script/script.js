let filas = 15;
let columnas = 15;
let barcos = 5;
let flota = new Array(filas);

for (i = 0; i < filas; i++) {
    flota[i] = new Array(columnas);
    flota[i].fill("T");
}

let fila_aleatoria = 0;
let columna_aleatoria = 0;
for (i = 0; i < barcos; i++) {
    fila_aleatoria = Math.floor(Math.random() * filas);
    columna_aleatoria = Math.floor(Math.random() * columnas);
    if (flota[fila_aleatoria][columna_aleatoria] === "B") {
        i--;
    } else {
        flota[fila_aleatoria][columna_aleatoria] = "B";
        // Descomentar para ver la posición de los barcos
        // console.log("Fila: " + fila_aleatoria + " Columna: " + columna_aleatoria);
    }
}

const plano = document.getElementById("flota");

for (i = 0; i < filas; i++) {
    for (j = 0; j < columnas; j++) {
        const cuadro_tablero = document.createElement("div");
        cuadro_tablero.classList.add("casilla");
        cuadro_tablero.id = "casilla" + i + j
        cuadro_tablero.classList.add("tablero");
        plano.appendChild(cuadro_tablero);
    }
}

let hundidos = 0;

function disparar() {

    let fila = 0;
    let columna = 0;

    do {
        fila = window.prompt("Introduce la fila (debe ser un número entre 0 y 14):");
        if (fila != null) {
            fila.trim();
        }
    } while (isNaN(fila) || fila == null || fila == '' || fila > 15 || fila < 0);

    do {
        columna = window.prompt("Introduce la columna (debe ser un número entre 0 y 14):").trim();
        if (columna != null) {
            columna.trim();
        }
    } while (isNaN(columna) || columna == null || columna == '' || columna > 15 || columna < 0);

    if (flota[fila][columna] === "B") {
        flota[fila][columna] = "H";
        document.getElementById("casilla" + fila + columna).classList.add("hundido");
        hundidos++;
        if (hundidos == 3) {
            window.alert("Has destruido 3 barcos. ¡Has ganado!");
            document.getElementById("disparar").disabled = true;
        }
    } else if (flota[fila][columna] === "T") {
        flota[fila][columna] = "A";
        document.getElementById("casilla" + fila + columna).classList.add("agua");
    } else if (flota[fila][columna] === "A" || (flota[fila][columna] === "H")) {
        window.alert("Esa casilla ya estaba marcada.")
    }

}