$(document).ready(function() {
    alert("lectura de datos completada");
       getMeeting();
       getUser();

    $('#btncrearReunion').click(function(event) {
        createMeeting();
    });
    $('#btnEliminar').click(function(event) {
       deleteMeeting();
    });
    $('#btnActualizar').click(function(event) {
        updateMeeting();
     });
    
   
});
function getMeeting(){
    var token = localStorage.getItem("TOKEN");
    $.ajax({
        method: "GET",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/meetings"
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
        cargarUser(response);
    }).fail(function(error) {
        debugger;
        console.log(error);
        alert("Usuario no auntenticado");
    });
}
function cargarUser(listOfUser) {
    listOfUser.forEach(function(element) {
        debugger;
      var opcciones=document.createElement("option");
      opcciones.setAttribute("value",element.id);
      opcciones.setAttribute("label",element.username);
        $("#Users").append(opcciones);
    });
}
function cargartabla(listOfMeeting) {
    listOfMeeting.forEach(function(element) {
        debugger;
        var button = '<td><p data-placement="top" data-toggle="tooltip" title="Edit"><button id="modalboton" class="btn btn-primary btn-xs" data-title="Edit" data-toggle="modal" name="editar" type="button" data-target="#squarespaceModal" value="' + element.id + '"wainer"><span class="glyphicon glyphicon-pencil">EDITAR</span></button></p></td>';
        var row = "<tr>";
        row += "<td>" + element.id + "</td>"
        row += "<td>" + element.title_of_meeting + "</td>";
        row += "<td>" + element.date + "</td>";
        row += "<td>" + element.user_id + "</td>";
        row += "<td>" + element.is_virtual + "</td>";
        row += "<td>" + button + "</td>";
        row += "<tr/>";
        $("#meeting").append(row);
    });
}
function createMeeting(){
    var title_of_meeting = document.getElementById("title_of_meeting").value;
    var date = document.getElementById("date").value;
    var user_id=document.getElementById("Users").value;
    var is_virtual=document.getElementById("is_Vt").value;
    var meeting = {};
    meeting.title_of_meeting = title_of_meeting
    meeting.date = date
    meeting.user_id = user_id
    meeting.is_virtual= is_virtual
    var token = localStorage.getItem("TOKEN");
    $.ajax({
        method: "POST",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/meetings",
        data: {
            "meeting": meeting
        }
    }).done(function(response) {
        console.log(response);
        alert("Reunion Creada");
        location.reload(true);

    }).fail(function(error) {
        console.log(error);
    });

}
function deleteMeeting() {
    var idReunion = document.getElementById("txtId").value;
    alert(idReunion);
    var token = localStorage.getItem("TOKEN");
    $.ajax({
        type: "DELETE",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/meetings/" + idReunion,
        complete: function() {
            alert("Deleted successfully");
            location.reload(true);
        }
    });
    event.preventDefault();
}
function updateMeeting() {
  var id_meeting=  document.getElementById("txtId").value ;
  var title_of_meeting=  document.getElementById("txttitle_of_meetting").value ;
    var date= document.getElementById("txtdate").value;
    var user_id=  document.getElementById("txtIdUsuario").value;
  var is_virtual=document.getElementById("is_Vt").value;
    var meeting = {};
    meeting.title_of_meeting = title_of_meeting
    meeting.date = date
    meeting.user_id = user_id
    meeting.is_virtual= is_virtual
    var token = localStorage.getItem("TOKEN");
    $.ajax({
        method: "PUT",
        headers: {
            'Authorization': token
        },
        url: "http://localhost:3000/meetings/" + id_meeting,
        data: {
            "meeting": meeting
        }
    }).done(function(response) {
        console.log(response);
        alert(" Reunion actualizada");
        location.reload(true);
    }).fail(function(error) {
        console.log(error);
        alert("Error al Actualizar la Reunion");
    });
}