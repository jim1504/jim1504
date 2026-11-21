// Generates the animated README graphics: hero.svg (a woven swatch) and journey.svg (career thread).
// Usage: node .github/readme/generate.mjs   (writes next to this script)
import { writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const out = process.argv[2] ?? dirname(fileURLToPath(import.meta.url))
mkdirSync(out, { recursive: true })

const C = {
  ink: '#121A3F',
  indigo: '#1D2B66',
  loom: '#3A4A8C',
  cotton: '#F3F5FA',
  saffron: '#F2B630',
  teal: '#2BB3A3',
  blue: '#6F8CF0',
}
const SANS = "'Segoe UI', 'Helvetica Neue', Helvetica, Arial, sans-serif"
const SERIF = "Georgia, 'Times New Roman', serif"
const r2 = (n) => Math.round(n * 100) / 100

const background = (w, h) => `
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${C.ink}"/>
      <stop offset="1" stop-color="${C.indigo}"/>
    </linearGradient>
    <pattern id="grain" width="6" height="6" patternUnits="userSpaceOnUse">
      <path d="M0 6 L6 0" stroke="${C.cotton}" stroke-opacity="0.025" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="${w}" height="${h}" rx="22" fill="url(#bg)"/>
  <rect width="${w}" height="${h}" rx="22" fill="url(#grain)"/>`

// ---------------------------------------------------------------- hero.svg
{
  const W = 1280, H = 420
  const cols = 20, rows = 11, cell = 22, gap = 4, step = cell + gap
  const x0 = 704, y0 = Math.round((H - (rows * step - gap)) / 2)
  const sw = cols * step - gap, sh = rows * step - gap
  const stripe = ['s', 's', 't', 'b', 's', 't', 't', 's', 'b', 's', 's']
  const fill = { s: 'url(#ys)', t: 'url(#yt)', b: 'url(#yb)' }
  const cellGap = 0.017
  const rowStart = (r) => 0.9 + r * (cols * cellGap + 0.05) // a pass, then the shuttle turns

  let warp = ''
  for (let c = 0; c < cols; c++) {
    const x = x0 + c * step + cell / 2
    const d = r2(0.04 * c)
    warp += `<line class="warp" x1="${x}" y1="0" x2="${x}" y2="${H}" style="animation-delay:${d}s"/>`
  }

  let cells = ''
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const x = x0 + c * step, y = y0 + r * step
      const weftOnTop = (r + c) % 2 === 0
      const order = r % 2 === 0 ? c : cols - 1 - c // the shuttle goes back and forth
      const d = r2(rowStart(r) + order * cellGap)
      cells += weftOnTop
        ? `<rect class="cell" x="${x}" y="${y}" width="${cell}" height="${cell}" rx="4" fill="${fill[stripe[r]]}" style="animation-delay:${d}s"/>`
        : `<rect class="cell" x="${x + 6}" y="${y - 2}" width="${cell - 12}" height="${cell + 4}" rx="4" fill="url(#yw)" style="animation-delay:${d}s"/>`
    }
  }

  // Shuttle path: one pass per row, alternating direction.
  const total = rowStart(rows - 1) + cols * cellGap + 0.2
  const kf = []
  const pct = (t) => r2((t / total) * 100)
  kf.push(`0%{opacity:0;transform:translate(${x0 - 40}px,${y0 + cell / 2 - 4}px)}`)
  for (let r = 0; r < rows; r++) {
    const y = y0 + r * step + cell / 2 - 4
    const ltr = r % 2 === 0
    const a = ltr ? x0 - 40 : x0 + sw + 6
    const b = ltr ? x0 + sw + 6 : x0 - 40
    const t0 = rowStart(r), t1 = rowStart(r) + cols * cellGap
    kf.push(`${pct(t0)}%{opacity:1;transform:translate(${a}px,${y}px)}`)
    kf.push(`${pct(t1)}%{opacity:1;transform:translate(${b}px,${y}px)}`)
  }
  kf.push(`100%{opacity:0;transform:translate(${x0 + sw + 6}px,${y0 + (rows - 1) * step + cell / 2 - 4}px)}`)

  const feedY = y0 + 7 * step + cell / 2 // the name's thread feeds into row 8

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="t d">
  <title id="t">Jim William</title>
  <desc id="d">Business system auditor, analyst and developer. A woven swatch builds row by row, the way a loom weaves yarn into cloth.</desc>
  <style>
    .warp{stroke:${C.cotton};stroke-opacity:.16;stroke-width:2;stroke-dasharray:${H};stroke-dashoffset:0;animation:draw 1s ease-out both}
    .cell{animation:weave .35s ease-out both}
    .shuttle{opacity:0;animation:shuttle ${r2(total)}s linear both}
    .feed{stroke-dasharray:${x0 - 72};animation:feed 1.2s .4s cubic-bezier(.6,0,.2,1) both}
    .t1{animation:rise .8s .2s ease-out both}
    .t2{animation:rise .8s .55s ease-out both}
    .t3{animation:rise .8s .9s ease-out both}
    .t4{animation:rise .8s 1.2s ease-out both}
    .sheen{animation:sheen 7s ${r2(total + 0.6)}s ease-in-out infinite both}
    @keyframes draw{from{stroke-dashoffset:${H}}to{stroke-dashoffset:0}}
    @keyframes feed{from{stroke-dashoffset:${x0 - 72}}to{stroke-dashoffset:0}}
    @keyframes weave{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:none}}
    @keyframes rise{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
    @keyframes shuttle{${kf.join('')}}
    @keyframes sheen{0%{transform:translateX(-260px)}45%,100%{transform:translateX(${sw + 260}px)}}
    @media (prefers-reduced-motion: reduce){*{animation:none!important}.shuttle{display:none}}
  </style>
  ${background(W, H)}
  <defs>
    <linearGradient id="ys" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFD873"/><stop offset=".55" stop-color="${C.saffron}"/><stop offset="1" stop-color="#C98E12"/></linearGradient>
    <linearGradient id="yt" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#6FE0D2"/><stop offset=".55" stop-color="${C.teal}"/><stop offset="1" stop-color="#1B857A"/></linearGradient>
    <linearGradient id="yb" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#A9BCFF"/><stop offset=".55" stop-color="${C.blue}"/><stop offset="1" stop-color="#4560C2"/></linearGradient>
    <linearGradient id="yw" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#8E9BCB"/><stop offset=".5" stop-color="#DCE3F5"/><stop offset="1" stop-color="#8E9BCB"/></linearGradient>
    <linearGradient id="sheenFill" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stop-color="#fff" stop-opacity="0"/><stop offset=".5" stop-color="#fff" stop-opacity=".22"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
    <clipPath id="swatch"><rect x="${x0 - 6}" y="${y0 - 6}" width="${sw + 12}" height="${sh + 12}" rx="10"/></clipPath>
  </defs>

  <g>${warp}</g>
  <rect x="${x0 - 8}" y="${y0 - 8}" width="${sw + 16}" height="${sh + 16}" rx="12" fill="${C.ink}" fill-opacity=".55"/>
  <line class="feed" x1="72" y1="${feedY}" x2="${x0}" y2="${feedY}" stroke="${C.saffron}" stroke-width="4" stroke-linecap="round"/>
  <g>${cells}</g>
  <g clip-path="url(#swatch)"><g transform="translate(${x0 - 260} 0) skewX(-18) translate(${(y0 + sh / 2) * Math.tan((18 * Math.PI) / 180)} 0)"><rect class="sheen" x="0" y="${y0 - 10}" width="200" height="${sh + 20}" fill="url(#sheenFill)"/></g></g>
  <rect class="shuttle" width="44" height="8" rx="4" fill="${C.cotton}"/>

  <g font-family="${SANS}">
    <text class="t1" x="72" y="150" font-size="80" font-weight="700" letter-spacing="-1.5" fill="${C.cotton}">Jim William</text>
    <text class="t2" x="74" y="204" font-size="25" fill="${C.cotton}" fill-opacity=".82">Business system auditor, analyst &amp; developer</text>
  </g>
  <text class="t3" x="74" y="${feedY + 52}" font-family="${SERIF}" font-style="italic" font-size="23" fill="${C.cotton}" fill-opacity=".78">Operations run smoothly on a well-designed system.</text>
  <text class="t4" x="74" y="${feedY + 88}" font-family="${SANS}" font-size="16" fill="${C.cotton}" fill-opacity=".5">West Java, Indonesia</text>
</svg>
`
  writeFileSync(join(out, 'hero.svg'), svg)
}

// ------------------------------------------------------------- journey.svg
{
  const W = 1280, H = 380
  const steps = [
    ['2010', 'Diploma, Hotel Management', 'LPT Panghegar Bandung'],
    ['2012', 'Asset Management', 'Panghegar Group'],
    ['2014', 'Secretary of the Synod', 'GKIm, Bandung'],
    ['2014', 'HR &amp; General Affairs', 'Dialogue Management Group'],
    ['2016', 'Regional Manager', 'Dialogue Management Group'],
    ['2017', 'General Affairs Staff', 'Cahaya Bangsa Classical School'],
    ['2019', 'General Affairs Supervisor', 'Cahaya Bangsa Classical School'],
    ['2023', 'System Analyst &amp; Developer', 'Cahaya Bangsa Classical School'],
    ['2026', 'Business System Auditor', 'PT Heksatex Indah'],
  ]
  const xa = 150, xb = 1130, cy = 190
  const sx = (xb - xa) / (steps.length - 1)
  const pts = steps.map((_, i) => [r2(xa + i * sx), i % 2 === 0 ? cy - 12 : cy + 12])
  const start = [60, cy], end = [W - 60, cy]
  const all = [start, ...pts, end]
  let d = `M${all[0][0]} ${all[0][1]}`
  for (let i = 1; i < all.length; i++) {
    const [px, py] = all[i - 1], [x, y] = all[i]
    const k = (x - px) / 2
    d += ` C${r2(px + k)} ${py} ${r2(x - k)} ${y} ${x} ${y}`
  }
  const dur = 4.2
  const at = (x) => r2(0.2 + (dur * (x - start[0])) / (end[0] - start[0]))
  const shift = (pts[7][0] - start[0]) / (end[0] - start[0]) // 2023: operations to systems

  let nodes = ''
  steps.forEach(([year, role, org], i) => {
    const [x, y] = pts[i]
    const up = i % 2 === 0
    const col = i >= 7 ? C.teal : C.saffron
    const delay = at(x)
    const last = i === steps.length - 1
    const ty = up ? [96, 120, 141] : [262, 286, 307]
    const tick = up ? [150, y - 12] : [y + 12, 244]
    nodes += `
    <g class="node" style="animation-delay:${delay}s">
      <line x1="${x}" y1="${tick[0]}" x2="${x}" y2="${tick[1]}" stroke="${C.cotton}" stroke-opacity=".22" stroke-width="1.5" stroke-dasharray="3 4"/>
      ${last ? `<circle class="pulse" cx="${x}" cy="${y}" r="11" fill="none" stroke="${col}" stroke-width="2"/>` : ''}
      <circle cx="${x}" cy="${y}" r="10" fill="${C.ink}" stroke="${col}" stroke-width="3"/>
      <circle cx="${x}" cy="${y}" r="3.5" fill="${col}"/>
      <text x="${x}" y="${ty[0]}" text-anchor="middle" font-size="20" font-weight="700" fill="${col}">${year}</text>
      <text x="${x}" y="${ty[1]}" text-anchor="middle" font-size="15" font-weight="600" fill="${C.cotton}" fill-opacity=".92">${role}</text>
      <text x="${x}" y="${ty[2]}" text-anchor="middle" font-size="13" fill="${C.cotton}" fill-opacity=".55">${org}</text>
    </g>`
  })

  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" role="img" aria-labelledby="t d">
  <title id="t">Career journey</title>
  <desc id="d">From hotel management in 2010 through asset management, HR and general affairs, regional management and facilities supervision, to system analyst and developer in 2023 and business system auditor in 2026.</desc>
  <style>
    .thread{stroke-dasharray:2400;animation:draw ${dur}s .2s cubic-bezier(.45,0,.25,1) both}
    .node{animation:pop .5s ease-out both}
    .pulse{transform-box:fill-box;transform-origin:center;animation:pulse 2.4s ${r2(at(pts[8][0]) + 0.6)}s ease-out infinite both}
    .cap{animation:fade 1s ${r2(dur + 0.3)}s ease-out both}
    @keyframes draw{from{stroke-dashoffset:2400}to{stroke-dashoffset:0}}
    @keyframes pop{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:none}}
    @keyframes pulse{0%{opacity:.9;transform:scale(1)}80%,100%{opacity:0;transform:scale(2.4)}}
    @keyframes fade{from{opacity:0}to{opacity:1}}
    @media (prefers-reduced-motion: reduce){*{animation:none!important}.pulse{display:none}}
  </style>
  ${background(W, H)}
  <defs>
    <linearGradient id="thread" gradientUnits="userSpaceOnUse" x1="${start[0]}" y1="0" x2="${end[0]}" y2="0">
      <stop offset="0" stop-color="${C.saffron}"/>
      <stop offset="${r2(shift - 0.06)}" stop-color="${C.saffron}"/>
      <stop offset="${r2(shift + 0.02)}" stop-color="${C.teal}"/>
      <stop offset="1" stop-color="${C.teal}"/>
    </linearGradient>
  </defs>
  <path d="${d}" fill="none" stroke="${C.cotton}" stroke-opacity=".07" stroke-width="10" stroke-linecap="round"/>
  <path class="thread" d="${d}" fill="none" stroke="url(#thread)" stroke-width="4" stroke-linecap="round"/>
  <g font-family="${SANS}">${nodes}
    <g class="cap" font-size="14">
      <text x="60" y="352" fill="${C.saffron}" fill-opacity=".85">Hospitality, operations and facilities</text>
      <text x="${W - 60}" y="352" text-anchor="end" fill="${C.teal}">Systems and software</text>
    </g>
  </g>
</svg>
`
  writeFileSync(join(out, 'journey.svg'), svg)
}

console.log('written to', out)
