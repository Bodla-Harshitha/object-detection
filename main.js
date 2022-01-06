img=""
function preload(){
    img=loadImage("dog_cat.jpg");
    
}

function setup(){
   canvas= createCanvas(640,420);
   canvas.center();
}
function draw(){
    image(img,0,0,640,420);

    fill('#FF0000');
    text('Dog',60,70);
    noFill();
    stroke('#FF0000');
    rect(30,40,450,350);
}