"use strict";

var number1 = document.getElementById("number1");
var number2 = document.getElementById("number2");
var number3 = document.getElementById("number3");
var number4 = document.getElementById("number4");
var number5 = document.getElementById("number5");
var number6 = document.getElementById("number6");

var numbers = [number1, number2, number3, number4, number5, number6];

var opPlus = document.getElementById("opPlus");
var opMinus = document.getElementById("opMinus");
var opMultiply = document.getElementById("opMultiply");
var opDivide = document.getElementById("opDivide");

var operators = [opPlus, opMinus, opMultiply, opDivide];

var i = 0;
var operatorsDisable = function () {
	console.log(operators[0].disabled);
	for (i = 0; i < 4; i++) {
		operators[i].disabled = true;
	}
}
var operatorsEnable = function () {
	console.log(operators[0].disabled);
	for (i = 0; i < 4; i++) {
		operators[i].disabled = false;
	}
}
operatorsDisable();
var numbersDisable = function () {
	for (i = 0; i < 6; i++) {
		numbers[i].disabled = true;
	}
}
var numbersEnable = function () {
	for (i = 0; i < 6; i++) {
		numbers[i].disabled = false;
	}
	for (i = 0; i < numberStack.length; i++) {
		numberStack[i].disabled = true;
	}
}

var row1 = document.getElementById("row1");
var row2 = document.getElementById("row2");
var row3 = document.getElementById("row3");
var row4 = document.getElementById("row4");
var row5 = document.getElementById("row5");

var rows = [row1, row2, row3, row4, row5];

var numberStack = [];
var holdValue = null;
var hold = false;

var computations = [];

// console.log(numbers[0].value);


