class Walker {
    constructor(x, y, z) {
      this.pos = createVector(x, y, z);
      this.vel = createVector(0, 0);
      this.prev = createVector(0, 0);
      //Array to store previous position
      this.history = [];
  
    }
    update() {
      //Stores a copy of previous position 
      this.prev = this.pos.copy();
  
      //Options for steps to be applied to this.vel
      let steps = [
        createVector(4, 0, 0),
        createVector(-4, 0, 0),
        createVector(0, 6, 0),
        createVector(0, -6, 0),
        createVector(0, 0, 4),
        createVector(0, 0, -4)
      ]
      this.vel = random(steps);
      //this.vel = noise(steps);
      //this.vel.add(this.acc);
      this.pos.add(this.vel);
  
    //Puts a copy of the position into the history
      this.history.push(this.pos.copy());
    }
  
  
    show() {
  
      beginShape();
      noFill();
      for (let i = 0; i < this.history.length; i++) {
        // Previous position array 
        let v = this.history[i];
        //fill(255, 0, 0);
        vertex(v.x, v.y, v.z);
  
      }
      endShape();
  
      var distance = dist(this.prev.x, this.prev.y, windowWidth / 2, windowHeight / 2);
  
      var thickness = map(distance, 0, dist(0, 0, windowWidth / 2, windowHeight / 2), 0.1, 1);
  
      strokeWeight(thickness);
      
      //stroke(238, 247, 255);
      stroke(0);
  
    }
    
  
  }