$(document).ready(function() {
    alert("lectura de datos completada");
    getUser();
    $('#btnEliminar').click(function(event) {
        deleteUser();
    });
    $('#btnActualizar').click(function(event) {
        updateUser();
    });
    $('#createU').click(function(event) {
          createUser();
    });
});

function getUser() {
    var token = localStorage.getItem("TOKEN");
    $.ajax({
        method: "GET",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/users"
    }).done(function(response) {
        debugger;
        console.log(response);
        cargartabla(response);
    }).fail(function(error) {
        debugger;
        console.log(error);
        alert("Usuario no auntenticado");
    });
}

function cargartabla(listOfUser) {
    listOfUser.forEach(function(element) {
        debugger;
        var button = '<td><p data-placement="top" data-toggle="tooltip" title="Edit"><button id="modalboton" class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" name="editar" type="button" data-target="#squarespaceModal" value="' + element.id + '"wainer"><span class="glyphicon glyphicon-pencil">EDITAR</span></button></p></td>';
        var row = "<tr>";
        row += "<td>" + element.id + "</td>"
        row += "<td>" + element.username + "</td>";
        row += "<td>" + element.password + "</td>";
        row += "<td>" + element.firstname + "</td>";
        row += "<td>" + element.lastname + "</td>";
        row += "<td>" + button + "</td>";
        row += "<tr/>";
        $("#User").append(row);
    });
}

function deleteUser() {
    var idcliente = document.getElementById("txtId").value;
    alert(idcliente);
    $.ajax({
        type: "DELETE",
        url: "http://localhost:3000/users/" + idcliente,
        complete: function() {
            alert("Deleted successfully");
            location.reload(true);
        }
    });
    event.preventDefault();
}

function updateUser() {
    var idcliente = document.getElementById("txtId").value;
    var username = document.getElementById("txtUsuario").value;
    var password = document.getElementById("txtContraseña").value;
    var  firstname = document.getElementById("txtNombre").value;
    var  lastname = document.getElementById("txtApellido").value;
   
    validate_fields(username,password,firstname,lastname);
    alert(idcliente);
    var user = {};
    user.username = username
    user.password = password
    user.firstname = firstname
    user.lastname = lastname
    var token = localStorage.getItem("TOKEN");
    $.ajax({
        method: "PUT",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/users/" + idcliente,
        data: {
            "user": user
        }
    }).done(function(response) {
        console.log(response);
        alert("Usuario actualizado");
        location.reload(true);
    }).fail(function(error) {
        console.log(error);
    });
}

function validate_fields(username,password,firstname,lastname) {
    if (username == "" && password == "" && firstname== "" && lastname == "") {
        alert("ingrese todos los campos requeridos");
        return;
    }
}
function createUser(){
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var  firstname = document.getElementById("name").value;
    var  lastname = document.getElementById("lastname").value;
   
    validate_fields(username,password,firstname,lastname);
    var user = {};
    user.username = username
    user.password = password
    user.firstname = firstname
    user.lastname = lastname
    var token = localStorage.getItem("TOKEN");
    $.ajax({
        method: "POST",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/users/",
        data: {
            "user": user
        }
    }).done(function(response) {
        console.log(response);
        alert("Usuario creado");
        location.reload(true);

    }).fail(function(error) {
        console.log(error);
    });

}