
// Creacion de un software de un cajero automatico.
// La cual pedimos nombre del usuario y le damos la bienvenida,
// Se depliega un menu de opciones donde podras ejecutar la deseada,
// Al comenzar tendras un saldo a favor de 23000$ y una deuda de 2000$


const usuario = prompt('Introduzca su nombre, por favor:')
console.log(`Bienvenido al cajero automatico ${usuario}`)

// Datos del cliente en el banco.
let saldo = 23000
let deudaTarjeta = 2000
let deposito
let retiro
let opcion_pago

// Creación del menu de ejecucion:
console.log('Menu de opciones: ')
const menu = ['Salir', 'Consulta de saldo', 'Consulta de deuda', 'Depositar', 'Retirar', 'Pagar tarjeta']

for ( const i in menu) {
    console.log(`${i}) =>`, menu[i])
}

// Creacion de las funciones a usar en la logica del cajero:

// Opcion => 1
const consultaSaldo = (saldo) => console.log(`Su saldo es $${saldo}`);

// Opcion => 2
const consultaDeuda = (deudaTarjeta) => console.log(`Tiene una deuda de $${deudaTarjeta}`);

// Opcion => 3 
function depositarDinero(deposito, saldo) {
    deposito = parseFloat(prompt(`Ingrese el monto que desea depositar.`))
    saldo = saldo + deposito
    console.log(`Se realizo un deposito de $${deposito}, Ahora su saldo acual es de ${saldo}`)
    return saldo
}
// Opcion => 4
function retirarDinero(retiro, saldo) {
    retiro = parseFloat(prompt(`Ingrese el monto que desea retirar.`))
    saldo = saldo - retiro
    console.log(`Se realizo un retiro de $${retiro}, Ahora su saldo acual es de ${saldo}`)
    return saldo
}
// Opcion => 5
function pagarTarjeta(saldo, deudaTarjeta) {
    saldo = saldo - deudaTarjeta
    console.log(`Usted a pagado la deuda de $${deudaTarjeta} y ahora su saldo es de $${saldo}`)
    return saldo
}

// Creacion de la logica del cajero automatico.
let opcion = parseInt(prompt('Ingrese la opcion que desea ejecutar'))

if (opcion == 0) {
    alert(`Hasta luego ${usuario}`)
} else {
    while((opcion >= 1) || (opcion <= 5)){
        
        if (opcion == 0) {
            console.log(`Hasta luego ${usuario}`);
            break;
        } else if (opcion == 1) {
            consultaSaldo(saldo);
        } else if (opcion == 2){
            consultaDeuda(deudaTarjeta);
        } else if (opcion == 3){
            saldo = depositarDinero(deposito, saldo);
        } else if (opcion == 4){
            saldo = retirarDinero(retiro, saldo);
        } else if (opcion == 5){
            if ( deudaTarjeta > 0){ 
                saldo = pagarTarjeta(saldo, deudaTarjeta);
                deudaTarjeta = 0
            } else {
                console.log(`${usuario} usted no tiene deuda actualmente.`)
            }
        } else {
            console.log(`${usuario} usted introdujo una opcion erronea, vuenva a intentarlo.`)
        }
        opcion = parseInt(prompt('Ingrese la opcion que desea ejecutar'))
    }
}

console.log(`Fin del programa`)
