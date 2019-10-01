let htmlAr = [];
let cssAr = [];
let jsAr = [];
//Ajax request is made to receive all the questions from mongodb database using node api.
$(document).ready(function(){
    $.ajax({
        url:'http://localhost:9000/',
        type: 'GET',
        success:function(data){
            let count1 = -1;
            let htmlQuestions = data.filter(dt=>{count1++
                return dt["q"+count1]["type"] === 'html';
             })
             randomPicker(htmlQuestions,htmlAr);
             count1 = -1;
             let cssQuestions = data.filter(dt=>{count1++
                return dt["q"+count1]["type"] === 'css';
             })
             randomPicker(cssQuestions,cssAr);
            count1 = -1;
             let jsQuestions = data.filter(dt=>{count1++
                return dt["q"+count1]["type"] === 'js';
             })
             randomPicker(jsQuestions,jsAr);
        }
    })
 
  });

if(localStorage.getItem("htm")==="yes")
    $("#htm").css("opacity",0.5);
 
 if(localStorage.getItem("cs")==="yes")
    $("#cs").css("opacity",0.5);

 if(localStorage.getItem("js")==="yes")
    $("#jst").css("opacity",0.5);

    $("#htm").click(()=>{
      if(!localStorage.hasOwnProperty("htm"))
      {
      localStorage.setItem("htm","yes");
      localStorage.setItem("htmlArray",JSON.stringify(htmlAr));
     location.href='questions.html?html';
      }
   })
  
  $("#cs").click(()=>{
   if(!localStorage.hasOwnProperty("cs"))
   {
     localStorage.setItem("cs","yes");
     localStorage.setItem("cssArray",JSON.stringify(cssAr));
     location.href='questions.html?css';
   }
  })
  
  
  $("#jst").click(function(){
   if(!localStorage.hasOwnProperty("js"))
   {
     localStorage.setItem("js","yes");
     localStorage.setItem("jsArray",JSON.stringify(jsAr));
     location.href='questions.html?js';
   }
  })



let randomPicker=(json,ar)=>{
    for(let i = 0;i < 10;i++){
    let randIndex = Math.floor(Math.random()*json.length)
    ar.push(json[randIndex])
    json.splice(randIndex,1);
    }
}