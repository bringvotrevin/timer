import Timer from "./Timer.js";

const $root = document.querySelector('.root');

const makeTimer = () => {
	const $timerWrapper = document.createElement('div');
	$timerWrapper.classList.add('timer-wrapper');
	$timerWrapper.innerHTML = `
	<h1 class="title">TIMER</h1>
	<section class="input-timer">
		<label for="input-hour" class="a11y-hidden">시</label>
		<input type="number" id="input-hour" />
		<label for="input-minute" class="a11y-hidden">분</label>
		<input type="number" id="input-minute" />
		<label for="input-second" class="a11y-hidden">초</label>
		<input type="number" id="input-second" />
	</section>
	<section class="button-wrapper">
		<button class="btn-start">START</button>
		<button class="btn-reset">RESET</button>
	</section>
	`
	$root.appendChild($timerWrapper);
}


const functionTimer = () => {
	const timer = new Timer();
}


makeTimer();
functionTimer();