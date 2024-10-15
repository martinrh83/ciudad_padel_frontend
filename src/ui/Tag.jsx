export default function Tag({ children, type }) {
  const color =
    type === "Pagada"
      ? "bg-green-100 text-green-600"
      : "bg-yellow-100 text-yellow-600";
  return (
    <span
      className={`uppercase font-semibold py-2 px-3 rounded-2xl ${color} text-xs`}
    >
      {children}
    </span>
  );
}
