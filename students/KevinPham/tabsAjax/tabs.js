$(document).ready(function() {
    var url = 'http://rs.hankyates.com:3000/content';

    getTabs(url)
        .done(setupTabs);
});

function getTabs(url) {
    return $.getJSON(url, function(data) {
        data.forEach(function (tab, index){
            // Add tab to tabsList
            $('<li/>')
                .append(
                    $('<a/>')
                        .addClass('inner')
                        .attr('href', '#' + tab.name)
                        .html(capitalize(tab.name)))
                .appendTo('.tabsList');

            // Add content to tabsContent
            $('<div/>')
                .attr('id', tab.name)
                .append('<h2>' + capitalize(tab.name) + '</h2>')
                .append('<p>' + tab.content + '</p>')
                .appendTo('.tabsContent');

        });
    });
}

function setupTabs() {
    $('.tabsList li').first().addClass('active');

    // Hide contents of a tab if not selected
    $('.tabsList > li').not('.active').each(function() {
        var hash = $(this).find('a').prop('hash');
        
        $(hash).hide();
    });

    $('.tabsList a').on('click', function() {
        // Previously selected tab
        var $previous = $('.active').find('a');  

        // Deselect
        $previous.closest('li').removeClass('active');

        // Hide content
        $($previous.prop('hash')).hide();

        // Select new tab and show contents
        $(this).closest('li').addClass('active');  
        $(this.hash).show();
    });
}

function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.substring(1);
}
