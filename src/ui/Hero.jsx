import Button from "./Button";
import { GiTennisBall } from "react-icons/gi";

export default function Hero() {
  return (
    <section className=" bg-custom-bg-slate w-full flex flex-col md:flex-row md:max-h-[800px] md:items-center md:justify-center">
      <div className="md:w-1/2 w-full relative">
        <img
          src="player.svg"
          alt=""
          className="max-w-full md:max-h-[800px] object-contain"
        />
        {/* <div className="absolute top-32 right-20 animate-movingY">
          <GiTennisBall className=" fill-lime-400 text-[55px]" />
        </div> */}
      </div>
      <div className="flex flex-col items-center pt-4 pb-8 gap-4 md:w-1/2">
        <h1 className="text-4xl sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
          Reserva tu turno
        </h1>
        <p className="font-semibold italic sm:text-lg xl:text-3xl">
          Lunes a sabado de 14 a 00.
        </p>
        <Button>Reservar</Button>
      </div>
    </section>
  );
}
