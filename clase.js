const suma =(numero1, numero2) => numero1 + numero2;
const resta =(numero1,numero2) => numero1 - numero2;
const iva = x => x * 0.21;

let nombre = prompt("Bienvenido!!cual es tu nombre?")
let ancho = prompt("cuanto mide la ventana de ancho?")
//descuento por cada metro de ventana que compra
let descuentoxmetro = 100;
//precio x metro de alto y ancho
let precioxancho = 5000;
let precioxalto = 6000;

let alto = parseInt (prompt("cuanto mide de alto?"))

//valor x metro de ancho
let total1 = resta(suma(ancho * precioxancho,iva(ancho * precioxancho)),ancho * descuentoxmetro);
console.log (total1);

//valor x metro de alto
let total2 = resta(suma(alto * precioxalto,iva(ancho * precioxalto)),alto * descuentoxmetro);
console.log (total2);

//suma de los totales
let total = suma (total1,total2);
console.log(total); {
    
alert(nombre+"! El valor de tu ventana es $"+ total)
}