class Box{
    constructor(x, y) {
      var options = {
          'isStatic': false,
          'restitution':0.8,
          'friction':1.0,
          'density':1.0,
  
          'restitution':0.4,
          'friction':0.0,
  
      }
      this.body = Bodies.rectangle(x, y, 30, 40, options);
      this.width = 30;
      this.height = 40;
      //this.image = loadImage("sprites/base.png");
      this.visibility = 255;
      World.add(world, this.body);
    }
  
    display(){
      console.log(this.body.speed);
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      //imageMode(CENTER);
      //image(this.image, 0, 0, this.width, this.height);
  
      rect(0, 0, this.width, this.height);
      pop();
      if (this.body.speed < 3){
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
      } else {
        World.remove(world, this.body);
      }
    }
  
    };
  