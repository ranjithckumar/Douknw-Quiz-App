let timer = ()=>{
    console.log("here")
   let timer2 = "3:01";
   let interval = setInterval(() =>{

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
let questions;
let query = window.location.search.substring(1,);

if(query === 'html')
{
questions = JSON.parse( localStorage.getItem("htmlArray"));
}
else if(query === 'css')
{
    questions = JSON.parse(localStorage.getItem("cssArray"));
}
else
 {
   questions = JSON.parse(localStorage.getItem("jsArray"));
 }
console.log(questions);

// if(localStorage.getItem("sec") == 1){
// let firstQuestion = JSON.parse(localStorage.getItem(1));
// $("#question").text(firstQuestion["question"]);
// $("#opt1").text(firstQuestion["options"][0]);
// $("#opt2").text(firstQuestion["options"][1]);
// $("#opt3").text(firstQuestion["options"][2]);
// $("#opt4").text(firstQuestion["options"][3]);




$(document).ready(()=>{

$('#img-forward').click(()=>{
 });
 $('#img-forward').click();
 timer();
})


let questionNumber = 0;
$("#img-forward").click(()=>{

        
        $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
    //    console.log(key);
    //    console.log();
       if(questionNumber < 10)
       action('add');
        // $("#num").text(questionNumber);
        // $("#question").text(questions[questionNumber-1][key].question);
        // $("#opt1").text(requiredQuestion[0]["options"][0]);
        // $("#opt2").text(requiredQuestion[0]["options"][1]);
        // $("#opt3").text(requiredQuestion[0]["options"][2]);
        // $("#opt4").text(requiredQuestion[0]["options"][3]);
        // questionNumber++;  

})


$("#img-backward").click(()=>{
    if(questionNumber > 1)
    action('sub');
//     if(question>1)
//     {
//         question--;
//         questionNumber--;
//         $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
//         let requiredQuestion = JSON.parse(localStorage.getItem(question));
//         console.log(requiredQuestion)
//         $("#num").text(questionNumber);
//         $("#question").text(requiredQuestion["question"]);
//         $("#opt1").text(requiredQuestion["options"][0]);
//         $("#opt2").text(requiredQuestion["options"][1]);
//         $("#opt3").text(requiredQuestion["options"][2]);
//         $("#opt4").text(requiredQuestion["options"][3]);
//     }
})

let action =((option)=>{
 option==='add'?questionNumber++:questionNumber--;
if(questionNumber>=1 && questionNumber <= 10)
{
    key = Object.keys(questions[questionNumber-1])[1];
    console.log(key);
    console.log();
    $("#num").text(questionNumber);
    $("#question").text(questions[questionNumber-1][key].question);
    $("#opt1").text(questions[questionNumber-1][key]["options"][0]);
    $("#opt2").text(questions[questionNumber-1][key]["options"][1]);
    $("#opt3").text(questions[questionNumber-1][key]["options"][2]);
    $("#opt4").text(questions[questionNumber-1][key]["options"][3]);
}
})













// timer();
// }

// if(localStorage.getItem("sec") == 2){
//     $("#section-number").text("Section 2");
//     question = 11;
//     let firstQuestion = JSON.parse(localStorage.getItem(11));
//     $("#question").text(firstQuestion["question"]);
//     $("#opt1").text(firstQuestion["options"][0]);
//     $("#opt2").text(firstQuestion["options"][1]);
//     $("#opt3").text(firstQuestion["options"][2]);
//     $("#opt4").text(firstQuestion["options"][3]);
    
    
//     $("#img-backward").click(function(){
//         if(question>11)
//         {
//             question--;
//             questionNumber--;
//             $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
//             let requiredQuestion = JSON.parse(localStorage.getItem(question));
//             console.log(requiredQuestion)
//             $("#num").text(questionNumber);
//             $("#question").text(requiredQuestion["question"]);
//             $("#opt1").text(requiredQuestion["options"][0]);
//             $("#opt2").text(requiredQuestion["options"][1]);
//             $("#opt3").text(requiredQuestion["options"][2]);
//             $("#opt4").text(requiredQuestion["options"][3]);
            
//         }
//     })
    
    
//     $("#img-forward").click(function(){
//         if(question != 20)
//         {
//             $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
//             // localStorage.setItem("a"+question,answer);
//             question++;
//             questionNumber++;
//             let requiredQuestion = JSON.parse(localStorage.getItem(question));
//             // console.log(requiredQuestion)
            
//             $("#num").text(questionNumber);
            
//             $("#question").text(requiredQuestion["question"]);
//             $("#opt1").text(requiredQuestion["options"][0]);
//             $("#opt2").text(requiredQuestion["options"][1]);
//             $("#opt3").text(requiredQuestion["options"][2]);
//             $("#opt4").text(requiredQuestion["options"][3]);
            
//         }

//     })
//     timer();
//     }
    

    
//     if(localStorage.getItem("sec") == 3){
//         $("#section-number").text("Section 3");
//         question = 21;
//     let firstQuestion = JSON.parse(localStorage.getItem(21));
//     $("#question").text(firstQuestion["question"]);
//     $("#opt1").text(firstQuestion["options"][0]);
//     $("#opt2").text(firstQuestion["options"][1]);
//     $("#opt3").text(firstQuestion["options"][2]);
//     $("#opt4").text(firstQuestion["options"][3]);
    
   
//     $("#img-backward").click(function(){
//         if(question>21)
//         {
//             question--;
//             questionNumber--;
//             $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
//             let requiredQuestion = JSON.parse(localStorage.getItem(question));
//             console.log(requiredQuestion)
//             $("#num").text(questionNumber);
//             $("#question").text(requiredQuestion["question"]);
//             $("#opt1").text(requiredQuestion["options"][0]);
//             $("#opt2").text(requiredQuestion["options"][1]);
//             $("#opt3").text(requiredQuestion["options"][2]);
//             $("#opt4").text(requiredQuestion["options"][3]);
            
//         }
//     })
    
//     $("#img-forward").click(function(){
//         if(question != 30)
//         {
//             $("#option1, #option2, #option3, #option4").css('background-color','#CFD8DC');
//             // localStorage.setItem("a"+question,answer);
//             question++;
//             questionNumber++;
//             let requiredQuestion = JSON.parse(localStorage.getItem(question));
//             // console.log(requiredQuestion)
//             $("#num").text(questionNumber);
//             $("#question").text(requiredQuestion["question"]);
//             $("#opt1").text(requiredQuestion["options"][0]);
//             $("#opt2").text(requiredQuestion["options"][1]);
//             $("#opt3").text(requiredQuestion["options"][2]);
//             $("#opt4").text(requiredQuestion["options"][3]);
            
//         }
//     })
//     timer();
//     }
    

 $("#option1").click(function(){
  selector(1);
  $("#option2, #option3, #option4").css('background-color','#CFD8DC');
 })

 $("#option2").click(function(){
    selector(2);
    // localStorage.setItem("a"+question,answer);
    // $("#option2").css('background-color','#78909C');
    $("#option1, #option3, #option4").css('background-color','#CFD8DC');
   })

   $("#option3").click(function(){
    selector(3);
    // localStorage.setItem("a"+question,answer);
    // $("#option3").css('background-color','#78909C');
    $("#option1, #option2, #option4").css('background-color','#CFD8DC');
   })

   $("#option4").click(function(){
    selector(4);
    // localStorage.setItem("a"+question,answer);
    // $("#option4").css('background-color','#78909C');
    $("#option1, #option2, #option3").css('background-color','#CFD8DC');
   })
let answerArray = [];
let selector = ((option)=>{
    answerArray[questionNumber-1] = $("#opt"+option).text();
    console.log(answerArray);
    $("#option"+option).css('background-color','#78909C');
})


//    $("#submitButton").click(function(){
//        location.href = 'result.html'
//    })

//    $("#sectionButton").click(function(){
//        location.href = 'section.html'
//    })
 