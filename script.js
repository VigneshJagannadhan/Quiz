let count=0;

function redirect(){
        
}

let marks = 1;
function right(){
    document.getElementById('answer').innerHTML="Correct Answer!"
    count+=1;
    if (count==1){
        document.getElementById("mark").innerHTML=(marks);
        document.getElementById("option2").style.backgroundColor = "green";
        document.getElementById("option1").removeAttribute("onClick");
        document.getElementById("option3").removeAttribute("onClick");
        document.getElementById("option4").removeAttribute("onClick");
        document.getElementById("option2").removeAttribute("onClick");
        
    }
};
let jcount=0;
function wrong(){
    document.getElementById('answer').innerHTML="Wrong Answer!"
    jcount+=1;
    if (jcount==1){
        console.log('Your chance is over!');
        document.getElementById("option1").style.backgroundColor = "red";
        document.getElementById("option2").style.backgroundColor = "green";
        document.getElementById("option3").style.backgroundColor = "red";
        document.getElementById("option4").style.backgroundColor = "red";
        document.getElementById("option1").removeAttribute("onClick");
        document.getElementById("option3").removeAttribute("onClick");
        document.getElementById("option4").removeAttribute("onClick");
        document.getElementById("option2").removeAttribute("onClick");
    }
};

var clicks = 0;
    function onClick() {
        clicks += 1;
        document.getElementById("clicks").innerHTML = clicks;
    };