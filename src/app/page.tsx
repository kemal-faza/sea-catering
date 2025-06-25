import Footer from '@/components/Footer';
import Card from '@/components/Homepage/Card';
import Hero from '@/components/Homepage/Hero';
import Nav from '@/components/Nav';

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
				'Kami antarkan makanan sehat langsung ke depan pintu Anda, di mana pun Anda berada. Jaringan kami menjangkau seluruh kota besar di Indonesia dan sekitarnya.',
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
			<Nav />
			<Hero />
			<section className="p-10 bg-primary dark:bg-accent text-center">
				<div className="flex basis-full justify-center mb-5">
					<div className="sm:basis-3/4 lg:basis-1/2">
						<h5 className="text-xl font-bold mb-3">
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
				<div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-4">
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

			<Footer />
		</>
	);
}
