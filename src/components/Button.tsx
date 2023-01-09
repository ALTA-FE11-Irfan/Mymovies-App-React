import { FC, ButtonHTMLAttributes } from "react";
import { FaHeart, FaEye } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
}

export const ButtonWatch: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button className="btn bg-third text-white hover:btn-outline tracking-wider text-xs w-full" {...props}>
      {label}
    </button>
  );
};

export const ButtonFav: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button className="btn bg-third text-white hover:btn-outline tracking-wider text-xs w-full" {...props}>
      {label}
    </button>
  );
};
