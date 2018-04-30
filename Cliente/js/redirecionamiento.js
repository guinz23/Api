$(document).ready(function() {
    $('#Usuarios').click(function(event) {
        go_to_user();
    });
    $('#Clientes').click(function(event) {
        go_to_client();
    });
    $('#home').click(function(event) {
        home();
    });
    $('#crearClientes').click(function(event) {
        crearClientes();
    });
    $('#crearUsuarios').click(function(event) {
        crearUsuarios();
    });
    $('#Contactos').click(function(event) {
  go_to_contacts();
    });
    $('#crearContactos').click(function(event) {
         createContactos();
          });
});
var token = localStorage.getItem("TOKEN");
function go_to_user() {
     if (token) {
        window.location.href = 'Usuarios.html';
    }else{
         alert("usuario no logeado");
         window.location.href = 'login.html';
    }
}

function go_to_client() {
    if (token) {
        window.location.href = 'Clientes.html';
    }
    else{
        alert("usuario no logeado");
        window.location.href = 'login.html';
    }
    
}

function home() {
    if (token) {
        window.location.href = 'Main.html';
    }else{
        alert("Usuario no logeado");
        window.location.href='login.html'
    }
 
}
function crearClientes(){
    if (token) {
         window.location.href='CreateClientes.html';
    }
    else{
        alert("Usuario no logeado");
        window.location.href='login.html' 
    }
}
function crearUsuarios(){
   if (token) {
    window.location.href='createUsuarios.html';
}else{
    alert("Usuario no logeado");
    window.location.href='login.html' 
}

}
function go_to_contacts(){
  if (token) {
       window.location.href='Contacto.html'
  }else{
    alert("Usuario no logeado");
    window.location.href='login.html'
  }
}
function createContactos(){
     if (token) {
         window.location.href='crearContactos.html'; 
     }else{
        alert("Usuario no logeado");
        window.location.href='login.html'
     }
}