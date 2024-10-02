import { GiTennisBall } from "react-icons/gi";

export default function Spinner() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-opacity-50">
      <div className="w-20 h-20 bg-black rounded-full flex items-center justify-center">
        <GiTennisBall className="fill-lime-400 animate-loading w-full h-full" />
      </div>
    </div>
  );
}
