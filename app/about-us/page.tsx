import styles from "../../styles/about-us.module.css";
import { baskerville } from "../../styles/fonts";
export const metadata = {
	title: "About Us",
};

export default function AboutUsPage() {
	return (
		<div className={styles.container}>
			<h2> About Us </h2>
			<p className={baskerville.className}>
				{" "}
				Welcome to the explorer of The New York Times Best Seller Lists. <br />
				Let's find interesting books together!
			</p>
		</div>
	);
}
