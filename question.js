let question = 1;
let ar = [];
$("document").ready(function(){
localStorage.clear();
getJSON();
})

$("#img-backward").click(function(){
    if(question>1)
    {
        question--;
    }
})

$("#img-forward").click(function(){
    if(question != 10)
    {
        question++;
        getJSON();
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
        ar.push("q"+randIndex);
        localStorage.setItem(question,JSON.stringify(b));
        console.log(localStorage.getItem("1"));
        }
    })

 }



 