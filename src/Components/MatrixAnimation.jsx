// import { useEffect, useState } from "react";
import "./MatrixAnimation.css";
import useMatrixAnimation from "../hooks/useMatrixAnimation";

const MatrixAnimation = () => {
  const { messages, messageIndex } = useMatrixAnimation();
  // const [messageIndex, setMessageIndex] = useState(0);
  // const messages = ["Wake up, Neo..."];

  // useEffect(() => {
  //   if (messageIndex < messages.length) {
  //     const timer = setTimeout(() => {
  //       setMessageIndex((prevIndex) => prevIndex + 1);
  //     }, 4000); // Wait for 4 seconds between messages
  //     return () => clearTimeout(timer); // Cleanup timeout
  //   }
  // }, [messageIndex, messages.length]);

  return (
    <div className="matrix-container">
      <div className="matrix-text">{messages[messageIndex]}</div>
    </div>
  );
};

export default MatrixAnimation;
