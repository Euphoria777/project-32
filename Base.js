class Base {
  constructor() {
    var ground_options = {
      isStatic: true,
    };
    this.ground = Bodies.rectangle(600, 500, 2500, 10, ground_options);
    World.add(world, this.ground);
  }
  display() {
    noStroke();
    fill("black");
    rectMode(CENTER);
    rect(this.ground.position.x, this.ground.position.y, 1100, 20);
  }
}