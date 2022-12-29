import { icon } from "../assets/indexAssests";
import { MouseEventHandler, FocusEventHandler, useState } from "react";
import Container from "./Container";
import { PowerSettingsNew as Power, Settings, Menu } from "@mui/icons-material";

interface Props {
  name?: string;
  className?: string;
  style?: object;
  type?: "wallpapers" | "normal";

  width?: string;
  height?: string;
  img?: boolean;
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
  width = "100%",
  height = "inheret",
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

export default Icon;
