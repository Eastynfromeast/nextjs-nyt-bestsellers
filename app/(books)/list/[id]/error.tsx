"use client";

import styles from "../../../../styles/common.module.css";

export default function ErrorOnBookList() {
	return (
		<div className={styles.errorContainer}>
			<h2>Something was broken</h2>
			<p> Please go back and try again :(</p>
		</div>
	);
}
