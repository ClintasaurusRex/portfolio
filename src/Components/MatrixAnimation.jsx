import { useEffect, useState } from "react";
import "./MatrixAnimation.css";

const MatrixAnimation = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = ["Wake up Neo...", "The Matrix has you...", "Follow the white rabbit."];

  useEffect(() => {
    if (messageIndex < messages.length) {
      const timer = setTimeout(() => {
        setMessageIndex((prevIndex) => prevIndex + 1);
      }, 4000); // Wait for 4 seconds between messages
      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [messageIndex, messages.length]);

  return (
    <div className="matrix-container">
      <div className="matrix-text" style={{ width: `${messages[messageIndex].length}ch` }}>
        {messages[messageIndex]}
      </div>
    </div>
  );
};

export default MatrixAnimation;
