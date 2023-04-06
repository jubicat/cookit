import classNames from "classnames";
import { useField } from "formik";
import { MdClose, MdDone } from "react-icons/md";

const Input = ({ type = "text", label, ...props }) => {
  const [field, meta] = useField(props);

  return (
    <label className="relative ">
      <input
        required={true}
        type={type}
        className="w-full h-10 text-white  rounded-md px-2 pr-14 peer outline-none  valid:pt-2 text-sm bg-slate-700 "
        {...props}
        {...field}
      />
      <span className="text-white opacity-80 absolute flex items-center justify-center left-2 top-1/2 -translate-y-1/2 text-sm peer-valid:text-xs peer-valid:top-2 transition-all duration-300">
        {label}
      </span>
      <span
        className={classNames({
          "absolute right-0 top-0 w-10 h-10 flex items-center justify-center ": true,
        })}
      >
        {meta.error && meta.touched ? (
          <MdClose
            className="border border-red-500 rounded-full p-1 text-red-500"
            size={24}
          />
        ) : !meta.error && field.value ? (
          <MdDone
            className="border border-green-500 rounded-full p-1 text-green-500"
            size={24}
          />
        ) : null}
      </span>
    </label>
  );
};

export default Input;
