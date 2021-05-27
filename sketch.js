var moving, fixed;
var car1,car2
function setup() {
   createCanvas(1200,400);
    moving=createSprite(800, 100, 60,30); 
    moving.shapeColor="green"; 
    fixed=createSprite(400, 200, 30,60); 
    fixed.shapeColor="green";
    car1=createSprite(100,100,50,50)
    car1.shapeColor="pink"
    car1.velocityX=3;
    car2=createSprite(1000,100,50,50)
    car2.shapeColor="blue"
    car2.velocityX=-3;
   } 
   
   function draw() { 
     background(0);
    moving.x=mouseX;
    moving.y=mouseY;
    if(moving.x-fixed.x <= (moving.width/2+ fixed.width/2) && 
     fixed.x-moving.x <= (moving.width/2+ fixed.width/2 ) &&
     moving.y-fixed.y <= (moving.height/2+ fixed.height/2) && 
     fixed.y-moving.y <= (moving.height/2+ fixed.height/2 )) { 
    moving.shapeColor="red";
     fixed.shapeColor="red";
    }
           
     else{
    moving.shapeColor="green";
    fixed.shapeColor="green";
     }

     if(car1.x-car2.x <= (car1.width/2+ car2.width/2) && 
     car2.x-car1.x <= (car1.width/2+ car2.width/2 ) ){
       car1.velocityX=-3
       car2.velocityX=3
     }

     drawSprites();
     }