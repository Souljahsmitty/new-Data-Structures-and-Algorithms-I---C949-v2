import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TimerContext } from "./TimerContext";

const Question46 = () => {
    const navigate = useNavigate();
    const timerContext = useContext(TimerContext);

    if (!timerContext) {
        return <p>Loading...</p>; // Prevents crash if context is undefined
    }

    const { timeLeft, resetTimer } = timerContext;

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const question = "46. How many elements in a list of size 64 would be visited when using a binary search for a number that is larger than all the values in the list?";
    const options = [
        { label: "A", text: "3" },
        { label: "B", text: "6" },  // ✅ Correct answer
        { label: "C", text: "64" },
        { label: "D", text: "32" }
    ];

    const correctAnswer = "B";  // ✅ "List" is the correct answer
    const [feedback, setFeedback] = useState("");

    const checkAnswer = (selected) => {
        if (selected === correctAnswer) {
            setFeedback("✅ Correct! B Binary search keeps cutting the list in half. Since we start with 64 numbers, we check 6 numbers before realizing the number is missing!");
        } else {
            setFeedback("❌ Incorrect. The correct answer is **B. Binary search keeps cutting the list in half. Since we start with 64 numbers, we check 6 numbers before realizing the number is missing!");
        }
    };

    // ✅ Handle Reset Button Click
    const handleReset = () => {
        resetTimer();
        navigate("/");
    };

    return (
        <div>
            <h2>Data Structures and Algorithms I - C949 Quiz</h2>
            <div className="timer-container">
                <p className="timer">⏳ Time Remaining: {formatTime(timeLeft)}</p>
            </div>

            <h4>{question}</h4>

            <div className="options-container">
                {options.map((option) => (
                    <div key={option.label} className="option">
                        <span className="option-text">{option.label}. {option.text}</span>
                    </div>
                ))}
            </div>
            <div className="button-container">
                {options.map((option) => (
                    <button 
                        key={option.label} 
                        className="quiz-button" 
                        onClick={() => checkAnswer(option.label)}
                    >
                        {option.label}
                    </button>
                ))}
            </div>

            <p className="feedback">{feedback}</p>

            <div className="nav-buttons">
                <Link to="/question45" className="nav-button">← Back to Question 45</Link>
                <Link to="/question47" className="nav-button">Next Question →</Link>
                <button onClick={handleReset} className="reset-button">❌ Quit & Restart</button>
            </div>
        </div>
    );
};

export default Question46;
