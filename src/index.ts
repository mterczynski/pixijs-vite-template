import * as PIXI from "pixi.js";
import { settings } from "./settings";
import { assetList, AssetLoader } from "./asset-loader";
import { Player } from "./player";

// Allow globalThis.__PIXI_APP__ for Pixi devTools
declare global {
	var __PIXI_APP__: PIXI.Application | undefined;
}

export async function init() {
	const assetLoader = new AssetLoader();
	await assetLoader.loadAllAssets();
	const app = await initializeApp();
	const background = createBackground();
	const player = new Player();

	app.ticker.add((delta) => player.update(delta));

	app.stage.addChild(background);
	app.stage.addChild(player);

	return app;
}

function createBackground() {
	const background = PIXI.Sprite.from(assetList.background);
	background.width = settings.canvasWidth;
	background.height = settings.canvasHeight;

	return background;
}

async function initializeApp() {
	const app = new PIXI.Application();
	await app.init({
		width: settings.canvasWidth,
		height: settings.canvasHeight,
		view: document.createElement("canvas"),
	});

	globalThis.__PIXI_APP__ = app;

	const canvas = app.canvas;

	document.body.appendChild(canvas);
	canvas.classList.add("main-canvas");
	return app;
}

init();
