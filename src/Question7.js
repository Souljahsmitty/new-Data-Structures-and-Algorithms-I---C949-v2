import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TimerContext } from "./TimerContext";

const Question7 = () => {
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

    const question = "7. What is a high-level consideration in an algorithm's design?";
    const options = [
        { label: "A", text: "Simplicity" },
        { label: "B", text: "Database Type" },
        { label: "C", text: "Finiteness" },
        { label: "D", text: "Browser type" }
    ];
    const correctAnswer = "A";
    const [feedback, setFeedback] = useState("");

    const checkAnswer = (selected) => {
    if (selected === correctAnswer) {
        setFeedback("✅ Correct! Simplicity is a high-level consideration in algorithm design, ensuring that the algorithm is easy to understand, implement, and maintain.");
    } else {
        setFeedback("❌ Incorrect. The correct answer is A. Simplicity helps in making an algorithm efficient, readable, and less prone to errors.");
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
				<Link to="/question6" className="nav-button">← Back to Question 6</Link>
                <Link to="/question8" className="nav-button">Next Question →</Link>
                <button onClick={handleReset} className="reset-button">❌ Quit & Restart</button>  {/* Reset Button */}
            </div>
        </div>
    );
};

export default Question7;
