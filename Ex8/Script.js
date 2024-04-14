var seats = [0,0,0,0,0,0,0,0,0,0];

var firstCount = 0;

var economyCount = 0; function bookSeat() {
var classSelection = document.getElementById("class-selection"); var selectedClass = parseInt(classSelection.value);
var element = linearSearch(seats, selectedClass); if (element == -1) {
if (selectedClass === 1) {

document.getElementById("output").innerHTML = "First Class is fully booked.";

}

else

{

document.getElementById("output").innerHTML = "Economy Class is fully booked.";

}

return;

}

boardingPass(selectedClass, element);

}

function linearSearch(theArray, input) { if (input === 1) {
for (var n = 0; n < 6; n++) {

if (theArray[n] == 0) return n;

}

} else if (input === 2) {

for (var n = 6; n < 10; n++) { if (theArray[n] == 0) return n;
}

}

return -1;

}

function boardingPass(input, element) { if (input === 1) {
document.getElementById("output").innerHTML = "---------- BOARDING PASS	<br/>" +
"You are allocated in the First Class<br/>" + "Your seat number is " + element + "<br/> <br/>"; seats[element] = 1;
  firstCount++;

} else if (input === 2) {

document.getElementById("output").innerHTML = "---------- BOARDING PASS	<br/>" +

"You are allocated in the Economy Class<br/>" + "Your seat number is " + element + "<br/> <br/>"; seats[element] = 1;
economyCount++;

}

}
