import Image, { StaticImageData } from "next/image";
import React from "react";

type ButtonProps = {
  className: string;
  children: React.ReactNode;
  variant: string;
  square?: string;
  paddingLess?: boolean;
  type: string;
  onClick?: () => void;
  imgSrc?: StaticImageData;
  imgAlt?: string | undefined;
  iconPresent: boolean;
};

const getVariant = (variant: string) => {
  switch (variant) {
    case "primary":
      return "bg-[#121212]  text-[#FFFFFF]  text-[16px] font-[500]   hover:bg-[#2A2A2A]  hover:text-[#FFFF] rounded-[6px] sm:rounded-[8px]   font-Inter";
    case "secondary":
      return "bg-[#FFFF]  text-[#000] text-[16px] font-[500]  border-[1.5px]  border-[#121212]  rounded-[6px] sm:rounded-[8px]    font-Inter";

    case "disabled-primary":
      return "bg-[#CCCCCC] text-[#808080]  font-Inter text-[16px]  rounded-[6px] sm:rounded-[8px]  font-[500]";

    case "disabled-secondary":
      return "bg-[#808080] text-[#808080]  font-Inter text-[16px]  border-[1.5px] font-[500] rounded-[6px] sm:rounded-[8px] ";

    default:
      return "bg-[#121212]-500 hover:bg-violet-700 text-white shadow shadow-violet-600/25 hover:shadow-violet-600/75";
  }
};

export default function Button({
  children,
  className,
  variant,
  square,
  paddingLess,
  onClick,

  type,
  iconPresent,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`${className} ${getVariant(variant)} ${
        !paddingLess &&
        "xl:w-[140px] xl:h-[42px]  md:h-[40px] md:w-[100px] w-[120px] h-[40px] "
      }  `}
    >
      {children}
    </button>
  );
}
