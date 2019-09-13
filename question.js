let question = 1;
let ar = [];
let count = 1;
$("document").ready(function(){
localStorage.clear();
for(let i = 1;i <= 10;i++)
getJSON();
})

let firstQuestion = JSON.parse(localStorage.getItem(1));
$("#question").text(firstQuestion["question"]);
$("#opt1").text(firstQuestion["options"][0]);
$("#opt2").text(firstQuestion["options"][1]);
$("#opt3").text(firstQuestion["options"][2]);
$("#opt4").text(firstQuestion["options"][3]);


$("#img-backward").click(function(){
    if(question>1)
    {
        question--;
        let requiredQuestion = JSON.parse(localStorage.getItem(question));
        console.log(requiredQuestion)
        $("#num").text(question);
        $("#question").text(requiredQuestion["question"]);
        $("#opt1").text(requiredQuestion["options"][0]);
        $("#opt2").text(requiredQuestion["options"][1]);
        $("#opt3").text(requiredQuestion["options"][2]);
        $("#opt4").text(requiredQuestion["options"][3]);
        
    }
})

$("#img-forward").click(function(){
    if(question != 10)
    {
        question++;
        let requiredQuestion = JSON.parse(localStorage.getItem(question));
        console.log(requiredQuestion)
        $("#num").text(question);
        $("#question").text(requiredQuestion["question"]);
        $("#opt1").text(requiredQuestion["options"][0]);
        $("#opt2").text(requiredQuestion["options"][1]);
        $("#opt3").text(requiredQuestion["options"][2]);
        $("#opt4").text(requiredQuestion["options"][3]);
        
    }
})

function getJSON(){
    $.getJSON('questions.json',function(json){
        obj = json;
        const keys = Object.keys(obj);
        let randIndex = Math.floor(Math.random()*keys.length)
        let b =  obj["q"+randIndex];
        if(ar.length <= 10)
        {
        localStorage.setItem(count,JSON.stringify(b));
        count++;
        }
    })

 }



 