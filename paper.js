class Paper{
   constructor(x,y,width,height){
      var options ={
         isStatic: false,
         restitution:0.3,
         friction: 0.5,
         density: 1.5
      }

      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.rectangle(x,y,width,height,options);
      World.add(world,this.body);
   }

   display(){
      paperpos = this.body.position;

      push();
      translate(paperpos.x,paperpos.y);
      rectMode(CENTER);
      strokeWeight(3);
      fill(255,0,255);
      ellipse(0,0,this.r,this.r);
      pop();
   }
}