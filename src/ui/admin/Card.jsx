export default function Card({ children }) {
  return (
    <section className="bg-white w-full flex flex-col gap-4 rounded-md shadow-md py-6 px-4 sm:px-10 border border-slate-200 min-w-[200px]">
      {children}
    </section>
  );
}
