export function ToggleGroup({options, value, onChange}){
  return (
    <div className="inline-flex rounded-xl border border-base-200 overflow-hidden">
      {options.map(opt => (
        <button key={opt.value}
          onClick={()=>onChange(opt.value)}
          type="button"
          className={"px-3 py-1 text-xs font-medium transition " + (value===opt.value ? "bg-accent text-white" : "bg-white text-base-700 hover:bg-base-100")}>
          {opt.label}
        </button>
      ))}
    </div>
  )
}
