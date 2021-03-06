import React from "react";
import PropTypes from "prop-types";
import "./button.modules.scss";

/**
 * Primary UI component for user interaction
 */

export const Buttonstory = ({
  secondary,
  backgroundColor,
  size,
  label,
  ...props
}) => {
  const mode = secondary
    ? "storybook-button--secondary"
    : "storybook-button--primary";
  return (
    <button
      type="button"
      className={["storybook-button", `storybook-button--${size}`, mode].join(
        " "
      )}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

Buttonstory.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  secondary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Buttonstory.defaultProps = {
  backgroundColor: true,
  primary: true,
  size: "medium",
  onClick: undefined,
};
