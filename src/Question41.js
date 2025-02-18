import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TimerContext } from "./TimerContext";
import treeHeightImage from "./images/Question41.jpg"; 

const Question41 = () => {
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

    const question = "41. How many vertices does this graph have?";
    const options = [
        { label: "A", text: "Four" },  // ✅ Correct answer
        { label: "B", text: "Three)" },
        { label: "C", text: "Five" },
        { label: "D", text: "Two" }
    ];

    const correctAnswer = "C";  // ✅ "(82)" is the correct answer

    const [feedback, setFeedback] = useState("");

    const checkAnswer = (selected) => {
        if (selected === correctAnswer) {
            setFeedback("✅ Correct! The graph has 5 vertices labeled 0, 1, 2, 3, and 4.");
        } else {
            setFeedback("❌ Incorrect. The correct answer is C. The graph has 5 vertices (0, 1, 2, 3, 4).");
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
                <Link to="/question40" className="nav-button">← Back to Question 40</Link>
                <Link to="/question42" className="nav-button">Next Question →</Link>
                <button onClick={handleReset} className="reset-button">❌ Quit & Restart</button>
            </div>
        </div>
    );
};

export default Question41;
