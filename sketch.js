var btn_red;
var btn_green;
var btn_yellow;
var btn_blue;
var btn_reset;

var r = 0;
var g = 0;
var b = 0;



function setup() {
  createCanvas(400, 400);
  
  btn_red=createButton("RED");
  btn_red.position(100,250);
  btn_red.mousePressed(red_bg);

  btn_green=createButton("GREEN");
  btn_green.position(250,250);
  btn_green.mousePressed(green_bg);

  btn_yellow=createButton("YELLOW");
  btn_yellow.position(100,150);
  btn_yellow.mousePressed(yellow_bg);

  btn_blue=createButton("blue");
  btn_blue.position(250,150);
  btn_blue.mousePressed(blue_bg);

  btn_reset=createButton("Reset");
  btn_reset.position(175,100);
  btn_reset.mousePressed(reset_bg);

}

function draw() {
  background(r,g,b);
}

function red_bg(){

r=255;
g=0;
b=0;

}

function green_bg(){

r=0;
g=255;
b=0;

}

function yellow_bg(){

r=255;
g=255;
b=0;

}

function blue_bg(){

  r=0;
  g=0;
  b=255;

}

function reset_bg(){

r=0;
g=0;
b=0;

}