import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TimerContext } from "./TimerContext";

const Question13 = () => {
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

    const question = "13. What does a time complexity analysis of an algorithm include?";
    const options = [
        { label: "A", text: "Memory usage" },
        { label: "B", text: "Efficiency analysis" },
        { label: "C", text: "Screen load times" },
        { label: "D", text: "Worst case" }
    ];
    const correctAnswer = "D";
    const [feedback, setFeedback] = useState("");

    const checkAnswer = (selected) => {
    if (selected === correctAnswer) {
        setFeedback("✅ Correct! Time complexity analysis includes worst-case complexity, which determines the maximum time an algorithm takes in the most demanding scenario.");
    } else {
        setFeedback("❌ Incorrect. The correct answer is D. Time complexity analysis evaluates worst-case performance to ensure an algorithm runs efficiently even in the most challenging conditions.");
    }  // 🔹 Correct closing brace here ✅
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
				<Link to="/question12" className="nav-button">← Back to Question 12</Link>
                <Link to="/question14" className="nav-button">Next Question →</Link>
                <button onClick={handleReset} className="reset-button">❌ Quit & Restart</button>  {/* Reset Button */}
            </div>
        </div>
    );
};

export default Question13;

