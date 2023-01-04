import { icon } from "../assets/indexAssests";
import { MouseEventHandler, FocusEventHandler } from "react";

interface Props {
  name?: string;
  className?: string;
  style?: object;
  type?: "wallpapers" | "normal";

  width?: string;
  height?: string;
  img?: boolean | any;
  onClick?: MouseEventHandler;
  onFocus?: FocusEventHandler;
  onMouseOver?: MouseEventHandler;
}

const Icon = ({
  name,
  className = "",
  img,
  onClick,
  onFocus,
  onMouseOver,
}: Props) => {
  const nameIcon = icon.filter((ico) => ico.name === name)[0];

  return nameIcon 
          ? <img
              src={nameIcon.url}
              alt={nameIcon.name}
              className={className}
              onClick={onClick}
            />
          : <>No image</>
};


export default Icon;
