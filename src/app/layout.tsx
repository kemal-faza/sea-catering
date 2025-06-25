import type { Metadata } from 'next';
import './globals.css';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

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
			data-theme="dark">
			<body
				className={`bg-accent text-primary-content relative antialiased`}>
				<Nav />
				{children}
				<Footer />
			</body>
		</html>
	);
}
