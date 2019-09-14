
// let ar = [];
// let count = 1;
// $("document").ready(function(){
// let htm = localStorage.getItem("htm");
// let sec = localStorage.getItem("sec");
// localStorage.clear();
// localStorage.setItem("htm",htm);
// localStorage.setItem("sec",sec);

// })


let question = 1;
if(localStorage.getItem("sec") == 1){
let firstQuestion = JSON.parse(localStorage.getItem(1));
$("#question").text(firstQuestion["question"]);
$("#opt1").text(firstQuestion["options"][0]);
$("#opt2").text(firstQuestion["options"][1]);
$("#opt3").text(firstQuestion["options"][2]);
$("#opt4").text(firstQuestion["options"][3]);

let answer;
$("#img-backward").click(function(){
    if(question>1)
    {
        question--;
        $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
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
        $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
        // localStorage.setItem("a"+question,answer);
        question++;
        let requiredQuestion = JSON.parse(localStorage.getItem(question));
        // console.log(requiredQuestion)
        $("#num").text(question);
        $("#question").text(requiredQuestion["question"]);
        $("#opt1").text(requiredQuestion["options"][0]);
        $("#opt2").text(requiredQuestion["options"][1]);
        $("#opt3").text(requiredQuestion["options"][2]);
        $("#opt4").text(requiredQuestion["options"][3]);
        
    }
    // else if(question == 10){
    //     // localStorage.setItem("a"+question,answer);
    // }
})
}


if(localStorage.getItem("sec") == 2){
    question = 11;
    let firstQuestion = JSON.parse(localStorage.getItem(11));
    $("#question").text(firstQuestion["question"]);
    $("#opt1").text(firstQuestion["options"][0]);
    $("#opt2").text(firstQuestion["options"][1]);
    $("#opt3").text(firstQuestion["options"][2]);
    $("#opt4").text(firstQuestion["options"][3]);
    
    let answer;
    $("#img-backward").click(function(){
        if(question>11)
        {
            question--;
            $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
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
    
    let questionNumber = 1;
    $("#img-forward").click(function(){
        if(question != 20)
        {
            $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
            // localStorage.setItem("a"+question,answer);
            question++;
            let requiredQuestion = JSON.parse(localStorage.getItem(question));
            // console.log(requiredQuestion)
            questionNumber++;
            $("#num").text(questionNumber);
            
            $("#question").text(requiredQuestion["question"]);
            $("#opt1").text(requiredQuestion["options"][0]);
            $("#opt2").text(requiredQuestion["options"][1]);
            $("#opt3").text(requiredQuestion["options"][2]);
            $("#opt4").text(requiredQuestion["options"][3]);
            
        }
        // else if(question == 10){
        //     // localStorage.setItem("a"+question,answer);
        // }
    })
    }
    

    
    if(localStorage.getItem("sec") == 3){
        question = 21;
    let firstQuestion = JSON.parse(localStorage.getItem(21));
    $("#question").text(firstQuestion["question"]);
    $("#opt1").text(firstQuestion["options"][0]);
    $("#opt2").text(firstQuestion["options"][1]);
    $("#opt3").text(firstQuestion["options"][2]);
    $("#opt4").text(firstQuestion["options"][3]);
    
    let answer;
    $("#img-backward").click(function(){
        if(question>21)
        {
            question--;
            $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
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
        if(question != 30)
        {
            $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
            // localStorage.setItem("a"+question,answer);
            question++;
            let requiredQuestion = JSON.parse(localStorage.getItem(question));
            // console.log(requiredQuestion)
            $("#num").text(question);
            $("#question").text(requiredQuestion["question"]);
            $("#opt1").text(requiredQuestion["options"][0]);
            $("#opt2").text(requiredQuestion["options"][1]);
            $("#opt3").text(requiredQuestion["options"][2]);
            $("#opt4").text(requiredQuestion["options"][3]);
            
        }
        // else if(question == 10){
        //     // localStorage.setItem("a"+question,answer);
        // }
    })
    }
    

 $("#option1").click(function(){
  answer = $("#opt1").text();
  console.log(answer);
  localStorage.setItem("a"+question,answer);
  $("#option1").css('background-color','#78909C');
  $("#option2, #option3, #option4").css('background-color','#CFD8DC');
 })

 $("#option2").click(function(){
    answer = $("#opt2").text();
    console.log(answer)
    localStorage.setItem("a"+question,answer);
    $("#option2").css('background-color','#78909C');
    $("#option1, #option3, #option4").css('background-color','#CFD8DC');
   })

   $("#option3").click(function(){
    answer = $("#opt3").text();
    console.log(answer)
    localStorage.setItem("a"+question,answer);
    $("#option3").css('background-color','#78909C');
    $("#option1, #option2, #option4").css('background-color','#CFD8DC');
   })

   $("#option4").click(function(){
    answer = $("#opt2").text();
    console.log(answer)
    localStorage.setItem("a"+question,answer);
    $("#option4").css('background-color','#78909C');
    $("#option1, #option2, #option3").css('background-color','#CFD8DC');
   })

   $("#submitButton").click(function(){
       location.href = 'result.html'
   })

   $("#sectionButton").click(function(){
       location.href = 'section.html'
   })

    var timer2 = "10:01";
    var interval = setInterval(function() {

    var timer = timer2.split(':');
    //by parsing integer, I avoid all extra string processing
    var minutes = parseInt(timer[0], 10);
    var seconds = parseInt(timer[1], 10);
    --seconds;
    minutes = (seconds < 0) ? --minutes : minutes;
    if (minutes < 0) clearInterval(interval);
    seconds = (seconds < 0) ? 59 : seconds;
    seconds = (seconds < 10) ? '0' + seconds : seconds;
    //minutes = (minutes < 10) ?  minutes : minutes;
    $('#time').html(minutes + ':' + seconds);
    timer2 = minutes + ':' + seconds;
    if(minutes===0&&seconds==="00")
    location.href="section.html";
}, 1000);