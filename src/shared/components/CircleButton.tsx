import { ButtonProps } from "../interface/button.interface";

export default function CircleButton({ children }: ButtonProps) {
  return <button className="bg-primary-500 h-10 w-10 rounded-full flex items-center justify-center cursor-pointer">{children}</button>;
}
