let htmlAr = [];
let cssAr = [];
let jsAr = [];

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

//  let count = 1;
// $("#htm").click(function(){
//     localStorage.setItem("htm","yes");
//     localStorage.setItem("sec",1);
    
//    //  console.log("here1")
//    // location.href='questions.html'; 
   
//  })
// let count1 = 11;
// $("#cs").click(function(){
//    localStorage.setItem("cs","yes");
//     localStorage.setItem("sec",2);

    
//     for(let i = 11;i <= 20;i++)
//     getJSONCss();

//     let delay = 1000; 
//     setTimeout(function(){ location.href='questions.html'; }, delay);

// })

// let count2 = 21;
// $("#jst").click(function(){
//    localStorage.setItem("js","yes");
//     localStorage.setItem("sec",3);

//     for(let i = 11;i <= 20;i++)
//     getJSONJs();
    
//     // let delay = 1000; 
//     // setTimeout(function(){ location.href='questions.html'; }, delay);
// })
 
// // 



// function getJSONCss(){
//    $.getJSON('questions.json',function(json){
//        obj = json;
//        const keys = Object.keys(obj);
//        let randIndex = Math.floor(Math.random()*keys.length)
//        let b =  obj["q"+randIndex];
//        flag = true;
//        while(flag)
//        {
//            if(b["type"]==="css" && !localStorage.hasOwnProperty("q"+randIndex))
//            {
//             flag = false;
//            }
//            else{
//                randIndex = Math.floor(Math.random()*keys.length);
//                b =  obj["q"+randIndex];
//            }
//        }
      
//        localStorage.setItem(count1,JSON.stringify(b));
//        localStorage.setItem("q"+randIndex,"yes");
//        count1++;
//    })
// }

// // obj = json;
// //        const keys = Object.keys(obj);
// //        let randIndex = Math.floor(Math.random()*keys.length)
// //        let b =  obj["q"+randIndex];
// //        flag = true;
// //        while(flag)
// //        {
// //            if(b["type"]==="js" && !localStorage.hasOwnProperty("q"+randIndex))
// //            {
// //             flag = false;
// //            }
// //            else{
// //                randIndex = Math.floor(Math.random()*keys.length);
// //                b =  obj["q"+randIndex];
// //            }
// //        }
      
// //        localStorage.setItem(count2,JSON.stringify(b));
// //        localStorage.setItem("q"+randIndex,"yes");
// //        count2++;



// function getJSONJs(){
//     $.ajax({
//         url:'http://localhost:9000/',
//         type: 'GET',
//         success:function(data){
//             let randIndex = Math.floor(Math.random()*data.length) 
//             let que = "q"+(randIndex)
//             let b = data[randIndex][que];
//             console.log(que+" "+randIndex);
//             console.log(b);
            
//             // flag = true;
//             //        while(flag)
//             //        {
//             //            if(b["type"]==="js" && !localStorage.hasOwnProperty("q"+randIndex))
//             //            {
//             //             flag = false;
//             //            }
//             //            else{
//             //                randIndex = Math.floor(Math.random()*data.length);
//             //                b =  data["q"+randIndex];
//             //            }
//             //        }
//         }
//     })
// }


// function getJSONHtml(json,ar){
//         //   localStorage.setItem(random.b,"yes");
//         console.log(json)
        
      
      
        
//         //    localStorage.setItem(0,JSON.stringify(c));
//         //    localStorage.setItem("q"+randIndex,"yes");
//         //    count++;
//     }

let randomPicker=(json,ar)=>{
    for(let i = 0;i < 10;i++){
    let randIndex = Math.floor(Math.random()*json.length)
    ar.push(json[randIndex])
    json.splice(randIndex,1);
    }
    console.log(ar);
    return ar;
}