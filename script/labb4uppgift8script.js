

function myBirthdDay() {
    var month = prompt("What month were you born? (1-12)");
    var day = prompt("What day were you born? (1-31)");
    if (((isNaN(month) == false) && (month !== "")) && (isNaN(day) == false) && (day !== "")) {
        if ((month < 13) && (month > 0) && (day < 32) && (day > 0)) {
            var monthNumber = parseInt(month, 10);
            var dayNumber = parseInt(day, 10);
            var monthRounded = (Math.round(monthNumber) - 1);
            var dayRounded = Math.round(dayNumber);
            console.log("month " + monthRounded);
            console.log("day " + dayRounded);
            var thisYear = new Date().getFullYear();
            var nextBirthDay = new Date(thisYear, monthRounded, dayRounded);
            var currentTimeMs = Date.now();
            console.log(currentTimeMs);
            var differenceMs = (nextBirthDay - currentTimeMs);
            var differenceDaysPositive = Math.round((differenceMs / 86400000));
            var differenceDaysNegative = Math.round((86400000 / differenceMs));
            //console.log(differenceDaysNegative);
            console.log(differenceMs);
            console.log(differenceDaysPositive);
            console.log(differenceDaysNegative);
            if ((differenceDaysPositive > 0) && (differenceDaysNegative !== 0)) {
                console.log("There are " + differenceDaysPositive + " days until your birthday!");
                //console.log("The difference in milliseconds is: " + differenceMs);
            }
            else if ((differenceDaysNegative < 0) && (differenceDaysPositive !== 0)){
                //alert("You have already had your birthday this year!, but still ");
                console.log("Your birthday was " + differenceDaysNegative + " days ago!");
            }
            else if ((differenceDaysPositive == 0) || (differenceDaysPositive == -0) || (differenceDaysNegative == 0) || (differenceDaysNegative == -0)){
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