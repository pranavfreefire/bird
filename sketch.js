const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(900,550,70,70);
    box2 = new Box(1100,550,70,70);
    pig1= new Pig(1000,550)
    log1=new Log(1000,500,300,30,PI)
    box3 = new Box(900,450,70,70);
    box4 = new Box(1100,450,70,70);
    pig2= new Pig(1000,450)
    log2=new Log(1000,400,300,30,PI)
    box5 = new Box(1000,350,70,70);
    log3=new Log(950,300,150,30,PI/-3)
    log4=new Log(1050,300,150,30,PI/3)
    bird1=new Bird(100,100,50,50)
    ground = new Ground(600,height,1200,20)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
log1.display();
log2.display();
pig2.display();
box3.display();
box4.display();
box5.display();
log3.display();
log4.display();
bird1.display();
}