// $("document").ready(function(){
   
// })

if(localStorage.getItem("htm")==="yes")
 {
    $("#htm").css("opacity",0.5);
 }

$("#htm").click(function(){
    localStorage.setItem("htm","yes");
    location.href='questions.html'; 
 })
 