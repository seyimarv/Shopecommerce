import clsx from "clsx";
import PropTypes from "prop-types";

const Button = ({
  children,
  onClick,
  className,
  type = "button",
  isLoading,
  disabled,
  variant = "filled",
  Icon,
  small,
  large,
  isLink,
  href,
  target,
  rel,
}) => {
  const baseClasses = clsx(
    "rounded-md cursor-pointer tracking-widest min-w-[12rem] text-button uppercase",
    small
      ? "px-3 py-2 text-sm"
      : large
      ? "px-5 py-3 text-base"
      : "px-4 py-2 text-base",
    {
      "opacity-40 cursor-not-allowed": isLoading || disabled,
    }
  );

  const variantClasses = clsx({
    "bg-primary": variant === "filled",
    "bg-[black] text-white": variant === "secondary",
    "border border-gray-500 text-gray-900 bg-transparent":
      variant === "outline",
    "bg-gray-300 text-gray-500": isLoading || disabled,
  });

  const Tag = isLink ? "a" : "button";
  return (
    <Tag
      type={type}
      onClick={onClick}
      className={clsx(baseClasses, variantClasses, className)}
      disabled={isLoading || disabled}
      href={isLink ? href : undefined}
      target={isLink ? target : undefined}
      rel={isLink && target === "_blank" ? "noopener noreferrer" : rel}
    >
      <span className="flex items-center justify-center">
        {Icon && (
          <span className="mr-2">
            <Icon className="text-inherit w-5 h-5" />
          </span>
        )}
        <span className="text-inherit">{children}</span>
        {isLoading &&
          {
            /* <span className="ml-2">
            <CircularLoader />
          </span> */
          }}
      </span>
    </Tag>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.oneOf(["button", "submit", "reset"]),
  isLoading: PropTypes.bool,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(["filled", "secondary"]),
  Icon: PropTypes.elementType,
  small: PropTypes.bool,
  large: PropTypes.bool,
  isLink: PropTypes.bool,
  href: PropTypes.string,
  target: PropTypes.string,
  rel: PropTypes.string,
};

export default Button;
