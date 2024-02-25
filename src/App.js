import "./App.css";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData2 from "./animation/anim (2).json";
import animationData1 from "./animation/anim (1).json";

function App() {
  return (
    <div className="App">
      <div className="congratswrapper">
        <div className="congratsAnimation3">
          <Lottie animationData={animationData2} />
        </div>
        <div className="congratsAnimation3">
          <Lottie animationData={animationData1} />
        </div>
        <div className="congratstext">
          <h2>Congratulations!</h2>
          <p>Welcome on board! Thank you for joining us.</p>
          {/* Add a Link to the home page */}
          <div className="goToHemoButtonBorders">
            <a
              href="https://unisadevsociety.github.io/dev/"
              className="goToHemoButton"
            >
              Go to Home
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
