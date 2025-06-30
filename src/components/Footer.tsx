import { links } from '@/app/lib/data';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer
			className="footer sm:footer-horizontal bg-base-300 text-base-content p-10 absolute bottom-0 right-0 left-0"
			id="contact">
			<aside>
				<p>
					Brian - Manager
					<br />
					08123456789
				</p>
			</aside>
			<nav>
				<h6 className="footer-title">Navigation</h6>
				{links.map((link, index) => (
					<Link
						className="link link-hover"
						href={link.href}
						key={index}>
						{link.text}
					</Link>
				))}
			</nav>
		</footer>
	);
};

export default Footer;
