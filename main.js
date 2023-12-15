function preload(){

}

function setup(){
    canvas = createCanvas(640,400);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
    tintColor = "";
}

function draw(){
    image(video, 0, 0, 640, 400);
    tint(tintColor)
}

function filtro(){
    tintColor = document.getElementById("cor").value;
}