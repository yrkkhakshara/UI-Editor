export function Select({options=[], value, onChange}){
  return (
    <select value={value} onChange={e=>onChange(e.target.value)} className="w-full h-9 px-3 rounded-xl border border-base-200 bg-white outline-none focus:ring-2 focus:ring-accent/40">
      {options.map(opt => <option key={opt} value={opt}>{opt}</option>)}
    </select>
  )
}
