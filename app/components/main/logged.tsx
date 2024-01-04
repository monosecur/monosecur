import { getAuthSession } from "@/src/lib/auth";

export default async function Logged() {
    const session = await getAuthSession();

    if (session) {
        return (
            <div className="h-screen w-screen bg-slate-800 flex items-center justify-start">
                <div className="card w-96 bg-base-100 shadow-xl ml-4">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src={session.user.image ?? ""} />
                            </div>
                        </div>
                        <h2 className="card-title flex flex-col">
                            <p className="text-lg">Connecter avec succès depuis Discord en tant que</p> {session.user.name}
                        </h2>
                        {/*<p>{session.user.email}</p>
                        <p>{session.user.id}</p>*/}
                        <div className="card-actions justify-end"></div>
                    </div>
                </div>
            </div>
        );
    }
}