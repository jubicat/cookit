import { MdDone } from "react-icons/md";
const Information = ({ label, data, conf = false }) => {
  return (
    <div className="flex items-center gap-x-4 bg-slate-700 py-1 px-2 rounded">
      <span className="font-semibold">{label}:</span>
      {conf ? (
        <div className="text-green-500 flex items-center  justify-between flex-auto">
          <p>{data}</p>
          <span className="border mr-3 border-green-500 h-5 w-5 flex items-center justify-center  rounded-full">
            <MdDone />
          </span>
        </div>
      ) : (
        <>
        {data}
        </>
      )}
    </div>
  );
};
export default Information;
