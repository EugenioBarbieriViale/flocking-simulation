const n = 3;
const r = 30;
let boid = [];

function setup() {
  createCanvas(600, 600);
	for (let i=0; i<n; i++) {
		let x = int(random(r,width-r));
		let y = int(random(r,height-r));
		// let x = r;
		// let y = i*200;
		boid[i] = new Boid(x,y,r);
	}
}

function draw() {
  background(220);
	noLoop();
	for (let i=0; i<n; i++) {
		boid[i].run();
	}
}
