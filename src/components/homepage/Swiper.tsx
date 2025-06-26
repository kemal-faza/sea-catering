'use client';
import { testimonial } from '@/app/lib/types';
import { SwiperSlide } from 'swiper/react';

export default function Swiper({ testimonial }: { testimonial: testimonial }) {
	return (
		<SwiperSlide
			className="mb-10"
			data-swiper-autoplay="2000">
			<div className="card bg-base-100 w-full shadow-sm">
				<div className="card-body text-center items-center">
					<h2 className="card-title">{testimonial.name}</h2>
					<p>{testimonial.message}</p>
					<span className="font-bold">{testimonial.rating}/5</span>
				</div>
			</div>
		</SwiperSlide>
	);
}
