class Ground{
    constructor(x,y,width,height){
    options ={
       isStatic: true
    }
    width = this.width;
    height = this.height
}

    display(){
      var pos = this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
}