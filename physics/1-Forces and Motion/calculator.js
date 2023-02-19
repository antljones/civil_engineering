//distance moved {displacement} (s) = average speed (v) = * time taken (t)
//acceleration (a) = change in velocity (v - u) * time taken (t)
//force (F) = mass (m) * acceleration (a)
//weight (W) = mass (m) * gravitational field strength (g)
//momentum (p) = mass (m) * velocity
//moment (M) = force (F) * perpendicular distance (d)

class TriangleMethod {
	constructor (triangleTop, triangleBottomLeft, triangleBottomRight) {
		this.triangleTop = triangleTop;
		this.triangleBottomLeft = triangleBottomLeft;
		this.triangleBottomRight = triangleBottomRight;
	}
	
	get TriangleTopResult() {
		this.triangleTop["result"] = this.triangleBottomLeft["quantity"] * this.triangleBottomRight["quantity"];
		return triangleTop;
	}
	
	get TriangleBottomLeftResult() {
		this.triangleBottomLeft["result"] = this.triangleTop["quantity"] / this.triangleBottomRight["quantity"];
		return triangleBottomLeft;
	}
	
	get TriangleBottomRightResult() {
		this.triangleBottomRight["result"] = this.triangleTop["quantity"] / this.triangleBottomLeft["quantity"];
		return triangleBottomRight;
	}
}

$(document).ready( function() {
	var displacement = {"measurement": "Displacement", "quantity": 0, "unit": "m", "symbol": "s"};
	var velocity = {"measurement": "Velocity", "quantity": 0, "unit": "m/s", "symbol": "v"};
	var time = {"measurement": "Time", "quantity": 0, "unit": "s", "symbol": "t"};
	var acceleration = {"measurement": "Acceleration", "quantity": 0, "unit": "m/s/s", "symbol": "a"};
	var velocity2 = {"measurement": "Velocity", "quantity": 0, "unit": "m/s", "symbol": "u"};
	var force = {"measurement": "Force", "quantity": 0, "unit": "kg*m*s^-2", "symbol": "N"};
	var mass = {"measurement": "Mass", "quantity": 0, "unit": "kg", "symbol": "m"}
	var gravity = {"measurement": "Gravity", "quantity": 0, "unit": "m/s^2", "symbol": "g"}
	var momentum = {"measurement": "Momentum", "quantity": 0, "unit": "kg m/s", "symbol": "p"};
	var moment = {"measurement": "Moment", "quantity": 0, "unit": "N*m", "symbol": "τ"};
	
});