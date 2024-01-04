import {getAuthSession} from "@/src/lib/auth";
import {infoSession} from "@/src/info/InfoSession";



export default async function Logged() {
    const session = await getAuthSession();
    const userCount = await infoSession();

    if (session) {
        return (
            <div className="h-screen w-screen bg-slate-800 flex items-center">
                <div className="card w-96 bg-base-100 shadow-xl ml-4">
                    <div className="card-body">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src={session.user.image ?? ""} alt="User Avatar" />
                            </div>
                        </div>
                        <h2 className="card-title flex flex-col">
                            <p className="text-lg">
                                Connecter avec succès depuis Discord en tant que
                            </p>{" "}
                            {session.user.name}
                        </h2>
                        <div className="card-actions justify-end"></div>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl ml-auto mr-4">
                    <div className="card-body">
                        <h2 className="card-title mb-6">Informations</h2>
                        <p className="mb-2">Il y a actuellement {userCount} membres connectés.</p>
                        <p className="mb-2">Il y a actuellement 0 fonctionnaires connectés.</p>
                        <p className="mb-2">Il y a actuellement 0 Securos stockés.</p>
                    </div>
                </div>
            </div>
        );
    }
}
