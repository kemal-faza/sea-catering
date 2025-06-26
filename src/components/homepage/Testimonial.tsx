'use client';

import { testimonial } from '@/app/lib/types';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import { handleTestimonialForm } from '@/app/lib/action';
import { useActionState, useEffect } from 'react';
import ToastSuccess from '../toast/ToastGreen';
import toast from 'react-hot-toast';

export default function Testimonial({
	testimonials,
}: {
	testimonials: testimonial[];
}) {
	const [state, formAction, isPending] = useActionState(
		handleTestimonialForm,
		null,
	);

	useEffect(() => {
		if (state) {
			toast.custom(<ToastSuccess message={state.message} />, {
				duration: 4000,
			});
		}
	}, [state]);

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
					dynamicBullets: true,
				}}
				modules={[Pagination, Autoplay]}
				className="mySwiper">
				{testimonials.map((testimonial, index) => (
					<SwiperSlide
						className="mb-10"
						key={index}
						data-swiper-autoplay="2000">
						<div className="card bg-base-100 w-full shadow-sm">
							<div className="card-body text-center items-center">
								<h2 className="card-title">
									{testimonial.name}
								</h2>
								<p>{testimonial.message}</p>
								<span className="font-bold">
									{testimonial.rating}/5
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
					<form
						action={formAction}
						className="flex flex-col items-center gap-3 my-5">
						<input
							type="text"
							placeholder="Your name"
							name="name"
							className="input rounded-full w-full"
						/>
						<textarea
							className="textarea rounded-xl w-full"
							name="message"
							placeholder="What story you want to tell?"></textarea>
						<div className="flex justify-between items-center w-full my-1">
							<p className="text-lg">Rate us:</p>
							<div className="rating rating-lg rating-half">
								<input
									type="radio"
									name="rating"
									className="rating-hidden"
								/>
								<input
									type="radio"
									name="rating"
									value={0.5}
									className="mask mask-star-2 mask-half-1 bg-primary-content"
									aria-label="0.5 star"
								/>
								<input
									type="radio"
									name="rating"
									value={1}
									className="mask mask-star-2 mask-half-2 bg-primary-content"
									aria-label="1 star"
								/>
								<input
									type="radio"
									name="rating"
									value={1.5}
									className="mask mask-star-2 mask-half-1 bg-primary-content"
									aria-label="1.5 star"
								/>
								<input
									type="radio"
									name="rating"
									value={2}
									className="mask mask-star-2 mask-half-2 bg-primary-content"
									aria-label="2 star"
								/>
								<input
									type="radio"
									name="rating"
									value={2.5}
									className="mask mask-star-2 mask-half-1 bg-primary-content"
									aria-label="2.5 star"
								/>
								<input
									type="radio"
									name="rating"
									value={3}
									className="mask mask-star-2 mask-half-2 bg-primary-content"
									aria-label="3 star"
								/>
								<input
									type="radio"
									name="rating"
									value={3.5}
									className="mask mask-star-2 mask-half-1 bg-primary-content"
									aria-label="3.5 star"
								/>
								<input
									type="radio"
									name="rating"
									value={4}
									className="mask mask-star-2 mask-half-2 bg-primary-content"
									aria-label="4 star"
								/>
								<input
									type="radio"
									name="rating"
									value={4.5}
									className="mask mask-star-2 mask-half-1 bg-primary-content"
									aria-label="4.5 star"
									defaultChecked
								/>
								<input
									type="radio"
									name="rating"
									value={5}
									className="mask mask-star-2 mask-half-2 bg-primary-content"
									aria-label="5 star"
								/>
							</div>
						</div>
						<button
							type="submit"
							className="btn btn-primary w-full mt-3">
							{isPending ? 'Submitting...' : 'Submit'}
						</button>
					</form>
				</div>
			</div>
		</section>
	);
}
