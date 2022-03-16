let objek = [];

function setup() {
  createCanvas(400, 400);
  
  for(let i = 0; i<100; i++){
    objek.push(new Mover());
  }
}

function draw() {
  background(0);
  
  for(let i = 0; i<objek.length; i++){
    objek[i].gerak();
    objek[i].tampil();
    objek[i].cekBatas();
    
  }
  
} 

class Mover {
  constructor(x,y){
    this.location = createVector(random(width),random(height));
    this.velocity = createVector(0,0);
    this.acceleration = createVector(0.01,-0.01);
    this.ukuran = random(5,20);
  }
  
  tampil(){
    stroke(255,0,127);
    fill(random(0,255), random(0,255), random(0,255));
    ellipse(this.location.x, 
              this.location.y,
                this.ukuran, 
                 this.ukuran);
  }
  
  gerak(){
    var mouse = createVector(mouseX, mouseY);
    
    var arahMouse = p5.Vector.sub(mouse, this.location);
    var topSpeed = random(1,50);
    
    arahMouse.normalize();
    arahMouse.mult(0.5); 
  
    
    this.velocity.add(this.acceleration);
    this.velocity.add(arahMouse);
    this.velocity.limit(topSpeed);
    this.location.add(this.velocity);
    
  }
  
  cekUjung(){
    if ( this.location.x > windowWidth ) {
      this.location.x = 0;
    }
    else if (this.location.x < 0){
      this.location.x = windowWidth;
    }
  
    if ( this.location.y > windowHeight ) {
      this.location.y = 0;
    }
    else if (this.location.y < 0){
      this.location.y = windowHeight;
    }
  }
  
  cekBatas(){
    if (this.location.x < 0 || this.location.x > width){
      this.velocity.x = -1*this.velocity.x
    }
    else if (this.location.y < 0 || this.location.y > height){
      this.velocity.y = -1*this.velocity.y
    }
  }
}