'use client';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

export default function Testimonial({
	children,
}: {
	children: React.ReactNode;
}) {
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
				{children}
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
					<form
						action=""
						className="flex flex-col items-center gap-3 my-5">
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
									defaultChecked
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
					</form>
				</div>
			</div>
		</section>
	);
}
