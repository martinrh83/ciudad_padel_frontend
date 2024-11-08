import { Link } from "react-router-dom";
import LoginForm from "../features/auth/loginForm";

export default function Login() {
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
        <h1 className="text-xl sm:text-2xl text-center my-6">Iniciar sesion</h1>
        <LoginForm />
        <div className="border-t border-slate-200 mt-4 flex flex-col justify-center items-center gap-2 p-4">
          <p className="text-lg">¿Todavía no tienes una cuenta?</p>
          <Link to="/signup" className="text-lg text-lime-600 hover:underline">
            Registrarse
          </Link>
        </div>
      </div>
    </main>
  );
}
