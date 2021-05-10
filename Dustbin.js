class Dustbin{
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
        this.width = 10;
        this.height = 80;
       
       
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
    
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER)
        noStroke()
        fill('white')
        rect(0, 0, this.width, this.height);
        pop();
      }
}