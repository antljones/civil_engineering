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
		this.name = name;
		this.quantity = quantity;
		this.unit = unit;
		this.symbol = symbol;
	}
}

class Formula {
	constructor (LHS, RHS) {
		this.LHS = LHS;
		this.RHS = RHS;
	}

	getVariables() {
		var allVariables = [];
		allVariables.push(this.LHS);
		allVariables.push(this.RHS);
		return allVariables;
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
		var str = '<p class="measurementSelection" >Find for:</p><select class="measurementSelection" id="measurementSelect" name="measurements">';
		
		for (var i = 0; i < measurements.length; i++ ) { 
			str = str.concat('<option class=-"measurementSelection" value="' + measurements[i].name + '">' + measurements[i].name + '(' + measurements[i].symbol + ')' + '</option>');
		}
		
		str = str.concat('</select>');
		$( "#measurementSelectContainer" ).append( str );

		$( "#measurementSelect" ).change(function () {

                	$( "#formulaSelect option:selected" ).each(function() {
                        	var chosenFormula = null;

                        	switch( $(this).attr('value') ) {
                                	case "displacementvelocitytime":
                                        	chosenFormula = displacementFormula;
                                	break;
                                	case "accelerationchangeinvelocitytime":
                                        	chosenFormula = accelerationFormula;
                                	break;
                                	case "forcemassacceleration":
                                        	chosenFormula = forceFormula;
                                	break;
                                	case "weightmassgravity":
                                        	chosenFormula = weightFormula;
                                	break;
                                	case "momentummassvelocity":
                                        	chosenFormula = momentumFormula;
                                	break;
                                	case "momentforcepdistance":
                                        	chosenFormula = momentFormula;
                                	break;
                       		}


                        	insertMeasurementInputsHTML(chosenFormula, $("#measurementSelect option:selected").attr("value"));

                	});

        	});
	}

	function insertMeasurementInputsHTML(measurements, selectedMeasurementName) {
		var chosenMeasurements = [];
		var selectedMeasurement = null;

		for (var i = 0; i < measurements.length; i++) {
			if (measurements[i].name !== selectedMeasurementName) {
				chosenMeasurements.push(measurements[i]);
			} else {
				selectedMeasurement = measurements[i];
			}
		}

                var str = '<p class="measurementInput">Input values for:';

		for (var i = 0; i < chosenMeasurements.length; i++) {
			str = str.concat('<input type="text" class="measurementInput"  id="' + chosenMeasurements[i].name + '" placeholder="' + chosenMeasurements[i].name + '(' + chosenMeasurements[i].symbol + ')' + '"></input>');
		}

		str = str.concat('<input type="button" id="submitBtn"></input></p>');
		
		$( "#measurementInputContainer" ).empty();
		$( "#measurementInputContainer" ).append( str);

		$('#submitBtn').click(function () {
					
		});
	}

	var displacement = new Measurement("Displacement", 0, "m", "s");
	var velocity = new Measurement("Velocity", 0, "m/s", "v");
	var time = new Measurement("Time", 0, "s", "t");
	var acceleration = new Measurement("Acceleration", 0, "m/s/s", "a");
	var velocity2 = new Measurement("Velocity",0,"m/s","u");
	var force = new Measurement("Force", 0, "N", "F");
	var mass = new Measurement("Mass", 0, "kg", "m");
	var gravity = new Measurement("Gravity", 0, "m/s^2", "g");
	var momentum = new Measurement("Momentum", 0, "kg m/s", "p");
	var moment = new Measurement("Moment", 0, "N*m", "τ");
	var pdistance = new Measurement("Perpendicular distance", 0, "m", "d");
	var weight = new Measurement("Weight", 0, "N", "w");
	
	var displacementFormula = new Formula(displacement, [velocity, time]);
	var accelerationFormula = new Formula(acceleration, [velocity,velocity2, time]);
	var forceFormula = new Formula(force, [mass, acceleration]);
	var weightFormula = new Formula(weight,[mass,gravity]);
	var momentumFormula = new Formula(momentum,[mass,velocity]);
	var momentFormula = new Formula(moment,[force,pdistance]);
	
	var changeInVelocity = { "measurement1": velocity2, "measurement2": velocity, "operator": "-" };

	$( "#formulaSelect" ).change(function () {
		$('#measurementSelectContainer').empty();

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
			
                        switch( $(this).attr("value") ) {
                                case "displacementvelocitytime":
                                        insertMeasurementOptionHtml(displacementFormula.getVariables());
                                break;
                                case "accelerationchangeinvelocitytime":
                                        insertMeasurementOptionHtml(accelerationFormula.getVariables());
                                break;
                                case "forcemassacceleration":
                                        insertMeasurementOptionHtml(forceFormula.getVariables());
                                break;
                                case "weightmassgravity":
                                        insertMeasurementOptionHtml(weightFormula.getVariables());
                                break;
                                case "momentummassvelocity":
                                        insertMeasurementOptionHtml(momentumFormula.getVariables());
                                break;
                                case "momentforcepdistance":
                                        insertMeasurementOptionHtml(momentFormula.getVariables());
                                break;
                        }
			
			$('#measurementSelect').trigger("change");

		});

	});

	$("#formulaSelect").trigger("change");
});
