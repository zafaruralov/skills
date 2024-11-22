import React from "react";
import PropTypes from "prop-types";

const DynamicButton = ({ text, leftIcon, rightIcon, borderRadius, onClick, disabled, className, gap, style }) => {
  return (
    <button
      className={`dynamic-button ${className}`}
      onClick={onClick}
      disabled={disabled}
      style={{
        borderRadius,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap,
        cursor: disabled ? "not-allowed" : "pointer",
        ...style
      }}
    >
      {leftIcon && <span className="button-icon-left">{leftIcon}</span>}
      {text && <span className="button-text">{text}</span>}
      {rightIcon && <span className="icon-right">{rightIcon}</span>}
    </button>
  );
};

// Default Props
DynamicButton.defaultProps = {
  borderRadius: "10px",
  gap: "10px",
  onClick: () => {},
  disabled: false,
  className: "",
  style: {}
};

// PropTypes
DynamicButton.propTypes = {
  text: PropTypes.string.isRequired,
  leftIcon: PropTypes.element,
  rightIcon: PropTypes.element,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  border: PropTypes.string,
  gap: PropTypes.string,
  textColor: PropTypes.string,
  padding: PropTypes.string,
  borderRadius: PropTypes.string,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  style: PropTypes.object
};

export default DynamicButton;
