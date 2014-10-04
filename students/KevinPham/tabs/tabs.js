// Tabs

$(document).ready(function () {
    // Select Home tab as default
    $(".nav li:first").addClass('tabSelected');
    $("#tab1").show();
    var tabNum = 1;
    // Tab selection and Showing/hiding content logic
    $(".tab").click(function () {
	tabNum = $(this).val();
        // Highlight existing tab, unhighlight the rest
        $(".tab").removeClass('tabSelected');
        $(this).addClass('tabSelected');
        $(".contents").hide(); // Hide all the contents divs
        $("#tab" + tabNum).fadeIn(); // Show selected content
    });
});

// JSFIDDLE: http://jsfiddle.net/kpham13/nc1po9om/2/
