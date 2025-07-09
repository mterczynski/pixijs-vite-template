import { Assets } from "pixi.js";

export const assetList = {
	metalTexture: "/assets/metal-texture.webp",
	pigButcher: "/assets/pig-butcher-v1.webp",
	background: "/assets/background.png",
};

// can be changed to lazily load asset bundles
export class AssetLoader {
	async loadAllAssets() {
		return Promise.all(
			Object.entries(assetList).map((url) => Assets.load(url))
		);
	}
}
