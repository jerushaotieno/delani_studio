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

    // $('.toggle_row >img').click(function() {
    //     $(this).toggleClass('d-none');
    //     $('.design_content').toggleClass('d-none');
    // });

    // $('.design_content').click(function() {
    //     $(this).toggleClass('d-none');
    //     $('.toggle_row >img').toggleClass('d-none');
    // });

    $('.portfolio_row_item').each(function(){
        $(this).hover(function mouseEnter(){
            $('.portfolio_row_item >p').removeClass('d-none')
        },function mouseLeave(){
            $('.portfolio_row_item >p').addClass('d-none')
        })
    })

//JS code for contacting us via email
    $("#contact_form").submit(function(event) {
        event.preventDefault();
        var name = $("#contact_name").val();
        alert("Hi " + name + ", Thank you for getting in touch. Your email is well received.");
        $(this)[0].reset();
    })
});



