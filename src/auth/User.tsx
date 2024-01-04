import {LogoutButton} from "@/src/auth/LogoutButton";
import {getAuthSession} from "@/src/lib/auth";

export const User = async () => {
    const session = await getAuthSession()

    if(!session?.user){
        return(<p>No user</p>)
    }

    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <div className="card-body">
                <div className="avatar">
                    <div className="w-24 rounded">
                        <img src={session.user.image ?? ""}/>
                    </div>
                </div>
                <h2 className="card-title">{session.user.name}</h2>
                <p>{session.user.email}</p>
                <p>{session.user.id}</p>
                <div className="card-actions justify-end">
                    <LogoutButton/>
                </div>
            </div>
        </div>
    )
}