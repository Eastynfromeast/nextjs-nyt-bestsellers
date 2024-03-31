import { Poppins, Libre_Baskerville } from "next/font/google";
import localfont from "next/font/local";

export const chomsky = localfont({
	src: [
		{
			path: "../public/fonts/chomsky.regular.otf",
			weight: "normal",
			style: "normal",
		},
	],
});

export const poppins = Poppins({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600"],
});

export const baskerville = Libre_Baskerville({
	subsets: ["latin"],
	weight: ["400"],
});
