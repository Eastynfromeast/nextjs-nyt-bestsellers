import { getBookLists } from "../app/(home)/page";
import styles from "../styles/common.module.css";

export default async function Footer() {
	const data = await getBookLists();
	return (
		<div className={styles.footer}>
			<p>{data.copyright}</p>
		</div>
	);
}