numbers[0].addEventListener("click", function (event) {
	// console.log(numbers[0].value);
	stacks[stackCount].push(numbers[0].value);
	hold = false;
	operatorsEnable();
	numbersDisable()
	numberStack.push(number1);

	// console.log(stack);

	if (stacks[stackCount].length === 1) {
		rows[stackCount].innerHTML = "<h3><span class='tile'>" + stacks[stackCount][0] + "</span></h3>";
	}
	else if (stacks[stackCount].length === 3) {

		rows[stackCount].innerHTML += "= ";
		queryString = stacks[stackCount][0] + " " + stacks[stackCount][1] + " " + stacks[stackCount][2];
		result = eval(queryString);
		results[stackCount] = result;
		console.log(stacks[stackCount], queryString);
		rows[stackCount].innerHTML = "<h3>" + queryString + " = " + result + "</h3>";     
		stackCount++;
		console.log(results);
		numbersEnable();
		operatorsDisable();
		// numberStack[0].parentNode.removeChild(numberStack[0]);
		numberStack[0].value = result;
		numberStack[0].innerHTML = result;
		numberStack[0].disabled = false;
		numberStack[1].parentNode.removeChild(numberStack[1]);
		numberStack = [];
		// number1.disabled = true;
		console.log(document.getElementById("target").innerHTML, results[stackCount - 1 ]);
		if (document.getElementById("target").innerHTML == results[stackCount - 1]) {
			console.log("You win this round", "stackCount", stackCount);
			playerWin();
		}
		else {
			if (stackCount === 5) {
				playerLose();
			}
		}
	}
});
numbers[1].addEventListener("click", function (event) {
	// console.log(numbers[1].value);
	stacks[stackCount].push(numbers[1].value);
	hold = false;
	operatorsEnable();
	numbersDisable()
	numberStack.push(number2);

	// console.log(stack);

	if (stacks[stackCount].length === 1) {
		rows[stackCount].innerHTML = "<h3><span class='tile'>" + stacks[stackCount][0] + "</span></h3>";
	}
	else if (stacks[stackCount].length === 3) {

		rows[stackCount].innerHTML += "= ";
		queryString = stacks[stackCount][0] + " " + stacks[stackCount][1] + " " + stacks[stackCount][2];
		result = eval(queryString);
		results[stackCount] = result;
		console.log(stacks[stackCount], queryString);
		rows[stackCount].innerHTML = "<h3>" + queryString + " = " + result + "</h3>";     
		stackCount++;
		console.log(results);
		numbersEnable();
		operatorsDisable();
		// numberStack[0].parentNode.removeChild(numberStack[0]);
		numberStack[0].value = result;
		numberStack[0].innerHTML = result;
		numberStack[0].disabled = false;
		numberStack[1].parentNode.removeChild(numberStack[1]);
		numberStack = [];
		// number2.disabled = true;
		console.log(document.getElementById("target").innerHTML, results[stackCount - 1 ]);
		if (document.getElementById("target").innerHTML == results[stackCount - 1]) {
			console.log("You win this round", "stackCount", stackCount);
			playerWin();
		}
		else {
			if (stackCount === 5) {
				playerLose();
			}
		}
	}
});
numbers[2].addEventListener("click", function (event) {
	// console.log(numbers[2].value);
	stacks[stackCount].push(numbers[2].value);
	hold = false;
	operatorsEnable();
	numbersDisable()
	numberStack.push(number3);

	// console.log(stack);

	if (stacks[stackCount].length === 1) {
		rows[stackCount].innerHTML = "<h3><span class='tile'>" + stacks[stackCount][0] + "</span></h3>";
	}
	else if (stacks[stackCount].length === 3) {

		rows[stackCount].innerHTML += "= ";
		queryString = stacks[stackCount][0] + " " + stacks[stackCount][1] + " " + stacks[stackCount][2];
		result = eval(queryString);
		results[stackCount] = result;
		console.log(stacks[stackCount], queryString);
		rows[stackCount].innerHTML = "<h3>" + queryString + " = " + result + "</h3>";     
		stackCount++;
		console.log(results);
		numbersEnable();
		operatorsDisable();
		// numberStack[0].parentNode.removeChild(numberStack[0]);
		numberStack[0].value = result;
		numberStack[0].innerHTML = result;
		numberStack[0].disabled = false;
		numberStack[1].parentNode.removeChild(numberStack[1]);
		numberStack = [];
		// number2.disabled = true;
		console.log(document.getElementById("target").innerHTML, results[stackCount - 1 ]);
		if (document.getElementById("target").innerHTML == results[stackCount - 1]) {
			console.log("You win this round", "stackCount", stackCount);
			playerWin();
		}
		else {
			if (stackCount === 5) {
				playerLose();
			}
		}
	}
});
numbers[3].addEventListener("click", function (event) {
	// console.log(numbers[3].value);
	stacks[stackCount].push(numbers[3].value);
	hold = false;
	operatorsEnable();
	numbersDisable()
	numberStack.push(number4);

	// console.log(stack);

	if (stacks[stackCount].length === 1) {
		rows[stackCount].innerHTML = "<h3><span class='tile'>" + stacks[stackCount][0] + "</span></h3>";
	}
	else if (stacks[stackCount].length === 3) {

		rows[stackCount].innerHTML += "= ";
		queryString = stacks[stackCount][0] + " " + stacks[stackCount][1] + " " + stacks[stackCount][2];
		result = eval(queryString);
		results[stackCount] = result;
		console.log(stacks[stackCount], queryString);
		rows[stackCount].innerHTML = "<h3>" + queryString + " = " + result + "</h3>";     
		stackCount++;
		console.log(results);
		numbersEnable();
		operatorsDisable();
		// numberStack[0].parentNode.removeChild(numberStack[0]);
		numberStack[0].value = result;
		numberStack[0].innerHTML = result;
		numberStack[0].disabled = false;
		numberStack[1].parentNode.removeChild(numberStack[1]);
		numberStack = [];
		// number1.disabled = true;
		console.log(document.getElementById("target").innerHTML, results[stackCount - 1 ]);
		if (document.getElementById("target").innerHTML == results[stackCount - 1]) {
			console.log("You win this round", "stackCount", stackCount);
			playerWin();
		}
		else {
			if (stackCount === 5) {
				playerLose();
			}
		}
	}
});
numbers[4].addEventListener("click", function (event) {
	// console.log(numbers[4].value);
	stacks[stackCount].push(numbers[4].value);
	hold = false;
	operatorsEnable();
	numbersDisable()
	numberStack.push(number5);

	// console.log(stack);

	if (stacks[stackCount].length === 1) {
		rows[stackCount].innerHTML = "<h3><span class='tile'>" + stacks[stackCount][0] + "</span></h3>";
	}
	else if (stacks[stackCount].length === 3) {

		rows[stackCount].innerHTML += "= ";
		queryString = stacks[stackCount][0] + " " + stacks[stackCount][1] + " " + stacks[stackCount][2];
		result = eval(queryString);
		results[stackCount] = result;
		console.log(stacks[stackCount], queryString);
		rows[stackCount].innerHTML = "<h3>" + queryString + " = " + result + "</h3>";     
		stackCount++;
		console.log(results);
		numbersEnable();
		operatorsDisable();
		// numberStack[0].parentNode.removeChild(numberStack[0]);
		numberStack[0].value = result;
		numberStack[0].innerHTML = result;
		numberStack[0].disabled = false;
		numberStack[1].parentNode.removeChild(numberStack[1]);
		numberStack = [];
		// number1.disabled = true;
		console.log(document.getElementById("target").innerHTML, results[stackCount - 1 ]);
		if (document.getElementById("target").innerHTML == results[stackCount - 1]) {
			console.log("You win this round", "stackCount", stackCount);
			playerWin();

		}
		else {
			if (stackCount === 5) {
				playerLose();
			}
		}
	}
});
numbers[5].addEventListener("click", function (event) {
	// console.log(numbers[5].value);
	stacks[stackCount].push(numbers[5].value);
	hold = false;
	operatorsEnable();
	numbersDisable()
	numberStack.push(number6);

	// console.log(stack);

	if (stacks[stackCount].length === 1) {
		rows[stackCount].innerHTML = "<h3><span class='tile'>" + stacks[stackCount][0] + "</span></h3>";
	}
	else if (stacks[stackCount].length === 3) {

		rows[stackCount].innerHTML += "= ";
		queryString = stacks[stackCount][0] + " " + stacks[stackCount][1] + " " + stacks[stackCount][2];
		result = eval(queryString);
		results[stackCount] = result;
		console.log(stacks[stackCount], queryString);
		rows[stackCount].innerHTML = "<h3>" + queryString + " = " + result + "</h3>";     
		stackCount++;
		console.log(results);
		numbersEnable();
		operatorsDisable();
		// numberStack[0].parentNode.removeChild(numberStack[0]);
		numberStack[0].value = result;
		numberStack[0].innerHTML = result;
		numberStack[0].disabled = false;
		numberStack[1].parentNode.removeChild(numberStack[1]);
		numberStack = [];
		// number1.disabled = true;
		console.log(document.getElementById("target").innerHTML, results[stackCount - 1 ]);
		if (document.getElementById("target").innerHTML == results[stackCount - 1]) {
			console.log("You win this round", "stackCount", stackCount);
			playerWin();
		}
		else {
			if (stackCount === 5) {
				playerLose();
			}
		}
	}
});

