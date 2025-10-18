import Section from './controls/Section.jsx'
import Field from './controls/Field.jsx'
import { Input } from './controls/Input.jsx'
import { Slider } from './controls/Slider.jsx'
import { Select } from './controls/Select.jsx'
import { ToggleGroup } from './controls/ToggleGroup.jsx'
import { parseColor, clamp, download } from '../utils/helpers.js'

const fontOptions = ['Inter','Poppins','Roboto','system-ui']

const shadowMap = {
  none: '',
  small: '0 2px 6px rgba(0,0,0,.10)',
  medium: '0 10px 20px rgba(0,0,0,.12)',
  large: '0 24px 40px rgba(0,0,0,.16)'
}

export default function EditorPanel({ui, setUI}){

  function update(path, value){
    setUI(prev => {
      const next = structuredClone(prev)
      const keys = path.split('.')
      let obj = next
      for (let i=0; i<keys.length-1; i++){
        obj = obj[keys[i]]
      }
      obj[keys[keys.length-1]] = value
      // recompute derived
      next.button.shadowCss = shadowMap[next.button.shadow]
      next.button.alignCss = next.button.align
      return next
    })
  }

  function exportJSON(){
    const {palette, ...rest} = ui
    download('ui-config.json', JSON.stringify(ui, null, 2))
  }

  function importJSON(e){
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.onload = () => {
      try {
        const conf = JSON.parse(reader.result)
        setUI(conf)
      } catch(e){ alert('Invalid JSON') }
    }
    reader.readAsText(file)
  }

  return (
    <div className="space-y-5">
      <div className="bg-white rounded-2xl shadow-soft p-4 flex items-center justify-end">
        <div className="space-x-2 text-xs">
          <button className="px-3 py-2 rounded-xl border border-base-200" onClick={exportJSON}>Export JSON</button>
          <label className="px-3 py-2 rounded-xl border border-base-200 cursor-pointer">
            Import JSON
            <input type="file" accept="application/json" className="hidden" onChange={importJSON}/>
          </label>
        </div>
      </div>

      <Section title="Typography">
        <Field label="Font Family">
          <Select options={fontOptions} value={ui.type.fontFamily} onChange={v=>update('type.fontFamily', v)} />
        </Field>
        <Field label="Font Weight" hint="400–700">
          <Slider min={400} max={700} step={100} value={ui.type.fontWeight} onChange={v=>update('type.fontWeight', v)} />
        </Field>
        <Field label="Font Size" hint="10px–60px">
          <div className="flex items-center gap-2">
            <Input type="number" min={10} max={60} value={ui.type.fontSize} onChange={e=>update('type.fontSize', clamp(Number(e.target.value),10,60))} />
          </div>
        </Field>
      </Section>

      <Section title="Button">
        <Field label="Border Radius">
          <Slider min={0} max={24} value={ui.button.radius} onChange={v=>update('button.radius', v)} />
        </Field>
        <Field label="Shadow">
          <Select options={Object.keys(shadowMap)} value={ui.button.shadow} onChange={v=>update('button.shadow', v)} />
        </Field>
        <Field label="Alignment">
          <ToggleGroup options={[
            {label:'Left', value:'flex-start'},
            {label:'Center', value:'center'},
            {label:'Right', value:'flex-end'},
          ]} value={ui.button.align} onChange={v=>update('button.align', v)} />
        </Field>
        <Field label="Background Color" hint="HEX or rgb()">
          <div className="flex items-center gap-2">
            <Input type="color" value={ui.button.bg} onChange={e=>update('button.bg', e.target.value)} />
            <Input value={ui.button.bg} onChange={e=>update('button.bg', parseColor(e.target.value))} />
          </div>
        </Field>
        <Field label="Text Color" hint="HEX or rgb()">
          <div className="flex items-center gap-2">
            <Input type="color" value={ui.button.text} onChange={e=>update('button.text', e.target.value)} />
            <Input value={ui.button.text} onChange={e=>update('button.text', parseColor(e.target.value))} />
          </div>
        </Field>
      </Section>

      <Section title="Galleries / Images">
        <Field label="Alignment">
          <Select options={['flex-start','center','flex-end','space-between']} value={ui.gallery.alignment} onChange={v=>update('gallery.alignment', v)} />
        </Field>
        <Field label="Spacing between images">
          <Slider min={0} max={32} value={ui.gallery.spacing} onChange={v=>update('gallery.spacing', v)} />
        </Field>
        <Field label="Image border radius">
          <Slider min={0} max={24} value={ui.gallery.imageRadius} onChange={v=>update('gallery.imageRadius', v)} />
        </Field>
      </Section>

      <Section title="General Layout">
        <Field label="Card Corner Radius (menu)">
          <Slider min={8} max={24} value={ui.general.cardRadius} onChange={v=>update('general.cardRadius', v)} />
        </Field>
        <Field label="Container Padding">
          <Slider min={0} max={48} value={ui.layout.containerPadding} onChange={v=>update('layout.containerPadding', v)} />
        </Field>
        <Field label="Section Background Color">
          <div className="flex items-center gap-2">
            <Input type="color" value={ui.layout.sectionBg} onChange={e=>update('layout.sectionBg', e.target.value)} />
            <Input value={ui.layout.sectionBg} onChange={e=>update('layout.sectionBg', parseColor(e.target.value))} />
          </div>
        </Field>
      </Section>

      <Section title="Stroke / Border">
        <Field label="Stroke Color">
          <div className="flex items-center gap-2">
            <Input type="color" value={ui.stroke.color} onChange={e=>update('stroke.color', e.target.value)} />
            <Input value={ui.stroke.color} onChange={e=>update('stroke.color', parseColor(e.target.value))} />
          </div>
        </Field>
        <Field label="Stroke Weight">
          <Slider min={0} max={6} value={ui.stroke.weight} onChange={v=>update('stroke.weight', v)} />
        </Field>
      </Section>
    </div>
  )
}
