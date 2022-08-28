// var superman1 = document.querySelector(".superman");
var devil = document.querySelector(".devil");
var audio = document.querySelector("#audio");
audio.play()
document.onkeydown = function(e) {
    console.log(e.keyCode);
    if(e.keyCode==38){
        superman1 = document.querySelector(".superman");
        // superman1.classList.add("animateSuperman")
        superman1.style.bottom="40%";
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
}

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