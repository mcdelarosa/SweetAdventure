const Donut = document.getElementById("Donut");
const Fork = document.getElementById("Fork");
let score = 0;


function Jump(){
    if(Donut.classList !== "jump"){
        Donut.classList.add("jump");

        setTimeout(function(){
            Donut.classList.remove("jump")
        },300);
    }
}

setInterval(game ,200);

function game() {
    let donutTop = parseInt(window.getComputedStyle(Donut).getPropertyValue("top"));
    let forkLeft = parseInt(window.getComputedStyle(Fork).getPropertyValue("left"));
    console.log(donutTop);
    console.log(forkLeft);

    if (forkLeft < 50 && forkLeft > 0 && donutTop >= 140) {
        isAlive = false;
        score = 0;
        alert("GAME OVER")
    } else {
        score++;
    }

    swapImage(Donut);
}

setInterval(Scoreboard,1000);

//enterButton = document.addEventListener("myInput");


document.addEventListener("keyup", function(event){
    Jump();
    //console.log(' ... keydown')
});

function Scoreboard(){
    document.getElementById("Scoreboard").innerText = "Score :"+ score;
    console.log("Score:" + score);
}
/*setTimeout(*/


Scoreboard()
//, 300);