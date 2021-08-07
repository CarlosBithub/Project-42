var issimg, spacebgimg,spacecraft1img,spacecraft2img,spacecraft3img,spacecraft4img

var iss,spacecraft,hasDocked=false,dockingpoint

function preload(){
spacecraft1img=loadImage("spacecraft1.png")
spacebgimg=loadImage("spacebg.jpg")
spacecraft2img=loadImage("spacecraft2.png")
spacecraft3img=loadImage("spacecraft3.png")
spacecraft4img=loadImage("spacecraft4.png")
issimg=loadImage("iss.png")
}

function setup() {
  createCanvas(800,800);
  iss=createSprite(400, 200, 50, 50);
  iss.addImage(issimg);
  iss.scale=0.7

  spacecraft=createSprite(350,600,50,50)
  spacecraft.addImage(spacecraft1img)
  spacecraft.scale=0.14

  dockingpoint=createSprite(357,208,20,20)
  dockingpoint.visible=false
}

function draw() {
  background(spacebgimg); 

  //console.log(mouseX,mouseY)
  
  if(!hasDocked){
    spacecraft.x=spacecraft.x+random(-1,1)

    if(keyDown("left")){
      spacecraft.addImage(spacecraft4img);
      spacecraft.x=spacecraft.x-5
    }else{
      spacecraft.addImage(spacecraft1img)
    }

    if(keyDown("right")){
      spacecraft.addImage(spacecraft3img);
      spacecraft.x=spacecraft.x+5
    }

    if(keyDown("up")){
      spacecraft.addImage(spacecraft2img);
      spacecraft.y=spacecraft.y-5
    }

    if(keyDown("down")){
      spacecraft.addImage(spacecraft2img);
    }



  }

  if(spacecraft.isTouching(dockingpoint)){
    hasDocked=true
    spacecraft.addImage(spacecraft1img);
  }

  if(hasDocked){
    fill("yellow");
    textSize(30);
    text("Docking Mission Complete!!!",400,400);
  }

  

  


  drawSprites();

}