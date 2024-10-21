export default function Tag({ children, type }) {
  const color =
    type === "Pendiente"
      ? "bg-yellow-100 text-yellow-600"
      : type === "Confirmado"
      ? "bg-blue-100 text-blue-600"
      : "bg-green-100 text-green-600";
  return (
    <span
      className={`uppercase font-semibold py-2 px-3 rounded-2xl ${color} text-xs`}
    >
      {children}
    </span>
  );
}
