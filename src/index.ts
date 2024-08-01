import * as PIXI from "pixi.js";
import { settings } from "./settings";

export async function init() {
	const app = await initializeApp();
	const background = await createBackground();

	app.stage.addChild(background);

	return app
}

async function createBackground() {
	await PIXI.Assets.load("/assets/metal-texture.webp")
	const background = PIXI.Sprite.from("/assets/metal-texture.webp");
	background.width = settings.canvasWidth;
	background.height = settings.canvasHeight;

	return background;
}

async function initializeApp() {
	const app = new PIXI.Application();
	await app.init({
		width: settings.canvasWidth,
		height: settings.canvasHeight,
		view: document.createElement('canvas')
	});

	const canvas = app.canvas;

	document.body.appendChild(canvas);
	canvas.classList.add("main-canvas");
	return app;
}

init();
