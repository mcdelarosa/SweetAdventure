//character draw

function swapImage(obj){
    if(Donut.classList == "walk1"){
        Donut.classList.add("walk2");
        setTimeout(function(){
            Donut.classList.remove("walk1")
        },300);
    } else {
        Donut.classList.add("walk1");
        setTimeout(function(){
            Donut.classList.remove("walk2")
        },300);
    }
}

