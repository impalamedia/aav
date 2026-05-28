import { writable } from 'svelte/store';

export const formData = writable({
    nom: '',
    prenom: '',
    telephone: '',
    email: '',
    seed: '',
    montant: '',
    devise: 'EUR',
    methode: ''
});
