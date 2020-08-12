//Create variables here
var dog, happyDog, database, foodS, foodStock;
var foodS = 25;
function preload(){
  //load images here
 happydogimg=loadImage("images/dog.png");
  dogimg=loadImage("images/doghappy.png");
}

function setup() {
  database = firebase.database();
  //console.log(database);
	createCanvas(500, 500);
  foodStock = database.ref('food');
  foodStock.on("value",readstock);

}


function draw() {  
  background(46, 139, 87);

  textSize(20);
  fill("white");
  stroke("white");
  text("Press the UP Arrow Key To Feed Your Pet",50,50);
  fill("black");
  textSize(16);
  stroke(0);
  text("food Remaing :"+foodStock,150,280);

  if(keyWentDown(UP_ARROW)){
    writestock(foodStock);
    dog.addImage("dog"dogimg);
    dog.scale(0.2);
  }else{
 
    dog.addImage("dog"happydogimg);
    dog.scale(0.2);
  }
  //image(dog,200,300,100,100);
  drawSprites();
  //add styles here

}
function writestock(x){
  if(x<=0){
    x=0;
  }
  else{
    x=x-1
  }
database.ref('/').update({
  food:x
})
}
function readstock(data){
  foodStock = data.val();
}



