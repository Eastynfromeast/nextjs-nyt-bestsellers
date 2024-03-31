import styles from "../styles/common.module.css";

export const metadata = {
	title: "Not found ",
};

export default function NotFound() {
	return (
		<div className={styles.errorContainer}>
			<h2> Oops! We cannot find anything! </h2>
			<p>Please click "go back" and try again :( </p>
		</div>
	);
}
