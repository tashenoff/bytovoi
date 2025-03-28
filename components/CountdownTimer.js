// components/CountdownTimer.js

import React, { useEffect, useState } from 'react';

const CountdownTimer = ({ targetDate }) => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            const now = new Date();
            const timeRemaining = targetDate - now;

            if (timeRemaining < 0) {
                clearInterval(intervalId);
                return;
            }

            const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
            const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

            setCountdown({ days, hours, minutes, seconds });
        }, 1000);

        return () => clearInterval(intervalId);
    }, [targetDate]);

    return (
        <div className='flex items-center justify-center'>
            <div className="grid grid-flow-col gap-5 text-center auto-cols-max my-10">
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": countdown.days }}></span>
                    </span>
                    days
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": countdown.hours }}></span>
                    </span>
                    hours
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": countdown.minutes }}></span>
                    </span>
                    min
                </div>
                <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
                    <span className="countdown font-mono text-5xl">
                        <span style={{ "--value": countdown.seconds }}></span>
                    </span>
                    sec
                </div>
            </div>
        </div>
    );
};

export default CountdownTimer;
