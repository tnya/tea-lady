// onClick
function mostrarData(){

var nombre = document.getElementById("name").value;
var apellido = document.getElementById("lastName").value;
var email = document.getElementById("email").value;
var direccion = document.getElementById("address").value;
var telefono = document.getElementById("phone").value;
var selection = document.getElementById("selection").value;
var checkbox = document.getElementById("checkbox").value;


	if(nombre === "" ){
		alert("Ingrese su nombre")
		return false

	} else if (apellido === "" ){
		alert("Ingrese su apellido")
		return false

	} else if (email === "" ){
		alert("Ingrese su email")
		return false

	} else if (direccion === "" ){
		alert("Ingrese su dirección")
		return false

	} else if (telefono === "" ){
		alert("Ingrese su teléfono")
		return false

	} else if (!document.getElementById("selection").value){
		alert("Selecciona un pack")
		return false
		
	} else if (!document.getElementById("checkbox").checked){
        alert("Suscríbete, podrías ganar té gratis ;)");
        return false;
    } 

}

impresion.innerHTML = "<br><ul><li>" + name + " " + lastName + "</li><br><li>" + email + "</li><br><li>" + address + "</li><br><li>"  + phone + "</li></ul><br>";
}
