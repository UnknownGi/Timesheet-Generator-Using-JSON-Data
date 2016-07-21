var getHrs = function ( param ) {
    var parts = param.split(" ");
    var startTime = parts[0];
    var endTime = parts[1];

    if ( checkDate(startTime) && checkDate(endTime) ) {
        var startSplit = startTime.split("/");
        var endSplit = endTime.split("/");

        var startDay = parseInt(startSplit[0]);
        var startMonth = parseInt(startSplit[1]);
        var startYear = parseInt(startSplit[2]);

        var endDay = parseInt(endSplit[0]);
        var endMonth = parseInt(endSplit[1]);
        var endYear = parseInt(endSplit[2]);

        var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

        if ( endYear < startYear ) return "Invalid Date";
        else {
            var dayCounter = 0;
            while ( 1 ) {
                if ( startDay==endDay && startMonth==endMonth && startYear==endYear ) break;

                ++startDay
                if ( startDay > monthLength[startMonth-1] ) {
                    startDay = 1;
                    ++startMonth;
                    if ( startMonth > 12 ) {
                        startMonth = 1;
                        ++startYear;

                        if ( startYear%4 == 0 ) monthLength[1] = 29;
                        else monthLength[1] = 28;
                    }
                }

                ++dayCounter;
            }

            return dayCounter*24;
        }
    } else return "Invalid Date";
}

var checkDate = function ( param ) {
	var regex = /(^\d{1}|^\d{2})\/(\d{1}|\d{2})\/\d{4}$/;

	var parts = param.split("/");
    var day = parseInt(parts[0], 10);
    var month = parseInt(parts[1], 10);
    var year = parseInt(parts[2], 10);

    if( year < 0 || ( year > new Date().getFullYear() && month > new Date().getMonth() && day > new Date().getDate() ) || month <= 0 || month > 12) return false;

    var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];

    if( year%4==0 )
        monthLength[1] = 29;

    return regex.test(param) && day > 0 && day <= monthLength[month - 1];
};

