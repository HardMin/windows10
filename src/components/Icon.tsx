import { icon } from "../assets/indexAssests";
import { MouseEventHandler, FocusEventHandler } from "react";
import { PowerSettingsNew as Power, Settings, Menu } from "@mui/icons-material";

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
  img = false,
  onClick,
  onFocus,
  onMouseOver,
}: Props) => {

  const nameIcon: { url: string; alt: string } | boolean = [
    name === "windows10" && icon.window10,
  ].filter((e) => e)[0];

  const IconsMaterial = () => (
    <>
      {[
        name === "Power" && <Power className={className} />,
        name === "Settings" && <Settings className={className}/>,
        name === "Menu" && <Menu className={className}/>
        ]}
    </>
  );

  return (
    <>
      {img ? (
        <>
          {nameIcon && (
            <img
              src={nameIcon.url}
              alt={nameIcon.alt}
              className={className}
              onClick={onClick}
            />
          )}
        </>
      ) : (
        <IconsMaterial />
      )}
    </>
  );
};

export const IconDesk = ({
  name,
  className = "",
  img = false,
  onClick,
  onFocus,
  onMouseOver,
}:Props)=>{

  return img 
    ? (
      <>Image</>
    ) 
    : (
      <>IconMaterial</>
    )
}

export default Icon;
