/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		colors: {},
		extend: {
			colors: {
				core: {
					gray: {
						500: "#8C8C9A",
						"00": "#FFFFFF",
						950: "#2C2C31",
						300: "#C9C9CE",
					},
					blue: {
						500: "#0050FF",
					},
					red: {
						600: "#DC2828",
						100: "#FFDCDC",
					},
					yellow: {
						700: "#A56315",
						100: "#FAF1B6",
					},
					alfa: {
						dim: {
							50: "rgba(26, 26, 26, 0.06)",
							800: "rgba(26, 26, 26, 0.8)",
						},
					},
				},
				surface: {
					xHigh: "#8C8C9A",
					xLow: "#FFFFFF",
					brand: "#0050FF",
					danger: "#DC2828",
					dangerVariant: "#FFDCDC",
					warning: "#A56315",
					warningVariant: "#FAF1B6",
				},
				content: {
					onNeutral: {
						xxHigh: "#2C2C31",
						medium: "#8C8C9A",
						low: "#C9C9CE",
						danger: "#DC2828",
						warning: "#A56315",
					},
				},
				state: {
					default: {
						hover: "rgba(26, 26, 26, 0.06)",
						focus: "rgba(26, 26, 26, 0.8)",
					},
				},
			},
			borderRadius: {
				input: "12px",
			},
			fontSize: {
				labelS: "14px",
				labelM: "16px",
				bodyM: "16px",
			},
			letterSpacing: {
				label: {
					s: "0.16px",
					m: "0.16px",
				},
				body: {
					m: "0.01px",
				},
			},
			lineHeight: {
				label: {
					s: "17px",
					m: "22px",
				},
				body: {
					m: "22px",
				},
			},
			fontWeight: {
				labelS: 500,
				labelM: 500,
				bodyM: 400,
			},
			spacing: {
				xs: "8px",
				s: "12px",
				m: "16px",
				l: "20px",
			},
		},
	},
	plugins: [],
};
