// $("document").ready(function(){
   
// })

if(localStorage.getItem("htm")==="yes")
 {
    $("#htm").css("opacity",0.5);
 }

$("#htm").click(function(){
    localStorage.setItem("htm","yes");
    localStorage.setItem("sec",1);
    location.href='questions.html'; 
 })

$("#cs").click(function(){
   localStorage.setItem("cs","yes");
    localStorage.setItem("sec",2);
    location.href='questions.html'; 
})

$("#jst").click(function(){
   localStorage.setItem("js","yes");
    localStorage.setItem("sec",3);
    location.href='questions.html'; 
})
 