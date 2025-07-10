import * as PIXI from "pixi.js";
import { settings } from "./settings";

export class LoadingScreen extends PIXI.Container {
	private text = new PIXI.Text({
		text: "loading...",
		style: {
			fontSize: 65,
			fontFamily: "Verdana",
			stroke: "#ffffff",
			fill: "#ffffff",
			fontVariant: "small-caps",
		},
	});

	constructor() {
		super();
		this.addChild(this.text);
		this.text.y = settings.canvasHeight / 2 - this.text.height / 2;
		this.text.x = settings.canvasWidth / 2 - this.text.width / 2;
	}
}
