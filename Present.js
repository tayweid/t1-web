// Start Video

var Video = document.getElementById("The_Video"); 
var Timekeeper = document.getElementById("Timekeeper");
var Description = document.getElementById("Description");
var Point = 0;


// Timer

setInterval(Set_Timekeeper, 100);

function Set_Timekeeper() {
    Timekeeper.innerHTML = Video.currentTime.toFixed(1);
}


// Description

Description.innerHTML = "This is what this part of the video means. This is what this part of the video means. This is what this part of the video means. This is what this part of the video means. This is what this part of the video means. This is what this part of the video means. This is what this part of the video means. This is what this part of the video means."


// Time Controls

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
    Point_Forward();
    Video.currentTime = Pause_Points[Point];
}

function Skip_Backward() {
    Point_Backward();
    Video.currentTime = Pause_Points[Point];
}

function Play_To() {
    if (Video.currentTime < Pause_Points[Point] - 0.1) {
        setTimeout(Video.currentTime = Video.currentTime + 0.1, 0.1);
    }
    if (Video.currentTime > Pause_Points[Point]) {
        setTimeout(Video.currentTime = Video.currentTime - 0.1, 0.1);
    }
}


// Check Keys

document.onkeydown = Check_Key;

var Play = setInterval(Play_To, 100);

function Check_Key(e) {
    
    e = e || window.event;
    console.log(e.keyCode);
        
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
        Skip_Forward();
    }
    
    // Down Arrow: Skip to Previous Pause Point
    
    if (e.keyCode == '40') {
        Skip_Backward();
    }
    
    // Right Arrow: Play to Next Pause Point
    
    if (e.keyCode == '39') {
        Point_Forward();
    }
    
    // Left Arrow: Play to Previous Pause Point
    
    if (e.keyCode == '37') {
        Point_Backward();
    }
    
}

