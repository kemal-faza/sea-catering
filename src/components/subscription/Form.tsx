'use client';
import { toRupiah } from '@/app/utils';
import { useState } from 'react';

export default function Form() {
	const mealTypes = ['Breakfast', 'Lunch', 'Dinner'];
	const days = [
		'Monday',
		'Tuesday',
		'Wednesday',
		'Thursday',
		'Friday',
		'Saturday',
		'Sunday',
	];

	const [mealPlan, setMealPlan] = useState(0);
	function handleMealPlanChange(value: string) {
		setMealPlan(Number(value));
	}

	const [mealType, setMealType] = useState(['']);
	const [totalMealType, setTotalMealType] = useState(0);
	function handleMealTypeChange(value: string, isChecked: boolean) {
		if (isChecked) {
			setMealType([...mealType, value]);
			setTotalMealType(totalMealType + 1);
		} else {
			const index = mealType.indexOf(value);
			if (index !== -1) {
				const tempMealType = mealType.toSpliced(index, 1);
				setMealType([...tempMealType]);
				setTotalMealType(totalMealType - 1);
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

	return (
		<form
			action=""
			className="basis-full sm:basis-4/5 md:basis-3/5 lg:basis-2/5 flex flex-col gap-4">
			<input
				type="text"
				placeholder="Your name"
				className="input rounded-full w-full"
			/>
			<input
				type="text"
				placeholder="Your phone number"
				className="input rounded-full w-full"
			/>
			<select
				defaultValue="Select your plan"
				className="select w-full rounded-full"
				onChange={(e) => {
					handleMealPlanChange(e.target.value);
				}}>
				<option disabled={true}>Select your plan</option>
				<option value={30000}>Diet Plan - IDR 30.000/meal</option>
				<option value={40000}>Protein Plan - IDR 40.000/meal</option>
				<option value={60000}>Royal Plan - IDR 60.000/meal</option>
			</select>
			<fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-full border p-4">
				<legend className="fieldset-legend">
					Choose your meal plan
				</legend>
				{mealTypes.map((type, index) => (
					<label
						className="label"
						key={index}
						id={type}>
						<input
							onChange={(e) => {
								handleMealTypeChange(
									e.target.value,
									e.target.checked,
								);
							}}
							value={type}
							type="checkbox"
							className="checkbox"
							name="meal-plan"
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
							name="meal-plan"
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
				placeholder="Are you have any allergies? Just tell us."></textarea>
			<div className="flex justify-between">
				<span>Total:</span>
				<span>
					{toRupiah(
						mealPlan * totalMealType * totalDeliveryDays * 4.3,
					)}
				</span>
			</div>
			<button
				type="submit"
				className="btn btn-primary w-full mt-3">
				Submit
			</button>
		</form>
	);
}
