$("document").ready(function(){
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
    $("#marks").text(score);
    $("#htmlScoreCard").text(htmlScore);
    $("#cssScoreCard").text(cssScore);
    $("#jsScoreCard").text(jsScore);
    localStorage.clear();
})

 
