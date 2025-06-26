import Card from '@/components/homepage/Card';
import Hero from '@/components/homepage/Hero';
import Testimonial from '@/components/homepage/Testimonial';
import { cardsHomepage } from './lib/data';
import { getTestimonials } from './lib/action';
import Swiper from '@/components/homepage/Swiper';

export default async function Home() {
	const testimonials = await getTestimonials();
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
					{cardsHomepage.map((card, index) => (
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
			<Testimonial>
				{testimonials.map((testimonial, index) => (
					<Swiper
						testimonial={testimonial}
						key={index}
					/>
				))}
			</Testimonial>
		</>
	);
}
