import { Check, DollarSign, Clock, Star, Hammer, Gem, Scissors } from "lucide-react";

const ICON_MAP = {
  check: Check,
  dollar: DollarSign,
  clock: Clock,
  star: Star,
  hammer: Hammer,
  diamond: Gem,
  scissors: Scissors,
};

export type ContentIconName = keyof typeof ICON_MAP;

export function ContentIcon({ name, className }: { name: ContentIconName; className?: string }) {
  const Icon = ICON_MAP[name];
  return <Icon className={className} strokeWidth={2.25} />;
}
