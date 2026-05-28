function Button({onClick, label, size = "md", variant = "primary" }) {
 

  const sizes = { sm: "text-xs", md: "text-medium", large: "text-xl" };
  const variants = {
    primary: "bg-blue-600",
    warning: "bg-amber-600",
    danger: "bg-red-600",
  };
  return (
    <>
      <button
        onClick={(e) => {e.stopPropagation(); onClick('vy')}}
        className={`${sizes[size]} ${variants[variant]} px-3 py-1 texxt-white rounded-sm shadow-sm text-white cursor-pointer`}
      >
        {label}
      </button>
    </>
  );
}
export default Button;
