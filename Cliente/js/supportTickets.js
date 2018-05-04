$(document).ready(function() {
    alert("lectura de datos completada");
    getSupportTickets();
    getClientes();
    $('#createSu').click(function(event) {
        createSupportTickets();
    });
    $('#btnEliminar').click(function(event) {
        deleteSupportTickets();
    });
    $('#btnActualizar').click(function(event) {
        updateSupportTickets();
    });
});
/*
 obtiene todos los support tickest con una llamada al servidor
*/
function getSupportTickets() {
    var token = localStorage.getItem("TOKEN");
    $.ajax({
        method: "GET",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/support_tickets"
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
/*
 carga una tabla con los supporTickets disponibles  en la interfaz
*/
function cargartabla(listOfSupportTickets) {
    listOfSupportTickets.forEach(function(element) {
        debugger;
        var button = '<td><p data-placement="top" data-toggle="tooltip" title="Edit"><button id="modalboton" class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" name="editar" type="button" data-target="#squarespaceModal" value="' + element.id + '"wainer"><span class="glyphicon glyphicon-pencil">EDITAR</span></button></p></td>';
        var row = "<tr>";
        row += "<td>" + element.id + "</td>"
        row += "<td>" + element.title_of_the_problem + "</td>";
        row += "<td>" + element.details_of_the_problem + "</td>";
        row += "<td>" + element.who_reports + "</td>";
        row += "<td>" + element.cliente_id + "</td>";
        row += "<td>" + element.state + "</td>";
        row += "<td>" + button + "</td>";
        row += "<tr/>";
        $("#tickets").append(row);
    });
}
/*
 carga los clientes para poder ser usados en la interfaz de usuario 
*/
function cargarclientes(listOfClientes) {
    listOfClientes.forEach(function(element) {
        debugger;
        var opcciones = document.createElement("option");
        opcciones.setAttribute("value", element.id);
        opcciones.setAttribute("label", element.name);
        $("#cliente").append(opcciones);
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
/*
 envia una solicitud al servidor para poder crear un nuevo suppot tickets
*/
function createSupportTickets() {
    var title_of_the_problem = document.getElementById("title_of_problem").value;
    var details_of_the_problem = document.getElementById("details_of_problem").value;
    var who_reports = document.getElementById("who_report").value;
    var id_cliente = document.getElementById("cliente").value;
    var state = document.getElementById("state").value;
    var token = localStorage.getItem("TOKEN");
    var support_ticket = {};
    support_ticket.title_of_the_problem = title_of_the_problem
    support_ticket.details_of_the_problem = details_of_the_problem
    support_ticket.who_reports = who_reports
    support_ticket.cliente_id = id_cliente
    support_ticket.state = state
    $.ajax({
        method: "POST",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/support_tickets",
        data: {
            "support_ticket": support_ticket
        }
    }).done(function(response) {
        debugger;
        console.log(response);
        alert("support_ticket creado");
    }).fail(function(error) {
        debugger;
        console.log(error);
        alert("Usuario no auntenticado" + error);
    });
}

function deleteSupportTickets() {
    var idcliente = document.getElementById("txtId").value;
    var token = localStorage.getItem("TOKEN");
    alert(idcliente);
    $.ajax({
        type: "DELETE",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/support_tickets/" + idcliente,
        complete: function() {
            alert("Deleted successfully");
            location.reload(true);
        }
    });
    event.preventDefault();
}

function updateSupportTickets() {
    var idcontacto = document.getElementById("txtId").value;
    var tiTle_of_problem = document.getElementById("txttitle_of_problem").value;
    var details_of_problem = document.getElementById("txtdetails_of_problem").value;
    var who_report = document.getElementById("txtwho_report").value;
    var idcliente = document.getElementById("txtidcliente").value;
    var state = document.getElementById("txtstate").value;
    alert(idcliente);
    var support_ticket = {};
    support_ticket.title_of_the_problem = tiTle_of_problem
    support_ticket.details_of_the_problem = details_of_problem
    support_ticket.who_reports = who_report
    support_ticket.cliente_id = idcliente
    support_ticket.state = state
    var token = localStorage.getItem("TOKEN");
    $.ajax({
        method: "PUT",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/support_tickets/" + idcontacto,
        data: {
            "support_ticket": support_ticket
        }
    }).done(function(response) {
        console.log(response);
        alert(" support_tickets actualizado");
        location.reload(true);
    }).fail(function(error) {
        console.log(error);
        alert("Error al Actualizar el support_tickets");
    });
}