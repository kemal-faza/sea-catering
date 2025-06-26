'use client';
import { handleSubscriptionForm } from '@/app/lib/action';
import { days, mealPlans } from '@/app/lib/data';
import { toRupiah } from '@/app/lib/utils';
import { useActionState, useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import ToastSuccess from '../toast/ToastGreen';

export default function Form({ children }: { children: React.ReactNode }) {
	const [state, formAction, isPending] = useActionState(
		handleSubscriptionForm,
		null,
	);

	useEffect(() => {
		if (state) {
			toast.custom(<ToastSuccess message={state.message} />, {
				duration: 4000,
			});
		}
	}, [state]);

	const [menuPlan, setMenuPlan] = useState(0);
	function handleMenuPlanChange(value: string) {
		setMenuPlan(Number(value));
	}

	const [mealPlan, setMealPlan] = useState(['']);
	const [totalMealPlan, setTotalMealPlan] = useState(0);
	function handleMealPlanChange(value: string, isChecked: boolean) {
		if (isChecked) {
			setMealPlan([...mealPlan, value]);
			setTotalMealPlan(totalMealPlan + 1);
		} else {
			const index = mealPlan.indexOf(value);
			if (index !== -1) {
				const tempMealPlan = mealPlan.toSpliced(index, 1);
				setMealPlan([...tempMealPlan]);
				setTotalMealPlan(totalMealPlan - 1);
			}
		}
	}

	const [deliveryDays, setDeliveryDays] = useState(['']);
	const [totalDeliveryDays, setTotalDeliveryDays] = useState(0);
	function handleDeliveryDaysChange(value: string, isChecked: boolean) {
		if (isChecked) {
			setDeliveryDays([...deliveryDays, value]);
			setTotalDeliveryDays(totalDeliveryDays + 1);
		} else {
			const index = deliveryDays.indexOf(value);
			if (index !== -1) {
				const tempDeliveryDays = deliveryDays.toSpliced(index, 1);
				setDeliveryDays([...tempDeliveryDays]);
				setTotalDeliveryDays(totalDeliveryDays - 1);
			}
		}
	}

	const [total, setTotal] = useState(0);
	useEffect(() => {
		setTotal(menuPlan * totalMealPlan * totalDeliveryDays * 4.3);
	}, [totalMealPlan, totalDeliveryDays, menuPlan]);

	return (
		<form
			action={formAction}
			className="basis-full sm:basis-4/5 md:basis-3/5 lg:basis-2/5 flex flex-col gap-4">
			<input
				type="hidden"
				name="meal_plans"
				value={mealPlan.slice(1)}
			/>
			<input
				type="hidden"
				name="delivery_days"
				value={deliveryDays.slice(1)}
			/>
			<input
				type="hidden"
				name="total_price"
				value={total}
			/>
			<input
				type="text"
				placeholder="Your name"
				name="name"
				className="input rounded-full w-full"
			/>
			<input
				type="text"
				placeholder="Your phone number"
				name="phone_number"
				className="input rounded-full w-full"
			/>
			<select
				defaultValue="Select your plan"
				className="select w-full rounded-full"
				name="menu_plan"
				onChange={(e) => {
					handleMenuPlanChange(e.target.value);
				}}>
				<option disabled={true}>Select your plan</option>
				{children}
			</select>
			<fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
				<legend className="fieldset-legend">
					Choose your meal plan
				</legend>
				{mealPlans.map((type, index) => (
					<label
						className="label"
						key={index}
						id={type}>
						<input
							onChange={(e) => {
								handleMealPlanChange(
									e.target.value,
									e.target.checked,
								);
							}}
							value={type}
							type="checkbox"
							className="checkbox"
							id={type}
						/>
						{type}
					</label>
				))}
			</fieldset>
			<fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
				<legend className="fieldset-legend">
					Choose your delivery days
				</legend>
				{days.map((day, index) => (
					<label
						className="label"
						key={index}
						id={day}>
						<input
							type="checkbox"
							className="checkbox"
							value={day}
							onChange={(e) => {
								handleDeliveryDaysChange(
									e.target.value,
									e.target.checked,
								);
							}}
							id={day}
						/>
						{day}
					</label>
				))}
			</fieldset>
			<textarea
				className="textarea rounded-xl w-full"
				name="allergies"
				placeholder="Are you have any allergies? Just tell us."></textarea>

			<div className="flex justify-between">
				<span>Total:</span>
				<span>{toRupiah(total)}</span>
			</div>
			<button
				type="submit"
				className="btn btn-primary w-full mt-3">
				{isPending ? 'Submitting...' : 'Submit'}
			</button>
		</form>
	);
}
