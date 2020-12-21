function loadCanvas() {
	var canvas = document.getElementById('housesPlan');
	if(!canvas.getContext('2d'))
	{
		document.getElementById('housesPlan').style.display = 'none';
		document.getElementById('no-canvas').style.display = 'block';
		return;
	}
	canvas.width = 1200;
		canvas.height = 800;
	drawPlan(canvas);
}
function drawPlan(canvas) {
	var ctx = canvas.getContext('2d');
	ctx.fillStyle = 'lightgrey';
	ctx.strokeStyle = 'black';
	ctx.lineWidth = 4;
		// стіни кімнати
	ctx.strokeRect(12, 12, 1177, 777);
	ctx.strokeRect(20, 20, 1162, 762);
		// двері
	ctx.strokeRect(12, 580, 8, 150);
	ctx.beginPath();
	ctx.moveTo(20, 730);
	ctx.lineTo(150, 650);
	ctx.stroke();
		// вікно 1
	ctx.strokeRect(1182, 100, 7, 180);
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.moveTo(1185, 102);
	ctx.lineTo(1185, 282);
	ctx.stroke();
	ctx.lineWidth = 4;
		// вікно 2
	ctx.strokeRect(1182, 500, 7, 180);
	ctx.lineWidth = 1;
	ctx.beginPath();
	ctx.moveTo(1185, 502);
	ctx.lineTo(1185, 682);
	ctx.stroke();
	ctx.lineWidth = 4;
	    // стіл 1
	ctx.fillRect(200, 200, 300, 170);
	ctx.strokeRect(200, 200, 300, 170);
	    // стіл 2
	ctx.fillRect(680, 200, 300, 170);
	ctx.strokeRect(680, 200, 300, 170);
	    // стіл 3
	ctx.fillRect(200, 500, 300, 170);
	ctx.strokeRect(200, 500, 300, 170);
	    // стіл 4
	ctx.fillRect(680, 500, 300, 170);
	ctx.strokeRect(680, 500, 300, 170);
	    // комп'ютер 1
	ctx.beginPath();
	ctx.moveTo(230, 250);
	ctx.lineTo(240, 240);
	ctx.lineTo(460, 240);
	ctx.lineTo(470, 250);
	ctx.stroke();
	    // комп'ютер 2
	ctx.beginPath();
	ctx.moveTo(700, 250);
	ctx.lineTo(710, 240);
	ctx.lineTo(950, 240);
	ctx.lineTo(960, 250);
	ctx.stroke();
	    // комп'ютер 3
	ctx.beginPath();
	ctx.moveTo(230, 550);
	ctx.lineTo(240, 540);
	ctx.lineTo(460, 540);
	ctx.lineTo(470, 550);
	ctx.stroke();
	    // комп'ютер 4
	ctx.beginPath();
	ctx.moveTo(700, 550);
	ctx.lineTo(710, 540);
	ctx.lineTo(950, 540);
	ctx.lineTo(960, 550);
	ctx.stroke();
	    // дошка
	ctx.beginPath();
	ctx.moveTo(200, 40);
	ctx.lineTo(210, 30);
	ctx.lineTo(1000, 30);
	ctx.lineTo(1010, 40);
	ctx.fill();
	ctx.stroke();
		// стілець 1
	ctx.beginPath();
	ctx.arc(280, 430, 50, 0, 90, false);
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(420, 430, 50, 0, 90, false);
	ctx.fill();
	ctx.stroke();
	   // стілець 2
	ctx.beginPath();
	ctx.arc(760, 430, 50, 0, 90, false);
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(900, 430, 50, 0, 90, false);
	ctx.fill();
	ctx.stroke();
	   // стілець 3
	ctx.beginPath();
	ctx.arc(280, 725, 50, 0, 90, false);
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(420, 725, 50, 0, 90, false);
	ctx.fill();
	ctx.stroke();
	   // стілець 4
	ctx.beginPath();
	ctx.arc(760, 725, 50, 0, 90, false);
	ctx.fill();
	ctx.stroke();

	ctx.beginPath();
	ctx.arc(900, 725, 50, 0, 90, false);
	ctx.fill();
	ctx.stroke();
}	
