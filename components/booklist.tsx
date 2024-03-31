import { API_URL } from "../app/constants";
import styles from "../styles/book-list.module.css";

interface IBook {
	rank: number;
	rank_last_week: number;
	weeks_on_list: number;
	asterisk: number;
	dagger: number;
	publisher: string;
	description: string;
	price: number;
	title: string;
	author: string;
	book_image: string;
	amazon_product_url: string;
	book_uri: string;
}

export async function getCategorizedBooks(id: string) {
	const response = await fetch(`${API_URL}/list?name=${id}`);
	// await new Promise(resolve => setTimeout(resolve, 5000));
	return response.json();
}

export default async function BookList({ id }: { id: string }) {
	const booksData = await getCategorizedBooks(id);
	const rankedBooks = booksData.results;
	return (
		<div className={styles.container}>
			<h2>{rankedBooks.list_name}</h2>
			<div className={styles.bookshelf}>
				{rankedBooks.books.map((book: IBook) => (
					<div className={styles.book} key={book.rank}>
						<span className={styles.rankFlag}>{book.rank}</span>
						<div className={styles.cover}>
							<img src={book.book_image} alt={book.title} />
						</div>
						<div className={styles.info}>
							<h4>{book.title}</h4>
							<p>by {book.author}</p>
							<p className={styles.description}>{book.description}</p>
							<a href={book.amazon_product_url} target={"_blank"}>
								Buy it &rarr;
							</a>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
