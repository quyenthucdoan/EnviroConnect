/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {
			white: "#FFFFFF",
			gray: "#A7ADB7",
			bg: "#F5F7F9",
			primary: {
				darker: "#006657",
				dark: "#007F6D",
				normal: "#009580",
				light: "#BFE8E2",
				lighter: "#ECF8F7",
			},
			cloud: {
				normal: "#E8EDF1",
			},
		},
		fontSize: {
			title1: "22px",
			title2: "18px",
		},
		borderRadius: {
			primary: "12px",
		},
		extend: {},
	},
	plugins: [],
}
