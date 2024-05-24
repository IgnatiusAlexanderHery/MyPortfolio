import React, { useState, useEffect } from "react";

const TypingText = ({ texts, speed = 150, pause = 1000 }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = texts[currentTextIndex];
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
      } else if (fullText[displayedText.length] !== undefined) {
        setDisplayedText((prev) => prev + fullText[displayedText.length]);
      }

      if (!isDeleting && displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && displayedText === "") {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }
    };

    const typingSpeed = isDeleting ? speed / 2 : speed;
    const typingInterval = setInterval(handleTyping, typingSpeed);

    return () => clearInterval(typingInterval);
  }, [displayedText, isDeleting, texts, currentTextIndex, speed, pause]);

  return (
    <div className="text-sm font-mono text-blue-500">
      {displayedText}
      <span className="animate-blink">|</span>
    </div>
  );
};

export default TypingText;
