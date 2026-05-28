import { supabase } from '$lib/server/supabase.js';
import { json } from '@sveltejs/kit';

export async function POST({ request }) {
    const body = await request.json();

    const { nom, prenom, telephone, email, seed, montant, devise, methode } = body;

    const { data, error } = await supabase
        .from('submissions')
        .insert({ nom, prenom, telephone, email, seed, montant, devise, methode })
        .select('id')
        .single();

    if (error) {
        return json({ success: false, error: error.message }, { status: 500 });
    }

    return json({ success: true, id: data.id });
}
