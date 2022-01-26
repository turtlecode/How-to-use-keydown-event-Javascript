var character = document.getElementById("character");
var game = document.getElementById("game");
var interval;
var both = 0;

function moveLeft(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left>0){
        character.style.left = left - 2 + "px";
    }
}
function moveRight(){
    var left = parseInt(window.getComputedStyle(character).getPropertyValue("left"));
    if(left<380){
        character.style.left = left + 2 + "px";
    }
}
function moveUp(){
    var top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(top<500 && top > 0){
        character.style.top = top - 2 + "px";
    }
}
function moveDown(){
    var top = parseInt(window.getComputedStyle(character).getPropertyValue("top"));
    if(top<480 && top > -1){
        character.style.top = top + 2 + "px";
    }
}
document.addEventListener("keydown", event => {
    if(both==0){
        both++;
        if(event.key==="ArrowLeft"){
            interval = setInterval(moveLeft, 1);
        }
        if(event.key==="ArrowRight"){
            interval = setInterval(moveRight, 1);
        }
        if(event.key==="ArrowUp"){
            interval = setInterval(moveUp, 1);
        }
        if(event.key==="ArrowDown"){
            interval = setInterval(moveDown, 1);
        }
    }
});
document.addEventListener("keyup", event => {
    clearInterval(interval);
    both=0;
});