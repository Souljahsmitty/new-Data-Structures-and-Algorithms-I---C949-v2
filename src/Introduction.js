import React from "react";
import { Link } from "react-router-dom";

const Introduction = () => {
    return (
        <div className="intro-container">
            <h1>Welcome to the Data Structures and Algorithms I - C949 Practice Assessment</h1>
            <p>You are about to begin the practice assessment.</p>
            <p><strong>Time Limit:</strong> 1 hour 30 minutes</p>
            <p>Make sure to read each question carefully before selecting an answer.</p>
            <Link to="/question1" className="start-button">Start Assessment →</Link>
        </div>
    );
};

export default Introduction;
