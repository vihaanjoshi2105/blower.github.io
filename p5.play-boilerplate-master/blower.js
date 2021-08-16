class Blower{
    constructor(x,y,w,h){
    var ops={
    
     isStatic:true 
    }
    this.body=Bodies.rectangle(x,y,w,h,ops)
    this.w=w
    this.h=h
    World.add(world,this.body)
    
    
    
    
    }
    show(){
    var pos=this.body.position
    var ang=this.body.angle
    push()
    translate(pos.x,pos.y)
    fill("gray")
    rotate(ang)
    rectMode(CENTER)
    rect(0,0,this.w,this.h)
    pop()
    
    
    
    
    
    }  
    
    }