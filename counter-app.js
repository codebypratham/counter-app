const add = document.getElementById("increase");
const sub = document.getElementById("decrease");
const reset = document.getElementById("reset");
const counterDisplay = document.querySelector(".input-text");

let counter = parseInt(counterDisplay.value);
document.onkeydown = checkKey;

function colorChanger(){
    if(counter < 0 ){
    counterDisplay.style.color = "red";}
    else{counterDisplay.style.color = "black";
}
}


function checkKey(e) {

    if (e.keyCode == '38') {
        // up arrow
        increasing();
    }
    else if (e.keyCode == '40') {
        // down arrow
        decreasing()
    }
    else if (e.keyCode == '37') {
       // left arrow
       decreasing()
    }
    else if (e.keyCode == '39') {
       // right arrow
       increasing()
    }else if (e.keyCode == "32"){
        resetting()
    }

}
function increasing() {
  counter++;
  counterDisplay.value = counter;
  colorChanger()
}

function decreasing() {
  counter--;
  counterDisplay.value = counter;
  colorChanger()
}

function resetting() {
  counter = 0;
  counterDisplay.value = counter;
  colorChanger()
}




add.addEventListener("click", increasing);
sub.addEventListener("click", decreasing);
reset.addEventListener("click", resetting);
