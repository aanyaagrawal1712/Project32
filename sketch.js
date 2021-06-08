const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;

var bg= "bg.png";
var time= 0;


function preload() {
    getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    // add condition to check if any background image is there to add
    if(backgroundImg)
    background(backgroundImg);

    Engine.update(engine);

    // write code to display time in correct format here
    if(hour==4){
        textSize(30);
        text("Time: "+4+" AM",50,50);
    }
    if(hour==5){
        textSize(30);
        text("Time: "+5+" AM",50,50);
    }
    if(hour==6){
        textSize(30);
        text("Time: "+6+" AM",50,50);
    }
    if(hour==7){
        textSize(30);
        text("Time: "+7+" AM",50,50);
    }
    if(hour==8){
        textSize(30);
        text("Time: "+8+" AM",50,50);
    }
    if(hour==9){
        textSize(30);
        text("Time: "+9+" AM",50,50);
    }
    if(hour==10){
        textSize(30);
        text("Time: "+10+" AM",50,50);
    }
    if(hour==11){
        textSize(30);
        text("Time: "+11+" AM",50,50);
    }
    if(hour==12){
        textSize(30);
        text("Time: "+12+" PM",50,50);
    }
    if(hour==13){
        textSize(30);
        text("Time: "+13+" PM",50,50);
    }
    if(hour==14){
        textSize(30);
        text("Time: "+14+" PM",50,50);
    }
    if(hour==15){
        textSize(30);
        text("Time: "+15+" PM",50,50);
    }
    if(hour==16){
        textSize(30);
        text("Time: "+16+" PM",50,50);
    }
    if(hour==17){
        textSize(30);
        text("Time: "+17+" PM",50,50);
    }
    if(hour==18){
        textSize(30);
        text("Time: "+18+" PM",50,50);
    }
    if(hour==19){
        textSize(30);
        text("Time: "+19+" PM",50,50);
    }
    if(hour==20){
        textSize(30);
        text("Time: "+20+" PM",50,50);
    }
    if(hour==21){
        textSize(30);
        text("Time: "+21+" PM",50,50);
    }
    if(hour==22){
        textSize(30);
        text("Time: "+22+" PM",50,50);
    }
    if(hour==23){
        textSize(30);
        text("Time: "+23+" PM",50,50);
    }
    if(hour==0){
        textSize(30);
        text("Time: "+0+" AM",50,50);
    }
    if(hour==1){
        textSize(30);
        text("Time: "+1+" AM",50,50);
    }
    if(hour==2){
        textSize(30);
        text("Time: "+2+" AM",50,50);
    }
    if(hour==3){
        textSize(30);
        text("Time: "+3+" AM",50,50);
    }
 
    
}

async function getBackgroundImg(){

    // write code to fetch time from API
    var response= await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");

    //change the data in JSON format
    var responseJSON= await response.json();
    var datetime= responseJSON.datetime;

    // write code slice the datetime
    hour= datetime.slice(11,13);

    // add conditions to change the background images from sunrise to sunset
    if(hour>=4 && hour<=6){
        bg= "sunrise1.png";
    }else if(hour>=6 && hour<=08){
        bg= "sunrise2.png";
    }else if(hour>=08 && hour<=10){
        bg= "sunrise3.png";
    }else if(hour>=10 && hour<=12){
        bg= "sunrise4.png";
    }else if(hour>=12 && hour<=14){
        bg= "sunrise5.png";
    }else if(hour>=14 && hour<=16){
        bg= "sunrise6.png";
    }else if(hour>=16 && hour<=17){
        bg= "sunset7.png";
    }else if(hour>=17 && hour<=18){
        bg= "sunset8.png";
    }else if(hour>=18 && hour<=19){
        bg= "sunset9.png";
    }else if(hour>=19 && hour<=20){
        bg= "sunset10.png";
    }else if(hour>=20 && hour<=22){
        bg= "sunset11.png";
    }else if(hour<=22 && hour==0){
        bg= "sunset12.png";
    }else if(hour==0 && hour<=03){
        bg= "sunset12.png";
    }

    //load the image in backgroundImg variable here
    backgroundImg= loadImage(bg);

}
