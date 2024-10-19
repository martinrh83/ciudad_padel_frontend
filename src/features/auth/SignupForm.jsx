import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import { useSignup } from "./useSignup";

export default function SignupForm() {
  const { register, getValues, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { signup, isLoading } = useSignup();
  function onSubmit({ fullName, email, password, phoneNumber, areaCode }) {
    const phone = `${areaCode}${phoneNumber}`;
    signup({ fullName, email, password, phone }, { onSettled: reset });
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="my-4">
        <label
          htmlFor="fullName"
          className="block text-sm font-medium text-slate-600"
        >
          Nombre
        </label>
        <input
          id="fullName"
          type="text"
          {...register("fullName", {
            required: "El nombre es obligatorio",
          })}
          className="block w-full mt-1 px-3 py-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-slate-600 focus:border-slate-600 text-slate-600"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>
      <div className="flex items-center">
        <div className="mr-2">
          <label
            htmlFor="areaCode"
            className="block text-sm font-medium text-slate-600"
          >
            Código de área
          </label>
          <input
            id="areaCode"
            type="tel"
            maxLength={4}
            inputMode="numeric"
            pattern="\d*"
            placeholder="387"
            {...register("areaCode", {
              required: "El código de área es obligatorio",
              pattern: {
                value: /^[1-9][0-9]{1,3}$/,
                message: "Código de área no válido",
              },
            })}
            className="block w-full mt-1 px-3 py-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-slate-600 focus:border-slate-600 text-slate-600"
          />
        </div>

        <div>
          <label
            htmlFor="phoneNumber"
            className="block text-sm font-medium text-slate-600"
          >
            Teléfono
          </label>
          <input
            id="phoneNumber"
            type="tel"
            maxLength={8}
            inputMode="numeric"
            pattern="\d*"
            placeholder="47891204"
            {...register("phoneNumber", {
              required: "El número de teléfono es obligatorio",
              pattern: {
                value: /^[2-9][0-9]{5,7}$/,
                message: "Número de teléfono no válido",
              },
            })}
            className="block w-full mt-1 px-3 py-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-slate-600 focus:border-slate-600 text-slate-600"
          />
        </div>
      </div>
      {(errors.areaCode || errors.phoneNumber) && (
        <p className="text-red-500 text-sm mt-1">
          {errors.areaCode?.message && (
            <span className="block">{errors.areaCode.message}</span>
          )}
          {errors.phoneNumber?.message && (
            <span className="block">{errors.phoneNumber.message}</span>
          )}
        </p>
      )}
      <div className="my-4">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-slate-600"
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

      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Contraseña
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
      <div className="mb-4">
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
          Confirmar Contraseña
        </label>
        <input
          id="confirmPassword"
          type="password"
          {...register("confirmPassword", {
            required: "Confirmar contraseña es obligatorio",
            validate: (value) =>
              value === getValues().password ||
              "Las contraseñas deben coincidir",
          })}
          className="block w-full mt-1 px-3 py-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-slate-600 focus:border-slate-600 text-slate-600"
        />
        {errors.confirmPassword && (
          <p className="text-red-500 text-sm mt-1">
            {errors.confirmPassword.message}
          </p>
        )}
      </div>

      <div className="text-center pt-8">
        <Button type="submit">Crear cuenta</Button>
      </div>
    </form>
  );
}
