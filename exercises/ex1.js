// pilk js dla strony ex1.html

let score;

const add = (x, y) => {
	score = x + y;
	if (score % 2) {
		unpair();
	} else {
		pair();
	}
};

const unpair = () => {
	console.log(`${score} jest nieparzyste`);
};

const pair = () => {
	console.log(`${score} jest parzyste`);
};
