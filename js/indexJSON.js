$(document).ready(function() {
    var array = [];
    var username = [];
    var startIndex = 0, endIndex = 0;
    
    $('#forward').click(function() {
        if ( $('#displayUserNumber').html() == 'No Table Created!' ) alert('No Table Generated');
        else if ( endIndex >= array.length-3 ) alert('No Record Exists After These Values');
        else {
            // Clearing Off Data!
            for ( i=0; i<username.length; ++i ) {
                var user = (/ /).test(username[i]) ? username[i].split(" ")[0] : username[i];
                $('#' + user + ' td:not(:first-child)').each(function() {
                    $(this).html('');
                });
                
                $('#dateRow td:not(:first-child)').each(function() {
                    $(this).html('-');
                });
                
                $('#' + user + ' .total').html('');
            }
            
            startIndex = endIndex;
            var index = endIndex, columnIndex = 0;
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                
                do {
                    var user = (/ /).test(array[index]) ? array[index].split(" ")[0] : array[index];
                    var todayDate = array[index+1];
                    var dayCounter = new Date(array[index+1]).getDay();
                    var todayDay = days[dayCounter];

                    $('#day' + columnIndex).html(todayDay);
                    $('#date' + columnIndex).html(array[index+1]);
                    
                    // If Data is already present in Cell or not?
                    if ( $('#' + user + ' .hour' + columnIndex).html().trim() == '' ) $('#' + user + ' .hour' + columnIndex).html(parseFloat(array[index+2]/3600).toFixed(2));
                    else $('#' + user + ' .hour' + columnIndex).html((parseFloat($('#' + user + ' .hour' + columnIndex).html().trim()) + parseFloat(array[index+2]/3600)).toFixed(2));
                    
                    index += 3;

                    var prevDate = todayDate;
                    if ( prevDate != array[index+1] ) ++columnIndex;
                } while ( columnIndex < 7 && index < array.length );
                
                // Setting Where the index Ended
                endIndex = index;
                if ( index >= array.length ) endIndex = array.length-3;
                
                // Adding Result in Total Tab!
                for ( i=0; i<username.length; ++i ) {
                    var user = (/ /).test(username[i]) ? username[i].split(" ")[0] : username[i];
                    var total = 0;
                    $('#' + user + ' td:not(:first-child)').each(function() {
                        if ( $(this).html().trim() != '' ) total = total + parseFloat($(this).html().trim());
                    });
                    
                    $('#' + user + ' .total').html('<strong>' + total.toFixed(2).toString() + '</strong>');
                }
        }
    });
    
    $('#backward').click(function() {
        if ( $('#displayUserNumber').html() == 'No Table Created!' ) alert('No Table Generated');
        else if ( startIndex == 0 ) alert('No Record Exists Before These Values');
        else {
            // Clearing Off Data!
            for ( i=0; i<username.length; ++i ) {
                var user = (/ /).test(username[i]) ? username[i].split(" ")[0] : username[i];
                $('#' + user + ' td:not(:first-child)').each(function() {
                    $(this).html('');
                });
                
                $('#dateRow td:not(:first-child)').each(function() {
                    $(this).html('-');
                });
                
                $('#' + user + ' .total').html('');
            }
            
            endIndex = startIndex;
            var index = startIndex, columnIndex = 6;
            var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                
                do {
                    var user = (/ /).test(array[index]) ? array[index].split(" ")[0] : array[index];
                    var todayDate = array[index+1];
                    var dayCounter = new Date(array[index+1]).getDay();
                    var todayDay = days[dayCounter];

                    $('#day' + columnIndex).html(todayDay);
                    $('#date' + columnIndex).html(array[index+1]);
                    
                    // If Data is already present in Cell or not?
                    if ( $('#' + user + ' .hour' + columnIndex).html().trim() == '' ) $('#' + user + ' .hour' + columnIndex).html(parseFloat(array[index+2]/3600).toFixed(2));
                    else $('#' + user + ' .hour' + columnIndex).html((parseFloat($('#' + user + ' .hour' + columnIndex).html().trim()) + parseFloat(array[index+2]/3600)).toFixed(2));
                    
                    index -= 3;

                    var prevDate = todayDate;
                    if ( prevDate != array[index+1] ) --columnIndex;
                } while ( columnIndex >= 0 && index >= 0 );
                
                // Setting Where the index Ended
                startIndex = index;
                if ( index < 0 ) startIndex = 0;
                
                // Adding Result in Total Tab!
                for ( i=0; i<username.length; ++i ) {
                    var user = (/ /).test(username[i]) ? username[i].split(" ")[0] : username[i];
                    var total = 0;
                    $('#' + user + ' td:not(:first-child)').each(function() {
                        if ( $(this).html().trim() != '' ) total = total + parseFloat($(this).html().trim());
                    });
                    
                    $('#' + user + ' .total').html('<strong>' + total.toFixed(2).toString() + '</strong>');
                }
        }
    })
    
    $('#createTimesheet').click(function(){
        $.ajax({
            url: 'json/project.json',
            dataType: 'json',
            type: 'get',
            cache: 'false',

            // Timesheet Displaying Success Function!
            success: function(data) {
                // Fetching Which usernames were ticked!
                $('#userOpt input:checkbox').each(function() {
                    if ( $(this).is(':checked') ) username.push(($(this)).closest('a').text());
                });
                
                for ( i=0; i<username.length; ++i ) {
                    var user = (/ /).test(username[i]) ? username[i].split(" ")[0] : username[i]
                    $('#dynamicTable tr:last').after('<tr class="userData" id="'+user+'"><td class="name"><strong>' + username[i] + '</strong></td><td class="hour0"></td><td class="hour1"></td><td class="hour2"></td><td class="hour3"></td><td class="hour4"></td><td class="hour5"></td><td class="hour6"></td><td class="total"></td></tr>');
                }
                
                // Fetching Dates
                var startDate = new Date($('#startDate').val());
                var endDate = new Date($('#endDate').val());
                
                $.each(data, function(key, value) {
                    for ( i=0; i<username.length; ++i ) {  
                        if ( value.Assignee == username[i] && new Date((value.Updated).split(' ')[0]) >= startDate && new Date((value.Updated).split(' ')[0]) <= endDate ) {
                            array.push(value.Assignee);
                            array.push((value.Updated).split(' ')[0]);
                            array.push(value['Time Spent']);
                        }
                    }
                });
                
                // Sort By Date!
                for ( i=0; i<array.length; i+=3 ) {
                    for ( j=0; j<array.length; j+=3 ) {
                        if ( array[i+1] < array[j+1] ) {
                            tmpName = array[i];
                            tmpDate = array[i+1];
                            tmpHr = array[i+2];
                            
                            array[i] = array[j];
                            array[i+1] = array[j+1];
                            array[i+2] = array[j+2];
                            
                            array[j] = tmpName;
                            array[j+1] = tmpDate;
                            array[j+2] = tmpHr;
                        }
                    }
                }
                
                // Printing Data onto Cell
                var index = 0, columnIndex = 0;
                var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
                
                do {
                    var user = (/ /).test(array[index]) ? array[index].split(" ")[0] : array[index];
                    var todayDate = array[index+1];
                    var dayCounter = new Date(array[index+1]).getDay();
                    var todayDay = days[dayCounter];

                    $('#day' + columnIndex).html(todayDay);
                    $('#date' + columnIndex).html(array[index+1]);
                    
                    // If Data is already present in Cell or not?
                    if ( $('#' + user + ' .hour' + columnIndex).html().trim() == '' ) $('#' + user + ' .hour' + columnIndex).html(parseFloat(array[index+2]/3600).toFixed(2));
                    else $('#' + user + ' .hour' + columnIndex).html((parseFloat($('#' + user + ' .hour' + columnIndex).html().trim()) + parseFloat(array[index+2]/3600)).toFixed(2));
                    
                    index += 3;

                    var prevDate = todayDate;
                    if ( prevDate != array[index+1] ) ++columnIndex;
                } while ( columnIndex < 7 && index < array.length );
                
                // Setting Where the index Ended
                startIndex = 0;
                endIndex = index;
                if ( index >= array.length ) endIndex = array.length-3;
                
                // Adding Result in Total Tab!
                for ( i=0; i<username.length; ++i ) {
                    var user = (/ /).test(username[i]) ? username[i].split(" ")[0] : username[i];
                    var total = 0;
                    $('#' + user + ' td:not(:first-child)').each(function() {
                        if ( $(this).html().trim() != '' ) total = total + parseFloat($(this).html().trim());
                    });
                    
                    $('#' + user + ' .total').html('<strong>' + total.toFixed(2).toString() + '</strong>');
                }
            }   
        });    
    });
});