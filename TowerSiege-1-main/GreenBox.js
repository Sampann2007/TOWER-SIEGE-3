class GreenBox extends Box{
    constructor(x,y){
        super(x,y,20,30);


    } display(){
        if(this.body.speed<5){
            fill(29,225,0);
            super.display();
        }
        else{
            World.remove(world,this.body);
            push();
            this.visibility=this.visibility-5;
            tint(255,this.visibility);
            rect(this.x,this.y,20,30);
            pop();
        }
       
    }
}