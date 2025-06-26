import Form from '@/components/subscription/Form';
import { getMenuPlans } from '../lib/action';
import { toRupiah } from '../lib/utils';

export default async function Subscription() {
	const menuPlans = await getMenuPlans();
	return (
		<section className="p-5 md:p-10">
			<h1 className="text-2xl font-bold text-center mb-5">
				Build Your Perfect Meal Plan
			</h1>
			<div className="flex justify-center">
				<Form>
					{menuPlans.map((plan, index) => (
						<option
							value={plan.price}
							key={index}>
							{plan.name} - {toRupiah(plan.price)}/meal
						</option>
					))}
				</Form>
			</div>
		</section>
	);
}
