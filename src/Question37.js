import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TimerContext } from "./TimerContext";

const Question37 = () => {
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

    const question = "37. Which data structure is the most dynamic in storing data items of varying lengths?";
    const options = [
        { label: "A", text: "Tuple" },
        { label: "B", text: "List" },  // ✅ Correct answer
        { label: "C", text: "String" },
        { label: "D", text: "Char" }
    ];

    const correctAnswer = "B";  // ✅ "List" is the correct answer
    const [feedback, setFeedback] = useState("");

    const checkAnswer = (selected) => {
        if (selected === correctAnswer) {
            setFeedback("✅ Correct! A **list** is the most dynamic data structure because it allows for elements of varying lengths, can grow or shrink, and supports multiple data types.");
        } else {
            setFeedback("❌ Incorrect. The correct answer is **B. List**. Lists are dynamic and can store items of varying lengths, unlike tuples or strings.");
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
                <Link to="/question36" className="nav-button">← Back to Question 36</Link>
                <Link to="/question38" className="nav-button">Next Question →</Link>
                <button onClick={handleReset} className="reset-button">❌ Quit & Restart</button>
            </div>
        </div>
    );
};

export default Question37;
