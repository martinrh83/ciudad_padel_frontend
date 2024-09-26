import Button from "./Button";

export default function Header() {
  return (
    <header className="flex justify-between items-center bg-white border-b border-b-stone-300">
      <img src="logo.jpg" alt="Ciudad Padel Salta" className="h-24 " />
      <Button>Reservar</Button>
    </header>
  );
}
