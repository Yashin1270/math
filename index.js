const PI = 3.14159;
let radius;
let  circumfernce;



document.getElementById("mySubmit").onclick = function(){
     radius = document.getElementById("myText").value;
     radius = Number(radius);
     circumfernce = 2 * PI * radius;
     document.getElementById("myh3").textContent = circumfernce;

}


