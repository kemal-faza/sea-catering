'use server';
import { getAllData, insertData } from './db';
import { menuPlan, testimonial } from './types';
import { revalidatePath } from 'next/cache';

export async function getTestimonials() {
	const testimonials = (await getAllData('testimonials')) as testimonial[];
	return testimonials;
}

export async function getMenuPlans() {
	const menuPlans = (await getAllData('menu_plans')) as menuPlan[];
	return menuPlans;
}

export async function handleTestimonialForm(
	previousState: unknown,
	formData: FormData,
) {
	const data = {
		name: formData.get('name'),
		message: formData.get('message'),
		rating: formData.get('rating'),
	};

	await insertData('testimonials', data);

	revalidatePath('/');
	return {
		type: 'success',
		message: 'Your testimonial has been submitted!',
	};
}

export async function handleSubscriptionForm(
	previousState: unknown,
	formData: FormData,
) {
	const data = {
		name: formData.get('name'),
		phone_number: formData.get('phone_number'),
		menu_plan: formData.get('menu_plan'),
		meal_plans: formData.get('meal_plans')?.toString().split(','),
		delivery_days: formData.get('delivery_days')?.toString().split(','),
		total_price: Number(formData.get('total_price')),
	};

	await insertData('subscriptions', data);

	revalidatePath('/subscription');
	return {
		type: 'success',
		message: 'Thank you for your subscription!',
	};
}
