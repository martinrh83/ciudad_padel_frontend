import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import useUser from "../auth/useUser";
import Spinner from "../../ui/Spinner";
import { useUpdateUser } from "./useUpdateUser";

export default function UpdateProfileForm() {
  const { isLoading, user } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();
  const { register, formState, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, phoneNumber }) {
    updateUser({ fullName, phoneNumber });
  }

  if (isLoading) return <Spinner />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full sm:max-w-[400px]">
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
          defaultValue={user?.email}
          disabled={true}
          className="block w-full mt-1 px-3 py-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-slate-600 focus:border-slate-600 text-slate-600"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
        )}
      </div>
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
          defaultValue={user?.user_metadata.fullName}
          disabled={isUpdating}
          {...register("fullName", {
            required: "El nombre es obligatorio",
          })}
          className="block w-full mt-1 px-3 py-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-slate-600 focus:border-slate-600 text-slate-600"
        />
        {errors.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
        )}
      </div>
      <div className="mb-4">
        <label
          htmlFor="phoneNumber"
          className="block text-sm font-medium text-slate-600"
        >
          Celular
        </label>
        <input
          id="phoneNumber"
          type="tel"
          defaultValue={user?.user_metadata.phone}
          maxLength={12}
          inputMode="numeric"
          pattern="\d*"
          disabled={isUpdating}
          {...register("phoneNumber", {
            required: "El número de teléfono es obligatorio",
            pattern: {
              value: /^[1-9][0-9]{1,3}[2-9][0-9]{5,7}$/,
              message:
                "Número de teléfono no válido. Debe incluir el código de área seguido del número",
            },
          })}
          className="block w-full mt-1 px-3 py-3 border border-slate-200 rounded-md shadow-sm focus:outline-none focus:ring-slate-600 focus:border-slate-600 text-slate-600"
        />
        {errors.phoneNumber && (
          <p className="text-red-500 text-sm mt-1">
            {errors.phoneNumber.message}
          </p>
        )}
      </div>
      <div className="text-center pt-8">
        <Button type="submit">Actualizar</Button>
      </div>
    </form>
  );
}
