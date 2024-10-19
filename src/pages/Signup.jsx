import { Link } from "react-router-dom";
import SignupForm from "../features/auth/SignupForm";

export default function Signup() {
  return (
    <main className="h-screen grid grid-cols-1 justify-items-center content-center  bg-custom-bg-slate">
      <div className="bg-white py-6 px-8 rounded-[20px] shadow-2xl w-full sm:max-w-[450px]">
        <div className="text-center ">
          <Link to="/">
            <img
              src="logo.png"
              className="h-[100px] w-[100px] inline-block"
              alt=""
            />
          </Link>
        </div>
        <h1 className="text-xl sm:text-2xl text-center my-6">Registrarse</h1>
        <SignupForm />
      </div>
    </main>
  );
}
