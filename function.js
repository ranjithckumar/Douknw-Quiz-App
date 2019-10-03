
//   let value=document.querySelectorAll('#round data-value');
//    Array.from(value).forEach(function(values){
//        console.log(values.value);
//        console.log("haiii");
//    })

console.log("aaa");

$("document").ready(function(){
    let attr=$('#total').attr('data-value');
    console.log(attr);
    $("#total").attr('data-value',0.90);
    $("#html").attr('data-value',.50);
    $("#css").attr('data-value','cssScore');
    $("#js").attr('data-value','jsScore');
    // localStorage.clear();
    function Circlle(el){
        $(el).circleProgress({fill: {color: '#ff5c5c'}})
          .on('circle-animation-progress', function(event, progress, stepValue){
              $(this).find('strong').text(String(stepValue.toFixed(2)).substr(2)+'%');
              });  
      };
      Circlle('.round');
    
    
    let score = 0;
    let htmlScore = 0;
    let cssScore = 0;
    let jsScore = 0;
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
    // $("#marks").text(score);
    // $("#htmlScoreCard").text(htmlScore);
    // $("#cssScoreCard").text(cssScore);
    // $("#jsScoreCard").text(jsScore);
    
})
 

