class Ball{
constructor(x,y,r){
var ops={

 restitution:0.8  
}
this.body=Bodies.circle(x,y,50,ops)
this.r=50
World.add(world,this.body)




}
show(){
var pos=this.body.position
var ang=this.body.angle
push()
translate(pos.x,pos.y)
rotate(ang)
ellipseMode(RADIUS)
ellipse(0,0,this.r,this.r)
pop()





}

}