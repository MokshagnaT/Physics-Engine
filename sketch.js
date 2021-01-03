// name spacing
 const Engine = Matter.Engine
  const World = Matter.World;
   const Bodies = Matter.Bodies;
    var engine, world, ground; 
    var ball;
    function setup() { 
      createCanvas(400,400); 
      engine = Engine.create(); 
      world = engine.world;
       var groundOptions = { isStatic: true,
         friction: 0.04,
          density : 0.8 
        }
        // bodies will not be visible 
        ground = Bodies.rectangle(200,390,400,50,groundOptions);
        ball = Bodies.circle(200,50,70,{restitution : 0.8});
         World.add (world,ground); 
        World.add(world,ball);
        } 
         function draw() {
            background(0);
             Engine.update(engine);
              rectMode (CENTER);
               fill ("brown"); 
               rect (ground.position.x,ground.position.y,400,50) 
               ellipseMode(RADIUS);
               ellipse(ball.position.x,ball.position.y,70,70);
              }