let timer = function(){
    console.log("here")
   let timer2 = "5:01";
   let interval = setInterval(function() {

   let timer = timer2.split(':');
   //by parsing integer, I avoid all extra string processing
   let minutes = parseInt(timer[0], 10);
   let seconds = parseInt(timer[1], 10);
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
}


let question = 1;
let questionNumber = 1;
if(localStorage.getItem("sec") == 1){
let firstQuestion = JSON.parse(localStorage.getItem(1));
$("#question").text(firstQuestion["question"]);
$("#opt1").text(firstQuestion["options"][0]);
$("#opt2").text(firstQuestion["options"][1]);
$("#opt3").text(firstQuestion["options"][2]);
$("#opt4").text(firstQuestion["options"][3]);


$("#img-forward").click(function(){
    if(question>1)
    {
        question--;
        questionNumber--;
        $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
        let requiredQuestion = JSON.parse(localStorage.getItem(question));
        console.log(requiredQuestion)
        $("#num").text(questionNumber);
        $("#question").text(requiredQuestion["question"]);
        $("#opt1").text(requiredQuestion["options"][0]);
        $("#opt2").text(requiredQuestion["options"][1]);
        $("#opt3").text(requiredQuestion["options"][2]);
        $("#opt4").text(requiredQuestion["options"][3]);
        
    }
})

$("#img-backward").click(function(){
    if(question != 10)
    {
        $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
        // localStorage.setItem("a"+question,answer);
        question++;
        questionNumber++;
        let requiredQuestion = JSON.parse(localStorage.getItem(question));
        // console.log(requiredQuestion)
        $("#num").text(questionNumber);
        $("#question").text(requiredQuestion["question"]);
        $("#opt1").text(requiredQuestion["options"][0]);
        $("#opt2").text(requiredQuestion["options"][1]);
        $("#opt3").text(requiredQuestion["options"][2]);
        $("#opt4").text(requiredQuestion["options"][3]);
        
    }

})
timer();
}


if(localStorage.getItem("sec") == 2){
    $("#section-number").text("Section 2");
    question = 11;
    let firstQuestion = JSON.parse(localStorage.getItem(11));
    $("#question").text(firstQuestion["question"]);
    $("#opt1").text(firstQuestion["options"][0]);
    $("#opt2").text(firstQuestion["options"][1]);
    $("#opt3").text(firstQuestion["options"][2]);
    $("#opt4").text(firstQuestion["options"][3]);
    
    
    $("#img-backward").click(function(){
        if(question>11)
        {
            question--;
            questionNumber--;
            $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
            let requiredQuestion = JSON.parse(localStorage.getItem(question));
            console.log(requiredQuestion)
            $("#num").text(questionNumber);
            $("#question").text(requiredQuestion["question"]);
            $("#opt1").text(requiredQuestion["options"][0]);
            $("#opt2").text(requiredQuestion["options"][1]);
            $("#opt3").text(requiredQuestion["options"][2]);
            $("#opt4").text(requiredQuestion["options"][3]);
            
        }
    })
    
    
    $("#img-forward").click(function(){
        if(question != 20)
        {
            $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
            // localStorage.setItem("a"+question,answer);
            question++;
            questionNumber++;
            let requiredQuestion = JSON.parse(localStorage.getItem(question));
            // console.log(requiredQuestion)
            
            $("#num").text(questionNumber);
            
            $("#question").text(requiredQuestion["question"]);
            $("#opt1").text(requiredQuestion["options"][0]);
            $("#opt2").text(requiredQuestion["options"][1]);
            $("#opt3").text(requiredQuestion["options"][2]);
            $("#opt4").text(requiredQuestion["options"][3]);
            
        }

    })
    timer();
    }
    

    
    if(localStorage.getItem("sec") == 3){
        $("#section-number").text("Section 3");
        question = 21;
    let firstQuestion = JSON.parse(localStorage.getItem(21));
    $("#question").text(firstQuestion["question"]);
    $("#opt1").text(firstQuestion["options"][0]);
    $("#opt2").text(firstQuestion["options"][1]);
    $("#opt3").text(firstQuestion["options"][2]);
    $("#opt4").text(firstQuestion["options"][3]);
    
   
    $("#img-backward").click(function(){
        if(question>21)
        {
            question--;
            questionNumber--;
            $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
            let requiredQuestion = JSON.parse(localStorage.getItem(question));
            console.log(requiredQuestion)
            $("#num").text(questionNumber);
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
            questionNumber++;
            let requiredQuestion = JSON.parse(localStorage.getItem(question));
            // console.log(requiredQuestion)
            $("#num").text(questionNumber);
            $("#question").text(requiredQuestion["question"]);
            $("#opt1").text(requiredQuestion["options"][0]);
            $("#opt2").text(requiredQuestion["options"][1]);
            $("#opt3").text(requiredQuestion["options"][2]);
            $("#opt4").text(requiredQuestion["options"][3]);
            
        }
    })
    timer();
    }
    

 $("#option1").click(function(){
  answer = $("#opt1").text();
  localStorage.setItem("a"+question,answer);
  $("#option1").css('background-color','#78909C');
  $("#option2, #option3, #option4").css('background-color','#CFD8DC');
 })

 $("#option2").click(function(){
    answer = $("#opt2").text();
    localStorage.setItem("a"+question,answer);
    $("#option2").css('background-color','#78909C');
    $("#option1, #option3, #option4").css('background-color','#CFD8DC');
   })

   $("#option3").click(function(){
    answer = $("#opt3").text();
    localStorage.setItem("a"+question,answer);
    $("#option3").css('background-color','#78909C');
    $("#option1, #option2, #option4").css('background-color','#CFD8DC');
   })

   $("#option4").click(function(){
    answer = $("#opt4").text();
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
 