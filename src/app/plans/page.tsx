import PricingCard from '@/components/plans/PricingCard';

export default function MealPlans() {
	const plans = [
		{
			title: 'Signature Balanced Bowl',
			isPopular: true,
			price: '600,000',
			desc: 'The perfect choice for active individuals who need balanced energy throughout the day. Designed to maintain optimal productivity and health without the hassle of meal planning.',
			details: [
				'~1200 - 1500 kcal (for 2 meals)',
				'Balanced (40% Carbohydrates, 30% Protein, 30% Healthy Fats)',
				'Best for office professionals, students, or anyone looking to start a practical and healthy lifestyle.',
			],
		},
		{
			title: 'Weight Loss Journey',
			isPopular: false,
			price: '580,000',
			desc: 'A scientifically designed, low-calorie meal plan to help you achieve your ideal body weight. Every dish is rich in fiber and nutrients to keep you feeling full and energized.',
			details: [
				'~1000 - 1200 kcal (for 2 meals)',
				'Low Carb, Low Fat, High in Protein & Fiber.',
				'Best for individuals with a specific goal to lose weight in a healthy and sustainable way.',
			],
		},
		{
			title: "Athlete's Fuel",
			isPopular: false,
			price: '750,000',
			desc: 'Boost your workout performance and accelerate muscle growth with our high-protein menu. Specially designed for athletes and those who are serious about their fitness.',
			details: [
				'~1800 - 2200 kcal (for 2 meals)',
				'High Protein (45% Protein, 35% Carbohydrates, 20% Fat).',
				'Best for gym enthusiasts, athletes, or anyone on a muscle-building or bulking program.',
			],
		},
	];
	return (
		<section className="p-10 bg-accent">
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
