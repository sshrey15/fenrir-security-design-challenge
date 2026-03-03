export default function ProgressBar({ value }: { value: number }) {
  const color =
    value === 100
      ? 'bg-[#0CC8A8]'
      : value >= 50
        ? 'bg-amber-400'
        : 'bg-red-500'

  return (
    <div className="flex items-center gap-3">
      <div className="w-28 h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className={`h-full rounded-full ${color}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <span className="text-sm text-gray-600">{value}%</span>
    </div>
  )
}