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
	if (questionCount > 3){
		finalQuestion();
	}
	else{
		nextQuestion();		
	}

}
//this function update the questions HTML and adjusts the progress bar. I believe my issus with animating the bar have to do with passing in innerHTML rather than loading new windows
function nextQuestion(){
	console.log("running next question");
	document.getElementById("nextButton").disabled = true;

	var newCopy = document.getElementById("questionCopy");
	var newBtnOne = document.getElementById("firstBtn");
	var newBtnTwo = document.getElementById("secondBtn");
	var progBar = document.getElementById("progressBar");
	var progBarAnimate = document.querySelector(".progress-bar");
	var newIdName;
	var newCopyInput;
	var newBtnOneInput;
	var newBtnTwoInput;
	var progBarInput;

	if (questionCount == 1){
		newCopyInput = "will the font be...";
		newBtnOneInput = "big";
		newBtnTwoInput = "small";
		progBarInput = 40;
		newIdName = "progressTwo";

	}
	if (questionCount == 2){
		newCopyInput = "is the design...";
		newBtnOneInput = "classic";
		newBtnTwoInput = "modern";
		progBarInput = 60;	
	}
	if (questionCount == 3){
		newCopyInput = "do you prefer...";
		newBtnOneInput = "symmetry";
		newBtnTwoInput = "asymmetry";
		progBarInput = 80;	
	}
	if (questionCount == 4){
		newCopyInput = "the tone is...";
		newBtnOneInput = "heavy";
		newBtnTwoInput = "light";
		progBarInput = 100;		
	}
	newCopy.innerText = newCopyInput;
	newBtnOne.innerText = newBtnOneInput;
	newBtnTwo.innerText = newBtnTwoInput;
	progBar.innerHTML = "<div class=\"progress-bar\" id=" + newIdName + "role=\"progressbar\" style=\"width: "+progBarInput+"%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">"+(questionCount+1)+" of 5</div>";
	// progBarAnimate.style.animation = newClassName;

	
}
// this is function that gets called for the last question and calculates what font will be linked when the quiz is over 
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
	var fontSelect;
//this is a shortend version of what the final function would look like. I decided to keep it short for the assignment because I think my understanding is conveyed here
	if (answersArr[0]== "1"){
		if (answersArr[2] == "1"){
			fontSelect = "baskerville.html";
		}
		else{
			fontSelect = "font.html";
		}
	}
	if (answersArr[0]== "2"){
		if (answersArr[2] == "1"){
			fontSelect = "montserrat.html";
		}
		else{
			fontSelect = "oswald.html";
		}
	}

//Here is the application of the content into the html of the site.
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
	progBar.innerHTML = "<div class=\"progress-bar\" role=\"progressbar\" style=\"width: "+progBarInput+"%;\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">"+(questionCount+1)+" of 5</div>";
	nextButtonParent.innerHTML = "<button type=\"button\" class=\"btn btn-sm nextBtn\" id=\"nextButton\" value=\"next\" onclick=\"document.location=\'"+fontSelect+"\'\" disabled>discover your font</button>";

}

