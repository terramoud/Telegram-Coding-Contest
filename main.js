var canvasBg = document.getElementById('bg');
var ctxBg = canvasBg.getContext('2d');
var canvas = document.getElementById('fg');
var ctx = canvas.getContext('2d');
var marginBottomAfterCoordinateSystem = 35;
var canvasBgWidth = window.innerWidth - 8;
canvasBg.width = canvasBgWidth;
canvas.width = canvasBgWidth;
var windowHeight = window.innerHeight;
var coordinateSystemStart = windowHeight * 0.5;
var chartsHeight = windowHeight * 0.8;
var canvasBgHeight = chartsHeight * 5 + marginBottomAfterCoordinateSystem + 100;
canvasBg.height = canvasBgHeight; // / 2 + chartMarginTop;
canvasBg.style.zIndex = 0;
canvas.height = canvasBgHeight;
canvas.style.zIndex = 1;
/*canvasBg.style.display = 'block';
canvasBg.style.position = "absolute";
canvasBg.style.margin = 0;
canvasBg.style.padding = 0;*/
//canvasBg.style.overflow = "hidden";
var chart = copyChart;
console.log(chart);

//var x, y;
//var chartMarginTop = 40;
var translatePaddingX = 8;
var translatePaddingY = 35;
var heightVerticalLine = coordinateSystemStart - windowHeight * 0.44;
var positionVerticalLine = 0;
var positionCharts = 0;
var YAxisValueMarginBottom = 6;
var xAxisValueMarginTop = 20;
var greatestY = [];
var numberOfAbscissaAxes = 6;
var numberOfAbscissaPoints = 11.5;
//var YAxisValue;
var distanceBetweenXAxes = 0;
var distanceBetweenXPoints = 0;
var button = [];
//var butId = 0;
var displayThe_X_AxisValueOnce;
var heigthMiniChart = 40;
var heigthButton = heigthMiniChart - 5;
var miniChartPosition = coordinateSystemStart + marginBottomAfterCoordinateSystem + heigthMiniChart;
var widthWindowForMiniChart = canvasBgWidth / 5;
var widthMiniChart = canvasBgWidth;
var buttonPosition = miniChartPosition + marginBottomAfterCoordinateSystem + heigthButton / 2;
var coordinateSystemPosition = 0;
var greatestElem;
var greaterElementOfCharts = [];
var marginButtons = 0;
var copyarray;
var dayOfWeek = [];
	dayOfWeek[0] = "Sun";
	dayOfWeek[1] = "Mon";
	dayOfWeek[2] = "Tue";
	dayOfWeek[3] = "Wed";
	dayOfWeek[4] = "Thu";
	dayOfWeek[5] = "Fri";
	dayOfWeek[6] = "Sat";

var month = [];
	month[0] = "Jan";
	month[1] = "Feb";
	month[2] = "Mar";
	month[3] = "Apr";
	month[4] = "May";
	month[5] = "Jun";
	month[6] = "Jul";
	month[7] = "Aug";
	month[8] = "Sep";
	month[9] = "Oct";
	month[10] = "Nov";
	month[11] = "Dec";

var color = {
	dayModeBg: 				"white",
	dayModeStroke: 			"grey",
	dayModeFill: 			"grey",
	dayModeButtonText: 		"black",
	dayModeText: 			"grey",
	dayModeMiniChart: 		"rgba(221,234,243, 0.6)",	//"#F5F9FB",
	dayModeMiniChartWindow: "rgba(214,231,243, 0.8)",	//"#F5F9FB",
	dayModeStrokeButtonCircle: "white",

	stroke: 				"grey",
	strokeButtonCircle: 	"white",
	fill: 					"grey",
	buttonText: 			"black",
	chartText: 				"grey",
	miniChart: 				"#F5F9FB",
	miniChartWindow: 		"rgba(214,231,243, 0.8)",

	nightModeStrokeButtonCircle: "#242F3E",
	nightModeBg: 			"#242F3E",
	nightModeStroke: 		"#313D4D",
	nightModeFill: 			"#242F3E",
	nightModeButtonText: 	"white",
	nightModeText: 			"grey",
	nightModeMiniChart: 	"#1F2A38"
};



/**
* Header canvas 
*/
function followers() {

	ctxBg.fillStyle = "black";
	ctxBg.font = "bold 18px roboto";	
	ctxBg.fillText("Followers", 0,40);

	ctxBg.translate(0,translatePaddingY);
	ctx.translate(0,translatePaddingY);
}


