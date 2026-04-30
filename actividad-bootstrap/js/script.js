//BOTONES DE LAS CARDS PARA ABRIR LA MODAL
let botones = document.querySelectorAll(".btn-modal")

botones.forEach(boton => {
   boton.addEventListener("click", function(){
    let modal = new bootstrap.Modal(document.getElementById("miModal"));
    modal.show();
   }) 
});

//VALIDACION DE FORMULARIO
document.getElementById("login").addEventListener("submit", function(e) {
    e.preventDefault();

    let correo = document.getElementById("email").value 
    let password = document.getElementById("password").value
    let mensaje = document.getElementById("mensaje");
    const user_default  ="prueba@gmail.com";
    const password_default = "123456";


    if(correo === "" || password === ""){
        mensaje.innerHTML = "Todos los campos son obligatorios";
        mensaje.className = "text-warning"
    }else if(correo === user_default && password === password_default){
        mensaje.innerHTML = "Bienvenido al sistema";
        mensaje.className = "text-success";
    }else {
        mensaje.innerHTML = "Error al prosesar los datos";
        mensaje.className = "text-danger";
    }
})
