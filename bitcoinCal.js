const btc = 3.5;
const btcUsedBought = 10000;
const btcUsedNow = 12000;

const invested = btc * btcUsedBought;
const current = btc * btcUsedNow;


const profit = current - invested;
//const growth = profit / invested * 100;
const growth = calGrowth(invested, current);

function calGrowth(pastVal, currentVal) {
	return  (currentVal - pastVal) / pastVal * 100;
}


let message = "";
if (profit > 0){
	message = `Great you made a profit of $ ${profit} (${growth}%).`;
} else if (profit < 0){
	message = `Oh no! You're at a loss of $${profit} (${growth}%).`;
} else {
	message = "You're breaking even!";
}

console.log(message);


// DOM Manipulation




