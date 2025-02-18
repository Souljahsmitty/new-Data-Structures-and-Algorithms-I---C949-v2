import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TimerContext } from "./TimerContext";

const Question38 = () => {
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

    const question = "38. What is the resulting stack when the push(1) function is implemented on this stack yield? 8,9,3,5 (top is 8)";
    const options = [
        { label: "A", text: "8,9,3,5,1" },
        { label: "B", text: "8,9,3,5" },
        { label: "C", text: "1,8,9,3,5" },  // ✅ Correct answer
        { label: "D", text: "8,9,3,1" }
    ];

    const correctAnswer = "C";  // ✅ "1,8,9,3,5" is the correct answer
    const [feedback, setFeedback] = useState("");

    const checkAnswer = (selected) => {
        if (selected === correctAnswer) {
            setFeedback("✅ Correct! In a **stack**, the `push(1)` function adds **1 to the top**. This makes the new stack **1,8,9,3,5**.");
        } else {
            setFeedback("❌ Incorrect. The correct answer is **C. 1,8,9,3,5**. In a **stack**, the last item pushed becomes the new top.The new element 1 is added on top of the stack (LIFO).");
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
                <Link to="/question37" className="nav-button">← Back to Question 37</Link>
                <Link to="/question39" className="nav-button">Next Question →</Link>
                <button onClick={handleReset} className="reset-button">❌ Quit & Restart</button>
            </div>
        </div>
    );
};

export default Question38;
