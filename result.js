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
           console.log(htmlScore);
           cssScore = calculator(data,"css");
           console.log(cssScore);
           jsScore = calculator(data,'js');
           console.log(jsScore);
           score = htmlScore+cssScore+jsScore;
           $("#marks").text(score);
           $("#htmlScoreCard").text(htmlScore);
           $("#cssScoreCard").text(cssScore);
           $("#jsScoreCard").text(jsScore);
        }
    })
 
  });
//   key = Object.keys(json[0])[1];
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
//    console.log(Object.keys(htmlquestions[0][1]));
if(keys.includes(Object.keys(hk)[1]))
return  hk;
}).map(hk=>{return  {key:Object.keys(hk)[1],
     answer:hk[Object.keys(hk)[1]]['answer']}})
console.log(answers)
console.log(matches);
var score = 0;
answers.forEach(hA=>
    {
        console.log(hA.key);
       matcher =  matches.filter(hM=>hA.key === hM.key)
       if(hA.answer === matcher[0].answer)
       score += 1;
    })
    return score;
    //     $("#htmlScoreCard").text(htmlScore);
    // console.log(htmlScore);
}
return 0;
}

