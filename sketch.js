class Boid {
	constructor(x,y,r) {
		let pos;
		let vel;

		this.x = x;
		this.y = y;
		this.r = r;

		this.pos = createVector(x,y);
		this.vel = p5.Vector.random2D();
	}

	draw() {
		fill(23,100,20);
		circle(this.pos.x,this.pos.y,this.r);
	}
}

const n = 100;
const r = 30;
let boids = [];

function setup() {
  createCanvas(600, 600);
	for (let i=0; i<n; i++) {
		let x = int(random(r,width-r));
		let y = int(random(r,height-r));
		boids[i] = new Boid(x,y,r);
	}
}

function rule1(current_b) {
	// perceived centre by the boid
	let pc = createVector(0);

	for (b of boids) {
		if (b != current_b) {
			pc = pc.add(b.pos);
		}
	}
	pc.div((n - 1));

	return (pc.sub(current_b.pos)).div(100);
}

function rule2(current_b) {
	let c = createVector(0,0);
	// let v1 = createVector(0,0);

	for (b of boids) {
		let distance = b.pos.sub(current_b.pos);

		if (b != current_b) {
			if (mag(distance.x, distance.y) < 100) {
				c = c.sub(distance);
			}
		}
	}
	return c;
}

function rule3(current_b) {
	// perceived velocity by the boid
	let pv = createVector(0,0);

	for (b of boids) {
		if (b != current_b) {
			pv = pv.add(b.vel);
		}
	}
	pv = pv.div(n-1);
	return (pv.sub(current_b.vel)) / 8;
}

function draw() {
  background(220,200,20);

	for (b of boids) {
		b.draw();

		let v1 = rule1(b);
		let v2 = rule2(b);
		let v3 = rule3(b);

		b.vel = b.vel.add(v1);
		b.vel = b.vel.add(v2);
		b.vel = b.vel.add(v3);
		b.pos = b.pos.add(b.vel);
	}
}
