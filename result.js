let score = 0;
let htmlScore = 0;
let cssScore = 0;
let jsScore = 0;
//Ajax request is made to receive all the questions from mongodb database using node api.
$(document).ready(function(){
    $.ajax({
        url:'http://localhost:9000/',
        type: 'GET',
        success:function(data){
           htmlScore =  calculator(data,"html");
          
           cssScore = calculator(data,"css");
          
           jsScore = calculator(data,'js');
         
           score = htmlScore+cssScore+jsScore;
           $("#marks").text(score);
           $("#htmlScoreCard").text(htmlScore);
           $("#cssScoreCard").text(cssScore);
           $("#jsScoreCard").text(jsScore);
        }
    })
 
 
  });


//This function generates calculates the score based on section wise.
let calculator = (json,type) => {
  let  answers = JSON.parse(localStorage.getItem(type+"Answers")); //Here an array consisting of question number and user selected answer is retreived from localstorage
  let keys = [];
  let matches;
if(answers !== null)
{
    answers = answers.filter(obj=>
        obj !== null);
answers.forEach((ans)=>{
   keys.push(ans.key);
})    //An array keys is created and it is populated with the question numbers user has answered.

let questions = json.filter(data=>{
    return  data[Object.keys(data)[1]]["type"] === type; //From the pool of different type questions partticular type is filtered
} )
matches = questions.filter(hk=>{

if(keys.includes(Object.keys(hk)[1]))
return  hk;                                                      //Here the questionNumbers in keys array is checked with the set of filtered questions whether it has the particular question number of filtered items if so then that single object is returned
}).map(hk=>{return  {key:Object.keys(hk)[1],
     answer:hk[Object.keys(hk)[1]]['answer']}})  //Here the from the returned objects question numbers and right answers are formed as new object and stored in array.

var score = 0;
answers.forEach(hA=>
    {
      //For eg: now we have two arrays one is like this {key:questionNumber,answer:GIVEN BY USER}  and another is {key:questionNumber,answer:CORRECT ANSWER}
       matcher =  matches.filter(hM=>hA.key === hM.key) 
       //Here we are comparing user selected answer with correct answer 
       if(hA.answer === matcher[0].answer)
       score += 1;//If answer is correct score gets update by 1 point.
    })
    return score;//Finally the score is returned

}
return 0; //Here 0 is returned if user hasn't attended the section.
}

//The below code clears the storage whenever user closes the tab or browser or when user redirects to another page.
window.onbeforeunload = ()=> {
    localStorage.clear();
} 