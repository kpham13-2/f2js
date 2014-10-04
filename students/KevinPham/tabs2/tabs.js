$(document).ready(function() {

    // Hide contents of a tab if not selected
    $('.tabsList > li').not('.active').each(function() {
        var hash = $(this).find('a').prop('hash');
        
        $(hash).hide();
    });


    $('.tabsList a').on('click', function() {
        // Previously selected tab
        var $previous = $('.active').find('a');  

        // Deselect it
        $previous.closest('li').removeClass('active');

        // Hide content
        $($previous.prop('hash')).hide();

        // Select new tab and show contents
        $(this).closest('li').addClass('active');  
        $(this.hash).show();
    });

});
