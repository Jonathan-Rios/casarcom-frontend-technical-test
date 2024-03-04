import { githubBadges } from "./githubBadges";

interface LanguageBadgeProps {
  language: string;
}

export function LanguageBadge({ language }: LanguageBadgeProps) {
  const notFoundColor = "#cccccc";
  const badgeColor =
    githubBadges[language as keyof typeof githubBadges] || notFoundColor;

  return (
    <div className="flex items-center gap-2">
      <span
        className={`block h-4 min-h-4 w-4 min-w-4 rounded-full`}
        style={{ backgroundColor: badgeColor }}
      />
      <p className="text-sm font-regular text-greyNeutral">{language}</p>
    </div>
  );
}
