/*
//this is incomplete


//alert("the page is loaded!");
function generateTable() {
    var cellCounter = 1;
    var rowcounter = 1;
    var rowInputIsDone = false;
    var rcellInputIsDone = false;
    var matrix = [];
    matrix[1] = prompt("input the header of the matrix");
    while(rowInputIsDone === false){
        var rowInput = prompt('Enter the content of ' + rowcounter + ' of the matrix, type "finnish" to complete the row');
        if (rowInput === "finnish"){
            rowInputIsDone = true;
        }
        else if (rowInputIsDone === true){
        }
        else{
            matrix[cellCounter] += rowInput;
        }
*/





//here, with 2 for loops i can do things for every row and every cell
//when the first for loop runs i collect the required html code and put it in tableOutput, the second goes through the 2nd dimension array and adds cell-specific code like <td> tags and the text, 
//also adds into tableOutput.
//at the end i add the last table tag and finally print out the whole variable in the html code and the console
function generateTable(inputArray) {
    var table = document.getElementById("matrix");
    var tableOutput = "<table border='1' cellpadding='3'>\n";
    var numberOfRows = inputArray.length;
    for (var i = 0; i < numberOfRows; i++) {
        if(i % 2 === 0){
        tableOutput += "<tr>\n";
        }
        else{
            tableOutput += "<tr BGcolor=#A6B2BE>\n";
        }
        var currentCell = inputArray[i];
        for (var j = 0; j < currentCell.length; j++) {
            if(i === 0){
                tableOutput +=  ("<th>" + currentCell[j] + "</th>\n");
            }
            else{
            tableOutput +=  ("<td>" + currentCell[j] + "</td>\n");
            }
        }
        tableOutput += "</tr>\n";
    }
    tableOutput += "</table>";
    table.insertAdjacentHTML("afterend", tableOutput);
    console.log(tableOutput);
}






