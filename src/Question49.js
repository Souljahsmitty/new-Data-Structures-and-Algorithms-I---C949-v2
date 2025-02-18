import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TimerContext } from "./TimerContext";

const Question49 = () => {
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

    const question = "49. What is the runtime complexity for the expression 305 + 0(325”N)?";
    const options = [
        { label: "A", text: "O(N^2) " },
        { label: "B", text: "N^325" },  // ✅ Correct answer
        { label: "C", text: "O(N^N)" },
        { label: "D", text: "O(N)" }
    ];

    const correctAnswer = "D";  // ✅ "List" is the correct answer
    const [feedback, setFeedback] = useState("");

    const checkAnswer = (selected) => {
        if (selected === correctAnswer) {
            setFeedback("✅ Correct! The term O(325N) simplifies to O(N) because:The constant 325 is ignored (constants don’t affect growth rate in Big-O).");
        } else {
            setFeedback("❌ Incorrect. The correct answer is **D.The term O(325N) simplifies to O(N) because:The constant 325 is ignored (constants don’t affect growth rate in Big-O). ");
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
                <Link to="/question48" className="nav-button">← Back to Question 48</Link>
                <Link to="/question50" className="nav-button">Next Question →</Link>
                <button onClick={handleReset} className="reset-button">❌ Quit & Restart</button>
            </div>
        </div>
    );
};

export default Question49;