/**
* Search for the largest element of the array
*/
function searchLargestElem() {
	for (var a = 0; a < chart.length; a++) {
		greatestY[a] = [];
		greaterElementOfCharts[a] = 0;
		for (var b = 1; b < chart[a].columns.length; b++) {
			greatestY[a][b] = 0;
			for (var c = 1; c < chart[a].columns[b].length; c++) {
				for (var d = 1; d < chart[a].columns[b].length; d++) {
					if (chart[a].columns[b][d] > chart[a].columns[b][c] && greatestY[a][b] < chart[a].columns[b][d]) greatestY[a][b] = chart[a].columns[b][d];
				}
			}
		}
	}
}

/**
* Switch to night or day
*/
var dayMode = "Switch to Day Mode";
var nightMode =  "Switch to Nigth Mode";
var dayNightMode = dayMode;

canvasBg.style.backgroundColor = color.dayModeBg;
color.buttonText = color.dayModeButtonText;
color.miniChart = color.dayModeMiniChart;

function switchToNight() {
	canvasBg.style.backgroundColor = color.nightModeBg;
	color.buttonText = color.nightModeButtonText;
	color.miniChart = color.nightModeMiniChart;

}

//switchToNight();
var coor = [];
/**
* Drawing the coordinate system on background canvas
*/
function drawCoordinateSystem(a) {
	console.log(nameY);
	//console.log(chart[0].columns[1][0]);
/*	for (var i = 0; i < greatestY[a].length; i++) {
		if (button[a][i].idButton == pressedButtons[a][i]) "d";
		console.log(greatestY[a].length);
	}*/
	if (nameY !== undefined) {

		if (greatestY[a][nameY] == 0) {
			greatestY[a][nameY] = asdf;
		} else {
			asdf = greatestY[a][nameY];
			greatestY[a][nameY] = 0;
		}
	}

	greaterElementOfCharts[a] = 0;
	for (var e = 1; e < greatestY[a].length; e++) {
		for (var f = 1; f < greatestY[a].length; f++) {
			if ( greatestY[a][f] > greatestY[a][e] && greaterElementOfCharts[a] < greatestY[a][f]) greaterElementOfCharts[a] = greatestY[a][f];
		}
	}
	var coeff = Math.round( (greaterElementOfCharts[a] / numberOfAbscissaAxes ) / 10 ) * 10;
	ctxBg.strokeStyle = color.stroke;
	ctxBg.lineWidth = 0.2;
	ctxBg.fillStyle = color.fill;
	ctxBg.font = "12px roboto";	
	ctxBg.beginPath();
	for (var i = 0; i < numberOfAbscissaAxes; i++) {
		ctxBg.fillText(coeff * i, 0, coordinateSystemPosition + coordinateSystemStart - distanceBetweenXAxes - YAxisValueMarginBottom);	
		ctxBg.moveTo(0, coordinateSystemPosition + coordinateSystemStart - distanceBetweenXAxes);
		ctxBg.lineTo(canvasBgWidth, coordinateSystemPosition + coordinateSystemStart - distanceBetweenXAxes);
		distanceBetweenXAxes = distanceBetweenXAxes + coordinateSystemStart / numberOfAbscissaAxes;
		//console.log(l);
	}
	ctxBg.stroke();

	ctx.beginPath();
	ctx.fillStyle = color.miniChart;
	ctx.rect(0, coordinateSystemPosition + coordinateSystemStart + marginBottomAfterCoordinateSystem - 3, widthMiniChart - widthWindowForMiniChart - 9, heigthMiniChart + 3);
	ctx.fill();
	ctx.beginPath();
	ctx.lineWidth = 1;
	ctx.fillStyle  = "transparent";
	ctx.strokeStyle = color.miniChartWindow;
	ctx.rect(widthMiniChart - widthWindowForMiniChart - 9, coordinateSystemPosition + coordinateSystemStart + marginBottomAfterCoordinateSystem - 2 , widthWindowForMiniChart, heigthMiniChart + 1);
	ctx.stroke();
	ctx.fill();
	ctx.beginPath();
	ctx.lineWidth = 2;
	ctx.rect(widthMiniChart - widthWindowForMiniChart - 9, coordinateSystemPosition + coordinateSystemStart + marginBottomAfterCoordinateSystem - 1 , 2, heigthMiniChart - 1);
	ctx.rect(widthMiniChart - 9 - 2, coordinateSystemPosition + coordinateSystemStart + marginBottomAfterCoordinateSystem - 1 , 2, heigthMiniChart - 1);
	ctx.stroke();
	distanceBetweenXAxes = 0;
	coordinateSystemPosition = coordinateSystemPosition + chartsHeight;
}

