import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
	title: 'SEA Catering',
	description: 'Healthy Meals, Anytime, Anywhere',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			data-theme="light">
			<body className={`relative antialiased`}>{children}</body>
		</html>
	);
}
