class Boid {
	constructor(x,y,r) {
		let boid;
		boid = createVector(x,y);
		this.x = boid.x;
		this.y = boid.y;
		this.r = r;
		this.sight = r*7;
		this.vel = int(random(1,20));
		this.arr_vel = [];
	}

	get_distance() {
		this.arr_vel.push([this.x,this.y]);
		for (let i=0; i<this.arr_vel.length; i++) {
			for (let j=0; j<this.arr_vel.length; j++) {
				if (this.arr_vel[i][0] >= this.arr_vel[j][0]-this.sight && this.arr_vel[i][0] <= this.arr_vel[j][0]+this.sight) 
					console.log("TOUCHED");
				// circle(this.arr_vel[i][0],this.arr_vel[i][1], r+30);
			}
		}
	}

	render() {
		// this.x += this.vel;

		noStroke();
		fill(0,0,255);
		circle(this.x,this.y,this.r);

		fill(30,100,20,40);
		circle(this.x,this.y,this.sight);

		stroke(255,0,0);
		strokeWeight(4);
		line(this.x,0,this.x,600);
	}

	run() {
		this.get_distance();
		this.render();
	}
}
