import type { IconDefinition } from './types.ts';
import { renderIconOverride } from './icon-overrides.ts';

function wrap(body: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${body}</svg>`;
}

function seed(def: IconDefinition): number {
  return def.seed ?? 1;
}

function dur(def: IconDefinition, base = 1.6): number {
  const s = seed(def);
  return Number((base + (s % 7) * 0.15).toFixed(2));
}

export function renderIcon(def: IconDefinition): string {
  if (def.customSvg) {
    return def.customSvg;
  }

  const override = renderIconOverride(def);
  if (override) {
    return override;
  }

  const s = seed(def);
  const d = dur(def);

  switch (def.template) {
    case 'sine-wave':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-dasharray:32;animation:a ${d}s ease-in-out infinite}.p{fill:currentColor;animation:b ${d}s ease-in-out infinite}@keyframes a{0%,100%{stroke-dashoffset:32}50%{stroke-dashoffset:0}}@keyframes b{0%{transform:translate(3px,12px)}50%{transform:translate(12px,${10 - (s % 3)}px)}100%{transform:translate(21px,12px)}}</style><path class="w" d="M3 12c2-${5 + (s % 3)} 4-${5 + (s % 3)} 6 0s4 ${5 + (s % 3)} 6 0 4-${5 + (s % 3)} 6 0"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'cosine-wave':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;animation:a ${d}s ease-in-out infinite}.p{fill:currentColor;animation:b ${d}s ease-in-out infinite}@keyframes a{0%,100%{transform:translateY(2px)}50%{transform:translateY(-2px)}}@keyframes b{0%{transform:translate(4px,8px)}50%{transform:translate(12px,14px)}100%{transform:translate(20px,8px)}}</style><path class="w" d="M3 12c2 4 4 4 6 0s4-4 6 0 4 4 6 0"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'lissajous':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:o ${d + 0.4}s linear infinite;transform-origin:12px 12px}@keyframes o{0%{transform:rotate(0deg) translate(${6 + (s % 3)}px) rotate(0deg)}100%{transform:rotate(360deg) translate(${6 + (s % 3)}px) rotate(-360deg)}}</style><ellipse class="c" cx="12" cy="12" rx="${7 + (s % 2)}" ry="${5 + (s % 3)}"/><circle class="p" cx="12" cy="12" r="2"/>`);

    case 'rose-curve':
      return wrap(`<style>.r{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.4}.p{fill:currentColor;animation:o ${d}s linear infinite;transform-origin:12px 12px}@keyframes o{0%{transform:rotate(0deg) translate(${5 + (s % 4)}px)}100%{transform:rotate(360deg) translate(${5 + (s % 4)}px)}}</style><circle class="r" cx="12" cy="12" r="${4 + (s % 3)}"/><circle class="p" cx="19" cy="12" r="1.75"/>`);

    case 'orbit-circle':
      return wrap(`<style>.r{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:o ${d}s linear infinite;transform-origin:12px 12px}@keyframes o{0%{transform:rotate(0deg) translate(${6 + (s % 2)}px)}100%{transform:rotate(360deg) translate(${6 + (s % 2)}px)}}</style><circle class="r" cx="12" cy="12" r="${6 + (s % 3)}"/><circle class="p" cx="18" cy="12" r="2"/>`);

    case 'orbit-ellipse':
      return wrap(`<style>.r{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.c{fill:currentColor}.p{fill:currentColor;animation:e ${d}s linear infinite}@keyframes e{0%{transform:translate(${6 + (s % 2)}px,0)}25%{transform:translate(0,${2 + (s % 2)}px)}50%{transform:translate(-${6 + (s % 2)}px,0)}75%{transform:translate(0,-${2 + (s % 2)}px)}100%{transform:translate(${6 + (s % 2)}px,0)}}</style><ellipse class="r" cx="12" cy="12" rx="${7 + (s % 2)}" ry="${4 + (s % 3)}"/><circle class="c" cx="12" cy="12" r="1.75"/><circle class="p" cx="18" cy="12" r="1.5"/>`);

    case 'pendulum':
      return wrap(`<style>.pv{fill:currentColor}.sw{transform-origin:12px 5px;animation:s ${d}s ease-in-out infinite}.ar{stroke:currentColor;stroke-width:1.5;stroke-linecap:round}.bb{fill:currentColor}@keyframes s{0%,100%{transform:rotate(-${24 + (s % 8)}deg)}50%{transform:rotate(${24 + (s % 8)}deg)}}</style><circle class="pv" cx="12" cy="5" r="1.5"/><g class="sw"><line class="ar" x1="12" y1="5" x2="12" y2="17"/><circle class="bb" cx="12" cy="17" r="2.5"/></g>`);

    case 'spring-oscillator':
      return wrap(`<style>.sp{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;animation:st ${d}s ease-in-out infinite;transform-origin:4px 12px}.ms{fill:currentColor;animation:os ${d}s ease-in-out infinite}@keyframes st{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.${15 + (s % 5)})}}@keyframes os{0%,100%{transform:translateX(0)}50%{transform:translateX(${4 + (s % 3)}px)}}</style><path class="sp" d="M4 12h2l1-2 1 4 1-4 1 4 1-4 1 4h2"/><rect class="ms" x="${15 + (s % 2)}" y="9" width="4" height="6" rx="1"/>`);

    case 'exponential-decay':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round}.b{fill:currentColor;transform-origin:center bottom;animation:dc ${d}s ease-in-out infinite}@keyframes dc{0%,100%{transform:scaleY(1);opacity:1}50%{transform:scaleY(.25);opacity:.3}}</style><path class="c" d="M3 5c3 0 5 2 7 8s4 9 11 9"/><rect class="b" x="4" y="10" width="2" height="8" rx=".5" style="animation-delay:0s"/><rect class="b" x="8" y="12" width="2" height="6" rx=".5" style="animation-delay:.2s"/><rect class="b" x="12" y="14" width="2" height="4" rx=".5" style="animation-delay:.4s"/><rect class="b" x="16" y="16" width="2" height="2" rx=".5" style="animation-delay:.6s"/>`);

    case 'logistic-curve':
      return wrap(`<style>.g{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-dasharray:28;animation:gr ${d}s ease-in-out infinite}.p{fill:currentColor;animation:mv ${d}s ease-in-out infinite}@keyframes gr{0%{stroke-dashoffset:28}60%,100%{stroke-dashoffset:0}}@keyframes mv{0%{transform:translate(4px,18px)}60%,100%{transform:translate(18px,8px)}}</style><path class="g" d="M3 18c0-2 2-8 9-8s9 6 9 8"/><circle class="p" cx="0" cy="0" r="1.75"/>`);

    case 'gaussian-bell':
      return wrap(`<style>.b{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-dasharray:34;animation:dr ${d}s ease-in-out infinite}.s{fill:currentColor;animation:sc ${d}s ease-in-out infinite}@keyframes dr{0%,100%{stroke-dashoffset:34}50%{stroke-dashoffset:0}}@keyframes sc{0%{transform:translate(4px,16px)}50%{transform:translate(12px,7px)}100%{transform:translate(20px,16px)}}</style><path class="b" d="M3 18c2-10 4-12 9-12s7 2 9 12"/><circle class="s" cx="0" cy="0" r="1.75"/>`);

    case 'taylor-series':
      return wrap(`<style>.t{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;animation:st 2.4s ease-in-out infinite}@keyframes st{0%,100%{opacity:.25}20%,70%{opacity:1}}</style><path class="t" d="M3 17c0-4 3-7 9-7" style="animation-delay:0s"/><path class="t" d="M3 17c1-7 4-10 9-10s6 2 9 5" style="animation-delay:.4s"/><path class="t" d="M3 17c2-10 5-13 9-13s7 3 9 10" style="animation-delay:.8s"/>`);

    case 'fourier-bars':
      return wrap(`<style>.b{fill:currentColor;transform-origin:center bottom;animation:sc ${d}s ease-in-out infinite}@keyframes sc{0%,100%{transform:scaleY(.35);opacity:.35}50%{transform:scaleY(1);opacity:1}}</style><rect class="b" x="3" y="14" width="2.5" height="7" rx=".5" style="animation-delay:0s"/><rect class="b" x="7" y="10" width="2.5" height="11" rx=".5" style="animation-delay:.15s"/><rect class="b" x="11" y="6" width="2.5" height="15" rx=".5" style="animation-delay:.3s"/><rect class="b" x="15" y="10" width="2.5" height="11" rx=".5" style="animation-delay:.45s"/><rect class="b" x="19" y="14" width="2.5" height="7" rx=".5" style="animation-delay:.6s"/>`);

    case 'hyperbola-branch':
      return wrap(`<style>.a{stroke:currentColor;stroke-width:1;opacity:.25;stroke-dasharray:2 2}.b{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-dasharray:24;animation:rv ${d}s ease-in-out infinite}.p{fill:currentColor;animation:cl ${d}s ease-in-out infinite}@keyframes rv{0%,100%{stroke-dashoffset:24}50%{stroke-dashoffset:0}}@keyframes cl{0%{transform:translate(16px,18px)}50%{transform:translate(10px,10px)}100%{transform:translate(7px,7px)}}</style><line class="a" x1="6" y1="4" x2="20" y2="20"/><path class="b" d="M16 18c-2-4-4-8-9-11"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'parabola-bowl':
      return wrap(`<style>.b{fill:none;stroke:currentColor;stroke-width:1.75;opacity:.45}.p{fill:currentColor;animation:ds ${d}s ease-in-out infinite}@keyframes ds{0%{transform:translate(5px,9px)}50%{transform:translate(12px,15px)}100%{transform:translate(19px,9px)}}</style><path class="b" d="M4 10c2 8 4 10 8 10s6-2 8-10"/><circle class="p" cx="0" cy="0" r="2"/>`);

    case 'projectile-arc':
      return wrap(`<style>.a{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.35}.p{fill:currentColor;animation:fl ${d}s ease-in-out infinite}@keyframes fl{0%{transform:translate(4px,17px)}25%{transform:translate(9px,9px)}50%{transform:translate(14px,7px)}75%{transform:translate(19px,11px)}100%{transform:translate(4px,17px)}}</style><line x1="3" y1="18" x2="21" y2="18" stroke="currentColor" stroke-width="1.25" opacity=".25"/><path class="a" d="M4 17q5-12 10 0t6-4"/><circle class="p" cx="0" cy="0" r="2"/>`);

    case 'cycloid-roll':
      return wrap(`<style>.t{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.35}.w{fill:none;stroke:currentColor;stroke-width:1.25;animation:rl ${d}s linear infinite}.p{fill:currentColor;animation:tr ${d}s linear infinite}@keyframes rl{0%{transform:translate(4px,14px) rotate(0deg)}100%{transform:translate(18px,14px) rotate(360deg)}}@keyframes tr{0%{transform:translate(4px,8px)}50%{transform:translate(14px,8px)}100%{transform:translate(4px,8px)}}</style><path class="t" d="M4 8c3-4 6-4 10 0s6 4 10 0"/><line x1="3" y1="17" x2="21" y2="17" stroke="currentColor" stroke-width="1.25" opacity=".35"/><g class="w"><circle cx="0" cy="0" r="3"/><circle cx="0" cy="-3" r="1.25" fill="currentColor"/></g><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'catenary-sag':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round}.t{animation:t 2s ease-in-out infinite}.l{animation:l 2s ease-in-out infinite}.a{fill:currentColor}@keyframes t{0%,100%{opacity:1}50%{opacity:0}}@keyframes l{0%,100%{opacity:0}50%{opacity:1}}</style><circle class="a" cx="4" cy="6" r="1.5"/><circle class="a" cx="20" cy="6" r="1.5"/><path class="c t" d="M4 6c4 8 12 8 16 0"/><path class="c l" d="M4 6c4 12 12 12 16 0"/>`);

    case 'gradient-descent':
      return wrap(`<style>.b{fill:none;stroke:currentColor;stroke-width:1.75;opacity:.45}.p{fill:currentColor;animation:ds ${d}s ease-in-out infinite}@keyframes ds{0%{transform:translate(5px,9px)}35%{transform:translate(12px,15px)}55%{transform:translate(16px,11px)}100%{transform:translate(12px,15px)}}</style><path class="b" d="M4 10c2 8 4 10 8 10s6-2 8-10"/><circle class="p" cx="0" cy="0" r="2"/>`);

    case 'wave-interference':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.25;stroke-linecap:round}.s{stroke-width:1.75;animation:bt ${d}s ease-in-out infinite}@keyframes bt{0%,100%{opacity:.45}50%{opacity:1}}</style><path class="w" d="M3 10c2-3 4-3 6 0s4 3 6 0 4-3 6 0" opacity=".4"/><path class="w" d="M3 14c2 3 4 3 6 0s4-3 6 0 4 3 6 0" opacity=".4"/><path class="w s" d="M3 12c1.5-5 3-5 4.5 0s3 5 4.5 0 3-5 4.5 0 3 5 4.5 0"/>`);

    case 'standing-wave':
      return wrap(`<style>.n{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.35}.s{stroke-width:1.75;animation:pu ${d}s ease-in-out infinite}@keyframes pu{0%,100%{transform:scaleY(.6)}50%{transform:scaleY(1)}}</style><line x1="3" y1="12" x2="21" y2="12" stroke="currentColor" stroke-width="1" opacity=".25"/><path class="n" d="M3 12h18"/><path class="s" d="M3 12c2-6 4-6 6 0s4 6 6 0 4-6 6 0" fill="none" stroke="currentColor" stroke-linecap="round" style="transform-origin:12px 12px"/>`);

    case 'beat-frequency':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;animation:bt ${d}s ease-in-out infinite}@keyframes bt{0%,100%{opacity:.35}50%{opacity:1}}</style><path class="w" d="M3 12c1-4 2-4 3 0s2 4 3 0 2-4 3 0 2 4 3 0 2-4 3 0 2 4 3 0"/>`);

    case 'doppler-shift':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.25;stroke-linecap:round}.l{animation:lf ${d}s ease-in-out infinite}.r{animation:rt ${d}s ease-in-out infinite}.p{fill:currentColor}@keyframes lf{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.25)}}@keyframes rt{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.75)}}</style><circle class="p" cx="12" cy="12" r="2"/><path class="w l" d="M3 10c2-2 4-2 6 0"/><path class="w r" d="M15 14c2 2 4 2 6 0"/>`);

    case 'double-slit':
      return wrap(`<style>.b{fill:currentColor;opacity:.7}.f{fill:currentColor;animation:fr ${d}s ease-in-out infinite}@keyframes fr{0%,100%{opacity:.2;transform:scaleY(.5)}50%{opacity:1;transform:scaleY(1)}}</style><rect class="b" x="4" y="4" width="2" height="6" rx=".5"/><rect class="b" x="4" y="14" width="2" height="6" rx=".5"/><rect class="f" x="10" y="6" width="1.5" height="12" rx=".5" style="animation-delay:0s"/><rect class="f" x="13" y="6" width="1.5" height="12" rx=".5" style="animation-delay:.2s"/><rect class="f" x="16" y="6" width="1.5" height="12" rx=".5" style="animation-delay:.4s"/><rect class="f" x="19" y="6" width="1.5" height="12" rx=".5" style="animation-delay:.6s"/>`);

    case 'brownian-motion':
      return wrap(`<style>.p{fill:currentColor;animation:jt 2.2s steps(1,end) infinite}@keyframes jt{0%{transform:translate(12px,12px)}20%{transform:translate(${12 + (s % 3)}px,${10 + (s % 2)}px)}40%{transform:translate(${10 + (s % 2)}px,${14 + (s % 2)}px)}60%{transform:translate(${15 + (s % 2)}px,${13 + (s % 2)}px)}80%{transform:translate(${9 + (s % 2)}px,${11 + (s % 2)}px)}100%{transform:translate(12px,12px)}}</style><circle class="p" cx="0" cy="0" r="2"/>`);

    case 'light-cone':
      return wrap(`<style>.x{stroke:currentColor;stroke-width:1;opacity:.25}.r{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;transform-origin:12px 14px;animation:ex ${d}s ease-in-out infinite}.e{fill:currentColor}@keyframes ex{0%,100%{transform:scaleY(.65);opacity:.35}50%{transform:scaleY(1);opacity:1}}</style><line class="x" x1="12" y1="3" x2="12" y2="21"/><line class="x" x1="4" y1="14" x2="20" y2="14"/><line class="r" x1="12" y1="14" x2="18" y2="5"/><line class="r" x1="12" y1="14" x2="6" y2="5" style="animation-delay:.2s"/><circle class="e" cx="12" cy="14" r="2"/>`);

    case 'pythagorean-pulse':
      return wrap(`<style>.t{fill:none;stroke:currentColor;stroke-width:1.5}.s{fill:currentColor;animation:pu 1.8s ease-in-out infinite}@keyframes pu{0%,100%{opacity:.25;transform:scale(.85)}50%{opacity:.9;transform:scale(1)}}</style><path class="t" d="M5 18L5 11L12 18Z"/><rect class="s" x="5" y="18" width="7" height="2" rx=".4" style="animation-delay:0s"/><rect class="s" x="3" y="11" width="2" height="7" rx=".4" style="animation-delay:.3s"/><rect class="s" x="12" y="16" width="5" height="5" rx=".4" style="animation-delay:.6s"/>`);

    case 'phasor-rotate':
      return wrap(`<style>.r{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.g{transform-origin:12px 12px;animation:sp ${d}s linear infinite}.l{stroke:currentColor;stroke-width:1.5;stroke-linecap:round}.d{fill:currentColor}@keyframes sp{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><circle class="r" cx="12" cy="12" r="7"/><g class="g"><line class="l" x1="12" y1="12" x2="19" y2="12"/><circle class="d" cx="19" cy="12" r="2"/></g>`);

    case 'field-divergence':
      return wrap(`<style>.a{stroke:currentColor;stroke-width:1.25;stroke-linecap:round;animation:dv ${d}s ease-in-out infinite}@keyframes dv{0%,100%{opacity:.3;transform:scale(.8)}50%{opacity:1;transform:scale(1.1)}}</style><circle cx="12" cy="12" r="1.5" fill="currentColor"/><line class="a" x1="12" y1="12" x2="12" y2="5" style="transform-origin:12px 12px"/><line class="a" x1="12" y1="12" x2="18" y2="12" style="animation-delay:.1s"/><line class="a" x1="12" y1="12" x2="12" y2="19" style="animation-delay:.2s"/><line class="a" x1="12" y1="12" x2="6" y2="12" style="animation-delay:.3s"/>`);

    case 'field-curl':
      return wrap(`<style>.a{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-dasharray:20;animation:cr ${d}s linear infinite}@keyframes cr{0%{stroke-dashoffset:20}100%{stroke-dashoffset:-20}}</style><path class="a" d="M8 12c0-3 2-5 4-5s4 2 4 5-2 5-4 5"/>`);

    case 'precession-wobble':
      return wrap(`<style>.a{stroke:currentColor;stroke-width:1.5;transform-origin:12px 12px;animation:pr ${d}s ease-in-out infinite}.c{fill:currentColor}@keyframes pr{0%,100%{transform:rotate(-12deg)}50%{transform:rotate(12deg)}}</style><circle class="c" cx="12" cy="12" r="2"/><line class="a" x1="12" y1="12" x2="12" y2="5"/><ellipse cx="12" cy="12" rx="7" ry="3" fill="none" stroke="currentColor" stroke-width="1" opacity=".3"/>`);

    case 'skip-glide-trajectory':
      return wrap(`<style>.p{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.35}.b{fill:currentColor;animation:sg ${d + 0.8}s ease-in-out infinite}.a{fill:currentColor;opacity:.25}@keyframes sg{0%{transform:translate(3px,18px)}20%{transform:translate(8px,6px)}40%{transform:translate(13px,12px)}60%{transform:translate(17px,9px)}80%{transform:translate(20px,14px)}100%{transform:translate(3px,18px)}}</style><path class="a" d="M2 16h20" opacity=".25"/><path class="p" d="M3 18Q7 4 11 8Q14 11 16 9Q18 7 21 16"/><circle class="b" cx="0" cy="0" r="2"/>`);

    case 'hohmann-transfer':
      return wrap(`<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.t{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:18;animation:tr ${d}s ease-in-out infinite}.p{fill:currentColor;animation:mv ${d}s ease-in-out infinite}@keyframes tr{0%{stroke-dashoffset:18}100%{stroke-dashoffset:0}}@keyframes mv{0%{transform:translate(6px,0)}50%{transform:translate(14px,-4px)}100%{transform:translate(18px,0)}}</style><circle class="o" cx="12" cy="12" r="4"/><circle class="o" cx="12" cy="12" r="8"/><path class="t" d="M6 12c4-8 8-8 12 0"/><circle class="p" cx="6" cy="12" r="1.75"/>`);

    case 'rocket-thrust':
      return wrap(`<style>.h{fill:currentColor}.b{fill:none;stroke:currentColor;stroke-width:1.25}.m{fill:currentColor;transform-origin:11px 15px;animation:ms ${d}s ease-in-out infinite}.f{fill:currentColor;transform-origin:11px 18px;animation:ex ${d}s ease-in-out infinite}.v{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;animation:dv ${d}s ease-in-out infinite}.p{fill:currentColor;opacity:.55;animation:ej ${d}s ease-in-out infinite}@keyframes ms{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.3)}}@keyframes ex{0%,100%{opacity:.3;transform:scaleY(.55)}50%{opacity:1;transform:scaleY(1)}}@keyframes dv{0%,100%{transform:scaleY(.45);opacity:.35}50%{transform:scaleY(1);opacity:1}}@keyframes ej{0%{transform:translate(9px,14px);opacity:0}35%{opacity:.75}100%{transform:translate(9px,21px);opacity:0}}</style><path class="h" d="M10 5 L14 5 L12 8 Z"/><rect class="b" x="10" y="8" width="4" height="5" rx=".5"/><rect class="m" x="10.5" y="13" width="3" height="4" rx=".4"/><rect class="f" x="9" y="18" width="1.5" height="2.5" rx=".3"/><rect class="f" x="12.5" y="18" width="1.5" height="2.5" rx=".3" style="animation-delay:.12s"/><line class="v" x1="19" y1="17" x2="19" y2="7" style="transform-origin:19px 17px"/><polyline class="v" points="17,9 19,6 21,9" fill="none"/><circle class="p" cx="0" cy="0" r=".9"/><circle class="p" cx="0" cy="0" r=".9" style="animation-delay:.5s"/>`);

    case 'gravitational-wave':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.25;animation:ri ${d}s ease-in-out infinite}@keyframes ri{0%,100%{transform:scale(.9);opacity:.35}50%{transform:scale(1.08);opacity:1}}</style><ellipse class="w" cx="12" cy="12" rx="8" ry="4" style="transform-origin:12px 12px"/><ellipse class="w" cx="12" cy="12" rx="6" ry="5" style="animation-delay:.2s;transform-origin:12px 12px"/>`);

    case 'gravitational-lens':
      return wrap(`<style>.s{fill:currentColor}.b{stroke:currentColor;stroke-width:1.25;fill:none;animation:bn ${d}s ease-in-out infinite}@keyframes bn{0%,100%{opacity:.35;transform:translateY(0)}50%{opacity:1;transform:translateY(1px)}}</style><circle class="s" cx="12" cy="12" r="2.5"/><path class="b" d="M6 8c3 8 9 8 12 0"/><path class="b" d="M6 16c3-8 9-8 12 0" style="animation-delay:.2s"/>`);

    case 'accretion-disk':
      return wrap(`<style>.d{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:16;animation:sp ${d}s linear infinite}.c{fill:currentColor}@keyframes sp{0%{stroke-dashoffset:16}100%{stroke-dashoffset:-16}}</style><circle class="c" cx="12" cy="12" r="2"/><ellipse class="d" cx="12" cy="12" rx="9" ry="3"/>`);

    case 'pulsar-beam':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;transform-origin:12px 12px;animation:sw ${d}s linear infinite}.c{fill:currentColor}@keyframes sw{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><circle class="c" cx="12" cy="12" r="2"/><line class="b" x1="12" y1="12" x2="12" y2="3"/><line class="b" x1="12" y1="12" x2="12" y2="21" style="animation-delay:.1s"/>`);

    case 'planetary-ring':
      return wrap(`<style>.r{fill:none;stroke:currentColor;stroke-width:1.25;animation:tu ${d}s linear infinite}.p{fill:currentColor}@keyframes tu{0%{stroke-dashoffset:0}100%{stroke-dashoffset:24}}</style><circle class="p" cx="12" cy="12" r="3"/><ellipse class="r" cx="12" cy="12" rx="9" ry="4" stroke-dasharray="6 3"/>`);

    case 'comet-tail':
      return wrap(`<style>.h{fill:currentColor}.t{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-dasharray:14;animation:ta ${d}s ease-in-out infinite}@keyframes ta{0%{stroke-dashoffset:14;opacity:.35}100%{stroke-dashoffset:0;opacity:1}}</style><circle class="h" cx="8" cy="10" r="2.5"/><path class="t" d="M10 10c4 1 8 3 14 8"/>`);

    case 'tidal-bulge':
      return wrap(`<style>.p{fill:currentColor}.b{fill:currentColor;animation:td ${d}s ease-in-out infinite}@keyframes td{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.25)}}</style><ellipse class="p" cx="12" cy="12" rx="4" ry="4"/><ellipse class="b" cx="7" cy="12" rx="2" ry="3"/><ellipse class="b" cx="17" cy="12" rx="2" ry="3"/>`);

    case 'aurora-curtain':
      return wrap(`<style>.a{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;animation:au ${d}s ease-in-out infinite}@keyframes au{0%,100%{opacity:.3;transform:translateY(2px)}50%{opacity:1;transform:translateY(-2px)}}</style><path class="a" d="M4 16c2-8 4-10 6-4s4 8 6 0 4-6 6-2"/>`);

    case 'hubble-expansion':
      return wrap(`<style>.d{fill:currentColor;animation:ex ${d}s ease-in-out infinite}@keyframes ex{0%,100%{transform:translate(0,0) scale(1);opacity:.35}50%{transform:translate(${1 + (s % 2)}px,-${1 + (s % 2)}px) scale(1.2);opacity:1}}</style><circle class="d" cx="12" cy="12" r="1.5"/><circle class="d" cx="8" cy="14" r="1" style="animation-delay:.2s"/><circle class="d" cx="16" cy="10" r="1" style="animation-delay:.4s"/><circle class="d" cx="10" cy="8" r="1" style="animation-delay:.6s"/>`);

    case 'redshift-spectrum':
      return wrap(`<style>.b{fill:currentColor;animation:sh ${d}s ease-in-out infinite}@keyframes sh{0%,100%{transform:translateX(0)}50%{transform:translateX(3px)}}</style><rect class="b" x="4" y="10" width="2" height="4" rx=".5"/><rect class="b" x="8" y="9" width="2" height="6" rx=".5" style="animation-delay:.1s"/><rect class="b" x="12" y="8" width="2" height="8" rx=".5" style="animation-delay:.2s"/><rect class="b" x="16" y="7" width="2" height="10" rx=".5" style="animation-delay:.3s"/>`);

    case 'schrodinger-packet':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.75;animation:dr ${d}s ease-in-out infinite}@keyframes dr{0%,100%{transform:translateX(-2px);opacity:.45}50%{transform:translateX(2px);opacity:1}}</style><path class="w" d="M4 12 C6 9 8 9 10 12 S14 15 18 12 S20 9 20 12"/>`);

    case 'spin-precession':
      return wrap(`<style>.s{fill:currentColor;animation:sp ${d}s linear infinite;transform-origin:12px 12px}.a{stroke:currentColor;stroke-width:1.25;animation:pr ${d * 2}s ease-in-out infinite;transform-origin:12px 12px}@keyframes sp{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes pr{0%,100%{transform:rotate(-15deg)}50%{transform:rotate(15deg)}}</style><line class="a" x1="12" y1="12" x2="12" y2="5"/><circle class="s" cx="12" cy="5" r="1.5"/>`);

    case 'energy-levels':
      return wrap(`<style>.l{stroke:currentColor;stroke-width:1.5}.e{fill:currentColor;animation:ju ${d}s ease-in-out infinite}@keyframes ju{0%,100%{transform:translateY(6px)}50%{transform:translateY(-4px)}}</style><line class="l" x1="5" y1="8" x2="19" y2="8"/><line class="l" x1="5" y1="12" x2="19" y2="12"/><line class="l" x1="5" y1="16" x2="19" y2="16"/><circle class="e" cx="12" cy="16" r="1.75"/>`);

    case 'tunnel-barrier':
      return wrap(`<style>.b{fill:currentColor;opacity:.5}.p{fill:currentColor;animation:tn ${d}s ease-in-out infinite}@keyframes tn{0%,100%{transform:translate(4px,12px);opacity:.35}50%{transform:translate(20px,12px);opacity:1}}</style><rect class="b" x="10" y="6" width="4" height="12" rx=".5"/><circle class="p" cx="0" cy="0" r="1.75"/>`);

    case 'maxwell-rotate':
      return wrap(`<style>.e{stroke:currentColor;stroke-width:1.25;transform-origin:12px 12px;animation:rt ${d}s linear infinite}.m{stroke:currentColor;stroke-width:1.25;animation:rt ${d}s linear infinite reverse}@keyframes rt{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><circle cx="12" cy="12" r="6" fill="none" stroke="currentColor" stroke-width="1" opacity=".3"/><line class="e" x1="6" y1="12" x2="18" y2="12"/><line class="m" x1="12" y1="6" x2="12" y2="18"/>`);

    case 'faraday-loop':
      return wrap(`<style>.l{fill:none;stroke:currentColor;stroke-width:1.5}.f{stroke-dasharray:20;animation:lp ${d}s linear infinite}@keyframes lp{0%{stroke-dashoffset:20}100%{stroke-dashoffset:-20}}</style><rect class="l" x="6" y="7" width="12" height="10" rx="1"/><path class="l f" d="M12 7v-3M12 17v3"/>`);

    case 'rlc-oscillation':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.5;animation:os ${d}s ease-in-out infinite}@keyframes os{0%,100%{transform:scaleY(.5)}50%{transform:scaleY(1)}}</style><path class="w" d="M3 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0" style="transform-origin:12px 12px"/>`);

    case 'bernoulli-flow':
      return wrap(`<style>.p{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round}.n{animation:fl ${d}s ease-in-out infinite}@keyframes fl{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.6)}}</style><path class="p n" d="M3 8h18M3 16h18"/><path class="p" d="M8 8v8M16 8v8" opacity=".35"/>`);

    case 'vortex-flow':
      return wrap(`<style>.v{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-dasharray:18;animation:sp ${d}s linear infinite}@keyframes sp{0%{stroke-dashoffset:18}100%{stroke-dashoffset:-18}}</style><path class="v" d="M12 12c-4-2-6-6-2-8s8 0 6 4-8 4-4 4"/>`);

    case 'shock-compression':
      return wrap(`<style>.l{stroke:currentColor;stroke-width:1.5;animation:cp ${d}s ease-in-out infinite}@keyframes cp{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}</style><line class="l" x1="4" y1="8" x2="4" y2="16"/><line class="l" x1="8" y1="9" x2="8" y2="15" style="animation-delay:.1s"/><line class="l" x1="12" y1="10" x2="12" y2="14" style="animation-delay:.2s"/><line class="l" x1="16" y1="11" x2="16" y2="13" style="animation-delay:.3s"/>`);

    case 'heat-diffusion':
      return wrap(`<style>.c{fill:currentColor;animation:df ${d}s ease-in-out infinite}@keyframes df{0%,100%{opacity:.25;r:1.5}50%{opacity:1;r:3}}</style><circle class="c" cx="12" cy="12" r="2"/><circle class="c" cx="12" cy="12" r="5" fill="none" stroke="currentColor" stroke-width="1" style="animation-delay:.2s"/>`);

    case 'carnot-cycle':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:30;animation:cy ${d}s linear infinite}@keyframes cy{0%{stroke-dashoffset:30}100%{stroke-dashoffset:0}}</style><rect class="c" x="6" y="7" width="12" height="10" rx="1"/>`);

    case 'entropy-spread':
      return wrap(`<style>.p{fill:currentColor;animation:sp ${d}s ease-in-out infinite}@keyframes sp{0%,100%{transform:translate(0,0)}50%{transform:translate(${(s%3)-1}px,${(s%2)}px)}}</style><circle class="p" cx="10" cy="10" r="1.2"/><circle class="p" cx="14" cy="10" r="1.2" style="animation-delay:.1s"/><circle class="p" cx="12" cy="14" r="1.2" style="animation-delay:.2s"/><circle class="p" cx="8" cy="14" r="1.2" style="animation-delay:.3s"/><circle class="p" cx="16" cy="14" r="1.2" style="animation-delay:.4s"/>`);

    case 'monte-carlo':
      return wrap(`<style>.p{fill:currentColor;animation:mc ${d}s steps(1,end) infinite}@keyframes mc{0%{transform:translate(6px,14px)}25%{transform:translate(14px,10px)}50%{transform:translate(10px,16px)}75%{transform:translate(16px,14px)}100%{transform:translate(6px,14px)}}</style><rect x="5" y="7" width="14" height="12" rx="1" fill="none" stroke="currentColor" stroke-width="1.25" opacity=".35"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'markov-chain':
      return wrap(`<style>.n{fill:currentColor}.h{stroke:currentColor;stroke-width:1.25;stroke-dasharray:8;animation:fl ${d}s linear infinite}@keyframes fl{0%{stroke-dashoffset:8}100%{stroke-dashoffset:-8}}</style><circle class="n" cx="7" cy="12" r="2"/><circle class="n" cx="17" cy="12" r="2"/><path class="h" d="M9 12h6" marker-end="none"/>`);

    case 'regression-line':
      return wrap(`<style>.d{fill:currentColor;opacity:.5}.l{stroke:currentColor;stroke-width:1.5;stroke-dasharray:16;animation:dr ${d}s ease-in-out infinite}@keyframes dr{0%{stroke-dashoffset:16}100%{stroke-dashoffset:0}}</style><circle class="d" cx="6" cy="16" r="1.2"/><circle class="d" cx="10" cy="12" r="1.2"/><circle class="d" cx="14" cy="10" r="1.2"/><circle class="d" cx="18" cy="7" r="1.2"/><line class="l" x1="5" y1="17" x2="19" y2="7"/>`);

    case 'bifurcation-fork':
      return wrap(`<style>.t{stroke:currentColor;stroke-width:1.5;stroke-linecap:round}.p{animation:fo ${d}s ease-in-out infinite}@keyframes fo{0%,100%{opacity:.35}50%{opacity:1}}</style><line class="t" x1="12" y1="18" x2="12" y2="12"/><line class="t p" x1="12" y1="12" x2="7" y2="6"/><line class="t p" x1="12" y1="12" x2="17" y2="6" style="animation-delay:.2s"/>`);

    case 'mandelbrot-orbit':
      return wrap(`<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:or ${d}s linear infinite}@keyframes or{0%{transform:translate(8px,12px)}25%{transform:translate(14px,10px)}50%{transform:translate(15px,14px)}75%{transform:translate(10px,16px)}100%{transform:translate(8px,12px)}}</style><rect class="o" x="6" y="7" width="12" height="10" rx="1"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'koch-snowflake':
      return wrap(`<style>.k{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:24;animation:ex ${d}s ease-in-out infinite}@keyframes ex{0%,100%{stroke-dashoffset:24}50%{stroke-dashoffset:0}}</style><path class="k" d="M6 16 L12 7 L18 16 Z"/>`);

    case 'torus-orbit':
      return wrap(`<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:tr ${d}s linear infinite;transform-origin:12px 12px}@keyframes tr{0%{transform:rotate(0deg) translate(7px,0)}100%{transform:rotate(360deg) translate(7px,0)}}</style><ellipse class="o" cx="12" cy="12" rx="8" ry="5"/><circle class="p" cx="19" cy="12" r="1.75"/>`);

    case 'mobius-travel':
      return wrap(`<style>.m{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:20;animation:mv ${d}s linear infinite}.p{fill:currentColor;animation:tr ${d}s linear infinite}@keyframes mv{0%{stroke-dashoffset:20}100%{stroke-dashoffset:-20}}@keyframes tr{0%{transform:translate(5px,12px)}100%{transform:translate(19px,12px)}}</style><path class="m" d="M5 12c4-6 10-6 14 0s-4 6-8 0"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'brachistochrone':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-dasharray:26;animation:dr ${d}s ease-in-out infinite}.p{fill:currentColor;animation:sl ${d}s ease-in-out infinite}@keyframes dr{0%{stroke-dashoffset:26}100%{stroke-dashoffset:0}}@keyframes sl{0%{transform:translate(4px,7px)}100%{transform:translate(18px,17px)}}</style><path class="c" d="M4 7c5 12 11 12 16 10"/><circle class="p" cx="0" cy="0" r="1.75"/>`);

    case 'isochrone-curve':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.45}.p{fill:currentColor;animation:sw ${d}s ease-in-out infinite}@keyframes sw{0%,100%{transform:translate(6px,10px)}50%{transform:translate(18px,10px)}}</style><path class="c" d="M6 10c4 8 8 8 12 8s4 0 6-8"/><circle class="p" cx="0" cy="0" r="1.75"/>`);

    case 'matrix-pulse':
      return wrap(`<style>.c{fill:currentColor;animation:pl ${d}s ease-in-out infinite}@keyframes pl{0%,100%{opacity:.25}50%{opacity:1}}</style><rect class="c" x="6" y="6" width="3" height="3" rx=".4"/><rect class="c" x="11" y="6" width="3" height="3" rx=".4" style="animation-delay:.15s"/><rect class="c" x="6" y="11" width="3" height="3" rx=".4" style="animation-delay:.3s"/><rect class="c" x="11" y="11" width="3" height="3" rx=".4" style="animation-delay:.45s"/>`);

    case 'eigen-resonance':
      return wrap(`<style>.b{fill:currentColor;transform-origin:center bottom;animation:rs ${d}s ease-in-out infinite}@keyframes rs{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}</style><rect class="b" x="8" y="10" width="2" height="8" rx=".5"/><rect class="b" x="14" y="8" width="2" height="10" rx=".5" style="animation-delay:.25s"/>`);

    case 'voronoi-pulse':
      return wrap(`<style>.c{fill:currentColor;opacity:.35;animation:vp ${d}s ease-in-out infinite}@keyframes vp{0%,100%{opacity:.2}50%{opacity:.8}}</style><polygon class="c" points="12,6 16,10 14,16 10,16 8,10"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>`);

    case 'action-integral':
      return wrap(`<style>.p{fill:none;stroke:currentColor;stroke-width:1.75;stroke-dasharray:22;animation:ac ${d}s ease-in-out infinite}@keyframes ac{0%{stroke-dashoffset:22}100%{stroke-dashoffset:0}}</style><path class="p" d="M4 16c4-10 8-12 12-8s6 8 4 10"/>`);

    case 'dirac-impulse':
      return wrap(`<style>.s{stroke:currentColor;stroke-width:1.25;opacity:.35}.i{stroke:currentColor;stroke-width:2;animation:im ${d}s ease-in-out infinite}@keyframes im{0%,100%{transform:scaleY(.5);opacity:.35}50%{transform:scaleY(1);opacity:1}}</style><line class="s" x1="5" y1="18" x2="19" y2="18"/><line class="i" x1="12" y1="18" x2="12" y2="6" style="transform-origin:12px 18px"/>`);

    case 'laplace-decay':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.75;animation:dc ${d}s ease-in-out infinite}@keyframes dc{0%,100%{opacity:.35}50%{opacity:1}}</style><path class="c" d="M3 6c3 10 6 12 10 12s7-2 11-12"/>`);

    case 'stokes-circulation':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:24;animation:ci ${d}s linear infinite}@keyframes ci{0%{stroke-dashoffset:24}100%{stroke-dashoffset:-24}}</style><path class="c" d="M8 12c0-3 2-5 5-5s5 2 5 5-2 5-5 5"/>`);

    case 'spiral-golden':
      return wrap(`<style>.s{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-dasharray:42;animation:un ${d}s ease-in-out infinite}@keyframes un{0%{stroke-dashoffset:42}50%{stroke-dashoffset:0}100%{stroke-dashoffset:-42}}</style><path class="s" d="M12 12c0-3 3-3 3 0s-5 5-8 2 1-9 8-6"/>`);

    case 'spiral-fibonacci':
      return wrap(`<style>.b{fill:none;stroke:currentColor;stroke-width:1;opacity:.25}.a{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:30;animation:un 2.2s ease-in-out infinite}@keyframes un{0%{stroke-dashoffset:30}50%{stroke-dashoffset:0}100%{stroke-dashoffset:-30}}</style><rect class="b" x="11" y="11" width="8" height="8"/><path class="a" d="M19 11a8 8 0 0 0-8-8 5 5 0 0 0-5 5 4 4 0 0 0 4 4"/>`);

    case 'epicycloid':
      return wrap(`<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:ep ${d}s linear infinite;transform-origin:12px 12px}@keyframes ep{0%{transform:rotate(0deg) translate(6px)}100%{transform:rotate(360deg) translate(6px)}}</style><circle class="o" cx="12" cy="12" r="7"/><circle class="p" cx="18" cy="12" r="1.75"/>`);

    case 'cardioid-loop':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:28;animation:lp ${d}s ease-in-out infinite}.p{fill:currentColor;animation:mv ${d}s linear infinite}@keyframes lp{0%,100%{stroke-dashoffset:28}50%{stroke-dashoffset:0}}@keyframes mv{0%{transform:translate(16px,12px)}100%{transform:translate(8px,12px)}}</style><path class="c" d="M16 12c0-4-3-6-4-6s-4 2-4 6 2 6 4 6 4-2 4-6z"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'lemniscate':
      return wrap(`<style>.l{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:26;animation:in ${d}s ease-in-out infinite}.p{fill:currentColor;animation:or ${d}s linear infinite}@keyframes in{0%,100%{stroke-dashoffset:26}50%{stroke-dashoffset:0}}@keyframes or{0%{transform:translate(7px,12px)}50%{transform:translate(17px,12px)}100%{transform:translate(7px,12px)}}</style><path class="l" d="M7 12c0-4 5-6 5 0s5 6 5 0 5-6 5 0"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'astroid-roll':
      return wrap(`<style>.a{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:30;animation:ro ${d}s linear infinite}@keyframes ro{0%{stroke-dashoffset:30}100%{stroke-dashoffset:-30}}</style><path class="a" d="M12 4c4 0 8 4 8 8s-4 8-8 8-8-4-8-8 4-8 8-8"/>`);

    case 'sigma-sum':
      return wrap(`<style>.s{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round}.t{fill:currentColor;animation:bl 1.5s ease-in-out infinite}@keyframes bl{0%,100%{opacity:.2}40%{opacity:1}}</style><path class="s" d="M6 6h10L8 12l8 6H6"/><circle class="t" cx="17" cy="8" r="1.25" style="animation-delay:0s"/><circle class="t" cx="19" cy="12" r="1.25" style="animation-delay:.3s"/><circle class="t" cx="17" cy="16" r="1.25" style="animation-delay:.6s"/>`);

    case 'integral-bounds':
      return wrap(`<style>.s{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round}.b{fill:currentColor;animation:pu 1.2s ease-in-out infinite}@keyframes pu{0%,100%{opacity:.25}50%{opacity:1}}</style><rect class="b" x="15" y="4" width="4" height="1.5" rx=".5" style="animation-delay:0s"/><rect class="b" x="15" y="18.5" width="4" height="1.5" rx=".5" style="animation-delay:.6s"/><path class="s" d="M6 4c-1.5 2-2 5-2 8s.5 6 2 8"/><path class="s" d="M14 6v12" opacity=".45"/>`);

    case 'derivative-slope':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.45}.t{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;animation:fl 1s ease-in-out infinite}.r{fill:none;stroke:currentColor;stroke-width:1.25;stroke-dasharray:18;animation:sp 1.6s linear infinite;transform-origin:12px 12px}@keyframes fl{0%,100%{opacity:.35}50%{opacity:1}}@keyframes sp{0%{stroke-dashoffset:18;transform:rotate(0deg)}100%{stroke-dashoffset:-18;transform:rotate(360deg)}}</style><circle class="r" cx="12" cy="12" r="7"/><line class="t" x1="6" y1="15" x2="9" y2="9"/><line class="t" x1="9" y1="15" x2="12" y2="9"/><line class="t" x1="13" y1="8" x2="17" y2="16"/>`);

    case 'wave-packet':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.75;animation:pk ${d}s ease-in-out infinite}@keyframes pk{0%,100%{transform:translateX(-3px);opacity:.45}50%{transform:translateX(3px);opacity:1}}</style><path class="w" d="M4 12 C6 8 8 8 10 12 S14 16 18 12 S20 8 20 12"/>`);

    case 'magnetic-reconnection':
      return wrap(`<style>.l{stroke:currentColor;stroke-width:1.5;animation:rc ${d}s ease-in-out infinite}@keyframes rc{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}</style><path class="l" d="M4 8c4 4 4 8 8 8" fill="none" stroke="currentColor" stroke-width="1.5"/><path class="l" d="M20 8c-4 4-4 8-8 8" fill="none" stroke="currentColor" stroke-width="1.5" style="animation-delay:.2s"/>`);

    case 'solar-flare':
      return wrap(`<style>.c{fill:currentColor}.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;animation:fl ${d}s ease-in-out infinite}@keyframes fl{0%,100%{opacity:.25;transform:scaleY(.6)}50%{opacity:1;transform:scaleY(1)}}</style><circle class="c" cx="12" cy="14" r="3"/><line class="f" x1="12" y1="11" x2="12" y2="4"/><line class="f" x1="12" y1="11" x2="16" y2="6" style="animation-delay:.15s"/><line class="f" x1="12" y1="11" x2="8" y2="6" style="animation-delay:.3s"/>`);

    case 'neutron-star':
      return wrap(`<style>.c{fill:currentColor}.r{fill:none;stroke:currentColor;stroke-width:1.25;animation:pu ${d}s ease-in-out infinite}@keyframes pu{0%,100%{opacity:.3;transform:scale(.9)}50%{opacity:1;transform:scale(1.05)}}</style><circle class="c" cx="12" cy="12" r="2"/><circle class="r" cx="12" cy="12" r="5" style="transform-origin:12px 12px"/><circle class="r" cx="12" cy="12" r="8" style="animation-delay:.2s;transform-origin:12px 12px"/>`);

    case 'supernova-shell':
      return wrap(`<style>.s{fill:none;stroke:currentColor;stroke-width:1.5;transform-origin:12px 12px;animation:ex ${d}s ease-in-out infinite}@keyframes ex{0%,100%{transform:scale(.45);opacity:1}50%{transform:scale(1.2);opacity:.25}}</style><circle class="s" cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>`);

    case 'lagrange-point':
      return wrap(`<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.b{fill:currentColor}.p{fill:currentColor;animation:hb ${d}s ease-in-out infinite}@keyframes hb{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}</style><circle class="b" cx="7" cy="12" r="2"/><circle class="b" cx="17" cy="12" r="1.5"/><circle class="o" cx="12" cy="12" r="4"/><circle class="p" cx="12" cy="8" r="1.25"/>`);

    case 'mercury-precession':
      return wrap(`<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:pr ${d}s linear infinite}@keyframes pr{0%{transform:rotate(0deg) translate(6px,0) rotate(0deg)}100%{transform:rotate(360deg) translate(6px,0) rotate(-360deg)}}</style><ellipse class="o" cx="12" cy="12" rx="7" ry="5"/><circle class="p" cx="18" cy="12" r="1.5" style="transform-origin:12px 12px"/>`);

    case 'roche-limit':
      return wrap(`<style>.p{fill:currentColor}.d{fill:currentColor;animation:br ${d}s ease-in-out infinite}@keyframes br{0%,100%{transform:translate(0,0)}50%{transform:translate(3px,-2px)}}</style><circle class="p" cx="8" cy="12" r="3"/><circle class="d" cx="16" cy="10" r="1.2"/><circle class="d" cx="17" cy="14" r="1" style="animation-delay:.2s"/><circle class="d" cx="15" cy="16" r=".8" style="animation-delay:.4s"/>`);

    case 'lorenz-butterfly':
      return wrap(`<style>.t{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:bf ${d + 0.6}s ease-in-out infinite}@keyframes bf{0%{transform:translate(6px,12px)}20%{transform:translate(10px,8px)}40%{transform:translate(14px,14px)}60%{transform:translate(17px,10px)}80%{transform:translate(11px,16px)}100%{transform:translate(6px,12px)}}</style><path class="t" d="M6 12c2-3 4-5 6-2s3 5 5 1 3-6 5-3"/><circle class="p" cx="0" cy="0" r="1.75"/>`);

    case 'flyby-gravity-assist':
      return wrap(`<style>.p{fill:currentColor}.t{fill:currentColor;animation:fb ${d}s ease-in-out infinite}.h{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}@keyframes fb{0%{transform:translate(3px,16px)}45%{transform:translate(11px,8px)}100%{transform:translate(21px,14px)}}</style><circle class="t" cx="12" cy="12" r="2.5"/><path class="h" d="M3 16c4-8 8-10 14-6"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'ideal-gas-isotherm':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round}.p{fill:currentColor;animation:mv ${d}s ease-in-out infinite}@keyframes mv{0%{transform:translate(18px,8px)}50%{transform:translate(10px,14px)}100%{transform:translate(6px,18px)}}</style><path class="c" d="M5 18c2-8 6-12 14-10"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'radiation-sail':
      return wrap(`<style>.r{fill:currentColor;animation:ps ${d}s ease-in-out infinite}.p{stroke:currentColor;stroke-width:1.25;animation:ph ${d}s ease-in-out infinite}@keyframes ps{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}@keyframes ph{0%,100%{opacity:.3}50%{opacity:1}}</style><line class="p" x1="4" y1="8" x2="10" y2="12"/><line class="p" x1="4" y1="16" x2="10" y2="12" style="animation-delay:.2s"/><polygon class="r" points="10,12 18,8 18,16"/>`);

    case 'asteroid-belt':
      return wrap(`<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.a{fill:currentColor;animation:ab ${d}s linear infinite}@keyframes ab{0%{transform:rotate(0deg) translate(7px) rotate(0deg)}100%{transform:rotate(360deg) translate(7px) rotate(-360deg)}}</style><ellipse class="o" cx="12" cy="12" rx="9" ry="3"/><circle cx="8" cy="12" r="1" fill="currentColor" opacity=".6"/><circle cx="15" cy="11" r=".8" fill="currentColor" opacity=".6"/><circle class="a" cx="12" cy="12" r="1.25" style="transform-origin:12px 12px"/>`);

    case 'particle-cascade':
      return wrap(`<style>.p{fill:currentColor;animation:cs ${d}s ease-in-out infinite}@keyframes cs{0%{transform:translate(12px,4px);opacity:1}50%{transform:translate(10px,12px);opacity:.8}100%{transform:translate(8px,18px);opacity:.35}}</style><line x1="12" y1="3" x2="12" y2="8" stroke="currentColor" stroke-width="1.25"/><circle class="p" cx="0" cy="0" r="1.5"/><circle cx="14" cy="14" r="1" fill="currentColor" opacity=".5"/><circle cx="6" cy="16" r=".8" fill="currentColor" opacity=".4"/>`);

    case 'radial-particle-wind':
      return wrap(`<style>.s{fill:currentColor}.r{stroke:currentColor;stroke-width:1.25;stroke-linecap:round;animation:wn ${d}s ease-in-out infinite}@keyframes wn{0%{opacity:.25;transform:translateX(0)}100%{opacity:1;transform:translateX(4px)}}</style><circle class="s" cx="5" cy="12" r="2"/><line class="r" x1="8" y1="10" x2="20" y2="8" style="animation-delay:0s"/><line class="r" x1="8" y1="12" x2="20" y2="12" style="animation-delay:.15s"/><line class="r" x1="8" y1="14" x2="20" y2="16" style="animation-delay:.3s"/>`);

    case 'cmb-ripple':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.25;animation:rp ${d}s ease-in-out infinite}@keyframes rp{0%,100%{transform:scale(1);opacity:.35}50%{transform:scale(1.05);opacity:1}}</style><path class="w" d="M4 12c2-2 4-2 6 0s4 2 6 0 4-2 6 0" style="transform-origin:12px 12px"/><path class="w" d="M4 14c2 2 4 2 6 0s4-2 6 0 4 2 6 0" style="animation-delay:.2s;transform-origin:12px 12px"/>`);

    case 'elastic-collision':
      return wrap(`<style>.a,.b{fill:currentColor}.a{animation:cl ${d}s ease-in-out infinite}.b{animation:cr ${d}s ease-in-out infinite}@keyframes cl{0%{transform:translate(5px,14px)}40%{transform:translate(11px,14px)}60%{transform:translate(13px,14px)}100%{transform:translate(18px,14px)}}@keyframes cr{0%{transform:translate(18px,14px)}40%{transform:translate(12px,14px)}60%{transform:translate(10px,14px)}100%{transform:translate(5px,14px)}}</style><circle class="a" cx="0" cy="0" r="2"/><circle class="b" cx="0" cy="0" r="1.75"/>`);

    case 'snell-refraction':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1;opacity:.35}.r{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;animation:rf ${d}s ease-in-out infinite}@keyframes rf{0%,100%{transform:rotate(0deg)}50%{transform:rotate(14deg)}}</style><line class="b" x1="3" y1="12" x2="21" y2="12"/><line x1="8" y1="4" x2="12" y2="12" stroke="currentColor" stroke-width="1.5"/><line class="r" x1="12" y1="12" x2="17" y2="18" style="transform-origin:12px 12px"/>`);

    case 'total-internal-reflection':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1;opacity:.35}.r{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;animation:rt ${d}s ease-in-out infinite}@keyframes rt{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-18deg)}}</style><line class="b" x1="3" y1="14" x2="21" y2="14"/><line x1="10" y1="4" x2="12" y2="14" stroke="currentColor" stroke-width="1.5"/><line class="r" x1="12" y1="14" x2="8" y2="4" style="transform-origin:12px 14px"/>`);

    case 'tokamak-fusion':
      return wrap(`<style>.t{fill:none;stroke:currentColor;stroke-width:1.5}.p{fill:currentColor;animation:pl ${d}s linear infinite;transform-origin:12px 12px}@keyframes pl{0%{transform:rotate(0deg) translate(5px)}100%{transform:rotate(360deg) translate(5px)}}</style><ellipse class="t" cx="12" cy="12" rx="8" ry="4"/><circle class="p" cx="17" cy="12" r="1.75"/>`);

    case 'cantor-prune':
      return wrap(`<style>.s{fill:currentColor;animation:pr 2s ease-in-out infinite}@keyframes pr{0%,100%{opacity:1;transform:scaleX(1)}50%{opacity:.25;transform:scaleX(.55)}}</style><rect class="s" x="4" y="11" width="16" height="2" rx=".5"/><rect class="s" x="4" y="11" width="5" height="2" rx=".5" style="animation-delay:.2s"/><rect class="s" x="15" y="11" width="5" height="2" rx=".5" style="animation-delay:.4s"/>`);

    case 'fermi-contour':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:24;animation:dr ${d}s ease-in-out infinite}.p{fill:currentColor}@keyframes dr{0%,100%{stroke-dashoffset:24}50%{stroke-dashoffset:0}}</style><path class="c" d="M6 14c2-6 4-8 8-8s6 2 8 8"/><circle class="p" cx="12" cy="14" r="1.5"/>`);

    case 'virial-exchange':
      return wrap(`<style>.k,.p{fill:currentColor;animation:sw ${d}s ease-in-out infinite}.p{animation-direction:reverse}@keyframes sw{0%,100%{transform:translateY(0)}50%{transform:translateY(-4px)}}</style><circle class="k" cx="8" cy="14" r="2" style="animation-delay:0s"/><circle class="p" cx="16" cy="14" r="2"/>`);

    case 'hall-plateau':
      return wrap(`<style>.s{stroke:currentColor;stroke-width:1.5}.p{fill:currentColor;animation:st ${d}s ease-in-out infinite}@keyframes st{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}</style><line class="s" x1="5" y1="16" x2="19" y2="16"/><line class="s" x1="5" y1="12" x2="19" y2="12"/><line class="s" x1="5" y1="8" x2="19" y2="8"/><rect class="p" x="7" y="10" width="10" height="2" rx=".4"/>`);

    case 'dipole-antenna':
      return wrap(`<style>.p{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;animation:os ${d}s ease-in-out infinite}.w{fill:none;stroke:currentColor;stroke-width:1.25;animation:rd ${d}s ease-in-out infinite}@keyframes os{0%,100%{transform:scaleY(.7)}50%{transform:scaleY(1)}}@keyframes rd{0%,100%{opacity:.3}50%{opacity:1}}</style><line class="p" x1="12" y1="6" x2="12" y2="18" style="transform-origin:12px 12px"/><circle class="w" cx="12" cy="12" r="5"/>`);

    case 'rayleigh-scatter':
      return wrap(`<style>.s{stroke:currentColor;stroke-width:1.25;animation:sc ${d}s ease-in-out infinite}.p{fill:currentColor}@keyframes sc{0%,100%{opacity:.35}50%{opacity:1}}</style><circle class="p" cx="8" cy="14" r="2"/><line class="s" x1="10" y1="12" x2="18" y2="6"/><line class="s" x1="10" y1="14" x2="19" y2="14" style="animation-delay:.15s"/><line class="s" x1="10" y1="16" x2="18" y2="18" style="animation-delay:.3s"/>`);

    case 'oort-cloud-shell':
      return wrap(`<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.c{fill:currentColor;animation:tw ${d}s ease-in-out infinite}@keyframes tw{0%,100%{opacity:.3}50%{opacity:1}}</style><circle class="o" cx="12" cy="12" r="8"/><circle class="c" cx="9" cy="9" r=".8"/><circle class="c" cx="15" cy="10" r=".7" style="animation-delay:.2s"/><circle class="c" cx="13" cy="15" r=".9" style="animation-delay:.4s"/><circle class="c" cx="8" cy="14" r=".6" style="animation-delay:.6s"/>`);

    case 'volume-fill':
      return wrap(`<style>.b{fill:none;stroke:currentColor;stroke-width:1.25}.f{fill:currentColor;animation:fl ${d}s ease-in-out infinite}@keyframes fl{0%{opacity:.15;transform:scaleY(.2)}100%{opacity:.7;transform:scaleY(1)}}</style><rect class="b" x="7" y="7" width="10" height="10" rx="1"/><rect class="f" x="8" y="14" width="8" height="2" rx=".4" style="transform-origin:12px 16px"/>`);

    case 'phase-space-flow':
      return wrap(`<style>.f{fill:none;stroke:currentColor;stroke-width:1.25;stroke-dasharray:16;animation:fl ${d}s linear infinite}@keyframes fl{0%{stroke-dashoffset:16}100%{stroke-dashoffset:-16}}</style><path class="f" d="M4 16c3-6 6-8 10-6s5 4 6 8"/><path class="f" d="M5 14c2-3 5-4 8-2" style="animation-delay:.2s"/>`);

    case 'spectral-split':
      return wrap(`<style>.l{fill:currentColor;animation:sp ${d}s ease-in-out infinite}@keyframes sp{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}</style><rect class="l" x="10" y="6" width="1.5" height="12" rx=".4"/><rect class="l" x="12.5" y="6" width="1.5" height="12" rx=".4" style="animation-delay:.15s"/><rect class="l" x="15" y="6" width="1.5" height="12" rx=".4" style="animation-delay:.3s"/>`);

    case 'entangled-pair':
      return wrap(`<style>.a,.b{fill:currentColor;animation:en ${d}s ease-in-out infinite}@keyframes en{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}</style><circle class="a" cx="8" cy="12" r="2"/><circle class="b" cx="16" cy="12" r="2" style="animation:en ${d}s ease-in-out infinite reverse"/><line x1="10" y1="12" x2="14" y2="12" stroke="currentColor" stroke-width="1.25" stroke-dasharray="2 2"/>`);

    case 'double-pendulum':
      return wrap(`<style>.p{fill:currentColor}.a1{transform-origin:12px 5px;animation:s1 ${d}s ease-in-out infinite}.a2{transform-origin:12px 11px;animation:s2 ${d * 0.8}s ease-in-out infinite}.ar{stroke:currentColor;stroke-width:1.5;stroke-linecap:round}.bb{fill:currentColor}@keyframes s1{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(25deg)}}@keyframes s2{0%,100%{transform:rotate(30deg)}50%{transform:rotate(-35deg)}}</style><circle class="p" cx="12" cy="5" r="1.25"/><g class="a1"><line class="ar" x1="12" y1="5" x2="12" y2="11"/><g class="a2"><line class="ar" x1="12" y1="11" x2="12" y2="17"/><circle class="bb" cx="12" cy="17" r="2"/></g></g>`);

    case 'sierpinski-fold':
      return wrap(`<style>.t{fill:none;stroke:currentColor;stroke-width:1.5;animation:fd 2s ease-in-out infinite}@keyframes fd{0%,100%{opacity:.3}50%{opacity:1}}</style><path class="t" d="M6 16 L12 7 L18 16 Z"/><path class="t" d="M9 16 L12 11 L15 16" style="animation-delay:.3s"/>`);

    case 'reentry-blunt':
      return wrap(`<style>.g{stroke:currentColor;stroke-width:1.25;opacity:.25}.a{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-dasharray:32;animation:tr ${d}s ease-in-out infinite}.p{fill:currentColor;animation:mv ${d + 0.4}s ease-in-out infinite}.h{fill:none;stroke:currentColor;stroke-width:2.5;stroke-linecap:round;opacity:.25;animation:hm ${d + 0.4}s ease-in-out infinite}@keyframes tr{0%{stroke-dashoffset:32}100%{stroke-dashoffset:0}}@keyframes mv{0%{transform:translate(4px,6px)}100%{transform:translate(19px,17px)}}@keyframes hm{0%,100%{opacity:.15}50%{opacity:.55}}</style><line class="g" x1="3" y1="18" x2="21" y2="18"/><path class="h" d="M4 6 C10 6 13 11 19 17"/><path class="a" d="M4 6 C10 6 13 11 19 17"/><circle class="p" cx="0" cy="0" r="1.75"/>`);

    case 'twin-clocks':
      return wrap(`<style>.c{fill:none;stroke:currentColor;stroke-width:1.25}.h{stroke:currentColor;stroke-width:1.5;animation:tk ${d}s ease-in-out infinite}@keyframes tk{0%,100%{transform:rotate(0deg)}50%{transform:rotate(24deg)}}</style><circle class="c" cx="8" cy="12" r="3"/><circle class="c" cx="16" cy="12" r="3"/><line class="h" x1="8" y1="12" x2="8" y2="9" style="transform-origin:8px 12px"/><line class="h" x1="16" y1="12" x2="16" y2="9" style="transform-origin:16px 12px;animation-duration:${d * 1.4}s"/>`);

    case 'black-hole-shadow':
      return wrap(`<style>.r{fill:none;stroke:currentColor;stroke-width:1.5;animation:pu ${d}s ease-in-out infinite}.d{fill:currentColor}@keyframes pu{0%,100%{opacity:.45;transform:scale(1)}50%{opacity:1;transform:scale(1.06)}}</style><circle class="d" cx="12" cy="12" r="4"/><circle class="r" cx="12" cy="12" r="7" style="transform-origin:12px 12px"/>`);

    case 'poisson-arrivals':
      return wrap(`<style>.e{fill:currentColor;animation:ar ${d}s ease-in-out infinite}@keyframes ar{0%,80%{opacity:0;transform:scale(.5)}90%,100%{opacity:1;transform:scale(1)}}</style><line x1="5" y1="16" x2="19" y2="16" stroke="currentColor" stroke-width="1.25" opacity=".35"/><circle class="e" cx="8" cy="16" r="1.25" style="animation-delay:0s"/><circle class="e" cx="13" cy="16" r="1.25" style="animation-delay:.5s"/><circle class="e" cx="17" cy="16" r="1.25" style="animation-delay:1s"/>`);

    case 'halo-envelope':
      return wrap(`<style>.h{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.45;animation:ex ${d}s ease-in-out infinite}@keyframes ex{0%,100%{transform:scale(.95)}50%{transform:scale(1.05)}}</style><circle cx="12" cy="12" r="2" fill="currentColor"/><circle class="h" cx="12" cy="12" r="9" style="transform-origin:12px 12px"/>`);

    case 'harmonic-series':
      return wrap(`<style>.b{fill:currentColor;transform-origin:center bottom;animation:ad 2s ease-in-out infinite}.s{stroke:currentColor;stroke-width:1.25;stroke-dasharray:4 3;opacity:.4}.t{fill:currentColor;animation:up 2s ease-in-out infinite}@keyframes ad{0%,100%{opacity:.35}50%{opacity:1}}@keyframes up{0%{transform:translate(18px,16px)}100%{transform:translate(18px,10px)}}</style><line class="s" x1="4" y1="12" x2="20" y2="12"/><rect class="b" x="5" y="10" width="2" height="8" rx=".4" style="animation-delay:0s"/><rect class="b" x="8" y="12" width="2" height="6" rx=".4" style="animation-delay:.25s"/><rect class="b" x="11" y="13" width="2" height="5" rx=".4" style="animation-delay:.5s"/><rect class="b" x="14" y="14" width="2" height="4" rx=".4" style="animation-delay:.75s"/><circle class="t" cx="0" cy="0" r="1.5"/>`);

    case 'power-series-radius':
      return wrap(`<style>.r{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.t{fill:currentColor;animation:cv 2s ease-in-out infinite}@keyframes cv{0%{transform:translate(16px,12px);opacity:.35}100%{transform:translate(10px,12px);opacity:1}}</style><circle class="r" cx="12" cy="12" r="7"/><circle class="r" cx="12" cy="12" r="4"/><circle class="t" cx="0" cy="0" r="1.5"/>`);

    case 'series-converge-limit':
      return wrap(`<style>.l{stroke:currentColor;stroke-width:1.25;stroke-dasharray:3 3;opacity:.45}.p{fill:currentColor;animation:ap 2s ease-in-out infinite}@keyframes ap{0%{transform:translate(5px,16px)}70%{transform:translate(14px,11px)}100%{transform:translate(16px,10px)}}</style><line class="l" x1="4" y1="10" x2="20" y2="10"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'fourier-sawtooth':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;stroke-linejoin:round;animation:sw ${d}s ease-in-out infinite}@keyframes sw{0%,100%{opacity:.45}50%{opacity:1}}</style><path class="w" d="M3 14 L7 8 L11 14 L15 8 L19 14 L21 14"/>`);

    case 'fourier-spectrum':
      return wrap(`<style>.w{fill:none;stroke:currentColor;stroke-width:1.25;stroke-linecap:round;opacity:.45}.b{fill:currentColor;transform-origin:center bottom;animation:sc ${d}s ease-in-out infinite}@keyframes sc{0%,100%{transform:scaleY(.4)}50%{transform:scaleY(1)}}</style><path class="w" d="M3 14c1-4 2-4 3 0s2 4 3 0"/><rect class="b" x="14" y="12" width="2" height="6" rx=".4" style="animation-delay:0s"/><rect class="b" x="17" y="9" width="2" height="9" rx=".4" style="animation-delay:.2s"/><rect class="b" x="20" y="13" width="2" height="5" rx=".4" style="animation-delay:.4s"/>`);

    case 'chi-square-skew':
      return wrap(`<style>.b{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;animation:sk ${d}s ease-in-out infinite}@keyframes sk{0%,100%{transform:skewX(0deg)}50%{transform:skewX(-8deg)}}</style><path class="b" d="M4 18c2-10 6-14 12-12s6 8 4 12" style="transform-origin:12px 14px"/>`);

    case 't-distribution-wide':
      return wrap(`<style>.b{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;animation:wd ${d}s ease-in-out infinite}@keyframes wd{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.18)}}</style><path class="b" d="M3 18c1-8 3-11 9-11s8 3 9 11" style="transform-origin:12px 14px"/>`);

    case 'atom-shells':
      return wrap(`<style>.n{fill:currentColor}.s{fill:none;stroke:currentColor;stroke-width:1;opacity:.35}.e{fill:currentColor;transform-origin:12px 12px}.e1{animation:o1 ${d}s linear infinite}.e2{animation:o2 ${d * 1.5}s linear infinite}.e3{animation:o3 ${d * 2}s linear infinite}@keyframes o1{0%{transform:rotate(0deg) translate(4px)}100%{transform:rotate(360deg) translate(4px)}}@keyframes o2{0%{transform:rotate(90deg) translate(6px)}100%{transform:rotate(450deg) translate(6px)}}@keyframes o3{0%{transform:rotate(200deg) translate(8px)}100%{transform:rotate(560deg) translate(8px)}}</style><circle class="n" cx="12" cy="12" r="2"/><circle class="s" cx="12" cy="12" r="5"/><circle class="s" cx="12" cy="12" r="8"/><circle class="e e1" cx="16" cy="12" r="1.25"/><circle class="e e2" cx="12" cy="12" r="1.25"/><circle class="e e3" cx="12" cy="12" r="1.25"/>`);

    case 'molecular-bond':
      return wrap(`<style>.a{fill:currentColor}.b{stroke:currentColor;stroke-width:1.75;stroke-linecap:round;animation:vb ${d}s ease-in-out infinite}@keyframes vb{0%,100%{transform:scaleX(1);opacity:1}50%{transform:scaleX(1.12);opacity:.55}}</style><circle class="a" cx="7" cy="12" r="2.5"/><circle class="a" cx="17" cy="12" r="2.5"/><line class="b" x1="9.5" y1="12" x2="14.5" y2="12" style="transform-origin:12px 12px"/>`);

    case 'benzene-ring':
      return wrap(`<style>.h{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linejoin:round}.d{animation:rs ${d}s ease-in-out infinite}.i{fill:none;stroke:currentColor;stroke-width:1.25;animation:rs2 ${d}s ease-in-out infinite}@keyframes rs{0%,100%{opacity:.4}50%{opacity:1}}@keyframes rs2{0%,100%{opacity:1}50%{opacity:.35}}</style><path class="h d" d="M12 6 L17 9 L17 15 L12 18 L7 15 L7 9 Z"/><circle class="i" cx="12" cy="12" r="2.5"/>`);

    case 'crystal-lattice':
      return wrap(`<style>.p{fill:currentColor;animation:pu ${d}s ease-in-out infinite}@keyframes pu{0%,100%{opacity:.35;transform:scale(.85)}50%{opacity:1;transform:scale(1)}}</style><circle class="p" cx="8" cy="8" r="1.5"/><circle class="p" cx="16" cy="8" r="1.5" style="animation-delay:.15s"/><circle class="p" cx="8" cy="16" r="1.5" style="animation-delay:.3s"/><circle class="p" cx="16" cy="16" r="1.5" style="animation-delay:.45s"/><line x1="8" y1="8" x2="16" y2="8" stroke="currentColor" stroke-width="1" opacity=".3"/><line x1="8" y1="16" x2="16" y2="16" stroke="currentColor" stroke-width="1" opacity=".3"/><line x1="8" y1="8" x2="8" y2="16" stroke="currentColor" stroke-width="1" opacity=".3"/><line x1="16" y1="8" x2="16" y2="16" stroke="currentColor" stroke-width="1" opacity=".3"/>`);

    case 'p-orbital':
      return wrap(`<style>.l{fill:currentColor;transform-origin:12px 12px}.a{animation:la ${d}s ease-in-out infinite}.b{animation:lb ${d}s ease-in-out infinite}@keyframes la{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.25;transform:scale(.75)}}@keyframes lb{0%,100%{opacity:.25;transform:scale(.75)}50%{opacity:1;transform:scale(1)}}</style><ellipse class="l a" cx="8.5" cy="12" rx="2.5" ry="5"/><ellipse class="l b" cx="15.5" cy="12" rx="2.5" ry="5"/>`);

    case 'ionic-lattice':
      return wrap(`<style>.c{stroke:currentColor;stroke-width:1.25;opacity:.3}.i{stroke:currentColor;stroke-width:1.25;animation:at ${d}s ease-in-out infinite}.m{animation:at2 ${d}s ease-in-out infinite}@keyframes at{0%,100%{transform:translate(0,0)}50%{transform:translate(1px,-1px)}}@keyframes at2{0%,100%{transform:translate(0,0)}50%{transform:translate(-1px,1px)}}</style><line class="c" x1="6" y1="6" x2="18" y2="6"/><line class="c" x1="6" y1="12" x2="18" y2="12"/><line class="c" x1="6" y1="18" x2="18" y2="18"/><line class="c" x1="6" y1="6" x2="6" y2="18"/><line class="c" x1="12" y1="6" x2="12" y2="18"/><line class="c" x1="18" y1="6" x2="18" y2="18"/><g class="i"><line x1="7.5" y1="8.5" x2="7.5" y2="9.5"/><line x1="7" y1="9" x2="8" y2="9"/></g><g class="i" style="animation-delay:.15s"><line x1="13.5" y1="15.5" x2="13.5" y2="16.5"/><line x1="13" y1="16" x2="14" y2="16"/></g><line class="m" x1="13" y1="9" x2="14" y2="9"/><line class="m" x1="7" y1="16" x2="8" y2="16" style="animation-delay:.15s"/>`);

    case 'sp3-hybrid':
      return wrap(`<style>.c{fill:currentColor}.b{stroke:currentColor;stroke-width:1.5;stroke-linecap:round}.e{fill:currentColor;animation:pu ${d}s ease-in-out infinite}@keyframes pu{0%,100%{opacity:.35}50%{opacity:1}}</style><circle class="c" cx="12" cy="12" r="2"/><line class="b" x1="12" y1="12" x2="12" y2="5"/><line class="b" x1="12" y1="12" x2="17" y2="9"/><line class="b" x1="12" y1="12" x2="17" y2="15"/><line class="b" x1="12" y1="12" x2="7" y2="15"/><circle class="e" cx="12" cy="5" r="1.25" style="animation-delay:0s"/><circle class="e" cx="17" cy="9" r="1.25" style="animation-delay:.15s"/><circle class="e" cx="17" cy="15" r="1.25" style="animation-delay:.3s"/><circle class="e" cx="7" cy="15" r="1.25" style="animation-delay:.45s"/>`);

    case 'periodic-cell':
      return wrap(`<style>.f{fill:none;stroke:currentColor;stroke-width:1.5}.n{fill:currentColor;opacity:.55}.s{fill:none;stroke:currentColor;stroke-width:1.5;animation:gl ${d}s ease-in-out infinite}.c{fill:currentColor}@keyframes gl{0%,100%{opacity:.35;transform:scale(.92)}50%{opacity:1;transform:scale(1)}}</style><rect class="f" x="6" y="6" width="12" height="12" rx="1"/><circle class="n" cx="7.5" cy="8" r=".55"/><circle class="n" cx="8.8" cy="8" r=".55"/><circle class="n" cx="10.1" cy="8" r=".55"/><circle class="n" cx="7.5" cy="9.3" r=".55"/><circle class="n" cx="8.8" cy="9.3" r=".55"/><circle class="n" cx="10.1" cy="9.3" r=".55"/><circle class="s" cx="12" cy="14" r="3.5" style="transform-origin:12px 14px"/><circle class="c" cx="12" cy="14" r="1.25"/>`);

    case 'lewis-dots':
      return wrap(`<style>.c{fill:currentColor}.d{fill:currentColor;animation:pu ${d}s ease-in-out infinite}@keyframes pu{0%,100%{opacity:.35}50%{opacity:1}}</style><circle class="c" cx="12" cy="12" r="2"/><circle class="d" cx="12" cy="6" r="1.1" style="animation-delay:0s"/><circle class="d" cx="18" cy="12" r="1.1" style="animation-delay:.2s"/><circle class="d" cx="12" cy="18" r="1.1" style="animation-delay:.4s"/><circle class="d" cx="6" cy="12" r="1.1" style="animation-delay:.6s"/>`);

    case 'equilibrium-shift':
      return wrap(`<style>.a{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round}.f{animation:fw ${d}s ease-in-out infinite}.b{animation:bk ${d}s ease-in-out infinite}@keyframes fw{0%,100%{opacity:.35}50%{opacity:1}}@keyframes bk{0%,100%{opacity:1}50%{opacity:.35}}</style><line class="a f" x1="5" y1="12" x2="11" y2="12"/><polyline class="a f" points="9,10 11,12 9,14" fill="none"/><line class="a b" x1="13" y1="12" x2="19" y2="12"/><polyline class="a b" points="15,10 13,12 15,14" fill="none"/>`);

    default:
      return wrap(`<style>.d{fill:currentColor;animation:pu ${d}s ease-in-out infinite}@keyframes pu{0%,100%{opacity:.35}50%{opacity:1}}</style><circle class="d" cx="12" cy="12" r="3"/>`);
  }
}
