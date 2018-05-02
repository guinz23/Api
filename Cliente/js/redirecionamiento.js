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
     $('#Suport_ticket').click(function(event) {
        go_to_Support_ticket();
    });
    $('#createTickets').click(function(event) {
        createTickets();
    });
    $('#Reuniones').click(function(event) {
        go_to_Meeting();
    });
    $('#crearReuniones').click(function(event) {
         createMeeting();
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
        window.location.href='login.html';
    }
 
}
function crearClientes(){
    if (token) {
         window.location.href='CreateClientes.html';
    }
    else{
        alert("Usuario no logeado");
        window.location.href='login.html' ;
    }
}
function crearUsuarios(){
   if (token) {
    window.location.href='createUsuarios.html';
}else{
    alert("Usuario no logeado");
    window.location.href='login.html' ;
}

}
function go_to_contacts(){
  if (token) {
       window.location.href='Contacto.html'
  }else{
    alert("Usuario no logeado");
    window.location.href='login.html';
  }
}
function createContactos(){
     if (token) {
         window.location.href='crearContactos.html'; 
     }else{
        alert("Usuario no logeado");
        window.location.href='login.html';
     }
}
function go_to_Support_ticket(){
    if (token) {
         window.location.href='support_tickets.html';
    }else{
        alert("Usuario no logeado");
        window.location.href='login.html';
    }
}
function createTickets(){
    if (token) {
          window.location.href='createSupportTickets.html';
    }else{
        alert("Usuario no logeado");
        window.location.href='login.html'; 
    }
}
function  go_to_Meeting (){
  if (token) {
          window.location.href='Reuniones.html';
  } else {
    alert("Usuario no logeado");
    window.location.href='login.html';   
  }
}
function createMeeting(){
    if (token) {
        window.location.href='createReuniones.html';
    }else{
        alert("Usuario no logeado");
        window.location.href='login.html';  
    }
}