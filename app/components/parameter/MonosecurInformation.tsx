import {useSession} from "next-auth/react";


export default function MonosecurInformation(){

    const session = useSession()


    return (
        <div className="card bg-neutral text-neutral-content w-full max-w-lg h-max absolute top-4 right-4">
            <div className="card-body items-center text-center">
                <h2 className="card-title mb-6">Compte Mono Secur</h2>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">UserId</span>
                        <span className="label-text-alt">Votre Id Mono Secur.</span>
                    </div>
                    <input type="text" defaultValue={session.data?.user.id} className="input input-bordered w-full max-w-xs"
                           readOnly={true}/>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Role</span>
                        <span className="label-text-alt">Votre role sur le site.</span>
                    </div>
                    <input type="text" defaultValue={session?.data?.user.rpinfo[0].role} className="input input-bordered w-full max-w-xs"
                           readOnly={true}/>
                </label>
                <label className="form-control w-full max-w-xs">
                    <div className="label">
                        <span className="label-text">Securo</span>
                        <span className="label-text-alt">Votre nombre de Securo.</span>
                    </div>
                    <input type="text" defaultValue={session?.data?.user.rpinfo[0].securo.toString()} className="input input-bordered w-full max-w-xs"
                           readOnly={true}/>
                </label>
            </div>
        </div>
    )
}