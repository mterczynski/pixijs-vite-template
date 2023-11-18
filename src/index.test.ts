import { init } from "./index"
import * as PIXI from "pixi.js";

describe('index', () => {
	describe('init', () => {
		test('it creates a PIXI app', () => {
			const app = init()

			expect(app).toBeInstanceOf(PIXI.Application)
		})

		test('mock test', () => {
			expect(5).toBe(5)
		})
	})
})
