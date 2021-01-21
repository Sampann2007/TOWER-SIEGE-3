class BlueBox extends Box{
    constructor(x,y){
        super(x,y,20,30);
        if(this.body.speed<3){
            score=score+2
        }
    } display(){
        if(this.body.speed<3){
            fill(29,0,225);
        super.display();
        }
        else{
            this.visibility=225;
            World.remove(world,this.body);
            push();
            this.visibility=this.visibility-20;
            rect(this.x,this.y,20,30);
            pop();
        }
    }
}