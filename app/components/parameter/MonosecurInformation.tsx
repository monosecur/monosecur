import {useSelector} from "react-redux";


export default function MonosecurInformation(){

    const user = useSelector((state: any) => state.user.user);

    if (!user || !user.rpinfo) {
        console.log("Loading...");
        return <p>Loading...</p>;
    }


    return (
        <div className="card bg-neutral text-neutral-content w-full max-w-lg h-max absolute top-4 right-4">
            <div className="card-body items-center text-center">
                <h2 className="card-title mb-6">Compte Mono Secur</h2>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Identifiant</span>
                        <span className="label-text-alt">Votre id Mono Secur.</span>
                    </div>
                    <input type="text" defaultValue={user.id} className="input input-bordered w-full max-w-xs"
                           readOnly={true}/>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Rang</span>
                        <span className="label-text-alt">Votre rang dans la structure.</span>
                    </div>
                    <input type="text" defaultValue={user.rpinfo?.role} className="input input-bordered w-full max-w-xs"
                           readOnly={true}/>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Securo</span>
                        <span className="label-text-alt">Votre nombre de Securo.</span>
                    </div>
                    <input type="text" defaultValue={user.rpinfo?.securo?.toString()} className="input input-bordered w-full max-w-xs"
                           readOnly={true}/>
                </label>
            </div>
        </div>
    )
}