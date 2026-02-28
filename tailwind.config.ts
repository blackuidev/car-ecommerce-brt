import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";
import lightswindPlugin from "lightswind/plugin";

export default {
	darkMode: 'class',
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif']
			},
		}
	}, // The theme now extends the default configuration to include 'font-inter'
	plugins: [
		tailwindcssAnimate,
		lightswindPlugin,
	],
} satisfies Config;