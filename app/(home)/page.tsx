import Link from "next/link";
import { API_URL } from "../constants";

export const metadata = {
	title: " Home",
};

interface IBookList {
	list_name: string;
	display_name: string;
	list_name_encoded: string;
	oldest_published_date: string;
	newest_published_date: string;
	updated: string;
}

async function getBookLists() {
	const response = await fetch(`${API_URL}/lists`);
	const json = await response.json();
	return json;
}

export default async function HomePage() {
	const bookLists = await getBookLists();
	const books: IBookList[] = bookLists.results;
	return (
		<div>
			{books.map((book, index) => (
				<div key={index}>
					<Link href={`/list/${book.list_name_encoded}`}>{book.display_name}</Link>
				</div>
			))}
		</div>
	);
}
