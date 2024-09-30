export default function Button({ children, type = "button" }) {
  return (
    <button type={type} className="relative inline-block text-lg group mx-2">
      <span className="relative z-10 block px-5 py-3 overflow-hidden font-bold leading-tight text-stone-900 transition-colors duration-300 ease-out border-2 border-stone-900 rounded-lg group-hover:text-lime-400 uppercase">
        <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-lime-400"></span>
        <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-stone-900 group-hover:-rotate-180 ease"></span>
        <span className="relative">{children}</span>
      </span>
      <span
        className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-stone-900  rounded-lg group-hover:mb-0 group-hover:mr-0"
        data-rounded="rounded-lg"
      ></span>
    </button>
  );
}
