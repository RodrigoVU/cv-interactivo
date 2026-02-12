// =============================
// BOTÓN MODO OSCURO
// =============================

$(document).ready(function () {

    $("#modo-btn").click(function () {
        $("body").toggleClass("dark-mode");
    });

});
// =============================
// ANIMACIÓN AL HACER SCROLL
// =============================

$(window).on("scroll", function () {

    $(".seccion").each(function () {

        let posicion = $(this).offset().top;
        let scrollActual = $(window).scrollTop();
        let alturaVentana = $(window).height();

        if (scrollActual + alturaVentana > posicion + 100) {
            $(this).addClass("visible");
        }

    });

});
// =============================
// VALIDACIÓN FORMULARIO
// =============================

$("#formulario").submit(function (e) {

    e.preventDefault();

    let valido = true;

    // Validar nombre
    if ($("#nombre").val().trim() === "") {
        $("#error-nombre").text("El nombre es obligatorio");
        valido = false;
    } else {
        $("#error-nombre").text("");
    }

    // Validar email
    if ($("#email").val().trim() === "") {
        $("#error-email").text("El email es obligatorio");
        valido = false;
    } else {
        $("#error-email").text("");
    }

    // Validar mensaje
    if ($("#mensaje").val().trim() === "") {
        $("#error-mensaje").text("El mensaje no puede estar vacío");
        valido = false;
    } else {
        $("#error-mensaje").text("");
    }

    if (valido) {
        alert("Formulario enviado correctamente (simulación)");
        $("#formulario")[0].reset();
    }

});
// =============================
// ANIMACIÓN BARRAS HABILIDADES
// =============================

$(window).on("scroll", function () {

    $(".barra").each(function () {

        let posicion = $(this).offset().top;
        let scrollActual = $(window).scrollTop();
        let alturaVentana = $(window).height();

        if (scrollActual + alturaVentana > posicion + 50) {

            let porcentaje = $(this).data("width");
            $(this).css("width", porcentaje);
            $(this).text(porcentaje);
        }

    });

});
// =============================
// CAMBIAR COLOR SECCIÓN SOBRE MÍ
// =============================

$("#color-btn").click(function () {

    $("#sobre-mi").toggleClass("fondo-activo");

});
