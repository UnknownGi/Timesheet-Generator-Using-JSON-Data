$(document).ready(function(){ 
    var selectedUser = 0;
    
    // Get All Userdata for dropdown box
    $(function() {
        $.ajax({
            url: 'json/project.json',
            dataType: 'json',
            type: 'get',
            cache: 'false',
            
            // Success function
            success: function(data) {
                var uniqueName = [];
                $.each(data, function(key, value){
                    var name = value.Assignee;
                    
                    var bool = true;
                    for ( i=0; i<uniqueName.length && bool==true; ++i ) {
                        if ( uniqueName[i] == name ) bool = false;
                    }
                    
                    if ( bool == true ) uniqueName.push(name);
                });
                
                for ( i=0; i<uniqueName.length-1; ++i ) {
                    $('#userOpt').append('<li><a href="#"><input type="checkbox">' + uniqueName[i] + '</a></li>');
                }

                $('#userOpt a').click(function(e) {
                    e.stopPropagation();
                    if ( $(this).find('input:checkbox').is(':checked') ) {
                        --selectedUser;
                        if ( selectedUser > 0 ) $('#userCountLabel').text(selectedUser.toString() + ' Username Selected');
                        else {
                            $('#userCountLabel').text('Select Username');
                            $('#createTimesheet').prop('disabled', true);
                        }
                        
                        $(this).find('input:checkbox').attr('checked', false);
                    }
                    else if ( !($(this).find('input:checkbox').is(':checked')) ) {
                        ++selectedUser;
                        if ( selectedUser > 0 ) $('#createTimesheet').prop('disabled', false);
                        $('#userCountLabel').text(selectedUser.toString() + ' Username Selected');
                        $(this).find('input:checkbox').prop('checked', true);
                    }
                });
            }
        });
    });
    
    $('#createTimesheet').click(function() {
        if ( selectedUser > 0 ) $('#displayUserNumber').html('Table Generated For <strong>' + selectedUser.toString() + '</strong> Users!');
        else $('#displayUserNumber').html('No Table Created!');
        
        $('.userData').remove();
    });
});