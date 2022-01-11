$(document).ready(function() {

    // JS code to add toggle effect for the "What We Do" section

    $('.toggle_row >img').click(function() {
        $(this).toggleClass('d-none');
        $('.design_content').toggleClass('d-none');
    });

    $('.design_content').click(function() {
        $(this).toggleClass('d-none');
        $('.toggle_row >img').toggleClass('d-none');
    });

    $('.toggle_row >img').click(function() {
        $(this).toggleClass('d-none');
        $('.development_content').toggleClass('d-none');
    });

    $('.development_content').click(function() {
        $(this).toggleClass('d-none');
        $('.toggle_row >img').toggleClass('d-none');
    });

    $('.toggle_row >img').click(function() {
        $(this).toggleClass('d-none');
        $('.product_management_content').toggleClass('d-none');
    });

    $('.product_management_content').click(function() {
        $(this).toggleClass('d-none');
        $('.toggle_row >img').toggleClass('d-none');
    });

//JS code to create overlay effect on the "portfolio section"

    $('.portfolio_row_item').each(function(){
        $(this).hover(function mouseEnter(){
            $('.portfolio_row_item >p').removeClass('d-none')
        },function mouseLeave(){
            $('.portfolio_row_item >p').addClass('d-none')
        })
    });

//JS code for contacting us via email

    $("#contact_form").submit(function(event) {
        event.preventDefault();
        var name = $("#contact_name").val();
        alert("Hi " + name + ", Thank you for getting in touch. Your email is well received.");
        $(this)[0].reset();
    })
});



