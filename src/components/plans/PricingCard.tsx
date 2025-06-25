import { toRupiah } from '@/app/utils';
import Link from 'next/link';

interface Props {
	title: string;
	price: number;
	isPopular: boolean;
	desc: string;
	details: string[];
}
export default function PricingCard({
	title,
	price,
	isPopular,
	desc,
	details,
}: Props) {
	return (
		<div className="card w-full bg-base-100 shadow-sm">
			<div className="card-body">
				{isPopular ? (
					<span className="badge badge-xs badge-secondary">
						Most Popular
					</span>
				) : (
					''
				)}
				<div className="flex flex-col sm:flex-row justify-between items-center gap-x-3">
					<h2 className="text-2xl font-bold sm: basis-3/5 md:basis-3/4">
						{title}
					</h2>
					<div className="text-xl flex sm:flex-col items-center sm: basis-2/5 md:basis-1/4">
						<span className="sm:w-full text-sm sm:text-base">
							{toRupiah(price)}
						</span>
						<span className="sm:w-full text-xs ml-1 md:ml-0">
							/meal
						</span>
					</div>
				</div>
				<p className="text-justify my-3">{desc}</p>
				<div className="collapse collapse-arrow bg-base-100 border-base-300 border">
					<input type="checkbox" />
					<div className="collapse-title font-semibold">
						See More Details
					</div>
					<div className="collapse-content text-sm">
						<ul className="mt-6 flex flex-col gap-2 text-xs">
							{details.map((detail, index) => (
								<li key={index}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="size-4 me-2 inline-block text-success"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M5 13l4 4L19 7"
										/>
									</svg>
									<span>{detail}</span>
								</li>
							))}
						</ul>
					</div>
				</div>

				<div className="mt-6">
					<Link
						href={'/subscription'}
						className="btn btn-primary btn-block">
						Subscribe
					</Link>
				</div>
			</div>
		</div>
	);
}
