import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TimerContext } from "./TimerContext";
import treeDiagram from "./images/Question35.jpg";  // ✅ Import the image

const Question35 = () => {
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

    const question = "35. What is the root node for this tree?";
    const options = [
        { label: "A", text: "Anne" },  // ✅ Correct answer
        { label: "B", text: "Zara" },
        { label: "C", text: "Savannah" },
        { label: "D", text: "Peter" }
    ];

    const correctAnswer = "A";  // ✅ "Anne" is the correct answer
    const [feedback, setFeedback] = useState("");

    const checkAnswer = (selected) => {
        if (selected === correctAnswer) {
            setFeedback("✅ Correct! The root node is **Anne**, as it is at the top of the tree and all other nodes descend from it.");
        } else {
            setFeedback("❌ Incorrect. The correct answer is **A. Anne**. The root node is the first node in a tree from which all other nodes branch out.");
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

            {/* ✅ Display the Image */}
            <div className="image-container">
                <img src={treeDiagram} alt="Tree Diagram for Question 35" className="question-image" />
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
                <Link to="/question34" className="nav-button">← Back to Question 34</Link>
                <Link to="/question36" className="nav-button">Next Question →</Link>
                <button onClick={handleReset} className="reset-button">❌ Quit & Restart</button>
            </div>
        </div>
    );
};

export default Question35;
