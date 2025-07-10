import * as PIXI from 'pixi.js';
import { assetList } from './asset-loader';
import { settings } from './settings';

export class Player extends PIXI.Container {
	private sprite = PIXI.Sprite.from(assetList.pigButcher);
	private faceDirection = 1;
	private leftPressed = false;
	private rightPressed = false;

	constructor() {
		super();
		this.addChild(this.sprite);
		this.sprite.scale.set(0.15);
		this.sprite.y = settings.canvasHeight - 150;

		addEventListener('keydown', (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') {
				this.rightPressed = true;
			} else if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') {
				this.leftPressed = true;
			}
		});

		addEventListener('keyup', (e: KeyboardEvent) => {
			if (e.key === 'ArrowRight' || e.key.toLowerCase() === 'd') {
				this.rightPressed = false;
			}

			if (e.key === 'ArrowLeft' || e.key.toLowerCase() === 'a') {
				this.leftPressed = false;
			}
		});
	}

	update(ticker: PIXI.Ticker) {
		const moveDirection =
			(this.leftPressed ? -1 : 0) + (this.rightPressed ? 1 : 0);
		this.x += moveDirection * ticker.deltaMS * settings.movementSpeed;
		this.faceDirection =
			moveDirection > 0 ? 1 : moveDirection < 0 ? -1 : this.faceDirection;
		this.scale.x = this.faceDirection;
	}
}
