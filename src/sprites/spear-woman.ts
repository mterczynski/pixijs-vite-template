import * as PIXI from "pixi.js";
import { loader } from "../settings";
import { AnimatedSprite } from "./animated-sprite";

async function loadSprite() {
	return new Promise((resolve) => {
		loader
			.add("spritesheet", "assets/test/sprite-woman-spear.png")
			.load(() => resolve(null));
	});
}

export async function createSpearWoman(): Promise<AnimatedSprite> {
	await loadSprite();
	const rect = new PIXI.Rectangle(0, 0, 64, 64);
	var texture = loader.resources["spritesheet"]!.texture!;
	texture.frame = rect;
	const sprite = new PIXI.Sprite(texture);

	return {
		rect,
		sprite,
	};
}

const animations = {
	idle: {
		frameCount: 6,
		repeat: true,
	},
};

export function playAnimation(
	animationKey: keyof typeof animations,
	spearWoman: AnimatedSprite
) {
	const { rect, sprite } = spearWoman;
	const animation = animations[animationKey];
	const frameWidth = 64;

	const intervalId = window.setInterval(() => {
		if (rect.x > frameWidth * animation.frameCount) {
			if (animation.repeat) {
				rect.x = 0;
			} else {
				clearInterval(intervalId);
			}
		}
		sprite.texture.frame = rect;
		rect.x += frameWidth;
	}, 100);

	return intervalId;
}
