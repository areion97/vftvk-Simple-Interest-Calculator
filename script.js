function compute() {
    var amount = document.getElementById("principal").value;
	var interest = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var result = document.getElementById("result");
	var calculation = 0;

	calculation = amount * interest / 100 * years;
	var year = parseInt(new Date().getFullYear())+parseInt(years);
	
	result.innerHTML = "If you deposit " + amount + ","+"<br>at an interest rate of "+ interest + "%.<br>"+
					   "You will receive an amount of " + calculation + ",<br>in the year "+ year;
	

}

function setInterestRate(value) {
	var inputInterest = document.getElementById("interest-rate");
	inputInterest.innerHTML = value + "%";
	
}