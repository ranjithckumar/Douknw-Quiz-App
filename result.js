$("document").ready(function(){
    let score = 0;
    for(let i = 1;i<=10;i++){
        let o = JSON.parse(localStorage.getItem(i));
        let ans = localStorage.getItem("a"+i);
       if(o["answer"]===ans)
          score++;
    }
    for(let i = 11;i<=20;i++){
        console.log("here");
        let o = JSON.parse(localStorage.getItem(i));
        let ans = localStorage.getItem("a"+i);
       if(o["answer"]===ans)
          score++;
    }
    for(let i = 21;i<=30;i++){
        console.log("here");
        let o = JSON.parse(localStorage.getItem(i));
        let ans = localStorage.getItem("a"+i);
       if(o["answer"]===ans)
          score++;
    }
    $("#marks").text(score);
    localStorage.clear();
})


