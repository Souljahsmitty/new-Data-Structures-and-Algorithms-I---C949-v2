import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TimerContext } from "./TimerContext";

const Question1 = () => {
    const navigate = useNavigate();
    const timerContext = useContext(TimerContext);
    
    if (!timerContext) {
        return <p>Loading...</p>; // Avoids crash if context is undefined
    }

    const { timeLeft, resetTimer } = timerContext;

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
    };

    const question = "1. Which term refers to a template for creating an object?";
    const options = [
        { label: "A", text: "Application" },
        { label: "B", text: "Class" },
        { label: "C", text: "Algorithm" },
        { label: "D", text: "Method" }
    ];
    const correctAnswer = "B";
    const [feedback, setFeedback] = useState("");

    const checkAnswer = (selected) => {
        if (selected === correctAnswer) {
            setFeedback("✅ Correct! A class in programming serves as a blueprint for creating objects.");
        } else {
            setFeedback("❌ Incorrect. The correct answer is B. A class in programming serves as a blueprint for creating objects.");
        }
    };

    // ✅ Handle Reset Button Click
    const handleReset = () => {
        resetTimer(); // Reset Timer
        navigate("/"); // Navigate to Introduction Page
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
                <Link to="/question2" className="nav-button">Next Question →</Link>
                <button onClick={handleReset} className="reset-button">❌ Quit & Restart</button>  {/* Reset Button */}
            </div>
        </div>
    );
};

export default Question1;
