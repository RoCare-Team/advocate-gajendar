import Badge from "./Badge";
import Reveal from "./Reveal";
import GrowLine from "./GrowLine";

// Standard eyebrow + title + animated gold rule + subtitle block.
export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  tone = "dark",
  className = "",
}) {
  const alignment =
    align === "center" ? "text-center items-center mx-auto" : "text-left items-start";
  const titleColor = tone === "light" ? "text-white" : "text-ink-900";
  const subColor = tone === "light" ? "text-ink-200" : "text-ink-500";

  return (
    <Reveal className={`flex max-w-4xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <Badge tone={tone === "light" ? "light" : "gold"}>{eyebrow}</Badge>
      )}
      <h2
        className={`font-display text-3xl lg:text-5xl font-bold lg:whitespace-nowrap text-3xl font-bold leading-tight text-balance sm:text-4xl md:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>
      <GrowLine align={align} />
      {subtitle && (
        <p className={`text-base leading-relaxed text-balance ${subColor}`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  );
}
