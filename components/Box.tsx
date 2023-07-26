// import { twMerge } from "tailwind-merge";
import { css } from "@emotion/react";

interface BoxProps {
  children: React.ReactNode;
  className?: string;
}

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return <div css={{ color: "black" }}>{children}</div>;
};

export default Box;
