export default function LayoutA({ui}){
  const pad = `${ui.layout.containerPadding}px`
  const sectionBg = ui.layout.sectionBg
  const stroke = ui.stroke
  const galleryGap = `${ui.gallery.spacing}px`
  const imgRadius = `${ui.gallery.imageRadius}px`

  return (
    <div style={{padding: pad}} className="h-full">
      <div style={{background: sectionBg, borderColor: stroke.color, borderWidth: stroke.weight}} className="rounded-2xl p-6 border h-full grid grid-cols-1 lg:grid-cols-5 gap-6">
        <div className="lg:col-span-3 bg-white rounded-2xl shadow-soft flex items-center justify-center">
          <img src="/couch.jpeg" alt="product" className="max-h-96 object-contain rounded-2xl"/>
        </div>
        <div className="lg:col-span-2 flex flex-col">
          <h2 style={{fontFamily: ui.type.fontFamily, fontWeight: ui.type.fontWeight, fontSize: ui.type.fontSize}} className="mb-4">Cozy Lounge Chair</h2>
          <div className="bg-white rounded-2xl shadow-soft p-4 mb-4">
            <div className="text-sm text-base-700/80 mb-2">Customize your Chair</div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm">Arms</span><span className="text-sm font-semibold">2</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Fabric</span><span className="text-sm font-semibold">Linen Fresh</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Legs</span><span className="text-sm font-semibold">Birch</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-soft p-4 mb-4">
            <div className="text-sm text-base-700/80 mb-2">Colors</div>
            <div style={{justifyContent: ui.gallery.alignment, gap: galleryGap}} className="flex flex-wrap">
              {ui.palette.map((c,i)=>(
                <div key={i} title={c} style={{background:c, borderRadius: imgRadius}} className="h-9 w-9 border border-base-200"></div>
              ))}
            </div>
          </div>

          <div className="mt-auto flex items-center justify-between">
            <div className="text-base-700">
              <div className="text-xs">Product Price</div>
              <div className="text-xl font-semibold">$299</div>
            </div>
            <button style={{background: ui.button.bg, color: ui.button.text, borderRadius: ui.button.radius, boxShadow: ui.button.shadowCss, justifyContent: ui.button.align}} className="h-10 px-5 inline-flex items-center gap-2">
              <span className="text-sm font-medium">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
