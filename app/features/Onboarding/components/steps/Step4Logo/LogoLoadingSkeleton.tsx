export default function LogoLoadingSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
      {[...Array(3)].map((_, idx) => (
        <div
          key={idx}
          className="aspect-square rounded-xl border border-zinc-700 bg-zinc-800 animate-pulse"
        >
          <div className="w-full h-full bg-white/10 rounded-lg" />
        </div>
      ))}
    </div>
  );
}
