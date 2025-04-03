
import { useNavigate } from "react-router-dom";
import { ButtonProps } from "../interface/button.interface";



export default function Button({ children, variant = "normal", to }: ButtonProps) {

  const navigate = useNavigate()
  const variantStyles = {
    normal: "bg-primary-500 text-white",
    outline: "border border-primary-500 text-primary-500 bg-transparent",
    none: "bg-transparent"
  };

  return (
    <button onClick={() => to && navigate(to)} className={`text-sm rounded py-2.5 px-6 cursor-pointer w-fit ${variantStyles[variant]}`}>
      {children}
    </button>
  );
}
