import { useForm } from "react-hook-form";
import useLogin from "./useLogin";
import Button from "../../ui/Button";

export default function LoginForm() {
  const { login, isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "admin@gmail.com",
      password: "qwer1234",
    },
  });

  const onSubmit = (data) => {
    console.log(data);
    login(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="my-4">
        <label
          htmlFor="email"
          className="block text-md font-medium text-slate-600"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          {...register("email", {
            required: "El email es obligatorio",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Formato de email inválido",
            },
          })}
          className="block w-full mt-1 px-3 py-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-slate-600 focus:border-slate-600 text-slate-600"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>

      {/* Campo de password */}
      <div>
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <input
          id="password"
          type="password"
          {...register("password", {
            required: "La contraseña es obligatoria",
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          })}
          className="block w-full mt-1 px-3 py-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-slate-600 focus:border-slate-600 text-slate-600"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
        )}
      </div>

      {/* Botón de envío */}
      <div className="text-center pt-8">
        <Button type="submit">Iniciar sesion</Button>
      </div>
    </form>
  );
}
