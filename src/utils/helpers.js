export function parseColor(input) {
  if (!input) return '#000000'
  input = input.trim()
  // Accept hex
  if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(input)) return input
  // Accept rgb(a)
  const rgb = input.match(/^rgba?\((\d{1,3}),\s*(\d{1,3}),\s*(\d{1,3})(?:,\s*(0|0?\.\d+|1))?\)$/i)
  if (rgb) {
    const [_, r, g, b] = rgb
    return `#${[r,g,b].map(n=>parseInt(n).toString(16).padStart(2,'0')).join('')}`
  }
  // fallback
  return '#000000'
}

export function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n))
}

export function download(filename, text) {
  const blob = new Blob([text], {type: 'application/json'})
  const url = URL.createObjectURL(blob)
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
  setTimeout(()=>URL.revokeObjectURL(url), 500)
}
