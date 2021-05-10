class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:false,
            restitution:0.3,
            fiction:0.5,
            density:1.2
        }
        this.x=x
        this.y=y
        this.body = Bodies.rectangle(x, y, 150, 40, options);
        this.width = 1000;
        this.height = 30;
       // World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER)
        noStroke()
        fill('orange')
        rect(0, 0, this.width, this.height);
        pop();
      }
}