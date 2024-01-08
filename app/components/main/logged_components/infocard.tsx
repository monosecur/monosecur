import { useState, useEffect } from 'react';
import { infoMemberSession, infoSecuroSession } from '@/src/info/InfoSession';

export default function InformationCard() {
    const [userCount, setUserCount] = useState(-1);
    const [totalSecuro, setTotalSecuro] = useState(-1);

    const fetchData = async () => {
        try {
            const count = await infoMemberSession();
            const securo = await infoSecuroSession();

            setUserCount(count);
            setTotalSecuro(securo);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <div className="card w-96 bg-base-100 shadow-xl m-4">
            <div className="card-body">
                <h2 className="card-title mb-6">Informations</h2>
                <p className="mb-2">Il y a actuellement {userCount} membres connectés.</p>
                <p className="mb-2">Il y a actuellement null fonctionnaires connectés.</p>
                <p className="mb-2">Il y a actuellement {totalSecuro} Securos stockés.</p>
            </div>
        </div>
    );
}