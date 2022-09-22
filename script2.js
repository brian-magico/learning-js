// condicionales
let edad = 15;

if (edad >= 1 && edad <= 12) {
    console.log("Es un ninio")
} else if (edad >= 13 && edad <= 30) {
    console.log("Es joven")
} else if (edad >= 31 && edad <= 45) {
    console.log("Es Adulto")
} else { 
    console.log("Es un viejo")
}

// Una pesona puede jubilarse a los 60 a;os si es hombre, a los 65 si es mujer
// && -> and (ambas declaraciones debe ser verdadera)
// || -> or (alguna de las declaraciones debe sere verdadera)
let edad;
let genero;

if ((genero == "F" && edad >= 60) || (genero == "M" && edad >= 65)) {
    console.log("Esta persona esta en edad de jubirlarse")
} else {
    console.log("Esta persona no esta en edad de jubilarse")
}