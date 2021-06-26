var bgImg;
var cat,mouse;
var cat1,cat2,cat3;
var m1,m2,m3;


function preload() {
 bgImg = loadImage("garden.png");
   cat1= loadAnimation("cat1.png"); 
 cat2=loadAnimation("cat2.png","cat3.png");
 cat3= loadAnimation("cat4.png"); 
 m1=loadAnimation("mouse1.png");
 m2=loadAnimation("mouse2.png","mouse3.png");
 m3=loadAnimation("mouse4.png");
 
 
 //load the images here
}

function setup(){
    createCanvas(1000,800);
   cat=createSprite(850,600,10,10)
   cat.addAnimation("catsitting",cat1)
   cat.scale=0.2
   mouse=createSprite(200,600,10,10)
    mouse.addAnimation("mousingsitting",m1)
   mouse.scale=0.2
    
    
    
    //create tom and jerry sprites here

}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x <=(cat.width - mouse.width)/2){
    cat.addAnimation("catHappy",cat3)
 cat.changeAnimation("catHappy")
    cat.scale=0.2 
    cat.velocityX=0
    cat.x=300
    mouse.addAnimation("mousehappy",m3)
  mouse.changeAnimation("mousehappy")  
    mouse.scale=0.2 
}
   
 console.log(cat.x - mouse.x)  
 console.log((cat.width - mouse.width)/2)
 drawSprites();
}


function keyPressed(){


    if(keyCode === LEFT_ARROW){
cat.velocityX=-5
cat.addAnimation("catRunning",cat2)
cat.changeAnimation("catRunning")
mouse.addAnimation("mouseTeasing",m2);
mouse.changeAnimation("mouseTeasing");
mouse.frameDelay = 25;


}
}

//For moving and changing animation write code here



