import Image from "next/image";
import { AudioWaveform, Mic, ShieldCheck, Sparkles } from "lucide-react";
import type { ProjectItem } from "@/data/types";

type ProjectVisualProps = {
  item: ProjectItem;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes: string;
};

export function ProjectVisual({
  className,
  imageClassName,
  item,
  priority,
  sizes,
}: ProjectVisualProps) {
  if (item.visualKind === "justcall") {
    return (
      <div
        aria-label={item.imageAlt}
        className={`justcall-visual${className ? ` ${className}` : ""}`}
        role="img"
      >
        <div className="justcall-visual-meta">
          <span>JustCall / development build</span>
          <span>Authenticated voice session</span>
        </div>
        <div className="justcall-phone">
          <div className="justcall-phone-topline">
            <span>Conversation with Nico</span>
            <i>Connected</i>
          </div>
          <div className="justcall-orb">
            <AudioWaveform aria-hidden="true" />
          </div>
          <strong>Ready when you are.</strong>
          <p>Speak naturally. Your session stays linked to your learner identity.</p>
          <button aria-hidden="true" tabIndex={-1} type="button">
            <Mic /> End conversation
          </button>
        </div>
        <div className="justcall-proof-strip">
          <span><ShieldCheck /> Owned session</span>
          <span><Sparkles /> Evidence-bound feedback</span>
        </div>
      </div>
    );
  }

  return (
    <Image
      alt={item.imageAlt}
      className={imageClassName}
      fill
      priority={priority}
      sizes={sizes}
      src={item.imageSrc}
    />
  );
}
