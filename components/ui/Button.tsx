// import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  className?: ButtonHTMLAttributes<HTMLButtonElement>["className"];
  variant: "primary" | "secondary" | "disabled-primary" | "disabled-secondary";
  type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
  props?: ButtonHTMLAttributes<HTMLButtonElement>;
  icon?: string | StaticImageData;
  title: string;
  iconHeight?: number;
  iconWidth?: number;
  alt?: string;
  titleClassName?: ButtonHTMLAttributes<HTMLButtonElement>["className"];
  onclick?: () => void;
};

const getVariant = (variant = "primary"): string => {
  switch (variant) {
    case "primary":
      return "bg-[#121212]  text-white  text-[16px] font-[500]   hover:bg-[#2A2A2A]  rounded-[6px] sm:rounded-[8px]   font-Inter";

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
  className,
  variant,
  type,
  icon,
  iconHeight,
  iconWidth,
  alt,
  title,
  titleClassName,
  onclick,
  props,
}: ButtonProps) {
  return (
    <button
      type={type || "button"}
      // className={cn(
      // 	`${getVariant(variant)}
      // 		xl:max-w-[140px]
      // 	 ${className} flex items-center justify-center gap-2 `
      // )}
      onClick={onclick}
      {...props}
    >
      {icon && (
        <Image
          src={icon}
          alt={alt || "icon"}
          width={iconWidth || 25}
          height={iconHeight || 25}
        />
      )}
      <span className={`${titleClassName}`}>{title}</span>
    </button>
  );
}
