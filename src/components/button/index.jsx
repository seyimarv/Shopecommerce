import clsx from "clsx";

/* eslint-disable react/prop-types */
const Button = ({
  children,
  onClick,
  className,
  type = "button",
  isLoading,
  variant = "filled",
  Icon,
  small,
}) => {
  const baseClasses = clsx(
    "rounded-md cursor-pointer tracking-widest min-w-[12rem] text-button uppercase text-sm",
    small ? "px-3 py-2 text-sm" : "px-4 py-2 text-base"
  );

  const variantClasses = clsx({
    "bg-primary": variant === "filled",
    // "border border-button bg-transparent text-primary": variant === "outline",
    // "bg-[#0c0c0c] text-white border border-[#515151]": variant === "secondary",
    "bg-[black] text-white": variant === "secondary",
  });

  return (
    <button
      type={type}
      onClick={onClick}
      className={clsx(baseClasses, variantClasses, className)}
      disabled={isLoading}
    >
      <span className="flex items-center justify-center">
        {Icon && (
          <span className="mr-2">
            <Icon className="text-inherit w-5 h-5" />
          </span>
        )}
        <span className="text-inherit">{children}</span>
        {isLoading && (
          {/* <span className="ml-2">
            <CircularLoader />
          </span> */}
        )}
      </span>
    </button>
  );
};

export default Button;
