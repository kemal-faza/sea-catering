import Image from 'next/image';

interface Props {
	src: string;
	alt: string;
	children: React.ReactNode;
}

const Card = ({ src, alt, children }: Props) => {
	return (
		<div className="card bg-base-100 w-full shadow-sm">
			<figure className="px-10 pt-10">
				<Image
					width={500}
					height={500}
					src={src}
					alt={alt}
					className="rounded-xl"
				/>
			</figure>
			<div className="card-body items-center text-center">{children}</div>
		</div>
	);
};

export default Card;
