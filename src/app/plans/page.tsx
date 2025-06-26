import PricingCard from '@/components/plans/PricingCard';
import { getMenuPlans } from '../lib/action';

export default async function MealPlans() {
	const menuPlans = await getMenuPlans();
	return (
		<section className="p-5 lg:p-10 bg-accent">
			<h1 className="text-center font-bold text-5xl mb-10">
				Menu Plans For You
			</h1>
			<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
				{menuPlans.map((plan, index) => (
					<PricingCard
						title={plan.name}
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
