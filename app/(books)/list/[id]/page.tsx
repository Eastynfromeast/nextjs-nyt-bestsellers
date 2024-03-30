import { API_URL } from "../../../constants";

interface IParams {
	params: { id: string };
}
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

async function getCategorizedBooks(id: string) {
	const response = await fetch(`${API_URL}/list?name=${id}`);
	return response.json();
}

export default async function ListDetailPage({ params: { id } }: IParams) {
	const booksData = await getCategorizedBooks(id);
	const rankedBooks = booksData.results;
	return (
		<div>
			<h1>{rankedBooks.list_name}</h1>
			<div>
				{rankedBooks.books.map((book: IBook) => (
					<div key={book.rank}>
						<img src={book.book_image} alt={book.title} />
						<h4>{book.title}</h4>
						<span>written by. {book.author}</span>
					</div>
				))}
			</div>
		</div>
	);
}
