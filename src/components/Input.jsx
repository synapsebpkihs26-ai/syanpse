export default function Input(props) {
  return (
    <input
      {...props}
      className={
        "w-full rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none ring-0 transition focus:border-cyan-300/60 focus:bg-slate-900/80 focus:shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur " +
        (props.className ?? "")
      }
    />
  );
}
