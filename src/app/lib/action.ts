import { getAllData } from './db';
import { menuPlan, testimonial } from './types';

export async function getTestimonials() {
	const testimonials = (await getAllData('testimonials')) as testimonial[];
	return testimonials;
}

export async function getMenuPlans() {
	const menuPlans = (await getAllData('menu_plans')) as menuPlan[];
	return menuPlans;
}
