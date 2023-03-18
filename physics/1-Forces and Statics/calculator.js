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
	
	get triangleTopResult() {
		this.triangleTop["result"] = this.triangleBottomLeft["quantity"] * this.triangleBottomRight["quantity"];
		return triangleTop;
	}
	
	get triangleBottomLeftResult() {
		this.triangleBottomLeft["result"] = this.triangleTop["quantity"] / this.triangleBottomRight["quantity"];
		return triangleBottomLeft;
	}
	
	get triangleBottomRightResult() {
		this.triangleBottomRight["result"] = this.triangleTop["quantity"] / this.triangleBottomLeft["quantity"];
		return triangleBottomRight;
	}
}

class Measurement {
	constructor (name, quantity, unit, symbol) {

	}
}

function operatorHandler(operation) {
	
	//TODO: check that the measurement is the same otherwise can't be operated on
	switch(operator) {
		case '+':
			return operation["measurement1"] + operation["measurement2"];
		break;
		case '-':
			return operation["measurement1"] + operation["measurement2"];
		break;
		case '*':
			return operation["measurement1"] * operation["measurement2"];
		break;
		case '/':
			return operation["measurement1"] / operation["measurement2"];
		break;
	}
}

$(document).ready( function() {
	function insertMeasurementOptionHtml(measurements) {
		var str = '<p>Find for:</p><select id="measurementSelect" name="measurements">';
		
		for (var i = 0; i < measurements.length; i++ ) { 
			str = str.concat('<option>' + measurements[i]["measurement"] + '(' + measurements[i]["symbol"] + ')' + '</option>');
		}
		
		str = str.concat('</select>');
		$( "#calc" ).append( str );
	}

	var displacement = Measurement.new("Displacement", 0, "m", "s");
	var velocity = Measurement.new("Velocity", 0, "m/s", "v");
	var time = Measurement.new("Time", 0, "s", "t");
	var acceleration = Measurement.new("Acceleration", 0, "m/s/s", "a");
	var velocity2 = Measurement.new("Velocity",0,"m/s","u");
	var force = Measurment.new("Force", 0, "N", "symbol": "F");
	var mass = Measurement.new("Mass", 0, "kg", "m")
	var gravity = Measurment.new("Gravity", 0, "m/s^2", "g");
	var momentum = Measurement.new("Momentum", 0, "kg m/s", "p");
	var moment = Measurement.new("Moment", 0, "N*m", "τ");
	var pdistance = Measurement.new("Perpendicular distance", 0, "m", "d"};
	var weight = Measurement.new("Weight", 0, "N", "w"};
	
	var displacementForumla = [displacement, velocity, time];
	var accelerationFormula = [acceleration, velocity, velocity2, time];
	var forceFormula = [force, mass, acceleration];
	var weightFormula = [weight,mass,gravity];
	var momentumFormula = [momentum,mass,velocity];
	var momentFormula = [moment,force,pdistance];
	
	var changeInVelocity = { "measurement1": velocity2, "measurement2": velocity, "operator": "-" };
	
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
					insertMeasurementOptionHtml(displacementForumla);
				break;
				case "accelerationchangeinvelocitytime":
					insertMeasurementOptionHtml(accelerationFormula);
				break;
				case "forcemassacceleration":
					insertMeasurementOptionHtml(forceFormula);
				break;
				case "weightmassgravity":
					insertMeasurementOptionHtml(weightFormula);
				break;
				case "momentummassvelocity":
					insertMeasurementOptionHtml(momentumFormula);
				break;
				case "momentforcepdistance":
					insertMeasurementOptionHtml(momentFormula);
				break;
			}
			
		});
   
	}).change();
	
	$( "#measurementSelect' ).change(function () {
		
		$( "select option:selected" ).each(function() {
			
			switch( $( "#formulaSelect select option:selected" ).attr('value') ) {
				case "displacementvelocitytime":
					insertMeasurementResultsHtml(displacement,velocity,time);
				break;
				case "accelerationchangeinvelocitytime":
					insertMeasurementResultsHtml(acceleration, operatorHandler(changeInVelocity),time);
				break;
				case "forcemassacceleration":
					insertMeasurementResultsHtml(force,mass,acceleration);
				break;
				case "weightmassgravity":
					insertMeasurementResultsHtml(weight,mass,gravity);
				break;
				case "momentummassvelocity":
					insertMeasurementResultsHtml(momentum,mass,velocity);
				break;
				case "momentforcepdistance":
					insertMeasurementResultsHtml(moment,force,pdistance);
				break;
			}
			
		});
   
	}).change();
	
});
