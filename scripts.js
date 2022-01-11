$(document).ready(function() {

    //toggle for the "What We Do" section

    $('.toggle_row >img').click(function() {
        $(this).toggleClass('d-none');
        $('.design_content').toggleClass('d-none');
    });

    $('.design_content').click(function() {
        $(this).toggleClass('d-none');
        $('.toggle_row >img').toggleClass('d-none');
    });

//     $('#development_icon').click(function() {
//         $(this).hide();
//         $('.development_content').toggle();
//     });

//     $('.development_content').click(function() {
//         $(this).hide();
//         $('#development_icon').toggle();
//     });

//     $('#product_management_icon').click(function() {
//         $(this).hide();
//         $('.product_management_content').toggle();
//     });

//     $('.product_management_content').click(function() {
//         $(this).hide();
//         $('#product_management').toggle();
//     });

//JS code for contacting us via email
    $("#contact_form").submit(function(event) {
        event.preventDefault();
        var name = $("#contact_name").val();
        alert("Hi " + name + ", Thank you for getting in touch. Your email is well received.");
        $(this)[0].reset();
    })
});



