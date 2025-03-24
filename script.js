const nav_btn = document.getElementById('nav-button');
const left = document.getElementById('left');
const right = document.getElementById('right');
const nav = document.querySelector('nav');

let is_open = false;
nav_btn.addEventListener('click',function(){
    if(!is_open){
        nav_btn.style.transform = "rotateZ(180deg)";
        split_it();
    }
    else{
        nav_btn.style.transform = "none";
        join_it();
    }
    is_open = !is_open;
});

function split_it(){
    left.style.transform = "translateX(-150px)";
    right.style.transform = "translateX(150px)";
    nav.style.opacity = "1";
}

function join_it(){
    nav.style.opacity = "0";
    left.style.transform = "none";
    right.style.transform = "none";

}