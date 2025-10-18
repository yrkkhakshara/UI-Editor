import LayoutA from './layout/LayoutA.jsx'

export default function LivePreview({ui}){
  return (
    <div className="h-full">
      <LayoutA ui={ui} />
    </div>
  )
}
