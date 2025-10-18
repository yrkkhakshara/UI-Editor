export default function Section({title, children}){
  return (
    <div className="bg-white rounded-2xl shadow-soft p-5">
      <h3 className="text-sm font-semibold text-base-700 mb-4 tracking-wide">{title}</h3>
      <div className="space-y-3">{children}</div>
    </div>
  )
}
