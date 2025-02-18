import React, { createContext, useState, useEffect } from "react";

export const TimerContext = createContext(null);  // Ensure default value is set

const TimerProvider = ({ children }) => {
    const initialTime = 90 * 60; // 1 hour 30 minutes in seconds
    const storedTime = sessionStorage.getItem("remainingTime");
    const [timeLeft, setTimeLeft] = useState(storedTime ? parseInt(storedTime) : initialTime);

    useEffect(() => {
        if (timeLeft <= 0) return; // Stop when timer reaches 0

        const timer = setInterval(() => {
            setTimeLeft((prevTime) => {
                if (prevTime <= 1) {
                    clearInterval(timer);
                    sessionStorage.setItem("remainingTime", "0");
                    return 0; 
                }
                const newTime = prevTime - 1;
                sessionStorage.setItem("remainingTime", newTime);
                return newTime;
            });
        }, 1000);

        return () => clearInterval(timer);
    }, [timeLeft]);

    // ✅ Function to Reset Timer
    const resetTimer = () => {
        setTimeLeft(initialTime);
        sessionStorage.setItem("remainingTime", initialTime);
    };

    return (
        <TimerContext.Provider value={{ timeLeft, resetTimer }}>
            {children}
        </TimerContext.Provider>
    );
};

export default TimerProvider;
