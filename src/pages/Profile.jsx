import UpdateProfileForm from "../features/user/UpdateProfileForm";
import Heading from "../ui/admin/Heading";

export default function Profile() {
  return (
    <div className=" max-w-[350px] sm:max-w-xl lg:max-w-6xl mx-auto my-10 shadow-xl">
      <div className="bg-white p-4 sm:py-8 flex flex-col justify-center items-center gap-4 ">
        <Heading>Actualizar Perfil</Heading>
        <UpdateProfileForm />
      </div>
    </div>
  );
}
