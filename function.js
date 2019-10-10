$("document").ready(function(){
   let score = 0;
   let htmlScore = 0.2;
   let cssScore = 0.3;
   let jsScore = 0.4;
   for(let i = 1;i<=10;i++){
      let o = JSON.parse(localStorage.getItem(i));
      let ans = localStorage.getItem("a"+i);
      
     if(ans != null && o["answer"]===ans)
     {
        score++;
        htmlScore++;
     }
  }
  for(let i = 11;i<=20;i++){
      let o = JSON.parse(localStorage.getItem(i));
      let ans = localStorage.getItem("a"+i);
     
     if(ans != null && o["answer"]===ans)
     {
        score++;
        cssScore++;
     }
     
  }
  for(let i = 21;i<=30;i++){
      let o = JSON.parse(localStorage.getItem(i));
      let ans = localStorage.getItem("a"+i);
     
     if(ans != null && o["answer"]===ans)
     {
        score++;
        jsScore++;
     }
  }
   let attr=$('#total').attr('data-value');
   console.log(attr);
     let att=0.29;
    
     console.log(att);
   function demo(){
      $("#total").attr('data-value',att);  
      $("#html").attr('data-value',htmlScore);
      $("#css").attr('data-value',cssScore);
      $("#js").attr('data-value',jsScore); 
   };
  

   function Circlle(data){
      $(data).circleProgress({fill: {color: '#ff5c5c'}})
        .on('circle-animation-progress', function(event, progress, stepValue){
            $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
            });  
    };
    demo();
    
    Circlle('.round');
    
    
console.log(score);
console.log(jsScore);
console.log(cssScore);
console.log(htmlScore);
})
 

