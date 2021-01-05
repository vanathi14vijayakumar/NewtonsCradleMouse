
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var bob,bob2,bob3,bob4,bob5;
var chain,chain2,chain3,chain4,chain5;

function setup() {
	createCanvas(windowWidth,windowHeight);


	engine = Engine.create();
	world = engine.world;

	/*let canvasmouse = Mouse.create(canvas.elt)
	canvasmouse.pixelRatio = pixelDensity();
	let options = {
		mouse:canvasmouse
	}
	mConstraint.create(engine,options);
	World.add(world,mConstraint)*/

    
	bob = new Bob(400,400,30)
	bob2 = new Bob(460,400,30);
	bob3 = new Bob(520,400,30);
	bob4 = new Bob(340,400,30);
	bob5 = new Bob(280,400,30);

    chain = new String(bob.body,{x:400,y:120})
   chain2 = new String(bob2.body,{x:460,y:120} );
   chain3 = new String(bob3.body,{x:520,y:120} );
   chain4 = new String(bob4.body,{x:340,y:120} );
   chain5 = new String(bob5.body,{x:280,y:120} );
   roof = new Roof(400,120,300,20)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  bob.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  chain.display();
   chain2.display();
   chain3.display();
   chain4.display();
   chain5.display();

   roof.display();
  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bob3.body,{x:mouseX,y:mouseY})
}

