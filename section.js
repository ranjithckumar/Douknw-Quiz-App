// $("document").ready(function(){
//    localStorage.clear();
// })

if(localStorage.getItem("htm")==="yes")
    $("#htm").css("opacity",0.5);
 
 if(localStorage.getItem("cs")==="yes")
    $("#cs").css("opacity",0.5);

 if(localStorage.getItem("js")==="yes")
    $("#jst").css("opacity",0.5);

 let count = 1;
$("#htm").click(function(){
    localStorage.setItem("htm","yes");
    localStorage.setItem("sec",1);

    for(let i = 1;i <= 10;i++)
    {
    getJSONHtml();
    }
    
    let delay = 1000; 
    setTimeout(function(){ location.href='questions.html'; }, delay);
   //  console.log("here1")
   // location.href='questions.html'; 
   
 })
let count1 = 11;
$("#cs").click(function(){
   localStorage.setItem("cs","yes");
    localStorage.setItem("sec",2);

    
    for(let i = 11;i <= 20;i++)
    getJSONCss();

    let delay = 1000; 
    setTimeout(function(){ location.href='questions.html'; }, delay);

})

let count2 = 21;
$("#jst").click(function(){
   localStorage.setItem("js","yes");
    localStorage.setItem("sec",3);

    for(let i = 11;i <= 20;i++)
    getJSONJs();

    let delay = 1000; 
    setTimeout(function(){ location.href='questions.html'; }, delay);
})
 
function getJSONHtml(){
   $.getJSON('questions.json',function(json){
       obj = json;
       const keys = Object.keys(obj);
       let randIndex = Math.floor(Math.random()*keys.length)
       let b =  obj["q"+randIndex];
       flag = true;
       while(flag)
       {
           if(b["type"]==="html" && !localStorage.hasOwnProperty("q"+randIndex))
           {
            flag = false;
           }
           else{
               randIndex = Math.floor(Math.random()*keys.length);
               b =  obj["q"+randIndex];
           }
       }
      
       localStorage.setItem(count,JSON.stringify(b));
       localStorage.setItem("q"+randIndex,"yes");
       count++;
   })
}



function getJSONCss(){
   $.getJSON('questions.json',function(json){
       obj = json;
       const keys = Object.keys(obj);
       let randIndex = Math.floor(Math.random()*keys.length)
       let b =  obj["q"+randIndex];
       flag = true;
       while(flag)
       {
           if(b["type"]==="css" && !localStorage.hasOwnProperty("q"+randIndex))
           {
            flag = false;
           }
           else{
               randIndex = Math.floor(Math.random()*keys.length);
               b =  obj["q"+randIndex];
           }
       }
      
       localStorage.setItem(count1,JSON.stringify(b));
       localStorage.setItem("q"+randIndex,"yes");
       count1++;
   })
}


function getJSONJs(){
   console.log(count)
   $.getJSON('questions.json',function(json){
       obj = json;
       const keys = Object.keys(obj);
       let randIndex = Math.floor(Math.random()*keys.length)
       let b =  obj["q"+randIndex];
       flag = true;
       while(flag)
       {
           if(b["type"]==="js" && !localStorage.hasOwnProperty("q"+randIndex))
           {
            flag = false;
           }
           else{
               randIndex = Math.floor(Math.random()*keys.length);
               b =  obj["q"+randIndex];
           }
       }
      
       localStorage.setItem(count2,JSON.stringify(b));
       localStorage.setItem("q"+randIndex,"yes");
       count2++;
   })
}