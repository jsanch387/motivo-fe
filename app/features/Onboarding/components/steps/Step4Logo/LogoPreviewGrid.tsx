import Image from "next/image";

type Props = {
  logos: string[];
  selected: string;
  onSelect: (url: string) => void;
};

export default function LogoPreviewGrid({ logos, selected, onSelect }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-10">
      {logos.map((url) => {
        const isSelected = selected === url;
        return (
          <div
            key={url}
            onClick={() => onSelect(url)}
            className={`cursor-pointer relative rounded-xl overflow-hidden aspect-square transition-all
              ${
                isSelected
                  ? "border-4 border-blue-500 ring-2 ring-blue-300 bg-white"
                  : "border-2 border-zinc-700 hover:border-blue-400 bg-white/90"
              }`}
          >
            <div className="w-full h-full p-4 flex items-center justify-center">
              <Image
                src={url}
                alt="Generated Logo"
                fill
                unoptimized
                className="object-contain"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
