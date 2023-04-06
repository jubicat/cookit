const Button = ({ s, icon="", children, setShow="", show, ...props }) => {
  return (
    <button
      onClick={() => setShow && setShow(!show)}
      className={`h-8 rounded-md transition-all duration-300 relative w-full ${s}`}
    >
      {children}
      <span className="h-8 w-8 flex items-center justify-center absolute top-0 right-3 ">
        {icon && icon}
      </span>
    </button>
  );
};
export default Button;
