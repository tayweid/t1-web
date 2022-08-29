// Start Video

var Video = document.getElementById("The_Video"); 
var Timekeeper = document.getElementById("Timekeeper");
var Point = 0;


// Timer

setInterval(Set_Timekeeper, 100);

function Set_Timekeeper() {
    Timekeeper.innerHTML = Video.currentTime.toFixed(1);
}


// Controls

function Point_Forward() {
    if (Point < Pause_Points.length-1) {
        Point = Point + 1;
    }
}

function Point_Backward() {
    if (Point > 0) {
        Point = Point - 1;
    }
}

function Skip_Forward() {
    Video.pause();
    Video.currentTime = Pause_Points[Point];
}

function Skip_Backward() {
    Video.pause();
    Video.currentTime = Pause_Points[Point];
}

function Play_Forward() {
    if (Video.currentTime >= Pause_Points[Point]-0.05) {
        Video.pause();
    }
}

function Loop_Backward() {
    if (Video.currentTime >= Pause_Points[Point]-0.05) {
        Video.currentTime = Pause_Points[Point-1];
        Video.play();
    }
}


// 

document.onkeydown = Check_Key;

function Check_Key(e) {
    
    e = e || window.event;
    console.log(e.keyCode);
    
    // Remove Event Listeners
    
    Video.removeEventListener("timeupdate", Loop_Backward);
    Video.removeEventListener("timeupdate", Play_Forward);
    
    // f: Fullscreen
    
    if (e.key == 'f') {
        Video.webkitEnterFullscreen();
        Video.enterFullscreen();
    }
    
    // s: Increment Forward
    
    if (e.keyCode == '83') {
        Video.currentTime = Video.currentTime + 0.1
    }
    
    // a: Increment Backward
    
    if (e.keyCode == '65') {
        Video.currentTime = Video.currentTime - 0.1
    }
    
    // Up Arrow: Skip to Next Pause Point
    
    if (e.keyCode == '38') { 
        Point_Forward();
        Skip_Forward();
    }
    
    // Down Arrow: Skip to Previous Pause Point
    
    if (e.keyCode == '40') {
        Point_Backward();
        Skip_Backward();
    }
    
    // Right Arrow: Play to Next Pause Point
    
    else if (e.keyCode == '39') {
        Point_Forward();
        Video.play();
        setInterval(Set_Timekeeper, 100);
        
        Video.addEventListener("timeupdate", Play_Forward);
    }
    
    // Left Arrow: Play to Previous Pause Point
    
    else if (e.keyCode == '37') {
        Point_Backward;
        Video.play();
        Video.addEventListener("timeupdate", Loop_Backward);
    }
    
}

