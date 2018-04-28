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
    $('#btn_login').click(function(event) {});
    $('#btn_login').click(function(event) {});
    $('#btn_login').click(function(event) {});
});

function go_to_user() {
    window.location.href = 'Usuarios.html';
}

function go_to_client() {
    window.location.href = 'Clientes.html'
}

function home() {
    window.location.href = 'Main.html'
}