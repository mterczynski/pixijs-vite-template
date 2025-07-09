import * as PIXI from "pixi.js";
import { assetList } from "./asset-loader";
import { settings } from "./settings";

export class Player extends PIXI.Container {
	private sprite = PIXI.Sprite.from(assetList.pigButcher);
	private moveDirection = 0;
	private faceDirection = 1;

	constructor() {
		super();
		this.addChild(this.sprite);
		this.sprite.scale.set(0.15);
		this.sprite.y = settings.canvasHeight - 150;

		addEventListener("keydown", (e: KeyboardEvent) => {
			if (e.key === "ArrowRight" || e.key.toLowerCase() === "d") {
				this.moveDirection = 1;
				this.faceDirection = 1;
			} else if (e.key === "ArrowLeft" || e.key.toLowerCase() === "a") {
				this.moveDirection = -1;
				this.faceDirection = -1;
			}
		});

		addEventListener("keyup", (e: KeyboardEvent) => {
			if (
				e.key === "ArrowRight" ||
				e.key.toLowerCase() === "d" ||
				e.key === "ArrowLeft" ||
				e.key.toLowerCase() === "a"
			) {
				this.moveDirection = 0;
			}
		});
	}

	update(ticker: PIXI.Ticker) {
		this.x += this.moveDirection * ticker.deltaMS * settings.movementSpeed;
		this.scale.x = this.faceDirection;
	}
}
