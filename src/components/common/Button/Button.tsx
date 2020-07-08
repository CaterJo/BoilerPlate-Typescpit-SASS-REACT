import React from "react";
import styles from "./Button.scss";

import { Link } from "react-router-dom";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);
interface CommonProps {
  fullWidth?: boolean;
  cyan?: number;
}

interface ButtonProps extends CommonProps {
  to?: string;
  onClick?: () => void;
  disabled?: boolean;
}

//props.cyan, props.fullWidth
const Button: React.FC<ButtonProps> = ({
  to,
  fullWidth,
  children,
  cyan,
  ...rest
}) => {
  console.log("1", to, fullWidth, children, cyan);

  return to ? (
    <Link
      {...rest}
      to={to}
      className={cx({
        btn: true,
        fullWidth: fullWidth,
        cyan: cyan,
      })}
    />
  ) : (
    <button
      {...rest}
      className={cx({
        btn: true,
        fullWidth: fullWidth,
        cyan: cyan,
      })}
    >
      {children}
    </button>
  );
};

export default Button;
