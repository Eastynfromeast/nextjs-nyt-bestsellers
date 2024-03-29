export const metadata = {
	title: "NYT Bestselling Books",
	description: "New York Times' historic bestselling books' list",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
