var number = 0;

// Decrease number and turn count red
document.getElementById("decrease").onclick = function() {
    number--;
    document.getElementById("count").innerHTML = number;

    if(number < 0) {
        document.getElementById("count").style.color = "red";
    }
}

// Increase number and turn count green
document.getElementById("increase").onclick = function() {
    number++;
    document.getElementById("count").innerHTML = number;

    if(number >= 0) {
        document.getElementById("count").style.color = "#26c026";
    }
}

// Save number
document.getElementById("save").onclick = function() {
    document.getElementById("saved").innerHTML = number;
}
