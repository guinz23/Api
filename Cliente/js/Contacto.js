$(document).ready(function() {
    alert("lectura de datos completada");
     getContactos();
     getClientes();
     $('#crearCont').click(function(event) {
        createCont();
    });
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
    contacto.job = job
    var token = localStorage.getItem("TOKEN");
    $.ajax({
        method: "POST",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/contactos/",
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
