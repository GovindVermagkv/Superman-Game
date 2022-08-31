// var superman1 = document.querySelector(".superman");
var devil = document.querySelector(".devil");
var devilani = document.querySelector(".devilani");
var audio = document.querySelector("#audio");
var audio2 = document.querySelector("#audio2");
var audio3 = document.querySelector("#audio3");
var devil_lough = document.querySelector("#audio4");
var playbtn = document.querySelector("#play");
var container2 = document.querySelector(".container2");
var maincontainer = document.querySelector(".maincontainer");
var classbtn = document.querySelector(".classbtn");
var scorevalue = document.querySelector(".scorevalue");
var gameover = document.querySelector(".gameover");
var finalscore = document.querySelector(".finalscore");
var exit2 = document.querySelector(".exit2");
var playagain = document.querySelector(".playagain");
var controls = document.querySelector(".controls");
var score = 0;
var cross = true;



audio.play()


playbtn.addEventListener("click", function () {
    audio2.play()
    setTimeout(() => {
        container2.style.display = "none";
        maincontainer.style.display = "block";
        audio3.play()
        audio.pause()



        document.onkeydown = function (e) {
            console.log(e.keyCode);
            if (e.keyCode == 38) {
                superman1 = document.querySelector(".superman");
                superman1.style.bottom = "50%";
                setTimeout(() => {
                    superman1.style.bottom = "3%";
                }, 700);
            }
            else if (e.keyCode == 39) {
                superman1 = document.querySelector(".superman");
                super_x = parseInt(window.getComputedStyle(superman1, null).getPropertyValue('left'));
                superman1.style.left = super_x + 200 + "px";

            }
            else if (e.keyCode == 37) {
                superman1 = document.querySelector(".superman");
                superman1.style.left = super_x - 200 + "px";

            }
            else if (e.keyCode == 40) {
                superman1 = document.querySelector(".superman");
                superman1.style.transform = "rotate(90deg)";
                superman1.style.left = "6%";

            }
            else if (e.keyCode == 32) {
                superman1 = document.querySelector(".superman");
                superman1.style.transform = "rotate(0deg)";

            }
        }


        setInterval(() => {
            superman1 = document.querySelector(".superman");
            devil = document.querySelector(".devil");

            super_x = parseInt(window.getComputedStyle(superman1, null).getPropertyValue('left'));
            super_y = parseInt(window.getComputedStyle(superman1, null).getPropertyValue('top'));

            devi_x = parseInt(window.getComputedStyle(devil, null).getPropertyValue('left'));
            devi_y = parseInt(window.getComputedStyle(devil, null).getPropertyValue('top'));

            offsetX = Math.abs(super_x - devi_x)
            offsety = Math.abs(super_y - devi_y)

            console.log("devil position", offsetX);
            console.log("superman position", offsety);
            // }
            if (offsety <= 150 && offsetX <= 145) {
                gameover.style.display = "block";
                finalscore.textContent = score;
                devil_lough.play()
                audio3.pause()
            }
            else if (offsetX <= 150 && cross) {
                score += 1
                scorevalue.textContent = score
                cross = false
                setTimeout(() => {
                    cross = true;
                }, 1000);

            }



        }, 100);






        classbtn.addEventListener("click", function () {
            container2.style.display = "block";
            maincontainer.style.display = "none";
            audio.play()
            audio2.play()
            audio3.pause()
            devil_lough.pause()
        })

        controls.addEventListener("click",function(){
            alert("1 :- Left Key (Forword)    2:- Right Key(Backword)   3 :- Up Key ( Jump )  4 :- Down Key ( Rotate Superman)  5 :- Space button (original position) ")
        })


        exit2.addEventListener("click", function () {
            container2.style.display = "block";
            maincontainer.style.display = "none";
            gameover.style.display = "none";
            audio.play()
            audio2.play()
            audio3.pause()
            devil_lough.pause()
        })


        playagain.addEventListener("click", function () {
            gameover.style.display = "none";
            audio2.play()
            score = 0
            scorevalue.textContent = score;
            devil_lough.pause()
            audio3.play()

        })








    }, 1000);



})













// setInterval(() => {
//     superman1 = document.querySelector(".superman");
//     devil = document.querySelector(".devil");

//     super_x=window.getComputedStyle(superman1,null).getPropertyValue('left')
//     super_y=window.getComputedStyle(superman1,null).getPropertyValue('top')
// console.log(super_x);
//     devi_x=window.getComputedStyle(devil,null).getPropertyValue('right')
//     devi_y=window.getComputedStyle(devil,null).getPropertyValue('top')

//     offsetX=Math.abs(super_x - super_y)
//     offsety=Math.abs(devi_x - devi_y)
//     if(offsetX < 93  && offsety < 52){
//         gameover= document.querySelector("gameover");
//         gameover.style.fontSize="50px"
//     }

// }, 100);