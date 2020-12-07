//array stores the responses to the questions
var	answersArr = [];
//the response to the current question to be set in the array
var response;
//keeping track of the number of questions answered, will stop a 6
var questionCount = 0;
//function called when a response is selected
function getAnswer(ans){
	response = ans;
	document.getElementById("nextButton").disabled = false;
}
//function called to set the response into the array, updated the question counter and changes the content of the page
function setAnswer() {
	answersArr.push(response);
	console.log(answersArr);
	questionCount = questionCount + 1;
	console.log(questionCount);
	if (questionCount > 4){
		finalQuestion();
	}
	else{
		nextQuestion();		
	}

}
//
function nextQuestion(){
	console.log("running next question");
	document.getElementById("nextButton").disabled = true;

	var newCopy = document.getElementById("questionCopy");
	var newBtnOne = document.getElementById("firstBtn");
	var newBtnTwo = document.getElementById("secondBtn");
	var progBar = document.getElementById("progressBar");
	var newCopyInput;
	var newBtnOneInput;
	var newBtnTwoInput;
	var progBarInput;

	if (questionCount == 1){
		newCopyInput = "will the font be...";
		newBtnOneInput = "big";
		newBtnTwoInput = "small";
		progBarInput = 33.3;

	}
	if (questionCount == 2){
		newCopyInput = "is the design...";
		newBtnOneInput = "classic";
		newBtnTwoInput = "modern";
		progBarInput = 50;	
	}
	if (questionCount == 3){
		newCopyInput = "do you prefer...";
		newBtnOneInput = "symmetry";
		newBtnTwoInput = "asymmetry";
		progBarInput = 66.666;	
	}
	if (questionCount == 4){
		newCopyInput = "you are a...";
		newBtnOneInput = "human";
		newBtnTwoInput = "machine";
		progBarInput = 83.333;	
	}
	if (questionCount == 5){
		newCopyInput = "the tone is...";
		newBtnOneInput = "heavy";
		newBtnTwoInput = "light";
		progBarInput = 100;	
	}
	newCopy.innerText = newCopyInput;
	newBtnOne.innerText = newBtnOneInput;
	newBtnTwo.innerText = newBtnTwoInput;
	progBar.innerHTML = "<div class=\"progress-bar\" role=\"progressbar\" style=\"width: "+progBarInput+"%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">"+(questionCount+1)+" of 6</div>";

}
function finalQuestion(){
	console.log("running final question");
	document.getElementById("nextButton").disabled = true;
	var newCopy = document.getElementById("questionCopy");
	var newBtnOne = document.getElementById("firstBtn");
	var newBtnTwo = document.getElementById("secondBtn");
	var progBar = document.getElementById("progressBar");
	var newNextBtn = document.getElementById("nextButton");
	var nextButtonParent = document.getElementById("nextButtonParent");
	var newCopyInput;
	var newBtnOneInput;
	var newBtnTwoInput;
	var progBarInput;
	// var newNextBtnInput;
	newCopyInput = "the tone is...";
	newBtnOneInput = "heavy";
	newBtnTwoInput = "light";
	progBarInput = 100;
	// newNextBtnInput = "discover your font";
	newCopy.innerText = newCopyInput;
	newBtnOne.innerText = newBtnOneInput;
	newBtnTwo.innerText = newBtnTwoInput;
	//newNextBtn.innerText = newNextBtnInput;
	progBar.innerHTML = "<div class=\"progress-bar\" role=\"progressbar\" style=\"width: "+progBarInput+"%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">"+(questionCount+1)+" of 6</div>";
	nextButtonParent.innerHTML = "<button type=\"button\" class=\"btn btn-sm nextBtn\" id=\"nextButton\" value=\"next\" onclick=\"document.location=\'font.html\'\" disabled>discover your font</button>";

}

