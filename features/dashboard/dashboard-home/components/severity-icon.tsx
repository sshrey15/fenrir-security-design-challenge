type SeverityIconType = 'critical' | 'high' | 'medium' | 'low'
import { TbAlertTriangle } from "react-icons/tb";
import { BiNoEntry } from "react-icons/bi";
import { LuSearchX } from "react-icons/lu";
const ICON_CONFIG: Record<SeverityIconType, { color: string; bg: string }> = {
  critical: { color: '#DA005C', bg: 'bg-[#FFE6F4] ' },
  high:     { color: '#C94300', bg: 'bg-[#FFE2CC] ' },
  medium:   { color: '#C29400', bg: 'bg-[#FFFBE8] ' },
  low:      { color: '#DA005C', bg: 'bg-[#E7F2FF] ' },
}

export default function SeverityIcon({ type }: { type: SeverityIconType }) {
  const { color, bg } = ICON_CONFIG[type]

  return (
    <div className={`w-8 h-8 rounded-lg ${bg}  flex items-center justify-center shrink-0`}>
      {type === 'critical' ? (
        <BiNoEntry className="text-[#DA005C] w-5 h-5  " />
      ) : type === 'low' ? (
        <LuSearchX className="text-[#1362FF] w-5 h-5" />
          
      ) : type === 'medium' ? (
        <TbAlertTriangle className="text-[#C29400] w-5 h-5" />
      ) : type === 'high' ? (
        <TbAlertTriangle className="text-[#C94300] w-5 h-5" />
      ) : null}
    </div>
  )
}