import { useState, useMemo } from 'react'
import LivePreview from './components/LivePreview.jsx'
import EditorPanel from './components/EditorPanel.jsx'

const defaultUI = {
  type: { fontFamily:'Inter', fontWeight:600, fontSize:20 },
  button: { radius:12, shadow:'medium', shadowCss:'0 10px 20px rgba(0,0,0,.12)', align:'flex-end', bg:'#1f2937', text:'#ffffff' },
  gallery: { alignment:'flex-start', spacing:10, imageRadius:12 },
  general: { cardRadius:16 },
  layout: { containerPadding:16, sectionBg:'#F3F4F6', variant:'A' },
  stroke: { color:'#E5E7EB', weight:1 },
  palette: ['#784F3F','#B08B74','#E0D6CF','#3A3A3A','#732B28','#2E3A23','#335C67','#9E2B25','#5F0F40','#5A3A31','#3C6E71','#7B8CDE']
}

export default function App(){
  const [ui, setUI] = useState(defaultUI)

  const panel = useMemo(()=> <EditorPanel ui={ui} setUI={setUI} />, [ui])

  return (
    <div className="min-h-screen p-6 lg:p-10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-soft h-[72vh]">
            <LivePreview ui={ui} />
          </div>
          <div className="lg:col-span-1">
            {panel}
          </div>
        </div>
      </div>
    </div>
  )
}
