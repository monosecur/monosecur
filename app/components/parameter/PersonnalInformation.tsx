import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

interface PersonalInformationProps {}

export default function PersonalInformation({}: PersonalInformationProps) {
    const session = useSession();

    const [firstName, setFirstName] = useState<string | undefined>(
        session.data?.user?.forname || session.data?.user.forname
    );
    const [lastName, setLastName] = useState<string | undefined>(
        session.data?.user?.rpname || session.data?.user.rpname
    );
    const [phoneNumber, setPhoneNumber] = useState<number | undefined>(
        Number(session.data?.user.number) || session.data?.user.number
    );

    const [isFirstNameModified, setIsFirstNameModified] = useState(false);
    const [isLastNameModified, setIsLastNameModified] = useState(false);
    const [isPhoneNumberModified, setIsPhoneNumberModified] = useState(false);

    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsFirstNameModified(firstName !== session.data?.user?.forname);
    }, [firstName, session.data?.user?.forname]);

    useEffect(() => {
        setIsLastNameModified(lastName !== session.data?.user?.rpname);
    }, [lastName, session.data?.user?.rpname]);

    useEffect(() => {
        setIsPhoneNumberModified(phoneNumber !== session.data?.user.number);
    }, [phoneNumber, session.data?.user.number]);

    const handleUpdateField = async (field: "forname" | "name" | "number") => {
        try {
            setIsLoading(true);

            const response = await fetch("/api/updateUserInfo", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    field,
                    value: field === "number" ? Number(phoneNumber) : field === "forname" ? firstName : lastName,
                }),
            });

            if (!response.ok) {
                //throw new Error(`Failed to update ${field}`);
                return(<p>Impossible de changer {field}</p>)
            }

            switch (field) {
                case "forname":
                    setIsFirstNameModified(false);
                    break;
                case "name":
                    setIsLastNameModified(false);
                    break;
                case "number":
                    setIsPhoneNumberModified(false);
                    break;
                default:
                    break;
            }
        } catch (error) {
            console.error(`Error updating ${field}:`, error);
            return(<p>Impossible de changer {field}</p>)
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="card bg-neutral text-neutral-content w-full max-w-lg h-max absolute top-4 right-4">
            <div className="card-body items-center text-center">
                <h2 className="card-title mb-6">Informations Personnel</h2>
                <label className="form-control w-full max-w-xs flex flex-row space-x-2 mb-4">
                    <div className="label">
                        <span className="label-text">Prénom</span>
                    </div>
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => {
                            setFirstName(e.target.value);
                            setIsFirstNameModified(true);
                        }}
                        className="input input-bordered w-max max-w-xs"
                    />
                    <button
                        onClick={() => handleUpdateField("forname")}
                        className="btn"
                        disabled={!isFirstNameModified || isLoading}
                    >
                        Modifier
                    </button>
                </label>
                <label className="form-control w-full max-w-xs flex flex-row space-x-2 mb-4">
                    <div className="label">
                        <span className="label-text">Nom</span>
                    </div>
                    <input
                        type="text"
                        value={lastName}
                        onChange={(e) => {
                            setLastName(e.target.value);
                            setIsLastNameModified(true);
                        }}
                        className="input input-bordered w-max max-w-xs"
                    />
                    <button
                        onClick={() => handleUpdateField("name")}
                        className="btn"
                        disabled={!isLastNameModified || isLoading}
                    >
                        Modifier
                    </button>
                </label>
                <label className="form-control w-full max-w-xs flex flex-row space-x-2 mb-4">
                    <div className="label">
                        <span className="label-text">Numéro</span>
                    </div>
                    <input
                        type="number"
                        value={phoneNumber}
                        onChange={(e) => {
                            setPhoneNumber(Number(e.target.value));
                            setIsPhoneNumberModified(true);
                        }}
                        className="input input-bordered w-max max-w-xs"
                    />
                    <button
                        onClick={() => handleUpdateField("number")}
                        className="btn"
                        disabled={!isPhoneNumberModified || isLoading}
                    >
                        Modifier
                    </button>
                </label>
            </div>
        </div>
    );
}
