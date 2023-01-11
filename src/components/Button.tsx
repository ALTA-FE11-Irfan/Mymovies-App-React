import { FC, ButtonHTMLAttributes } from "react";
import { FaHeart, FaEye } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: JSX.Element;
}

export const Button: FC<ButtonProps> = ({ label, ...props }) => {
  return (
    <button className="btn border-0 bg-forth dark:bg-third text-white hover:btn-outline tracking-wider text-xs w-full" {...props}>
      {label}
    </button>
  );
};
