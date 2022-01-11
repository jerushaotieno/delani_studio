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
});

