class Drops{
    constructor(x,y){
        this.body = Bodies.circle(x,y,20,{friction:0.1});
        this.radius = 20;
       this.color=color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);
    }
    update(){
      if(this.body.position.y > 800){
          Matter.Body.setPosition(this.body, {x:random(0,800),y:0});
      }  
    }
    display(){
        var pos = this.body.position;
        fill(this.color);
       ellipse(pos.x,pos.y,this.radius);
    }
}