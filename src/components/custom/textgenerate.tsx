import { TextGenerateEffect } from "@components/ui/text-generate-effect";

export function TextGenerate({
  words,
  className,
}: {
  words: string;
  className?: string;
}) {
  return (
    <div className="flex h-[40rem] flex-col items-center justify-center ">
      <TextGenerateEffect words={words} className={className} />
    </div>
  );
}
