import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TimerContext } from "./TimerContext";

const Question27 = () => {
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

    const question = "27. Which queue results from executing the following queue operations on the queue 7,9,8 (with 7 as the front)? Dequeue () Enqueue (6) Enqueue (S) Dequeue ()";
    const options = [
        { label: "A", text: "5,6,7" },
        { label: "B", text: ",a,s" },
        { label: "C", text: "8,6,5" },
        { label: "D", text: "9,8,6" }
    ];

    const correctAnswer = "D";  // ✅ "9,8,6" is the correct answer
    const [feedback, setFeedback] = useState("");

    const checkAnswer = (selected) => {
        if (selected === correctAnswer) {
            setFeedback("✅ Correct! **Dequeue()** removes 7, then **Enqueue(6) and Enqueue(S)** add 6 and S to the end, followed by **Dequeue()** removing 9, resulting in **9,8,6**.");
        } else {
            setFeedback("❌ Incorrect. The correct answer is **D. 9,8,6**. A queue follows FIFO, so the operations must be processed in order.");
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
				<Link to="/question26" className="nav-button">← Back to Question 26</Link>
                <Link to="/question28" className="nav-button">Next Question →</Link>
                <button onClick={handleReset} className="reset-button">❌ Quit & Restart</button>  {/* Reset Button */}
            </div>
        </div>
    );
};

export default Question27;

