import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
//import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles.css";
import TimerProvider from "./TimerContext";  // Import TimerProvider
import Introduction from "./Introduction";
import Question1 from "./Question1";
import Question2 from "./Question2";
import Question3 from "./Question3";
import Question4 from "./Question4";
import Question5 from "./Question5";
import Question6 from "./Question6";
import Question7 from "./Question7";
import Question8 from "./Question8";
import Question9 from "./Question9";
import Question10 from "./Question10";
import Question11 from "./Question11";
import Question12 from "./Question12";
import Question13 from "./Question13";
import Question14 from "./Question14";
import Question15 from "./Question15";
import Question16 from "./Question16";
import Question17 from "./Question17";
import Question18 from "./Question18";
import Question19 from "./Question19";
import Question20 from "./Question20";
import Question21 from "./Question21";
import Question22 from "./Question22";
import Question23 from "./Question23";
import Question24 from "./Question24";
import Question25 from "./Question25";
import Question26 from "./Question26";
import Question27 from "./Question27";
import Question28 from "./Question28";
import Question29 from "./Question29";
import Question30 from "./Question30";
import Question31 from "./Question31";
import Question32 from "./Question32";
import Question33 from "./Question33";
import Question34 from "./Question34";
import Question35 from "./Question35";
import Question36 from "./Question36";
import Question37 from "./Question37";
import Question38 from "./Question38";
import Question39 from "./Question39";
import Question40 from "./Question40";

const App = () => {
    return (
        <TimerProvider>  {/* Wrap the entire Router with TimerProvider */}
            <Router>
                <div className="quiz-container">
                    <Routes>
                        <Route path="/" element={<Introduction />} />
                        <Route path="/question1" element={<Question1 />} />
                        <Route path="/question2" element={<Question2 />} />
                        <Route path="/question3" element={<Question3 />} />
                        <Route path="/question4" element={<Question4 />} />
						<Route path="/question5" element={<Question5 />} />
						<Route path="/question6" element={<Question6 />} />
							<Route path="/question7" element={<Question7 />} />
							<Route path="/question8" element={<Question8 />} />
							<Route path="/question9" element={<Question9 />} />
							<Route path="/question10" element={<Question10 />} />
							<Route path="/question11" element={<Question11 />} />
							<Route path="/question12" element={<Question12 />} />
							<Route path="/question13" element={<Question13 />} />
							<Route path="/question14" element={<Question14 />} />
							<Route path="/question15" element={<Question15 />} />
							<Route path="/question16" element={<Question16 />} />
							<Route path="/question17" element={<Question17 />} />
							<Route path="/question18" element={<Question18 />} />
							<Route path="/question19" element={<Question19 />} />
							<Route path="/question20" element={<Question20 />} />
							<Route path="/question21" element={<Question21 />} />
							<Route path="/question22" element={<Question22 />} />
							<Route path="/question23" element={<Question23 />} />
							<Route path="/question24" element={<Question24 />} />
							<Route path="/question25" element={<Question25 />} />
							<Route path="/question26" element={<Question26 />} />
							<Route path="/question27" element={<Question27 />} />
							<Route path="/question28" element={<Question28 />} />
							<Route path="/question29" element={<Question29 />} />
							<Route path="/question30" element={<Question30 />} />
							<Route path="/question31" element={<Question31 />} />
							<Route path="/question32" element={<Question32 />} />
							<Route path="/question33" element={<Question33 />} />
							<Route path="/question34" element={<Question34 />} />
							<Route path="/question35" element={<Question35 />} />
							<Route path="/question36" element={<Question36 />} />
							<Route path="/question37" element={<Question37 />} />
							<Route path="/question38" element={<Question38 />} />
							<Route path="/question39" element={<Question39 />} />
							<Route path="/question40" element={<Question40 />} />
                    </Routes>
                </div>
            </Router>
        </TimerProvider>
    );
};

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

