import { MapPin } from "lucide-react";

export default function NotFoundIllustration() {
  return (
    <div className="relative h-52 w-full max-w-md overflow-hidden rounded-lg bg-linear-to-br from-[#23635e] via-[#8ec8c3] to-[#eaf4f1] shadow-sm">
      <div className="absolute left-12 top-10 h-28 w-36 -rotate-6 rounded-md border border-white/55 bg-cyan-100/45 shadow-lg">
        <div className="h-6 rounded-t-md bg-cyan-200/80" />
        <div className="mx-auto mt-5 h-12 w-24 rounded-full border border-white/75" />
        <div className="absolute left-7 top-[68px] h-px w-24 bg-white/70" />
        <div className="absolute left-[68px] top-9 h-20 w-px bg-white/70" />
      </div>
      <div className="absolute bottom-7 left-[148px] flex h-16 w-16 items-center justify-center rounded-full bg-white text-3xl font-bold text-[#00796f] shadow-md">
        404
      </div>
      <div className="absolute right-20 top-1 text-8xl font-bold leading-none text-[#ff645d] drop-shadow-sm">
        ?
      </div>
      <MapPin
        className="absolute right-14 top-[68px] text-cyan-300"
        size={36}
        strokeWidth={2.3}
      />
      <div className="absolute right-[88px] top-[104px] h-14 w-28 rotate-[-14deg] rounded-sm bg-white/85 shadow-sm" />
      <div className="absolute left-36 top-24 h-8 w-8 rounded-full bg-stone-500" />
      <div className="absolute left-[132px] top-[124px] h-[52px] w-12 rounded-t-full bg-white/90" />
    </div>
  );
}