operators[0].addEventListener("click", function (event) {
	console.log(operators[0].value);
	stacks[stackCount].push(operators[0].value);
	hold = true;
	numbersEnable();
	operatorsDisable();

	rows[stackCount].innerHTML = "<h3>" + stacks[stackCount][0] + " " + stacks[stackCount][1] + " </h3>";

	// console.log(stack);
});
operators[1].addEventListener("click", function (event) {
	console.log(operators[1].value);
	stacks[stackCount].push(operators[1].value);
	hold = true;
	numbersEnable();
	operatorsDisable();

	rows[stackCount].innerHTML = "<h3>" + stacks[stackCount][0] + " " + stacks[stackCount][1] + " </h3>";

	// console.log(stack);
});
operators[2].addEventListener("click", function (event) {
	console.log(operators[2].value);
	stacks[stackCount].push(operators[2].value);
	hold = true;
	numbersEnable();
	operatorsDisable();

	rows[stackCount].innerHTML = "<h3>" + stacks[stackCount][0] + " " + stacks[stackCount][1] + " </h3>";

	// console.log(stack);
});
operators[3].addEventListener("click", function (event) {
	console.log(operators[3].value);
	stacks[stackCount].push(operators[3].value);
	hold = true;
	numbersEnable();
	operatorsDisable();

	rows[stackCount].innerHTML = "<h3>" + stacks[stackCount][0] + " " + stacks[stackCount][1] + " </h3>";

	// console.log(stack);
});

