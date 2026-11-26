import { cn } from "@/lib/utils";
import Reveal from "./Reveal";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  className?: string;
  id?: string;
};

export default function SectionHeading({ eyebrow, title, intro, align = "left", className, id }: Props) {
  return (
    <Reveal className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-4", align === "center" && "justify-center")}>
          <span className="h-px w-6 bg-coral" aria-hidden />
          {eyebrow}
        </p>
      )}
      <h2 id={id} className="display text-4xl text-plum sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-mute">{intro}</p>}
    </Reveal>
  );
}
