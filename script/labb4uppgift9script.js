/*
//en ofärdig loop med input av användaren
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
/*
cell[0][0] = ”Förnamn:”;
cell[0][1] = ”Efternamn:”;
cell[0][2] = ”Telefon:”;
cell[1][0] = ”Haris”;
cell[1][1] = ”Kljajic”;
cell[1][2] = ”7716”;
cell[2][0] = ”Mats”;
cell[2][1] = ”Loock”;
cell[2][2] = ”7714”;
*/




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





/*
var sout;
sout = "<table border='1' width='300' cellspacing='0' cellpadding='3'>";
for (var i = 1; i <= 10; i++) {
sout = sout + "<tr>";
for (var j = 1; j <= 10; j++) {
sout = sout + "<td>" + i * j + "</td>";
}
sout = sout + "</tr>";
}
sout = sout + "</table>";
document.write (sout);



}

*/





/*
    
    console.log(header);
    console.log(row1);
    console.log(row2);
    //table.open();
    document.write(
        "<table>\n" +
            "<thead>\n" +
                "<tr>\n" +
                    "<th colspan=3>" + header[0] + "</th>" + "<th>" + header[1] + "</th>" + "<th>" + header[2] + "</th>" +
                "</tr>\n" +
            "</thead>\n" +
                "<tbody>" +
                    "<tr BGcolor=#D1DBBD>" +
                        "<td colspan=3>" + row1[0] + "</td>\n" +
                        "<td>" + row1[1] + "</td>\n" +
                        "<td>" + row1[2] + "</td>\n" +
                    "</tr>\n" +
                    "<tr>\n" +
                        "<td colspan=3>" + row2[0] + "</td>\n" +
                        "<td>" + row2[1] + "</td>\n" +
                        "<td>" + row2[2] + "</td>\n" +
                    "</tr>\n" +
            "</tbody>\n" +
        "</table>");
         //table.close();

//document.onload = function(){
}

*/