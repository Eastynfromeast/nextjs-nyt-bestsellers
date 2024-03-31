"use client";

import Link from "next/link";
import styles from "../styles/book-genre.module.css";
import { baskerville } from "../styles/fonts";

interface IBookGenre {
	list_name_encoded: string;
	display_name: string;
}

export default function BookGenre({ list_name_encoded, display_name }: IBookGenre) {
	return (
		<div className={styles.books} key={list_name_encoded}>
			<Link prefetch href={`/list/${list_name_encoded}`} className={baskerville.className}>
				{display_name}
			</Link>
		</div>
	);
}
