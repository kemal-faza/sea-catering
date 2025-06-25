'use client';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonial() {
	const reviews = [
		{
			name: 'Aditya Pratama',
			message:
				"As a developer with a hectic schedule, SEA Catering is an absolute lifesaver. I have no time to cook but refuse to eat junk food. My lunch is always delivered on time to the office, it tastes great, and most importantly, it doesn't leave me feeling sluggish! My energy is stable all day. Highly recommended!",
			rating: '5',
		},
		{
			name: 'Rina Wijayanti',
			message:
				"I am very particular about my macro intake. The customization feature at SEA Catering is incredible! I can adjust my protein and carb portions to match my training program perfectly. It has significantly helped my progress at the gym. The food isn't bland like other diet foods either. Finally, a healthy catering service that understands athletes' needs.",
			rating: '4.5',
		},
		{
			name: 'Bunga Lestari',
			message:
				"Ensuring my family eats healthy is a priority, but sometimes there just isn't enough time. Since subscribing to SEA Catering, dinner has become so much easier. The kids love it, and my husband does too. It tastes like home-cooked food, but we have peace of mind knowing it's nutritionally balanced with fresh ingredients. The service is also friendly and always on time.",
			rating: '4.5',
		},
		{
			name: 'David Santoso',
			message:
				"I tried the 'Weight Loss Journey' plan for a month, and the results were amazing. I lost 5 kg without feeling tortured or constantly hungry. The portions were just right, the menu was different every day so I never got bored, and it was still delicious. The transparent calorie information was a huge help in keeping me on track. Thank you, SEA Catering",
			rating: '4.5',
		},
		{
			name: 'Amanda Putri',
			message:
				"Finding a vegan catering service that's both delicious and creative can be tough. The 'Green Goodness' plan from SEA Catering exceeded all my expectations. The menu is never boring, and there's always a new, pleasant surprise each week. I can finally enjoy practical, healthy, and super tasty plant-based meals. Kudos to the chef's creativity!",
			rating: '5',
		},
	];
	return (
		<section className="p-5 sm:p-10 text-center">
			<Swiper
				breakpoints={{
					768: {
						slidesPerView: 2,
						spaceBetween: 30,
					},
					1024: {
						slidesPerView: 3,
						spaceBetween: 30,
					},
				}}
				loop={true}
				autoplay={true}
				centeredSlides={true}
				grabCursor={true}
				pagination={{
					clickable: true,
				}}
				modules={[Pagination, Autoplay]}
				className="mySwiper">
				{reviews.map((review, index) => (
					<SwiperSlide
						className="mb-10"
						key={index}
						data-swiper-autoplay="2000">
						<div className="card bg-base-100 w-full shadow-sm">
							<div className="card-body text-center items-center">
								<h2 className="card-title">{review.name}</h2>
								<p>{review.message}</p>
								<span className="font-bold">
									{review.rating}/5
								</span>
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
			<div className="mt-5 flex justify-center">
				<div className="md:basis-2/5">
					<h2 className="text-xl md:text-2xl font-bold">
						Loved Your Meal?
					</h2>
					<p className="text-sm my-1">
						Your feedback helps us grow and inspires others to eat
						healthier.
					</p>
					<div className="flex flex-col items-center gap-3 my-5">
						<input
							type="text"
							placeholder="Your name"
							className="input rounded-full w-full"
						/>
						<textarea
							className="textarea rounded-xl w-full"
							placeholder="What story you want to tell?"></textarea>
						<div className="flex justify-between items-center w-full my-1">
							<p className="text-lg">Rate us:</p>
							<div className="rating rating-lg rating-half">
								<input
									type="radio"
									name="rating-11"
									className="rating-hidden"
								/>
								<input
									type="radio"
									name="rating-11"
									className="mask mask-star-2 mask-half-1 bg-primary-content"
									aria-label="0.5 star"
								/>
								<input
									type="radio"
									name="rating-11"
									className="mask mask-star-2 mask-half-2 bg-primary-content"
									aria-label="1 star"
								/>
								<input
									type="radio"
									name="rating-11"
									className="mask mask-star-2 mask-half-1 bg-primary-content"
									aria-label="1.5 star"
									defaultChecked
								/>
								<input
									type="radio"
									name="rating-11"
									className="mask mask-star-2 mask-half-2 bg-primary-content"
									aria-label="2 star"
								/>
								<input
									type="radio"
									name="rating-11"
									className="mask mask-star-2 mask-half-1 bg-primary-content"
									aria-label="2.5 star"
								/>
								<input
									type="radio"
									name="rating-11"
									className="mask mask-star-2 mask-half-2 bg-primary-content"
									aria-label="3 star"
								/>
								<input
									type="radio"
									name="rating-11"
									className="mask mask-star-2 mask-half-1 bg-primary-content"
									aria-label="3.5 star"
								/>
								<input
									type="radio"
									name="rating-11"
									className="mask mask-star-2 mask-half-2 bg-primary-content"
									aria-label="4 star"
								/>
								<input
									type="radio"
									name="rating-11"
									className="mask mask-star-2 mask-half-1 bg-primary-content"
									aria-label="4.5 star"
								/>
								<input
									type="radio"
									name="rating-11"
									className="mask mask-star-2 mask-half-2 bg-primary-content"
									aria-label="5 star"
								/>
							</div>
						</div>
						<button
							type="submit"
							className="btn btn-primary w-full mt-3">
							Submit
						</button>
					</div>
				</div>
			</div>
		</section>
	);
}
