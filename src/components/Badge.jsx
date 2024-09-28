import clsx from "clsx";

function Badge({ children, size, color, onCopy }) {
  const sizeUtils = {
    sm: "px-1.5 py-0.5 text-xs",
    md: "px-2 py-1 text-sm",
    lg: "px-2.5 py-0.5 text-lg",
  };
  const colorUtils = {
    neutral: "text-neutral-600 bg-gray-50 shadow-neutral-200",
    error: "text-red-600 bg-red-50 shadow-red-200",
    warning: "text-amber-700 bg-amber-50 shadow-amber-200",
    success: "text-green-700 bg-green-50 shadow-green-200",
    brand: "text-indigo-700 bg-indigo-50 shadow-indigo-200",
  };

  const classes = clsx(
    "w-fit h-fit shadow-badgeInnerBorder rounded-full",
    sizeUtils[size],
    colorUtils[color]
  );

  return (
    <div className={classes}>
      <button onClick={() => onCopy(classes)}>{children}</button>
    </div>
  );
}

export default Badge;
