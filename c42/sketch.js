const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var thunder, thunder1,thunder2,thunder3,thunder4;
var batAnimation,bat;


var engine, world;

var rand, drop, box;
var maxBoxs = 100;



var thunderCreatedFrame=0;

function preload(){
    thunder1 = loadImage("thunderbolt/1.png");
    thunder2 = loadImage("thunderbolt/2.png");
    thunder3 = loadImage("thunderbolt/3.png");
    thunder4 = loadImage("thunderbolt/4.png");

    batAnimation = loadAnimation("bat/bat1.png","bat/bat2.png","bat/bat3.png",
                        "bat/bat4.png","bat/bat5.png","bat/bat6.png",
                        "bat/bat7.png","bat/bat8.png","bat/bat9.png",
                        "bat/bat10.png","bat/bat11.png","bat/bat12.png");
   
}

function setup(){
    engine = Engine.create();
    world = engine.world;

    createCanvas(400,700);
    umbrella = new Umbrella(200,500);

    //create drops
    box = new Box(random(10,380),20,25,25);
    box1 = new Box(random(10,380),20,25,25);
    box2 = new Box(random(10,380),20,25,25);
    box3 = new Box(random(10,380),20,25,25);
    box4 = new Box(random(10,380),20,25,25);
    box5 = new Box(random(10,380),20,25,25);
    box6 = new Box(random(10,380),20,25,25);
    box7 = new Box(random(10,380),20,25,25);
    box8 = new Box(random(10,380),20,25,25);
    box9 = new Box(random(10,380),20,25,25);
    box10 = new Box(random(10,380),20,25,25);
    box11 = new Box(random(10,380),20,25,25);
    box12 = new Box(random(10,380),20,25,25);
    box13 = new Box(random(10,380),20,25,25);
    box14 = new Box(random(10,380),20,25,25);
    box15 = new Box(random(10,380),20,25,25);
    box16 = new Box(random(10,380),20,25,25);
    box17 = new Box(random(10,380),20,25,25);
    box18 = new Box(random(10,380),20,25,25);
    box19 = new Box(random(10,380),20,25,25);
    box20 = new Box(random(10,380),20,25,25);
    box21 = new Box(random(10,380),20,25,25);
    box22 = new Box(random(10,380),20,25,25);
    box23 = new Box(random(10,380),20,25,25);
    box24 = new Box(random(10,380),20,25,25);

    
}

function draw(){
    Engine.update(engine);
    background(0); 

    //creating thunder
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,370), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }
    bat= createSprite(Math.round(random(0,400)),Math.round(random(0,400)));
    bat.addAnimation("moving_bat",batAnimation);
    bat.visible = false;
    if(frameCount % 100 === 0){
       bat.visible = true;
        bat.velocityX = Math.round(random(-4,4));
        bat.velocityY = Math.round(random(-4,4));
        bat.scale=0.4;
        
       
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    if (box.y < 100){
        Matter.Body.setPosition(this.drop, {x:random(10,380), y:random(10,380) });
    }
    

    umbrella.display();

    //display rain drops
    box.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    box17.display();
    box18.display();
    box19.display();
    box21.display();
    box22.display();
    box23.display();
    box24.display();

    drawSprites();
}   

