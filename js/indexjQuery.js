$(document).ready(function() {
    // To change theme of the website
    $('#black').click(function() { $('.theme').css('background-color', '#272727'); });
    $('#red').click(function() { $('.theme').css('background-color', 'red'); });
    $('#green').click(function() { $('.theme').css('background-color', 'green'); });
    $('#purple').click(function() { $('.theme').css('background-color', 'purple'); });
    $('#blue').click(function() { $('.theme').css('background-color', 'blue'); });
    $('#orange').click(function() { $('.theme').css('background-color', 'orange'); });
    
    $(function() {
        var date = new Date();
        
        $('#endDate').val(date.getFullYear() + '-' + ('0' + (date.getMonth() + 1)).slice(-2) + '-' + ('0' + date.getDate()).slice(-2));
        $('#startDate').val(date.getFullYear() + '-01-01');
    });
});