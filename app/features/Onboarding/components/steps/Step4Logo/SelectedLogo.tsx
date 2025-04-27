import Image from "next/image";
import Button from "@/app/components/ui/Button";

type Props = {
  logoUrl: string;
  onContinue: () => void;
};

export default function SelectedLogo({ logoUrl, onContinue }: Props) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[300px] relative">
      <div className="w-full flex justify-center mb-12">
        <div className="relative w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] bg-white rounded-xl overflow-hidden border border-zinc-700 shadow-lg">
          <Image
            src={logoUrl}
            alt="Selected Logo"
            fill
            unoptimized
            className="object-contain"
          />
        </div>
      </div>

      <div className="w-full flex justify-end">
        <Button type="primary" size="lg" onClick={onContinue}>
          Continue
        </Button>
      </div>
    </div>
  );
}
