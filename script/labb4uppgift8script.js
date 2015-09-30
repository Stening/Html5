


function myBirthdDay() {
    var month = prompt("What month were you born? (1-12)");
    var day = prompt("What day were you born? (1-31)");
    if (((isNaN(month) == false) && (month !== "")) && (isNaN(day) == false) && (day !== "")) {
        if ((month < 13) && (month > 0) && (day < 32) && (day > 0)) {
            var monthNumber = parseInt(month, 10);
            var dayNumber = parseInt(day, 10);
            var monthRounded = (Math.round(monthNumber) - 1);
            var dayRounded = (Math.round(dayNumber) + 1);
            //console.log("month " + monthRounded);
            //console.log("day " + dayRounded);
            var thisYear = new Date().getFullYear();
            //console.log(thisYear);
            var nextBirthDay = new Date(thisYear, monthRounded, dayRounded);
            var currentTimeMs = Date.now();
            //console.log(currentTimeMs);
            var differenceMs = (nextBirthDay - currentTimeMs);
            var differenceDaysPositive = Math.round((differenceMs / 86400000));
            //console.log(differenceDaysNegative);
            //console.log(differenceMs);
            //console.log(differenceDaysPositive);
            //console.log(differenceDaysNegative);
            var nextBirthDayYear = (new Date().getFullYear() + 1);
            var birthdayNextYear = new Date(nextBirthDayYear, monthRounded, (dayRounded - 1));
            var differenceMsNextYear = (birthdayNextYear - currentTimeMs);
            var differenceDaysPositiveNextYear = Math.round((differenceMsNextYear / 86400000));
            if (((differenceDaysPositive)  > 0)) {
                console.log("There are " + (differenceDaysPositive) + " days until your birthday!");
                //console.log("The difference in milliseconds is: " + differenceMs);
            }
            else if (((differenceDaysPositive) < 0)){
                //alert("You have already had your birthday this year!, but still ");
                console.log("Your birthday was " + (differenceDaysPositive * -1) + " days ago, but dont worry, you will have another in " + differenceDaysPositiveNextYear + " days!");
            }
            else{
                //alert("You have already had your birthday this year!, but still ");
                console.log("Happy birthday!!");
            }
        }
        else {
            alert("please enter the correct number!");
        }
    }
    else {
            alert("please enter the correct number!");
        }
}

// fixa de negativa dagarna!!
// varför behöver jag + 1 i uträkningarna av dags-skillnadenra???



