function drawMiniChart(a, b) {
	if (button[a][b].idButton == pressedButtons[a][b]) {
		greatestY[a][b] = 0;
	} else {
		var coefficientMiniChart = heigthMiniChart / greaterElementOfCharts[a];
		ctxBg.lineWidth = 1;
		var distanceBetweenXPointsForMiniChart = widthMiniChart / (chart[a].columns[b].length-1);
			//console.log(distanceBetweenXPointsForMiniChart);
		//ctx.translate(0, MiniChartPosition);
		ctxBg.strokeStyle = chart[a].colors[`${chart[a].columns[b][0]}`];
		ctxBg.beginPath();
		for (var x = 0, c = 1; c < chart[a].columns[b].length; c++, x = x + distanceBetweenXPointsForMiniChart) {
			ctxBg.lineTo(x, positionCharts + miniChartPosition - chart[a].columns[b][c] * coefficientMiniChart);
		}
		ctxBg.stroke();
		ctxBg.strokeStyle = color.stroke;
		ctxBg.lineWidth = 0.2;
	}
}


/**
* Chart drawing 
*/
function drawChart(a, b) {
	if (button[a][b].idButton == pressedButtons[a][b]) {

	} else {
		var coefficient = coordinateSystemStart / greaterElementOfCharts[a];
		ctx.fillStyle = color.fill;
		ctx.font = "12px roboto";
		ctx.strokeStyle = chart[a].colors[`${chart[a].columns[b][0]}`];
		ctx.beginPath();
		for (var x = 0, c = 1, d = 1; c < chart[a].columns[b].length; c++, d = d + 2, x = x + distanceBetweenXPoints) { //distanceBetweenXPoints
			ctx.lineTo(x, positionCharts + coordinateSystemStart - chart[a].columns[b][c] * coefficient);
				if (c % 2 !== 0 && displayThe_X_AxisValueOnce < 1) {
					var timeX = new Date(chart[a].columns[0][c]);	
					var monthName = month[timeX.getMonth()];
					var day = timeX.getDate();

					ctx.fillText(monthName + ' ' + day, x, positionCharts + coordinateSystemStart + xAxisValueMarginTop);
				}			
		}
		ctx.stroke();
	  	displayThe_X_AxisValueOnce++;
	}

	
}


/**
* Buttons for chart on/off
*/
function drawButtons(a, b) {

	button[a][b] = {
		x: marginButtons, 
		y: buttonPosition + positionCharts - heigthButton / 2, 
		w: canvasBgWidth * 0.2125, 
		h: heigthButton,
		idButton: "id" + a + b,
		nameY: chart[a].columns[b][0],
		a: a,
		b: b,
		great: greatestY[a][b]
	};
	//console.log("button["+ a+"]["+b+"].idButton: " + button[a][b].idButton)

	//console.log("button["+ a+"]["+b+"] " + button[a][b].x + " " + button[a][b].y + " " + button[a][b].w + " " +button[a][b].h);

	ctx.strokeStyle = color.stroke;
	ctx.lineWidth = .2;
	
	ctx.beginPath();
	ctx.arc(2 + heigthButton / 2 + marginButtons, buttonPosition + positionCharts, heigthButton / 2, Math.PI/2, 2*Math.PI*3/4);
	ctx.lineTo(2 + canvasBgWidth * 0.2125 - heigthButton + marginButtons, miniChartPosition + marginBottomAfterCoordinateSystem + positionCharts);
	ctx.arc(2 + (canvasBgWidth * 0.2125) - heigthButton + (heigthButton / 2) + marginButtons, buttonPosition + positionCharts, heigthButton / 2, 2*Math.PI*3/4, Math.PI/2);
	ctx.lineTo(2 + heigthButton / 2 + marginButtons, miniChartPosition + marginBottomAfterCoordinateSystem + heigthButton + positionCharts);
	ctx.closePath();
    ctx.stroke();

    ctx.beginPath();
    ctx.fillStyle = chart[a].colors[`${chart[a].columns[b][0]}`];
    ctx.arc(heigthButton / 2 + marginButtons, buttonPosition + positionCharts, heigthButton / 3, 0, 2*Math.PI);
    ctx.fill();

	ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = color.strokeButtonCircle;
    ctx.moveTo(heigthButton / 2 + marginButtons, buttonPosition + 5 + positionCharts);
    ctx.lineTo(heigthButton / 2 - 6 + marginButtons, buttonPosition - 1 + positionCharts);
    ctx.moveTo(heigthButton / 2 - 1 + marginButtons, buttonPosition + 5 + positionCharts);
    ctx.lineTo(heigthButton / 2 + 9 + marginButtons, buttonPosition - 2 + positionCharts);
    ctx.stroke();

    if (button[a][b].idButton == pressedButtons[a][b]) {
	    ctx.beginPath();
	    ctx.fillStyle = color.strokeButtonCircle;
	    ctx.arc(heigthButton / 2 + marginButtons, buttonPosition + positionCharts, heigthButton / 3, 0, 2*Math.PI);
	    ctx.fill();

		ctx.lineWidth = 2;
		ctx.beginPath();
	    ctx.strokeStyle = chart[a].colors[`${chart[a].columns[b][0]}`];
	    ctx.arc(heigthButton / 2 + marginButtons, buttonPosition + positionCharts, heigthButton / 3, 0, 2*Math.PI);
	    ctx.stroke();
	    ctx.lineWidth = .2;

    }
    
    ctx.fillStyle = color.buttonText;
	ctx.font = "12px roboto";	
    ctx.fillText(chart[a].types[`${chart[a].columns[b][0]}`] + " " + chart[a].names[`${chart[a].columns[b][0]}`], heigthButton / 2 + 18 + marginButtons, buttonPosition + 5 + positionCharts);
    ctx.lineWidth = 3;

	marginButtons = marginButtons + ((canvasBgWidth * 0.2125) - heigthButton + (heigthButton / 2) + (canvasBgWidth * 0.09)); 	

}


