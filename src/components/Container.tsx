import { MouseEventHandler, FocusEventHandler, ReactNode } from "react";

interface Props {
  children?: ReactNode;
  display?:
    | "flex"
    | "flex-inline"
    | "block"
    | "inline-block"
    | "grid"
    | "grid-inline"
    | "none"
    | string;
  className?: string;
  style?: object;

  onClick?: MouseEventHandler;
  onFocus?: FocusEventHandler;
  onMouseOver?: MouseEventHandler 
  onMouseEnter?: MouseEventHandler
  onMouseLeave?: MouseEventHandler
}

const Container = ({
  children,
  display = "flex",
  className = "",
  style,
  onClick,
  onFocus,
  onMouseOver,
  onMouseEnter,
  onMouseLeave,
}: Props) => {
  return (
    <div
      className={`${className} ${display}`}
      onFocus={onFocus}
      onClick={onClick}
      style={style}
      onMouseOver={onMouseOver}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      {children}
    </div>
  );
};

export default Container;
