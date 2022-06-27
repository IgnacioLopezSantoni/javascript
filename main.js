let nombre = prompt ("ingresu su nombre")
let precio = 0
alert ("buen dia " + nombre)

let corte = prompt( "ingrese que tipo de corte quiere " + " opcion 1 femenino , opcion 2 masculino" )

while(corte !=1 && corte !=2){

    alert("el numero ingresado es incorrecto")
    corte = prompt( "ingrese que tipo de corte quiere " + " opcion 1 femenino , opcion 2 masculino" )
}

if(corte ==1){
    precio= 500
} else(precio= 900 )
 alert ( "el precio del corte es " + precio)
 
    




