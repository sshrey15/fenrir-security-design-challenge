import type { SeverityCard } from "../../../../types/types";
import SeverityIcon from "./severity-icon";

const CHANGE_COLORS: Record<string, string> = {
  critical: 'text-[#DA005C]',
  high: 'text-[#DA005C]',
  medium: 'text-[#22C55E]',
  low: 'text-[#DA005C]',
}
 
export default function SeverityCards({ cards }: { cards: SeverityCard[] }) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-4">
      {cards.map((card) => (
        <div key={card.label} className="rounded-xl p-3 sm:p-5">
          <div className="flex items-center gap-4 sm:gap-30 mb-3 sm:mb-4">
            <span className="text-xs sm:text-sm md:text-md font-semibold text-gray-500 dark:text-gray-400">
              {card.label}
            </span>
            <SeverityIcon type={card.iconType} />
          </div>

          <div className="flex items-end gap-2 sm:gap-3">
            <p className="text-2xl sm:text-4xl font-bold text-gray-900 dark:text-white leading-none">
              {card.value}
            </p>
            <p
              className="text-xs flex items-center gap-1 pb-1"
              style={{ color: card.color }}
            >
              {card.up ? (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#DA005C"  strokeWidth="3">
                  <path d="M12 19V5M5 12l7-7 7 7" />
                </svg>
              ) : (
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#22C55E"  strokeWidth="3">
                  <path d="M12 5v14M19 12l-7 7-7-7" />
                </svg>
              )}
              <span className={`${CHANGE_COLORS[card.iconType]} font-medium`}>
                {card.change}
              </span>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}