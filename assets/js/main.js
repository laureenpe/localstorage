//Recuperar los datos que el usuario ingrese en los input
function guardarDatos(){
    localStorage.nombre=document.getElementById("nombre").value;
    localStorage.password= document.getElementById("password").value;
}
//le diremos que si nuestro datos ingresados son distintos a undefined los imprima en la pantalla, de lo contrario envie un mensaje "no as introducido tu nombre y tu password"

function recuperarDatos(){
    if((localStorage.nombre !=undefined)&& (localStorage.password !=undefined)){
        document.getElementById("datos").innerHTML="Nombre: " + localStorage.nombre +"<br/> Password: " + localStorage.password; 
    }
    else{
        document.getElementById("datos").innerHTML="No has introducido tu nombre y tu password;"
    }
}
//y asi se crea el formulario y la informacion ingresada se guarda en ntra pagina, aunque cerremos y recarguemos 