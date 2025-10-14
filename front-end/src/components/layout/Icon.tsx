import React from "react";
import styles from "../../styles/navbar/Logo.module.css";
import { IoAirplaneSharp } from "react-icons/io5";

interface IconProps {
  width?: number;
  height?: number;
  color?: string;
}

function Icon({ width, height, color = "white" }: IconProps) {
  return (
    <div
      style={
        width && height
          ? {
              width: `${width}px`,
              height: `${height}px`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }
          : undefined
      }
    >
      <span
        className={styles.logoIcon}
        style={
          width && height
            ? {
                width: `${width}px`,
                height: `${height}px`,
              }
            : undefined
        }
      >
        <IoAirplaneSharp
          size={width && height ? Math.min(width, height) * 0.62 : 17.8}
          color={color}
        />
      </span>
    </div>
  );
}

export default Icon;
