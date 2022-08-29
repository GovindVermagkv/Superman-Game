// var superman1 = document.querySelector(".superman");
var devil = document.querySelector(".devil");
var devilani = document.querySelector(".devilani");
var audio = document.querySelector("#audio");
var audio2 = document.querySelector("#audio2");
var audio3 = document.querySelector("#audio3");
var playbtn = document.querySelector("#play");
var container2 = document.querySelector(".container2");
var maincontainer = document.querySelector(".maincontainer");
var classbtn = document.querySelector(".classbtn");
audio.play()


playbtn.addEventListener("click",function(){
    audio2.play()
    setTimeout(() => {
    container2.style.display="none";
    maincontainer.style.display="block";
    audio3.play()
    audio.pause()

    

document.onkeydown = function(e) {
    console.log(e.keyCode);
    if(e.keyCode==38){
        superman1 = document.querySelector(".superman");
        // superman1.classList.add("animateSuperman")
        superman1.style.bottom="50%";
        setTimeout(() => {
            // superman1.classList.remove("animateSuperman")
            superman1.style.bottom="3%";
        }, 700);
    }
    else if(e.keyCode==39){
        superman1 = document.querySelector(".superman");
        // superman1.classList.add("animateSuperman")
        superman1.style.left ="34%";
        
    }
    else if(e.keyCode==37){
        superman1 = document.querySelector(".superman");
        // superman1.classList.add("animateSuperman")
        superman1.style.left ="3%";
        
    }
    else if(e.keyCode==40){
        superman1 = document.querySelector(".superman");
        // superman1.classList.add("animateSuperman")
        superman1.style.transform ="rotate(90deg)";
        superman1.style.left ="6%";
     
    }
    else if(e.keyCode==32){
        superman1 = document.querySelector(".superman");
        // superman1.classList.add("animateSuperman")
        superman1.style.transform ="rotate(0deg)";
     
    }
}

classbtn.addEventListener("click",function(){
    container2.style.display="block";
    maincontainer.style.display="none";
    audio.play()
    audio2.play()
    audio3.pause()
})


// devilanima()

// function devilanima(){
//     let arr=[]
//     setInterval(() => {
//         let mainspeed=(4 - 0.5)+"s"
//         arr.push
//         devilani.style.animationDuration =mainspeed
//         let speed=mainspeed
//         console.log(speed);
//     }, 1000);
   
// }



}, 1200);



})













// setInterval(() => {
//     superman1 = document.querySelector(".superman");
//     devil = document.querySelector(".devil");

//     super_x=window.getComputedStyle(superman1,null).getPropertyValue('left')
//     super_y=window.getComputedStyle(superman1,null).getPropertyValue('top')

//     devi_x=window.getComputedStyle(devil,null).getPropertyValue('right')
//     devi_y=window.getComputedStyle(devil,null).getPropertyValue('top')

//     offsetX=Math.abs(super_x - super_y)
//     offsety=Math.abs(devi_x - devi_y)
//     if(offsetX < 93  && offsety < 52){
//         gameover= document.querySelector("gameover");
//         gameover.style.fontSize="50px"
//     }

// }, 100);