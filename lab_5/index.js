var state = 0;
		function changeBulbImage() {
			if (state == 1) {
				document.getElementById("bulbImg").src="light-bulb-off.png";
				state = 0;
			} else {
				document.getElementById("bulbImg").src="light-bulb-on.png";
				state = 1;
			}
		}