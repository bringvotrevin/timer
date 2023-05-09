export default class Timer {
	id;
	constructor() {
		this.$inputHour = document.querySelector('#input-hour');
		this.$inputMinute = document.querySelector('#input-minute');
		this.$inputSecond = document.querySelector('#input-second');
		this.$inputHour.value = '00';
		this.$inputMinute.value = '00';
		this.$inputSecond.value = '00';
		this.$btnStart = document.querySelector('.btn-start');
		this.$btnReset = document.querySelector('.btn-reset');
		this.addButtonEvent();
	}

	addButtonEvent() {
		this.$btnStart.addEventListener('click', () => {
			let hour = parseInt(this.$inputHour.value);
			let minute = parseInt(this.$inputMinute.value);
			let second = parseInt(this.$inputSecond.value);
			const millisecond = 
			(hour * 1000 * 60 * 60) + (minute * 1000 * 60) + (second * 1000);
			if (!millisecond) return ;
			if (this.$btnStart.textContent == 'PAUSE') {
				clearInterval(this.id);
				this.$btnStart.textContent = 'START';
				return ;
			}
			this.$btnStart.textContent = 'PAUSE';
			this.id = setInterval(() => {
				let hour = parseInt(this.$inputHour.value);
				let minute = parseInt(this.$inputMinute.value);
				let second = parseInt(this.$inputSecond.value);
				if (hour) {
					if (minute) {
						if (second) {
							this.$inputSecond.value = --second;
						} else {
							this.$inputMinute.value = --minute;
							this.$inputSecond.value = 59;
						}
					} else {
						this.$inputHour.value = --hour;
						this.$inputMinute.value = 59;
					}
				} else if (minute) {
					if (second) {
						this.$inputSecond.value = --second;
					} else {
						this.$inputMinute.value = --minute;
						this.$inputSecond.value = 59;
					}
				} else if (second) {
					this.$inputSecond.value = --second;
				} else {
					clearInterval(this.id);
					this.id = null;
					alert('done');
				}
			}, 1000);
		});

		this.$btnReset.addEventListener('click', () => {
			this.$inputHour.value = '00';
			this.$inputMinute.value = '00';
			this.$inputSecond.value = '00';
			clearInterval(this.id);
			this.id = null;
			this.$btnStart.textContent = 'START';
		})
	}

}