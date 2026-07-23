import { cn } from "@/utils/cn";

const Button = ({
  children,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) => {
  const variants = {
    primary:
      "bg-blue-600 text-white hover:bg-blue-700",

    secondary:
      "bg-gray-200 text-black hover:bg-gray-300",

    outline:
      "border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white",

    ghost:
      "bg-transparent text-blue-600 hover:bg-blue-100",
  };

  return (
    <button
      type={type}
     className={cn(
  "px-5 py-2 rounded-lg font-medium transition-all duration-300 cursor-pointer",
  variants[variant],
  className
)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;