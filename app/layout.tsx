import "../styles/global.css";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export const metadata = {
	title: "NYT Best Seller List",
	description: "New York Times' historic bestselling books' list",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<Navigation />
				{children}
				<Footer />
			</body>
		</html>
	);
}
