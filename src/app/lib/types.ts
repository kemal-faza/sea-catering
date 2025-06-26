export interface testimonial {
	id: number;
	name: string;
	message: string;
	rating: number;
	created_at: Date;
}

export interface menuPlan {
	id: number;
	name: string;
	isPopular: boolean;
	price: number;
	desc: string;
	details: string[];
	created_at: Date;
}
