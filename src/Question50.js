import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { TimerContext } from "./TimerContext";

const Question50 = () => {
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

    const question = "50. What is the runtime complexity for this code? for x in range(N):for y in range(N): for z in range(N): tot = tot + z print tot";
    const options = [
        { label: "A", text: "O(3)" },
        { label: "B", text: "O(N^2)" },  // ✅ Correct answer
        { label: "C", text: "O(N)" },
        { label: "D", text: "O(N^3)" }
    ];

    const correctAnswer = "B";  // ✅ "List" is the correct answer
    const [feedback, setFeedback] = useState("");

    const checkAnswer = (selected) => {
        if (selected === correctAnswer) {
            setFeedback("✅ Correct! Since each loop is nested, the number of total operations is:𝑁×𝑁×𝑁=𝑂(𝑁3)N×N×N=O(N 3 )");
        } else {
            setFeedback("❌ Incorrect. The correct answer is **B.Since each loop is nested, the number of total operations is:𝑁×𝑁×𝑁=𝑂(𝑁3)N×N×N=O(N 3 )");
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
                <Link to="/question49" className="nav-button">← Back to Question 49</Link>
                <Link to="/question51" className="nav-button">Next Question →</Link>
                <button onClick={handleReset} className="reset-button">❌ Quit & Restart</button>
            </div>
        </div>
    );
};

export default Question50;
