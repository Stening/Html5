

//i save the 2 inputs and check if they are numbers and within the ammount of months/days 
function myBirthdDay() {
    var month = prompt("What month were you born? (1-12)");
    var day = prompt("What day were you born? (1-31)");
    if (((isNaN(month) == false) && (month !== "")) && (isNaN(day) == false) && (day !== "")) {
        if ((month < 13) && (month > 0) && (day < 32) && (day > 0)) {
            var monthNumber = parseInt(month, 10);
            var dayNumber = parseInt(day, 10);
            var monthRounded = (Math.round(monthNumber) - 1);//the month index starts at 0 so january(1st month) is number 0.
            var dayRounded = (Math.round(dayNumber) + 1);//i dont know why i needed this one
            //i use the Date object to collect the active date and i create new dates wich i then compare to see the diference(in ms wich i also convert to days)
            var thisYear = new Date().getFullYear();
            var nextBirthDay = new Date(thisYear, monthRounded, dayRounded);
            var currentTimeMs = Date.now();
            var differenceMs = (nextBirthDay - currentTimeMs);
            var differenceDaysPositive = Math.round((differenceMs / 86400000));
            var nextBirthDayYear = (new Date().getFullYear() + 1);
            var birthdayNextYear = new Date(nextBirthDayYear, monthRounded, (dayRounded));
            var differenceMsNextYear = (birthdayNextYear - currentTimeMs);
            var differenceDaysPositiveNextYear = Math.round((differenceMsNextYear / 86400000));
            if (((differenceDaysPositive)  > 0)) {
                console.log("There are " + (differenceDaysPositive) + " days until your birthday!");
            }
            else if (((differenceDaysPositive) < 0)){
                console.log("Your birthday was " + (differenceDaysPositive * -1) + " days ago, but dont worry, you will have another in " + differenceDaysPositiveNextYear + " days!");
            }
            else{
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