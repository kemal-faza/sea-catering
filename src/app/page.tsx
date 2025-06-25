import Card from '@/components/homepage/Card';
import Hero from '@/components/homepage/Hero';
import Testimonial from '@/components/homepage/Testimonial';

export default function Home() {
	const cards = [
		{
			src: '/img/homepage/cards/1.png',
			title: 'Customize Your Meal',
			content:
				'Design your own healthy menu. Customize ingredients and portions to support various dietary needs-from keto, vegan, to your specific fitness goals.',
		},
		{
			src: '/img/homepage/cards/2.jpg',
			title: 'Delivery to Major Cities / Nationwide',
			content:
				'Take control of your intake with confidence. Each of our meals comes with an accurate and clear breakdown of calories and macronutrients (protein, carbs, fat).',
		},
		{
			src: '/img/homepage/cards/3.png',
			title: 'Detailed Nutritional Information',
			content:
				'Take control of your intake with confidence. Each of our meals comes with an accurate and clear breakdown of calories and macronutrients (protein, carbs, fat).',
		},
	];

	return (
		<>
			<Hero />

			{/* About */}
			<section className="p-5 sm:p-10 text-center">
				<div className="flex basis-full justify-center mb-5">
					<div className="sm:basis-3/4 lg:basis-1/2">
						<h5 className="text-xl md:text-2xl font-bold mb-3">
							Welcome to SEA Catering, Indonesia&apos;s first
							truly customizable healthy meal service.
						</h5>
						<p>
							Forget one-size-fits-all diets. Here, you design the
							meals that fit your lifestyle, and we deliver them
							fresh to your door—no matter where you live in the
							archipelago. Healthy eating has never been this easy
							or accessible.
						</p>
					</div>
				</div>
				<div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-6">
					{cards.map((card, index) => (
						<Card
							src={card.src}
							alt={card.title}
							key={index}>
							<h2 className="card-title">{card.title}</h2>
							<p>{card.content}</p>
						</Card>
					))}
				</div>
			</section>

			{/* Testimoni */}
			<Testimonial />
		</>
	);
}
