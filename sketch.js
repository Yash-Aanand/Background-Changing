
var r = 0;
var g = 50;
var b= 255;

var Rand = 0;


function setup(){

  createCanvas(1200,400);



}



function draw(){
  background(Rand); 
   
  

  if (World.mouseX > 400 && World.mouseX < 600) {
  Rand = 0; 

  }

  if (World.mouseX < 200) {
    Rand = 50; 
  
    }

    if (World.mouseX < 400 && World.mouseX > 200) {
      Rand = 255; 
    
      }


      if (World.mouseX > 600 && World.mouseX < 800) {
        Rand = 150; 
      
        }

        if (World.mouseX > 800 && World.mouseX < 1000) {
          Rand = 100; 
        
          }


        if (World.mouseX > 1000 && World.mouseX < 1200) {
          Rand = 200; 
        
          }

          strokeWeight(40);
          stroke("lightblue");
          noFill();
          ellipse(World.mouseX, World.mouseY, 30, 30);
          

  // change the value of Red based on the mouse movement about the X axis
  // change the value of Green based on the mouse movement about the X axis
  // change the value of Blue based on the mouse movement about the X axis

  // Use the map() function to do so. 

  // Pass the values to the background() function you have learnt previously.

  // Create an ellipse that will move around with you mouse about the X axis.
  // Remember to fill the canvas with white paint before creating the ellipse.
  
  
  
  
  
  drawSprites();
}




