$(document).ready(function() {
    $('#btn_login').click(function(event) {
        validate_Fields();
        createSession();
    });
});

function validate_Fields() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    try {
        if (username == "" && password == "") {
            alert("ingrese lo campos solicitados");
            return;
        }
    } catch (error) {
        alert(error);
    }
}

function createSession() {
    var username = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var session = {};
    session.username = username;
    session.password = password;
    $.ajax({
        method: "POST",
        url: "http://localhost:3000/sessions",
        data: {
            "session": session
        }
    }).done(function(response) {
        console.log(response);
        if (response == undefined) {
            alert("usuario no registrado");
            location.reload(true);
        } else {
            alert("usuario registrado");
            localStorage.setItem("TOKEN", response.token);
            window.location.href = 'Main.html?token=' + encodeURIComponent(response.token);
        }
    }).fail(function(error) {
        alert("error");
    });
}