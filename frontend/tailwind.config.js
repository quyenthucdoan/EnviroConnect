/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			white: "#FFFFFF",
			gray: "#A7ADB7",
			primary: {
				darker: "#006657",
				dark: "#007F6D",
				normal: "#009580",
				light: "#BFE8E2",
				lighter: "#ECF8F7",
			},
		},
		extend: {},
	},
	plugins: [],
}
