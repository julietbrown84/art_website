$(document).ready(function () {  
	   var fly = document.getElementById('fly'),
		cursor = document.getElementById('cursor'),
		updateFly = new Date(),
		updateCursor = new Date();

	document.body.addEventListener('mousemove', function(e) {

		var thisUpdate = new Date();

		if( thisUpdate - updateFly > 500 ) {
			fly.style.left = e.pageX + 'px';
			fly.style.top = e.pageY + 'px';
			updateFly = thisUpdate;
		}
		if( thisUpdate - updateCursor > 100 ) {
			cursor.style.display = 'block';
			cursor.style.left = e.pageX + 'px';
			cursor.style.top = e.pageY + 'px';
			updateCursor = thisUpdate;
		}
	});
});