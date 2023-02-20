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

function insertMeasurementOptionHtml(measurements) {
	var str = '<p>Find for:</p><select id="measurementSelect" name="measurements">';
	
	for (var i = 0; i < measurements.length; i++ ) { 
		console.log(measurements[i]);
		str = str.concat('<option>' + measurements[i]["measurement"] + '(' + measurements[i]["symbol"] + ')' + '</option>');
	}
	
	str = str.concat('</select>');
	$( "#calc" ).append( str );
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
	var pdistance = {"measurement": "Perpendicular distance", "quantity": 0, "unit": "m", "symbol": "d"};
	var weight = {"measurement": "Weight", "quantity": 0, "unit": "Nkg", "symbol": "w"};
	
	$( "#formulaSelect" ).change(function () {
		$('#calc').empty();
		
		displacement["quantity"] = 0;
		velocity["quantity"] = 0;
		time["quantity"] = 0;
		acceleration["quantity"] = 0;
		velocity2["quantity"] = 0;
		force["quantity"] = 0;
		mass["quantity"] = 0;
		gravity["quantity"] = 0;
		momentum["quantity"] = 0;
		moment["quantity"] = 0;
		
		$( "select option:selected" ).each(function() {
			
			switch( $(this).attr('value') ) {
				case "displacementvelocitytime":
					insertMeasurementOptionHtml([displacement, velocity, time]);
				break;
				case "accelerationchangeinvelocitytime":
					insertMeasurementOptionHtml([acceleration, velocity, velocity2, time]);
				break;
				case "forcemassacceleration":
					insertMeasurementOptionHtml([force, mass, acceleration]);
				break;
				case "weightmassgravity":
					insertMeasurementOptionHtml([weight,mass,gravity]);
				break;
				case "momentummassvelocity":
					insertMeasurementOptionHtml([momentum,mass,velocity]);
				break;
				case "momentforcepdistance":
					insertMeasurementOptionHtml([moment,force,pdistance]);
				break;
			}
			
		});
   
	}).change();
	
});