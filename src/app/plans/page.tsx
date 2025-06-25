import PricingCard from '@/components/plans/PricingCard';

export default function MealPlans() {
	const plans = [
		{
			title: 'Diet Plan',
			isPopular: false,
			price: 30000,
			desc: "Our Diet Plan is the perfect starting point for your health journey. Each meal is carefully portioned and calorie-controlled to help you manage your weight and feel great without sacrificing flavor. It's the ideal choice for balanced, everyday nutrition that's both effective and affordable.",
			details: [
				'Calorie-controlled portions (approx. 400-500 kcal).',
				'Balanced macronutrients for stable energy.',
				'Fresh, high-quality local ingredients.',
				'Best for everyday health maintenance, sustainable weight management, and anyone new to healthy eating.',
			],
		},
		{
			title: 'Protein Plan',
			isPopular: true,
			price: 40000,
			desc: 'Designed to fuel your active lifestyle, the Protein Plan is packed with an extra serving of high-quality protein to help you build muscle, recover faster, and enhance your workout performance. This is the go-to option for athletes and fitness enthusiasts who demand more from their meals.',
			details: [
				'High-protein servings (approx. 30-40g per meal).',
				'Complex carbohydrates for sustained energy.',
				'A focus on lean meats, fish, and powerful plant-based proteins.',
				'Best for gym-goers, athletes, and individuals focused on muscle building or post-workout recovery.',
			],
		},
		{
			title: 'Royal Plan',
			isPopular: false,
			price: 60000,
			desc: 'Experience the ultimate in healthy gourmet dining with our Royal Plan. This premium selection features exclusive, chef-crafted menus using only the finest ingredients like imported salmon, tenderloin steak, and organic produce. For those who want unparalleled taste, variety, and nutritional excellence, the Royal Plan is in a class of its own.',
			details: [
				'Gourmet recipes and exclusive weekly menus.',
				'Use of premium ingredients (e.g., Salmon, Steak, Quinoa, Organic Greens).',
				'Maximum variety and our most extensive customization options.',
				'Best for food enthusiasts and those who want the absolute best in quality, taste, and ingredient variety.',
			],
		},
	];
	return (
		<section className="p-5 lg:p-10 bg-accent">
			<h1 className="text-center font-bold text-5xl mb-10">
				Menu Plans For You
			</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{plans.map((plan, index) => (
					<PricingCard
						title={plan.title}
						isPopular={plan.isPopular}
						price={plan.price}
						desc={plan.desc}
						details={plan.details}
						key={index}
					/>
				))}
			</div>
		</section>
	);
}
