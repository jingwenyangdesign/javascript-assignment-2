// Do your work in this file.
var boxes = document.querySelectorAll(".box");
var color;
var n = boxes.length;
console.log("There are " + boxes.length + " boxes!");

if (201 <= n && n <= 300) {
    color = "yellow";
} else if (301 <= n && n <= 400) {
    color = "green";
} else if (401 <= n && n <= 500) {
    color = "purple";
} else if (501 <= n && n <= 600) {
    color = "orange";
} else if (601 <= n && n <= 700) {
    color = "pink";
} else if (701 <= n && n <= 800) {
    color = "black";
} else if (801 <= n && n <= 900) {
    color = "brown";
} else {
    color = "blue";
}

var m;

function boxClicked(m) {
    return function colorChange() {
        console.log("Hey, box No." + m + " clicked!");
        //change css class of the box
        if(boxes[m].className == "box"){
            boxes[m].className = "clicked";
        }else{
            boxes[m].className = "box";
        }
        //put background color
        boxes[m].style.backgroundColor = color;
    };
}

for (var i = 0; i < boxes.length; i++) {
    //add click event to each box
    boxes[i].addEventListener("click", boxClicked(i));
}