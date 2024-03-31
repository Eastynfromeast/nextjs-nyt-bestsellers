"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import navStyles from "../styles/nav.module.css";
import { chomsky, baskerville } from "../styles/fonts";

export default function Navigation() {
	const path = usePathname();
	return (
		<nav className={navStyles.gnb}>
			<h1 className={chomsky.className}>The New York Times Best Selling Books</h1>
			<ul className={baskerville.className}>
				<li>
					<Link href="/">Home</Link>
					{path === "/" ? <span className={navStyles.index}>✓</span> : null}
				</li>
				<li>
					<Link href="/about-us">About Us</Link>
					{path === "/about-us" ? <span className={navStyles.index}>✓</span> : null}
				</li>
			</ul>
		</nav>
	);
}
