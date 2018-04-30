$(document).ready(function() {
    alert("lectura de datos completada");
     getContactos();
     getClientes();
     $('#crearCont').click(function(event) {
        createCont();
    });
    $('#deleteContacto').click(function(event) {
         deleteContacto();
    })
    $('#btnActualizar').click(function(event) {
        updateContacto();
   })
});
/**
 * 
 */
function getContactos() {
    var token = localStorage.getItem("TOKEN");
    $.ajax({
        method: "GET",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/contactos"
    }).done(function(response) {
        debugger;
        console.log(response);
        cargarContactos(response);
    }).fail(function(error) {
        debugger;
        console.log(error);
        alert("Usuario no auntenticado");
    });
}
/**
 * 
 * @param {*} listOfContactos 
 */
function cargarContactos(listOfContactos) {
    listOfContactos.forEach(function(element) {
        debugger;
        var button = '<td><p data-placement="top" data-toggle="tooltip" title="Edit"><button id="modalboton" class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" name="editar" type="button" data-target="#squarespaceModal" value="' + element.id + '"wainer"><span class="glyphicon glyphicon-pencil">EDITAR</span></button></p></td>';
        var row = "<tr>";
        row += "<td>" + element.id + "</td>"
        row += "<td>" + element.cliente_id + "</td>";
        row += "<td>" + element.name + "</td>";
        row += "<td>" + element.lastname + "</td>";
        row += "<td>" + element. email + "</td>";
        row += "<td>" + element.phone_number + "</td>";
        row += "<td>" + element.job + "</td>";
        row += "<td>" + button + "</td>";
        row += "<tr/>";
        $("#contactos").append(row);
    });
}
/**
 * carga los  clientes para cargarlos en un select
 * @param {*} listOfClientes 
 */
function cargarclientes(listOfClientes) {
    listOfClientes.forEach(function(element) {
        debugger;
      var opcciones=document.createElement("option");
      opcciones.setAttribute("value",element.id);
      opcciones.setAttribute("label",element.name);
        $("#section").append(opcciones);
    });
}
/**
 * 
 */
function getClientes() {
    var token = localStorage.getItem("TOKEN");
    $.ajax({
        method: "GET",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/clientes"
    }).done(function(response) {
        debugger;
        console.log(response);
        cargarclientes(response);
    }).fail(function(error) {
        debugger;
        console.log(error);
        alert("Usuario no auntenticado");
    });
}
/**
 * 
 */
function createCont(){
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var  email = document.getElementById("email").value;
    var  phone_number = document.getElementById("phone_number").value;
    var job=document.getElementById("job").value;
    var cliente_id=document.getElementById("section").value;
    var contacto = {};
    contacto.cliente_id = cliente_id
    contacto.name = name
    contacto.lastname = lastname
    contacto.email=email
    contacto.phone_number=phone_number
    contacto.job = job
    var token = localStorage.getItem("TOKEN");
    $.ajax({
        method: "POST",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/contactos",
        data: {
            "contacto": contacto
        }
    }).done(function(response) {
        console.log(response);
        alert("Contacto  creado");
        location.reload(true);

    }).fail(function(error) {
        console.log(error);
    });

}
function deleteContacto() {
    var idcliente = document.getElementById("txtId").value;
    var token = localStorage.getItem("TOKEN");
    alert(idcliente);
    $.ajax({
        type: "DELETE",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/contactos/" + idcliente,
        complete: function() {
            alert("Deleted successfully");
            location.reload(true);
        }
    });
    event.preventDefault();
}
function updateContacto() {
    var idcontacto= document.getElementById("txtId").value;
    var idcliente = document.getElementById("txtId_Cliente").value;
    var  name = document.getElementById("txtname").value;
    var  lastname = document.getElementById("txtlastname").value;
    var email = document.getElementById("txtemail").value;
    var phone_number = document.getElementById("txtphone_number").value;
    var sector = document.getElementById("txtpuesto").value;
    alert(idcliente);
    var contacto = {};
    contacto.cliente_id=idcliente
    contacto.name = name
    contacto.lastname = lastname
    contacto.email = email
    contacto.phone_number = phone_number
    contacto.section = sector
    var token = localStorage.getItem("TOKEN");
    $.ajax({
        method: "PUT",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/contactos/" + idcontacto,
        data: {
            "contacto": contacto
        }
    }).done(function(response) {
        console.log(response);
        alert("Usuario actualizado");
        location.reload(true);
    }).fail(function(error) {
        console.log(error);
        alert("Error al Actualizar el Contacto");
    });
}

