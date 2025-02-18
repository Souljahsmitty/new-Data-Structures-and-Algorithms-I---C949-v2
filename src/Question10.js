import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TimerContext } from "./TimerContext";

const Question10 = () => {
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

    const question = "10. Which review of an algorithm happens after implementation?";
    const options = [
        { label: "A", text: "A priori analysis" },
        { label: "B", text: "Iterative testing" },
        { label: "C", text: "A posteriori analysis" },
        { label: "D", text: "Runtime debugging" }
    ];
    const correctAnswer = "C";
    const [feedback, setFeedback] = useState("");

    const checkAnswer = (selected) => {
    if (selected === correctAnswer) {
         setFeedback("✅ Correct! A posteriori analysis is conducted after an algorithm has been implemented, using empirical testing to evaluate its real-world performance.");
    } else {
        setFeedback("❌ Incorrect. The correct answer is C. A posteriori analysis is performed post-implementation to assess efficiency using real-world data.");
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
				<Link to="/question9" className="nav-button">← Back to Question 9</Link>
                <Link to="/question11" className="nav-button">Next Question →</Link>
                <button onClick={handleReset} className="reset-button">❌ Quit & Restart</button>  {/* Reset Button */}
            </div>
        </div>
    );
};

export default Question10;
