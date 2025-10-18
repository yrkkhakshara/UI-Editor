export default function Field({label, hint, children}) {
  return (
    <label className="block">
      <div className="flex items-center justify-between mb-1">
        <span className="text-xs font-medium text-base-700">{label}</span>
        {hint && <span className="text-[10px] text-base-700/60">{hint}</span>}
      </div>
      {children}
    </label>
  )
}
