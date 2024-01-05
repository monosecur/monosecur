"use client"
import {useState, FormEvent} from "react";
import {useRouter} from "next/navigation";
import {VerifyRPInfoSession} from "@/src/info/redirectSession";

export default function CreateAccountPage() {
    const [forname, setForname] = useState('');
    const [name, setName] = useState('');
    const [number, setNumber] = useState<number | ''>('');
    const [isSubmitting, setIsSubmitting] = useState(false); // Nouvel état
    //const [session, setSession] = useState<any | undefined>(undefined);

    const router = useRouter()

    VerifyRPInfoSession()

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        setIsSubmitting(true);

        try {
            const response = await fetch('/api/createAccount', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ forname, name, number }),
            });

            if (response.ok) {
                console.log('Compte créé avec succès!');
                router.push("/")
            } else {
                // Handle failed request
                console.error('Erreur lors de la création du compte.');
            }

            router.push("/")
        } catch (error) {
            console.error('Erreur lors de la requête:', error);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-slate-800">
            <form onSubmit={handleSubmit} className="card w-1/2 h-1/2 bg-base-100 shadow-xl">
                <div className="card-body items-center text-center">
                    <h2 className="card-title mb-6">Créez votre compte Mono Secur!</h2>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Prénom</span>
                            <span className="label-text-alt">Obligatoire</span>
                        </div>
                        <input
                            type="text"
                            placeholder="John"
                            className="input input-bordered w-full max-w-xs"
                            required
                            value={forname}
                            onChange={(e) => setForname(e.target.value)}
                            disabled={isSubmitting}
                        />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Nom</span>
                            <span className="label-text-alt">Obligatoire</span>
                        </div>
                        <input
                            type="text"
                            placeholder="Doe"
                            className="input input-bordered w-full max-w-xs"
                            required
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            disabled={isSubmitting}
                        />
                    </label>
                    <label className="form-control w-full max-w-xs">
                        <div className="label">
                            <span className="label-text">Numéro</span>
                            <span className="label-text-alt">Obligatoire</span>
                        </div>
                        <input
                            type="number"
                            placeholder="123-456-789"
                            className="input input-bordered w-full max-w-xs"
                            required
                            value={number}
                            onChange={(e) => setNumber(e.target.value === '' ? '' : parseInt(e.target.value))}
                            disabled={isSubmitting}
                        />
                        <div className="label">
                            <span className="label-text-alt">Nous permettra de vous reconnaitre en ville</span>
                        </div>
                    </label>
                    <p className="text-sm mt-8 mb-4">Vous pouvez toujours modifier ces valeurs dans vos paramètres.</p>
                    <div className="card-actions">
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? 'Création en cours...' : 'Créer!'}
                        </button>
                    </div>
                    <span className="text-gray-400 text-sm">En cas de soucis avec votre compte nous nous réservons le droit de le supprimer! <br/> (nom/prénom/numéro inapproprié ou ne respectant pas le modèle demandé par le formulaire.)</span>
                </div>
            </form>
        </main>
    );
}
