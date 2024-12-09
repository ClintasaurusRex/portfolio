import { useEffect, useState } from "react";

const useMatrixAnimation = () => {
  const [messageIndex, setMessageIndex] = useState(0);
  const messages = ["Wake up, Neo..."];

  useEffect(() => {
    if (messageIndex < messages.length) {
      const timer = setTimeout(() => {
        setMessageIndex((prevIndex) => prevIndex + 1);
      }, 4000); // Wait for 4 seconds between messages
      return () => clearTimeout(timer); // Cleanup timeout
    }
  }, [messageIndex, messages.length]);
  return { messages, messageIndex };
};

export default useMatrixAnimation;
