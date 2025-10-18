export default function LayoutB({ui}){
  const pad = `${ui.layout.containerPadding}px`
  const sectionBg = ui.layout.sectionBg
  const stroke = ui.stroke
  const galleryGap = `${ui.gallery.spacing}px`
  const imgRadius = `${ui.gallery.imageRadius}px`

  return (
    <div style={{padding: pad}} className="h-full">
      <div style={{background: sectionBg, borderColor: stroke.color, borderWidth: stroke.weight}} className="rounded-2xl p-6 border h-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-soft p-4">
            <img src="/couch.jpeg" alt="product" className="h-60 w-full object-cover rounded-xl"/>
            <div className="mt-3 flex items-center justify-between">
              <div>
                <div className="text-sm text-base-700/80">Product</div>
                <div className="font-semibold">Cozy Lounge Chair</div>
              </div>
              <div className="text-xl font-semibold">$299</div>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-soft p-4">
            <div className="text-sm text-base-700/80 mb-2">Colors</div>
            <div style={{display: 'grid', gridTemplateColumns:'repeat(6, minmax(0,1fr))', gap: galleryGap}}>
              {ui.palette.map((c,i)=>(
                <div key={i} title={c} style={{background:c, borderRadius: imgRadius}} className="aspect-square border border-base-200"></div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-soft p-4">
            <h3 style={{fontFamily: ui.type.fontFamily, fontWeight: ui.type.fontWeight, fontSize: ui.type.fontSize}} className="mb-4">Customize</h3>
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
            <button style={{background: ui.button.bg, color: ui.button.text, borderRadius: ui.button.radius, boxShadow: ui.button.shadowCss}} className="mt-6 h-10 w-full inline-flex items-center justify-center gap-2">
              <span className="text-sm font-medium">Add to cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
