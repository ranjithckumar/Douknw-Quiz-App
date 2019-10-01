let score = 0;
let htmlScore = 0;
let cssScore = 0;
let jsScore = 0;
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



let calculator = (json,type) => {
  let  answers = JSON.parse(localStorage.getItem(type+"Answers"));
  let keys = [];
  let matches;
if(answers !== null)
{
    answers = answers.filter(obj=>
        obj !== null);
answers.forEach((ans)=>{
   keys.push(ans.key);
})

let questions = json.filter(data=>{
    return  data[Object.keys(data)[1]]["type"] === type;
} )
matches = questions.filter(hk=>{

if(keys.includes(Object.keys(hk)[1]))
return  hk;
}).map(hk=>{return  {key:Object.keys(hk)[1],
     answer:hk[Object.keys(hk)[1]]['answer']}})

var score = 0;
answers.forEach(hA=>
    {

       matcher =  matches.filter(hM=>hA.key === hM.key)
       if(hA.answer === matcher[0].answer)
       score += 1;
    })
    return score;

}
return 0;
}

window.onbeforeunload = ()=> {
    localStorage.clear();
}