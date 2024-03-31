import { API_URL } from "../constants";
import BookGenre from "../../components/bookgenre";
import commonStyles from "../../styles/common.module.css";

export const metadata = {
	title: "Find your books with NYT Best Sellers",
};

interface IBookList {
	list_name: string;
	display_name: string;
	list_name_encoded: string;
	oldest_published_date: string;
	newest_published_date: string;
	updated: string;
}

export async function getBookLists() {
	const response = await fetch(`${API_URL}/lists`);
	const json = await response.json();
	return json;
}

export default async function HomePage() {
	const bookLists = await getBookLists();
	const books: IBookList[] = bookLists.results;
	return (
		<div className={commonStyles.container}>
			{books.map(book => (
				<BookGenre key={book.list_name_encoded} list_name_encoded={book.list_name_encoded} display_name={book.display_name} />
			))}
		</div>
	);
}
