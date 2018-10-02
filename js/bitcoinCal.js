

const calGrowth = (pastVal, currentVal) => (currentVal - pastVal) / pastVal * 100;



// DOM Manipulation
document.querySelector('.investment__btn').addEventListener("click", function(){
	// Select and read data from the UI
	const btcUsedBought = document.querySelector('.price__input--bought').value;
	const btcUsedNow =document.querySelector('.price__input--now').value;
	const btc = document.querySelector('.investment__btc').value;


	// Calculate the Profit
	const invested = btc * btcUsedBought;
	const current = btc * btcUsedNow;
	const profit = current - invested;
	const growth = calGrowth(invested, current);

	// write the result to the UI
	let message = "";
	const resultField = document.querySelector('.result');
	if (profit > 0){
		message = `Great you made a profit of $ ${profit} (${growth}%).`;
		resultField.style.color = 'green';
	} else if (profit < 0){
		message = `Oh no! You're at a loss of $${profit} (${growth}%).`;
		resultField.style.color = 'red';
	} else {
		message = "You're breaking even!";
	}

	resultField.textContent = message;
});




