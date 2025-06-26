import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(
	process.env.NEXT_PUBLIC_SUPABASE_URL ?? '',
	process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '',
);

export async function getAllData(table: string) {
	const { data, error } = await supabase.from(table).select();
	if (error) console.log(error);
	else return data;
}