var stack1 = [];
var stack2 = [];
var stack3 = [];
var stack4 = [];
var stack5 = [];

var stacks = [stack1, stack2, stack3, stack4, stack5];
var queryString = null;
var result = null;
var results = [-1, -1, -1, -1, -1];

var answers = [];

var stackCount = 0;

var playerLose = function () {
	var output = document.getElementById("output");
	output.innerHTML = "<h3>You lose!</h3> <h4>You were " + String(parseInt(document.getElementById("target").innerHTML)-results[4]) + " away from the answer.</h4>";
	showSolution();
}
var playerWin = function () {
	var output = document.getElementById("output");
	output.innerHTML = "<h3>You Win!</h3>You took " + (100 - sec) + " seconds";
	showSolution();
}
var showSolution = function () {
	var solutions = {
		396: "6 + 3 * ((8 + 50 + 75) - 3)",
		39: "9 * (2 + 5 + 6) / (7 - 4)",
		27: "(1 + 2 + 3) * 6 * 6 / 8",
		12: "(4 + 5 + 7 + 8) / (3 - 1)",
		28: "4 * 6 * 7 / (1 + 5)",
		96: "((6 + 8) - 8) * (4 + 5 + 7)",
		94: "(15 + 84) - 65 / (72 - 13 - 46)",
		684: "21 * (16 + 35 + 78) - 45 * 45",
		46: "(1 + 95) / ((35 + 75) - 14) + 45",
		998: "45 * 46 - 48 - 32 * (78 - 46)",
		466: "(65 + (94 - 73) * 25) - 46 - 78"
	}
	var solution = document.getElementById("solutions");
	solution.innerHTML = "<h3>Here is a possible solution: </h3><h4>" + solutions[parseInt(document.getElementById("target").innerHTML)] + "</h4>";
}

document.getElementById("undo").addEventListener("click", function () {
	if (stacks[stackCount].length !== 0) {
		stacks[stackCount] = [];
		numberStack = [];

		rows[stackCount].innerHTML = "";
		numbersEnable();
		operatorsDisable();
	}
});
document.getElementById("restart").addEventListener("click", function () {
	location.reload();
});

var easySolutions = {
	39: [4, 6, 9, 2, 5, 7],
	27: [1, 2, 3, 6, 6, 8],
	12: [4, 8, 3, 1, 7, 5],
	28: [6, 7, 5, 4, 1, 9],
	96: [8, 7, 6, 5, 4, 8]
}
var hardSolutions = {
	94: [15, 84, 65, 72, 13, 46],
	684: [21, 16, 35, 78, 45, 45],
	46: [1, 95, 35, 75, 14, 45],
	998: [45, 46, 48, 32, 78, 46],
	466: [65, 94, 73, 25, 46, 78]
}
var easy = [39, 27, 12, 28, 96];
var hard = [94, 684, 46, 998, 466];
document.getElementById("easy").addEventListener("click", function () {
	var i = 0;
	for (i =0; i <5; i++) {
		stacks[i] = [];
		numberStack = [];

		rows[i].innerHTML = "";
	}
	
	numbersEnable();
	operatorsDisable();
	var randomNumber = easy[Math.floor(Math.random() * 5)];
	document.getElementById("target").innerHTML = randomNumber;
	for (i = 0; i < 6; i++) {
		numbers[i].value = easySolutions[randomNumber][i];
		numbers[i].innerHTML = easySolutions[randomNumber][i];
	}
});
document.getElementById("hard").addEventListener("click", function () {
	var i = 0;
	for (i =0; i <5; i++) {
		stacks[i] = [];
		numberStack = [];

		rows[i].innerHTML = "";
	}
	
	numbersEnable();
	operatorsDisable();
	var randomNumber = hard[Math.floor(Math.random() * 5)];
	document.getElementById("target").innerHTML = randomNumber;
	for (i = 0; i < 6; i++) {
		numbers[i].value = hardSolutions[randomNumber][i];
		numbers[i].innerHTML = hardSolutions[randomNumber][i];
	}
});

var sec = 100;

window.onload = function() {
  setInterval(function() {
    document.getElementById("progress-bar").style.width = String(sec) + "%";
    document.getElementById("time-now").innerHTML = sec; 
    sec--;
	}, 1000);
}