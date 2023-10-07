"use client";
import { MouseEventHandler } from "react";
import Image from "next/image";
const getVariant = (variant?: VariantType) => {
    switch (variant) {
      case "primary":
        return "bg-[#121212] hover:bg-black text-white shadow shadow-black-600/25 hover:shadow-black-600/75";
    
      case "outline-primary":
        return "bg-white text-black border border-[#121212] hover:text-white hover:bg-[#181818]";
  
      default:
        return "bg-violet-500 hover:bg-violet-700 text-white shadow shadow-violet-600/25 hover:shadow-violet-600/75";
    }
  };
  
  type VariantType =
    | "primary"
    | "outline-primary";
  
  export interface IButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children?: React.ReactNode;
    variant?: VariantType;
    square?: boolean;
    paddingLess?: boolean;
    imgSrc?: string;
    imgAlt?:string;
    iconPresent?: boolean;
    OnClick?: React.MouseEventHandler<HTMLButtonElement | HTMLAnchorElement>;
  }
  export const Button = ({
    className,
    children,
    variant,
    square,
    paddingLess,
    type = "button",
    imgSrc, 
    imgAlt='',
    iconPresent,
    onClick,
    ...props
  }: IButtonProps) => {
    return (
        <button
        {...props}
        type={type}
        onClick={onClick}
        className={`
          ${getVariant(variant)}  transition duration-75 font-Inter ${!paddingLess &&
          "xl:w-[140px] xl:h-[42px]  md:h-[40px] md:w-[100px] w-[120px] h-[40px] "}  ${!square &&
          "rounded-[6px] sm:rounded-[8px] "} active:scale-95 ${className}  ${!iconPresent &&
            "flex justify-center items-center gap-2"} text-sm font-medium`}
      >
        {imgSrc &&    <Image src={imgSrc} alt={imgAlt} width={20} height={20}/> } 
        {children}
      </button>
    );
  };