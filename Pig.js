class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.visibility = 255 ;
  }
  vanish(){
    //console.log(this.body.speed);
    if (this.body.speed < 3.0) {
    super.display();
    }else{
      this.visibility -= 5 ;
      push();
      World.remove(world, this.body);
      pop();
    }
  }
};