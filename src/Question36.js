import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TimerContext } from "./TimerContext";
import treeHeightImage from "./images/Question36.jpg";  // ✅ Import the correct image

const Question36 = () => {
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

    const question = "36. What is the height of this tree?";
    const options = [
        { label: "A", text: "Four" },
        { label: "B", text: "One" },
        { label: "C", text: "Three" },
        { label: "D", text: "Two" }  // ✅ Correct answer (based on WGU test)
    ];

    const correctAnswer = "D";  // ✅ Adjusted answer to "Two"
    const [feedback, setFeedback] = useState("");

    const checkAnswer = (selected) => {
        if (selected === correctAnswer) {
            setFeedback("✅ Correct! The **height** of this tree is **two** because there are **two edges** from the root to the deepest leaf.");
        } else {
            setFeedback("❌ Incorrect. The correct answer is **D. Two**. The height of a tree is measured by counting the longest path from the root to a leaf node.");
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

            {/* ✅ Display the Correct Image */}
            <div className="image-container">
                <img src={treeHeightImage} alt="Tree Diagram for Question 36" className="question-image" />
            </div>

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
                <Link to="/question35" className="nav-button">← Back to Question 35</Link>
                <Link to="/question37" className="nav-button">Next Question →</Link>
                <button onClick={handleReset} className="reset-button">❌ Quit & Restart</button>
            </div>
        </div>
    );
};

export default Question36;
