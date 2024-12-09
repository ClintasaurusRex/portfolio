import { useEffect, useState, useMemo } from "react";
import "./MatrixAnimation.css";

const MatrixAnimation = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const [displayMessage, setDisplayMessage] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const messages = useMemo(
    () => ["Wake up, Neo...", "The Matrix has you...", "Follow the white rabbit."],
    []
  );
  useEffect(() => {
    if (messageIndex < messages.length) {
      setIsTyping(true);
      setDisplayMessage(messages[messageIndex]);

      const timer = setTimeout(() => {
        setIsTyping(false);
        setTimeout(() => {
          setMessageIndex((prevIndex) => prevIndex + 1);
        }, 2000);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [messageIndex, messages]);

  return (
    <div className="matrix-container">
      <div
        className={`matrix-text ${isTyping ? "typing" : ""}`}
        key={displayMessage} // Ensure React re-applies the animation
      >
        {displayMessage}
      </div>
    </div>
  );
};

export default MatrixAnimation;