/**
* Vertical line to display detailed graph data
*/
function drawVerticalLine() {


    /*if touch coordinates == "1 gpaph" then  h = 0*/
   // for (var g = 0; g < chart[h].columns.length; g++) {
	    
    	/*	var timeX = new Date(chart[a].columns[0][x]);	
			var dayWeekName = dayOFWeek[timeX.getDay()];
			var monthName = month[timeX.getMonth()];
			var day = timeX.getDate();

			ctx.fillText(dayWeekName + ", " + monthName + ' ' + day, x, positionCharts + coordinateSystemStart + xAxisValueMarginTop);*/

			/*ctx.strokeStyle = chart[a].colors[`${chart[a].columns[b][0]}`];*/
    	/*ctx.arc(x , chart[a].columns[1 or more][y], 20, )*/
    	/*ctx.font = "12px roboto";	
    	//ctx.fillText(chart[a].types[`${chart[a].columns[b][0]}`] + " " + chart[a].names[`${chart[a].columns[b][0]}`], heigthButton / 2 + 18 + marginButtons, buttonPosition + 5 + positionCharts);*/
   
   	/*ctx.shadowColor = "black";
ctx.shadowBlur = 6;
ctx.shadowOffsetX = 6;
ctx.shadowOffsetY = 6;
ctx.shadowColor = "orange";
ctx.strokeRect(25, 25, 200, 200);*/
		ctx.beginPath();
	    ctx.lineWidth = 0.2;
	    ctx.strokeStyle = color.stroke;
		ctx.moveTo(canvasBgWidth / 2, positionVerticalLine + coordinateSystemStart);
		ctx.lineTo(canvasBgWidth / 2, positionVerticalLine + heightVerticalLine);
		//ctx.lineWidth = 0.2;
		ctx.stroke();
		ctx.beginPath();
	    ctx.fillStyle = "white";
	    ctx.rect(canvasBgWidth / 2 - 15, positionVerticalLine + heightVerticalLine - 30, 100, 60);
		//ctx.lineWidth = 0.2;
		ctx.fill();
		//positionVerticalLine = chartsHeight * /*number of chart*/;
		/* chart[a].columns[0][`${touches[0]clientX}`]*/
		ctx.beginPath();
	    ctx.lineWidth = 3;
    	//ctx.lineWidth = 0.2;
		ctx.stroke();
    //}
	
}


/**
* Switcher button for day/night
*/
function switcher() {
	ctxBg.beginPath();
	ctxBg.fillStyle = "#36A8F1";
	ctxBg.font = "18px roboto";	
    ctxBg.fillText(dayNightMode, canvasBgWidth / 4, canvasBgHeight - 75);
	//ctxBg.fillStyle = "white";
	//ctxBg.rect(0, coordinateSystemPosition + coordinateSystemStart + marginBottomAfterCoordinateSystem -3, widthMiniChart, heigthMiniChart + 3);
	//ctxBg.fill();
}


