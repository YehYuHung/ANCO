import React, { useState, useEffect } from "react";

const buttonStyle = {
  position: "fixed",
  zIndex: 9999,
  backgroundColor: "green",
  borderRadius: "50%",
  height: "40px",
  width: "40px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  right: "1.25rem",
  bottom: "1.25rem",
  opacity: 0.5,
  cursor: "pointer",
};

const ForwardTop = ({ style, ...rest }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      setShowButton(
        document.body.scrollTop > 0 || document.documentElement.scrollTop > 0
      );
    };

    window.addEventListener("scroll", checkScrollHeight);
    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <div
        style={{
          ...buttonStyle,
          ...style,
        }}
        onClick={scrollToTop}
        {...rest}
      >
        <svg
          width={40}
          height={40}
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </div>
    )
  );
};

export default ForwardTop;
