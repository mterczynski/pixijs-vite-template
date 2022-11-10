import * as PIXI from "pixi.js";
import { settings } from "./settings";

function createBackground() {
	const background = PIXI.Sprite.from("/assets/metal-texture.webp");
	background.width = settings.canvasWidth;
	background.height = settings.canvasHeight;

	return background;
}

async function init() {
	const app = initializeApp();
	const background = createBackground();

	app.stage.addChild(background);
}

function initializeApp() {
	const app = new PIXI.Application({
		width: settings.canvasWidth,
		height: settings.canvasHeight,
	});

	const canvas = app.view as HTMLCanvasElement

	document.body.appendChild(canvas);
	canvas.classList.add("main-canvas");
	return app;
}

init();
