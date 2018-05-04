$(document).ready(function() {
    alert("lectura de datos completada");
    getClientes();
    $('#btnEliminar').click(function(event) {
        deleteCliente();
    });
    $('#btnActualizar').click(function(event) {
        updateClient();
    });
    $('#crearClient').click(function(event) {
        createCliente();
    });
});
/**
 * obtenemos os clientes con una llamada al servidor
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
        cargartabla(response);
    }).fail(function(error) {
        debugger;
        console.log(error);
        alert("Usuario no auntenticado");
    });
}
/**
 * carga los clientes en una tabla en la parte de la intez de suuario 
 * @param {*} listOfClientes 
 */
function cargartabla(listOfClientes) {
    listOfClientes.forEach(function(element) {
        debugger;
        var button = '<td><p data-placement="top" data-toggle="tooltip" title="Edit"><button id="modalboton" class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" name="editar" type="button" data-target="#squarespaceModal" value="' + element.id + '"wainer"><span class="glyphicon glyphicon-pencil">EDITAR</span></button></p></td>';
        var row = "<tr>";
        row += "<td>" + element.id + "</td>"
        row += "<td>" + element.name + "</td>";
        row += "<td>" + element.legal_document + "</td>";
        row += "<td>" + element.web_page + "</td>";
        row += "<td>" + element.physical_address + "</td>";
        row += "<td>" + element.phone_number + "</td>";
        row += "<td>" + element.section + "</td>";
        row += "<td>" + button + "</td>";
        row += "<tr/>";
        $("#clientes").append(row);
    });
}
/**
  hace una consulata al servidor para validar si cuenta con los permisos y poder eliminar el cliente
 */
function deleteCliente() {
    var idcliente = document.getElementById("txtId").value;
    var token = localStorage.getItem("TOKEN");
    alert(idcliente);
    $.ajax({
        type: "DELETE",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/clientes/" + idcliente,
        complete: function() {
            alert("Deleted successfully");
            location.reload(true);
        }
    });
    event.preventDefault();
}
/**
 actualiza a los  clientes
 */
function updateClient() {
    var idcliente= document.getElementById("txtId").value;
    var name = document.getElementById("txtNombre").value;
    var cedulaJuridica = document.getElementById("txtCedulaJuridica").value;
    var paginaWeb = document.getElementById("txtPaginaWeb").value;
    var direccionFisica = document.getElementById("txtDireccionFisica").value;
    var numeroTelefono = document.getElementById("txtNumeroTelefono").value;
    var sector = document.getElementById("txtSector").value;
    validate_fields(name, cedulaJuridica, paginaWeb, direccionFisica, numeroTelefono, sector);
    alert(idcliente);
    var cliente = {};
    cliente.name = name
    cliente.legal_document = cedulaJuridica
    cliente.web_page = paginaWeb
    cliente.physical_address = direccionFisica
    cliente.phone_number = numeroTelefono
    cliente.section = sector
    var token = localStorage.getItem("TOKEN");
    $.ajax({
        method: "PUT",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/clientes/" + idcliente,
        data: {
            "cliente": cliente
        }
    }).done(function(response) {
        console.log(response);
        alert("Usuario actualizado");
        location.reload(true);
    }).fail(function(error) {
        console.log(error);
    });
}
/**
 * Valida que  los campos requeridos esten en llenos
 * @param {*} name 
 * @param {*} cedulaJuridica 
 * @param {*} paginaWeb 
 * @param {*} direccionFisica 
 * @param {*} numeroTelefono 
 * @param {*} sector 
 */
function validate_fields(name, cedulaJuridica, paginaWeb, direccionFisica, numeroTelefono, sector) {
    if (name == "" && cedulaJuridica == "" && paginaWeb == "" && direccionFisica == "" && numeroTelefono == "" && sector == "") {
        alert("ingrese todos los campos requeridos");
        return;
    }
}
/**
 *  crea los clientes sen el servidor
 */
function createCliente(){
    var name = document.getElementById("name").value;
    var cedulaJuridica = document.getElementById("legal_document").value;
    var paginaWeb = document.getElementById("web_page").value;
    var direccionFisica = document.getElementById("physical_address").value;
    var numeroTelefono = document.getElementById("phone_number").value;
    var sector = document.getElementById("section").value;
    var token = localStorage.getItem("TOKEN");
    var cliente = {};
    cliente.name = name
    cliente.legal_document = cedulaJuridica
    cliente.web_page = paginaWeb
    cliente.physical_address = direccionFisica
    cliente.phone_number = numeroTelefono
    cliente.section = sector
    $.ajax({
        method: "POST",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/clientes/",
        data: {
            "cliente": cliente
        }
    }).done(function(response) {
        console.log(response);
        alert("Cliente Creado");
        location.reload(true);
        window.location.href='Clientes.html';
    }).fail(function(error) {
        console.log(error);
    });
}