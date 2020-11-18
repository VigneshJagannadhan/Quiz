let count=0;
let marks = 1;
let jcount=0;
function linker(){
    let val1 = parseInt(document.getElementById("centered").innerHTML);
    val=val1+1;
    console.log(val);
}
setInterval(function(){location.href='qes'+val+'.html';return false;},10000);
function right(){
    document.getElementById('answer').innerHTML="Correct Answer!"
    count+=1;
    if (count==1){
        document.getElementById("option2").style.backgroundColor = "green";
        document.getElementById("option1").removeAttribute("onClick");
        document.getElementById("option3").removeAttribute("onClick");
        document.getElementById("option4").removeAttribute("onClick");
        document.getElementById("option2").removeAttribute("onClick");
        setInterval(function(){location.href='qes'+val+'.html';return false;},3000);
    }
};

function wrong(){
    document.getElementById('answer').innerHTML="Wrong Answer!"
    jcount+=1;
    if (jcount==1){
        document.getElementById("option1").style.backgroundColor = "red";
        document.getElementById("option2").style.backgroundColor = "green";
        document.getElementById("option3").style.backgroundColor = "red";
        document.getElementById("option4").style.backgroundColor = "red";
        document.getElementById("option1").removeAttribute("onClick");
        document.getElementById("option3").removeAttribute("onClick");
        document.getElementById("option4").removeAttribute("onClick");
        document.getElementById("option2").removeAttribute("onClick");
        setInterval(function(){location.href='qes'+val+'.html';return false;},3000);
    }
};