export function toRupiah(number: number) {
	return new Intl.NumberFormat('id-ID', {
		style: 'currency',
		currency: 'IDR',
	}).format(number);
}