/**
* Charts rendering
*/

distanceBetweenXPoints = Math.ceil(window.innerWidth / numberOfAbscissaPoints); // x-axis step coefficien

function renderingCharts(ar) {
		
	for (var a = 0; a < chart.length; a++) {
		//var l = Math.round( (greatestElem / numberOfAbscissaAxes ) / 10 ) * 10;
		button[a] = [];
		drawCoordinateSystem(a);
		displayThe_X_AxisValueOnce = 0;
		//drawOneChart(a);
		for (var b = 1; b < chart[a].columns.length; b++) {
			drawButtons(a, b);
			switch (chart[a].types[`${chart[a].columns[b][0]}`]) {
			  case "line":
		  		drawChart(a, b);			
		  		drawMiniChart(a, b);
			    break;
			  case "circle":
			  		/*Draw chart by circles*/
			    break;
			  case "rect":
			  		/*Draw chart by rectangles*/
			    break;
			  default:
			    drawChart(a, b);
			    drawMiniChart(a, b);
			}
			
		}
		marginButtons = 0;
		positionCharts = positionCharts + chartsHeight;
	}
}
var copyGreaster = [];
var nameY;
var pressedButtons = [];
var pressedButton;
var buttonId;
var radius = 0;
var asdf;
//var releaseButton;

for (var l = 0; l < chart.length; l++) {
	pressedButtons[l] = [];
}

/**
* Virtual button rectangle for touch event
*/
function virtualButtonRectangle(arX, arY) {
	var clientX = arX - translatePaddingX;
	var clientY = arY - translatePaddingY;
	//console.log(clientX + " " + clientY + ">>>>>>");
	//console.log(button[0][1].x + " " +button[0][1].y + " " + button[0][1].w  + " " + button[0][1].h);
	
	for (var g = 0; g < button.length; g++) {
		copyGreaster[g] = [];
		for (var h = 1; h < button[g].length; h++) {
			var x = button[g][h].x;
			var y = button[g][h].y;
			var width = button[g][h].w + x;
			var height = button[g][h].h + y;
			//pressedButtons[`${buttonId}`] = "on";
			//console.log(clientX + " " + clientY + ">>>>>>");
			//console.log(x + " " + y + " " + width  + " " + height);
			if ( clientX >= x && clientX <= width && clientY >= y  && clientY <= height) {
				console.log("++++++++++++into++++++++++++++++");

				if (pressedButtons[g][h] == button[g][h].idButton) {
					pressedButtons[g][h] = "";
					//greatestY[g][h] = button[g][h].great;
				} else {
					pressedButtons[g][h] = button[g][h].idButton;
					//copyGreaster[g][h] = greatestY[g][h];
					//button[g][h].great = greatestY[g][h];
				}

				nameY = button[g][h].b;
				buttonId = button[g][h].idButton;
				var coef = button[g][h].b;
				//console.log(coef);
				coordinateSystemPosition = 0;
				positionCharts = 0;
				displayThe_X_AxisValueOnce = 0;
				marginButtons = 0;
				radius = 0;

				//if (pressedButtons[`${buttonId}`] == "off") {}

				ctx.resetTransform();
				ctxBg.resetTransform();
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctxBg.clearRect(0, 0, canvas.width, canvas.height);
				ctxBg.translate(translatePaddingX,0);
				ctx.translate(translatePaddingX,0);
				followers();
				searchLargestElem();
				renderingCharts();


		
			 	//putUntickOnTheButton(x,y,width,height,buttonId,coef);
				//drawButtonsArrow("no_draw");


			} else {
				//console.log("out");
			}
		}
	}

}


ctxBg.translate(translatePaddingX,0);
ctx.translate(translatePaddingX,0);
followers();
searchLargestElem();
switcher();
drawVerticalLine();
renderingCharts();

canvas.addEventListener("touchend", function function_name(event) {
//event.preventDefault();
//console.log("touchend");
//console.log(event.changedTouches[0].clientX + " " + event.changedTouches[0].clientY);
	virtualButtonRectangle(event.changedTouches[0].pageX, event.changedTouches[0].pageY);
	//console.log(event.changedTouches);
    //alert("touchstart");
}, false);




