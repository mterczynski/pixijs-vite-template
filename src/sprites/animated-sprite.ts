import * as PIXI from "pixi.js";

export interface AnimatedSprite {
	rect: PIXI.Rectangle;
	sprite: PIXI.Sprite;
	animationTimerId?: number;
}
