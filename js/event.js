/**
 * Created by Chris on 1/11/2015.
 */
 var ENTER_KEY=13;
 window.document.body.onkeypress=function(e) {
 	
 	switch (e.keyCode) {
 		case ENTER_KEY:
 			startBallMovement();
 	}
 };