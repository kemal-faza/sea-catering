const Footer = () => {
	return (
		<footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
			<aside>
				<p>
					Brian - Manager
					<br />
					08123456789
				</p>
			</aside>
			<nav>
				<h6 className="footer-title">Navigation</h6>
				<a className="link link-hover">Home</a>
				<a className="link link-hover">Meal Plans</a>
				<a className="link link-hover">Subscription</a>
				<a className="link link-hover">Contact Us</a>
			</nav>
		</footer>
	);
};

export default Footer;
