"use client"
import React, { useState, useEffect } from 'react';

const OperatorPage = () => {
    const [operator, setOperator] = useState<number>(2);
    const [time, setTime] = useState<string>('00:10');
    const [result, setResult] = useState<number>(0);
    const [isIncreaseTimeInProgress, setIsIncreaseTimeInProgress] = useState(false);

    const calculateResult = () => {
        const [hour, minute] = time.split(':').map(Number);
        const timeInMinutes = hour * 60 + minute;
        const OldRange = 2 - 0.1;
        const NewRange = 1 - 0.1;
        const percent = (((timeInMinutes - 0.1) * NewRange) / OldRange) + 0.1;

        const calculatedResult = (10 * operator) * (timeInMinutes / 60);
        setResult(parseFloat(calculatedResult.toFixed(0)));
    };

    const decreaseOperateurValue = () => {
        setOperator((prevOperator) => Math.max(prevOperator - 1, 1));
    };

    const increaseOperateurValue = () => {
        setOperator((prevOperator) => prevOperator + 1);
    };

    const decreaseTimeValue = () => {
        setTime((prevTime) => {
            const [hour, minute] = prevTime.split(':').map(Number);
            const newMinute = minute - 10;
            if (newMinute < 0) {
                const newHour = Math.max(hour - 1, 0);
                return `${newHour.toString().padStart(2, '0')}:50`;
            }
            return `${hour.toString().padStart(2, '0')}:${newMinute.toString().padStart(2, '0')}`;
        });
    };

    const increaseTimeValue = () => {
        if (!isIncreaseTimeInProgress) {
            setIsIncreaseTimeInProgress(true);

            setTime((prevTime) => {
                const [hour, minute] = prevTime.split(':').map(Number);
                const newMinute = minute + 10;
                if (newMinute >= 60) {
                    const newHour = hour + 1;
                    return `${newHour.toString().padStart(2, '0')}:00`;
                }
                return `${hour.toString().padStart(2, '0')}:${newMinute.toString().padStart(2, '0')}`;
            });

            setIsIncreaseTimeInProgress(false);
        }
    };

    useEffect(() => {
        calculateResult();
        const intervalId = setInterval(() => {
            calculateResult();
        }, 1000);
        return () => clearInterval(intervalId);
    }, [operator, time]);

    return (
        <div className="flex min-h-screen items-center justify-center bg-[#030615]">
            <div className="card w-1/2 h-1/2 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title text-2xl font-bold mb-4">Une équipe rien que pour vous!</h2>
                    <div className="">
                        <span className="label-text">Nombre {`d'Opérateur`}</span>
                        <div className="form-value flex items-center space-x-2 mb-4">
                            <button
                                className="btn"
                                onClick={decreaseOperateurValue}
                                disabled={operator === 2}
                            >
                                -
                            </button>
                            <input type="number" value={operator} disabled
                                   className="input input-bordered input-primary w-full max-w-xs"/>
                            <button
                                className="btn"
                                onClick={increaseOperateurValue}
                                disabled={operator === 4}
                            >
                                +
                            </button>
                        </div>
                        <span className="label-text">Temps de garde</span>
                        <div className="form-value flex items-center space-x-2 mb-4">
                            <button
                                className="btn"
                                onClick={decreaseTimeValue}
                                disabled={time === '00:10'}
                            >
                                -
                            </button>
                            <input
                                className="input input-bordered input-primary w-full max-w-xs"
                                type="text"
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                disabled
                            />
                            <button
                                className="btn"
                                onClick={increaseTimeValue}
                                disabled={time === '02:00'}
                            >
                                +
                            </button>
                        </div>
                        <span className="label-text">Temps de garde</span>
                        <div className="form-value flex items-center space-x-2 mb-4">
                            <input
                                type="number"
                                value={result}
                                disabled
                                className="input input-bordered input-primary w-full max-w-xs"
                            />
                        </div>

                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary text-gray-200">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default OperatorPage;
