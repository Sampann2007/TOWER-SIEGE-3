function isTouching(b1,b2){  //parameters

    if(b1.x-b2.x<(b1.width/2+b2.width/2)&&
    b2.x-b1.x<(b1.width/2+b2.width/2)&&
    b1.y-b2.y<(b1.height/2+b2.height/2)&&
    b2.y-b1.y<(b1.height/2+b2.height/2)
      
    ){
  
      return true;   
       
    }
    else {return false} ;
  }
