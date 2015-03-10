/* jshint -W098 */
'use strict';

// properties of current car
var currentCar = {
	'name'   : '',
	'side'   : 'semi-left',
	'color'  : '',
	'decals' : '',
	'tires'  : '',
	'grills' : ''
};

// list of sides
//  semi-left = when car is displayed diagonally at the driver side
var sides = [ 'semi-left', 'left', 'back', 'right', 'semi-right', 'front' ];

// function to change image
// will use the currentCar properties
function changeImage () {
	console.log( 'change image' );
}

function changeSide( rotation ) {
	var currentIndex = sides.indexOf( currentCar.side );

	switch( rotation ) {
	case 'clockwise' :
		// if current side is front, set it to semi-left
		// else return the next items in the sides list
		if ( currentIndex === 5 ) {
			currentCar.side = sides[ 0 ];
		} else {
			currentCar.side = sides[ currentIndex +  1 ];
		}

		changeImage();
		break;

	case 'counter' :

		// if current side is front, set it to semi-left
		// else return the next items in the sides list
		if ( currentIndex === 0 ) {
			currentCar.side = sides[ 5 ];
		} else {
			currentCar.side = sides[ currentIndex - 1 ];
		}

		changeImage();
		break;
	}
}
