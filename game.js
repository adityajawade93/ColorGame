
var numSquares = 6

var colors = [];

var pickedColor;

var squares = document.querySelectorAll(".square");

var colorDisplay = document.getElementById("colorDisplay");

var messageDisplay = document.querySelector("#message");

var h1 = document.querySelector("h1");

var resetBtn = document.querySelector("#reset");

var modeButtons = document.querySelectorAll(".mode");

colorDisplay.textContent = pickedColor;

init();




function init(){
	setupModeButtons();
	setupSquares();
	reset();
}



function setupModeButtons(){
	for(var i = 0 ; i < modeButtons.length ; i++){
			modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0 ; i < squares.length ; i++){
		squares[i].addEventListener("click",function(){
			//grab color of clikced square
			//compare color to picked color
			var clickedColor = this.style.background;

			if(pickedColor === clickedColor){
				messageDisplay.classList.remove("wrong");
				messageDisplay.classList.add("correct");
				messageDisplay.textContent = "Correct!!";
				changeColors(clickedColor);
				h1.style.background = pickedColor;
				resetBtn.textContent = "Play Again?";
			}
			else{
				this.style.background = "#232323";
				messageDisplay.classList.remove("correct");
				messageDisplay.classList.add("wrong");
				messageDisplay.textContent = "Try Again";
			}
		});
	}
}


function reset(){

	//get new random colors
	colors = generateRandomColors(numSquares);
	//choose a new picked color
	pickedColor = pickColor();
	//set the colordispaly to new picked color
	colorDisplay.textContent = pickedColor;
	//color all the squares to new colors
	for(var i = 0 ; i < squares.length ; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}else{
			squares[i].style.display = "none";
		}
		
	}
	//reset the messageDisplay to empty string
	messageDisplay.textContent = "";

	//rest the text content of button back to new colors
	resetBtn.textContent = "New Colors";

	h1.style.background = "steelblue";
}


resetBtn.addEventListener("click",reset);



function changeColors(color){
// 	loop through all squares to match the correct square
	for(var i = 0 ; i < squares.length ; i++){
		squares[i].style.background = color;
	}
 }

 function pickColor(){
 	var random = Math.floor(Math.random() * colors.length);
 	return colors[random];
 }

 function generateRandomColors(num){
 	//make and array
 	var arr = [];
 	//add num random colors to the array
 	for(var i = 0 ; i < num ; i++){
 		//get random color and push into array
 		arr.push(randomColor());
 	}
 	//returb the array
 	return arr;
 }

 function randomColor(){
 	//pick a red from 0 to 255
 	var red = Math.floor(Math.random() * 256);
 	//pick a green from 0 to 255
 	var green = Math.floor(Math.random() * 256);
 	//pick a blue from 0 to 255
 	var blue = Math.floor(Math.random() * 256);

 	return "rgb(" + red + ", " + green + ", " + blue + ")"; 

 }