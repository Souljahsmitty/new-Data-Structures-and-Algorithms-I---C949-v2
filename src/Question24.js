import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TimerContext } from "./TimerContext";

const Question24 = () => {
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

    const question = "24. Which characteristic of a class allows it to be used as an abstract data type (ADT)?";
    const options = [
        { label: "A", text: "Overloading" },
        { label: "B", text: "Instantiation" },
        { label: "C", text: "It consists of variables and methods." },
        { label: "D", text: "Overriding" }
    ];

    const correctAnswer = "C";  // ✅ "It consists of variables and methods." is the correct answer
    const [feedback, setFeedback] = useState("");

    const checkAnswer = (selected) => {
        if (selected === correctAnswer) {
            setFeedback("✅ Correct! A class is considered an ADT because it consists of **variables and methods** that define behavior and encapsulation.");
        } else {
            setFeedback("❌ Incorrect. The correct answer is **C. It consists of variables and methods.** Classes serve as ADTs by encapsulating state and behavior.");
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
				<Link to="/question23" className="nav-button">← Back to Question 23</Link>
                <Link to="/question25" className="nav-button">Next Question →</Link>
                <button onClick={handleReset} className="reset-button">❌ Quit & Restart</button>  {/* Reset Button */}
            </div>
        </div>
    );
};

export default Question24;

