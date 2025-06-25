const Hero = () => {
	return (
		<div
			className="hero min-h-screen text-secondary-content"
			style={{
				backgroundImage: 'url(./img/homepage/hero.jpg)',
			}}>
			<div className="hero-overlay"></div>
			<div className="hero-content text-neutral-content text-center">
				<div className="max-w-md">
					<h1 className="mb-10 text-4xl sm:text-5xl font-bold">
						Healthy Meals, Anytime, Anywhere
					</h1>
					<button className="btn btn-primary">
						See Pricing & Plans
					</button>
				</div>
			</div>
		</div>
	);
};

export default Hero;
