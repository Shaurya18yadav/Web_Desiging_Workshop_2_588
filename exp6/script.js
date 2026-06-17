let heading = document.getElementById("heading")
let input = document.getElementById("inputText")
let headling = document.getElementById("para")

document.getElementById("changeTextBtn").onclick =
function (){
    heading.innerText = input.value ;
}

input.onchange = function (){
    console.log("Input changed : ",input.value);
};

document.getElementById("bgcolorbtn").
addEventListener("click", function () {
    document.body.style.backgroundColor = "lightblue ";
    document.body.style.fontFamily ="Arial";
});

// change font size heading 
document.getElementById("fontsizebtn").
addEventListener("click", function (){
    heading.style.fontSize = "40px";
});


//  show /hide  paragraph 

let isVisible = true;

document.getElementById("toggleparabtn").onclick = function (){
    if (isVisible) {
     para.style.display = "none" ;
isVisible = false;
    } else{
        para.style.display = "block";
        isVisible = true;
    }
    };


    