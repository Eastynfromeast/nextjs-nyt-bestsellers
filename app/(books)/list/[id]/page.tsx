import { Suspense } from "react";
import BookList, { getCategorizedBooks } from "../../../../components/booklist";
import { poppins, baskerville } from "../../../../styles/fonts";

interface IParams {
	params: { id: string };
}

export async function generateMetadata({ params: { id } }: IParams) {
	const booklist = await getCategorizedBooks(id);
	return {
		title: booklist.results.list_name,
	};
}

export default async function ListDetailPage({ params: { id } }: IParams) {
	return (
		<div className={baskerville.className}>
			<Suspense fallback={<h3>We are loading book list page...</h3>}>
				{/* @ts-expect-error Async Server Component */}
				<BookList id={id} />
			</Suspense>
		</div>
	);
}
