import Form from '@/components/subscription/Form';

export default function Subscription() {
	return (
		<section className="p-5 md:p-10">
			<h1 className="text-2xl font-bold text-center mb-5">
				Build Your Perfect Meal Plan
			</h1>
			<div className="flex justify-center">
				<Form />
			</div>
		</section>
	);
}
