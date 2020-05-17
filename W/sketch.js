
function preload() {
  // Ensure the .ttf or .otf font stored in the assets directory
  // is loaded before setup() and draw() are called
  //font = loadFont('OpenSans-Bold.ttf');
  
  let r, g, b;
  

}

function setup() {
  
   r = random(255);
  g = random(255);
  b = random(255);
  
  createCanvas(windowWidth,windowHeight);
  
  button = createButton('Draw with Motion (Phone/Tablet)');
  button.mousePressed(link1);
  button.style("font-size", "21px");
  button.position(30,355,20)
  
  button2 = createButton('Draw with Cursor (Desktop)');
 button2.mousePressed(link2);
  button2.style("font-size", "21px");
button2.position(30,295,20)
  
  button3 = createButton('Gallery');
  button3.mousePressed(link3);
  button3.style("font-size", "21px");
  button3.position(30,415,20)
  
  var circleSize;


  
}

function draw() {

  
  

  
  //draw_W(windowWidth,5,15);
  //draw_W(windowWidth,5,4);
  
  

  
  textSize(48);
    let Title = 'Who is the Machine?';
text(Title,35, 40,500); // Text wraps within text box
  
  
    
    textSize(18);
    
  
  let Mainbody = 'This website questions the boundary of generative code and human creativity, making you part of the code to produce visual designs the same as a computer.';
  text(Mainbody,35, 125, 330);
  
  
   textSize(18);
    let how  = 'Depending on your device, press either:';
  text(how,35, 245, 340);
  
  textSize(18);
    let gallery  = '<  Click to see more work';
  text(gallery,154,426,300)
  
  //textSize(17);
   // let press  = '*touch anywhere to change colour of screen';
  //text(press,27,470,400)

  //strokeWeight(1.2);


}

function touchStarted() {
  
  // Check if mouse is inside the circle
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  
   background(g, b, r);
    stroke(g, b, r);
  fill(r, g, b);
  
  draw_W(mouseX,mouseY,3)



}

  
  function link1() {

  window.open('https://editor.p5js.org/j123richardson/present/O1Fjf4Mou');
}

function link2() {

  window.open('https://editor.p5js.org/j123richardson/present/VDLtFR1Ic');
  
}

function link3 () {

  window.open('https://j123richardson.wixsite.com/whoisthemachine');
  
}


  function draw_W(x, y,scale) {
  
  push()

 // noFill();
  translate(x, y)
  beginShape();
  
  vertex(-50 * scale, -10 * scale);// 1-2
  
  vertex(-100 * scale, -10 * scale);//2-3
  
  vertex(-100 * scale, 10 * scale);//3-4
vertex(-90 * scale, 10 * scale);
  
  vertex(-60 * scale, 170* scale);//4-5

  vertex(-30* scale, 170 * scale);//5-6
  
  vertex(-15* scale, 80 * scale);//6-7
  
  vertex(0* scale, 170* scale);//7-8
  
  vertex(30 * scale, 170 * scale);//8-9
  
  vertex(60 * scale, 10 * scale);//9-10
  
  vertex(70 * scale, 10 * scale);//10-11  
  
  vertex(70 * scale, -10 * scale);// 11-12
  
  vertex(20 * scale, -10 * scale);// 12-13
  
  vertex(20 * scale, 10 * scale);// 13-14
  
  vertex(30 * scale, 10 * scale);// 14-15
   
  vertex(15 * scale, 75 * scale);// 15-16
  
  vertex(-1* scale,-10 * scale);// 16-17
  
  vertex(-29 * scale, -10 * scale);// 17 -18
  
  vertex(-44 * scale, 75 * scale);// 18-19
  
  vertex(-60 * scale, 10 * scale);// 19-20
  
  vertex(-50 * scale, 10 * scale);// 20-21
  
  vertex(-50 * scale, -10 * scale);// 1-2
 
  endShape();
  pop();
  }