import { Module } from './module.js';

class App {
	constructor() {
		this.canvas = document.getElementById('canvas');
		this.ctx = this.canvas.getContext('2d');

		this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;

		window.addEventListener('resize', this.resize.bind(this), false);
		this.resize();
		window.requestAnimationFrame(this.animate.bind(this));
	}

	resize() {
		this.stageWidth = document.body.clientWidth;
		this.stageHeight = document.body.clientHeight;

		this.canvas.width = this.stageWidth;
		this.canvas.height = this.stageHeight;
		this.ctx.scale(this.pixelRatio, this.pixelRatio);
	}

	animate() {
		window.requestAnimationFrame(this.animate.bind(this));

		this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

		// demo indicator
		this.ctx.fillStyle = 'red';
		this.ctx.beginPath();
		this.ctx.arc(this.stageWidth/2, this.stageHeight/2, 50, 0, 2 * Math.PI);
		this.ctx.fill();
	}
}

new App();
