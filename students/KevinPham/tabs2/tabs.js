$(document).ready(function() {

    // Hide the contents of a tab if it's not selected
    $('.tabsList > li').not('.active').each(function() {
        var hash = $(this).find('a').prop('hash');
        
        $(hash).hide();
    });


    $('.tabsList a').on('click', function() {
        // Previously selected tab
        var $previous = $('.active').find('a');  

        // Deselect it
        $previous.closest('li').removeClass('active');

        // Hide the contents
        $($previous.prop('hash')).hide();

        // Select the new tab and show it's contents
        $(this).closest('li').addClass('active');  
        $(this.hash).show();
    });

});
