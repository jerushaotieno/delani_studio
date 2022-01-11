$(document).ready(function() {

    //toggle for the "What We Do" section

    $('#design_icon').click(function() {
        $(this).hide();
        $('.design_content').show();
    });

    $('.design_content').click(function() {
        $(this).hide();
        $('#design_icon').show();
    });

    $('#development_icon').click(function() {
        $(this).hide();
        $('.development_content').toggle();
    });

    $('.development_content').click(function() {
        $(this).hide();
        $('#development_icon').toggle();
    });

    $('#product_management_icon').click(function() {
        $(this).hide();
        $('.product_management_content').toggle();
    });

    $('.product_management_content').click(function() {
        $(this).hide();
        $('#product_management').toggle();
    });

    $("form#contact_form").submit(function(event) {
        event.preventDefault();
        var name = $("#contact_name").val();
        alert("Hi " + name + " Thank you for getting in touch. Your email is well received.");
        document.getElementById("contact_form").reset();
    })
});



