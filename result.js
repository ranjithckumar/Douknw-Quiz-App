let score = 0;
let htmlScore = 0;
let cssScore = 0;
let jsScore = 0;
$(document).ready(function(){
    $.ajax({
        url:'http://localhost:9000/',
        type: 'GET',
        success:function(data){
            calculator(data);
        }
    })
 
  });
//   key = Object.keys(json[0])[1];
let calculator = (json) => {
  let  htmlAnswers = JSON.parse(localStorage.getItem("htmlAnswers"));
  let htmlKeys = [];
  let htmlMatches;
htmlAnswers.forEach((htm)=>{
   htmlKeys.push(htm.key);
})

let htmlquestions = json.filter(data=>{
    return  data[Object.keys(data)[1]]["type"] === 'html';
} )
htmlMatches = htmlquestions.filter(hk=>{
//    console.log(Object.keys(htmlquestions[0][1]));
if(htmlKeys.includes(Object.keys(hk)[1]))
return  hk;
}).map(hk=>{return  {key:Object.keys(hk)[1],
     answer:hk[Object.keys(hk)[1]]['answer']}})
console.log(htmlAnswers)
console.log(htmlMatches);
htmlScore = 0;
htmlAnswers.forEach(hA=>
    {
        console.log(hA.key);
        htmlMatches.filter(hM=>hA.key === hM.key)
    })
}





// $("document").ready(function(){

//     for(let i = 1;i<=10;i++){
//         let o = JSON.parse(localStorage.getItem(i));
//         let ans = localStorage.getItem("a"+i);
        
//        if(ans != null && o["answer"]===ans)
//        {
//           score++;
//           htmlScore++;
//        }
//     }
//     for(let i = 11;i<=20;i++){
//         let o = JSON.parse(localStorage.getItem(i));
//         let ans = localStorage.getItem("a"+i);
       
//        if(ans != null && o["answer"]===ans)
//        {
//           score++;
//           cssScore++;
//        }
//     }
//     for(let i = 21;i<=30;i++){
//         let o = JSON.parse(localStorage.getItem(i));
//         let ans = localStorage.getItem("a"+i);
       
//        if(ans != null && o["answer"]===ans)
//        {
//           score++;
//           jsScore++;
//        }
//     }
//     $("#marks").text(score);
//     $("#htmlScoreCard").text(htmlScore);
//     $("#cssScoreCard").text(cssScore);
//     $("#jsScoreCard").text(jsScore);
//     localStorage.clear();
// })