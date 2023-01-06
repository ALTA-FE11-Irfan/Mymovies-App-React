import { Component, ButtonHTMLAttributes } from "react";
import { FaHeart, FaEye } from "react-icons/fa";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export class ButtonWatch extends Component<ButtonProps> {
  render() {
    return (
      <button className="btn bg-third text-white hover:btn-outline tracking-wider text-xs w-full" {...this.props}>
        {this.props.label}
      </button>
    );
  }
}

export class ButtonFav extends Component<ButtonProps> {
  render() {
    return (
      <button className="btn bg-third text-white hover:btn-outline tracking-wider text-xs w-full" {...this.props}>
        {this.props.label}
      </button>
    );
  }
}