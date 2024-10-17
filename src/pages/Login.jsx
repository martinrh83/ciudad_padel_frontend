import LoginForm from "../features/auth/loginForm";

export default function Login() {
  return (
    <main className="h-screen grid grid-cols-1 justify-items-center content-center  bg-custom-bg-slate">
      <div className="bg-white py-6 px-8 rounded-[20px] shadow-2xl w-full sm:max-w-[450px]">
        <div className="text-center ">
          <img
            src="logo.png"
            className="h-[140px] w-[140px] inline-block"
            alt=""
          />
        </div>
        <h1 className="text-2xl sm:text-3xl text-center my-6">
          Iniciar sesion
        </h1>
        <LoginForm />
      </div>
    </main>
  );
}
