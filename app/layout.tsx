import Navigation from "../components/navigation";

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
			</body>
		</html>
	);
}
