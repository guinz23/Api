$(document).ready(function() {
    alert("lectura de datos completada");
    getClientes();
    $('#btnEliminar').click(function(event) {
        deleteCliente();
    });
    $('#btnActualizar').click(function(event) {
        updateClient();
    });
});

function getClientes() {
    $.ajax({
        method: "GET",
        url: "http://localhost:3000/clientes"
    }).done(function(response) {
        debugger;
        console.log(response);
        cargartabla(response);
    }).fail(function(error) {
        debugger;
        console.log(error);
    });
}

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

function deleteCliente() {
    var idcliente = document.getElementById("txtId").value;
    alert(idcliente);
    $.ajax({
        type: "DELETE",
        url: "http://localhost:3000/clientes/" + idcliente,
        complete: function() {
            alert("Deleted successfully");
            location.reload(true);
        }
    });
    event.preventDefault();
}

function updateClient() {
    var idcliente = document.getElementById("txtId").value;
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
    cliente.phone_numbe = numeroTelefono
    cliente.section = sector
    $.ajax({
        method: "PUT",
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

function validate_fields(name, cedulaJuridica, paginaWeb, direccionFisica, numeroTelefono, sector) {
    if (name == "" && cedulaJuridica == "" && paginaWeb == "" && direccionFisica == "" && numeroTelefono == "" && sector == "") {
        alert("ingrese todos los campos requeridos");
        return;
    }
}