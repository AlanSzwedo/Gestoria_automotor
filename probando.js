nombre_usuario();
vehiculo ();
anio_vehiculo ();
tramite_realizar ();
documentacion ();

/* Clases */

class Usuario {

    constructor(cliente, vehiculo, anio, tramite, documentacion){
        this.cliente = cliente
        this.vehiculo = vehiculo;
        this.anio = anio;
        this.tramite = tramite;
        this.documentacion = documentacion;
        this.user = -1;
    }

    mostrar_user(){
        return (this.cliente + " / " + this.vehiculo + " / " + this.anio + " / " + this.tramite + " / " + this.documentacion);
    }

    set_user(nuevo_user){
        this.user = nuevo_user;
    }

}

/* funcion nombre usuario */
function nombre_usuario(){

let nombre = prompt("ingrese su nombre")

if(nombre == ""){
    alert("debe completar")
}
else{
    alert("su nombre es: " + nombre)
}
}

/* funcion tipo vehiculo */

function vehiculo(){
let tipo_vehiculo = prompt("Escribir auto o moto").toLowerCase();

do{
switch (tipo_vehiculo){
        case "auto":
            alert("El vehículo seleccionado es un auto");
            break;
        case "moto":
            alert("El vehículo seleccionado es una moto");
            break;
        default:
            alert("Ingrese un dato válido");
            tipo_vehiculo = prompt("Escribir auto o moto").toLowerCase();
    }
    
}while (tipo_vehiculo != "moto" && tipo_vehiculo != "auto");

}

/* funcion año vehiculo */

function anio_vehiculo(){
    let anio = prompt("ingrese el año del vehiculo")
    if (anio == "2022"){
        alert("el auto es 0km")
    }else if (anio < 2022 && anio >2010){
        alert("el auto es usado")
    }else if (anio < 2010){
        alert("el auto es usado, menor 2010")
    }else if (anio > 2022 || anio == isNaN){
        alert("dato incorrecto")
    }else alert("dato incorrecto")
}


/* funcion tramite a realizar */

function tramite_realizar(){
let tramite = prompt("Seleccione, con el dígito que corresponda, el trámite a realizar\n1-Transferencia.\n2-Cambio de radicación\n3-Cambio de chapa\n4-Cédula\n5-Otro").toLowerCase();
let transferencia = 1;
let radicacion = 2;
let chapa = 3;
let cedula = 4;
let otro = 5;

let validacion = true;

if (tramite == 1){
    alert("Seleccionaste transferencia")
    }else if(tramite == 2){
        alert("Seleccionaste radicación")
    }else if(tramite == 3){
        alert("Seleccionaste chapa")
    }else if(tramite == 4){
        alert("Seleccionaste cedula")
    }else if(tramite == 5){
        alert("Seleccionaste otro")
    }else{
        alert("ingresaste un dato incorrecto")
        return false;
        
}while (validacion == false){
    prompt("Seleccione nuevamente el dígito que corresponda, el trámite a realizar\n1-Transferencia.\n2-Cambio de radicación\n3-Cambio de chapa\n4-Cédula\n5-Otro").toLowerCase();
}
}

/*let dato;

function validacion (dato){

    dato = prompt("Seleccione nuevamente el dígito que corresponda, el trámite a realizar\n1-Transferencia.\n2-Cambio de radicación\n3-Cambio de chapa\n4-Cédula\n5-Otro").toLowerCase();

    if (dato == " "){
    return false;
    }

    if (dato == isNaN){
        return false;
    }

    

}
}*/

/* funcion papeles */

function documentacion(){
    let confirmacion = prompt("tiene todos los papeles/ si o no");

while (confirmacion){
    if (confirmacion == "si"){
        alert("ok")
    }else if (confirmacion == "no"){
        prompt("detalle a continuación la documentación faltante")
    }else alert("la respuesta es incorrecta")
    return (confirmacion)

}

}
/* uso de funciones */



let array_tramite = new Array();

while(nombre_usuario == true && vehiculo == true && tramite_realizar == true){
    array_tramite.push(nombre_usuario);
    array_tramite.push(vehiculo);
    array_tramite.push(tramite_realizar);
    alert("consulta generada")
}








