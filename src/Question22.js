import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TimerContext } from "./TimerContext";

const Question22 = () => {
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

    const question = "22. Which data structure is used to implement a dictionary data type?";
    const options = [
        { label: "A", text: "Heap" },
        { label: "B", text: "Hash table" },
        { label: "C", text: "List" },
        { label: "D", text: "Queue" }
    ];

    const correctAnswer = "B";  // ✅ "Hash table" is the correct answer
    const [feedback, setFeedback] = useState("");

    const checkAnswer = (selected) => {
        if (selected === correctAnswer) {
            setFeedback("✅ Correct! A **hash table** is the primary data structure used to implement a dictionary, allowing for fast key-value lookups.");
        } else {
            setFeedback("❌ Incorrect. The correct answer is **B. Hash table**. Dictionaries rely on **hash tables** for efficient key-value storage and quick lookups.");
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
				<Link to="/question21" className="nav-button">← Back to Question 21</Link>
                <Link to="/question23" className="nav-button">Next Question →</Link>
                <button onClick={handleReset} className="reset-button">❌ Quit & Restart</button>  {/* Reset Button */}
            </div>
        </div>
    );
};

export default Question22;

