import type { IconDefinition } from './types.ts';

function wrap(body: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${body}</svg>`;
}

function seed(def: IconDefinition): number {
  return def.seed ?? 1;
}

function dur(def: IconDefinition, base = 1.4): string {
  const s = seed(def);
  return `${Number((base + (s % 7) * 0.12).toFixed(2))}s`;
}

function delayFrac(d: string, frac: number): string {
  return `${(-parseFloat(d) * frac).toFixed(2)}s`;
}

/** 扩展模板渲染（67 个）— 动画需与概念语义一致 */
export function renderExpansionTemplate(def: IconDefinition): string | null {
  const d = dur(def);

  switch (def.template) {
    case 'bacteria-divide':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1.4;fill:none}.l{animation:sl ${d} ease-in-out infinite}.r{animation:sr ${d} ease-in-out infinite}@keyframes sl{0%,100%{transform:translateX(0)}50%{transform:translateX(-2px)}}@keyframes sr{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}</style><ellipse class="b l" cx="10" cy="12" rx="4" ry="3"/><ellipse class="b r" cx="14" cy="12" rx="4" ry="3"/><line class="b" x1="12" y1="9" x2="12" y2="15"/>`);

    case 'beat-mix':
      return wrap(`<style>.w1,.w2{stroke:currentColor;stroke-width:1.3;fill:none}.w1{animation:b1 ${d} ease-in-out infinite}.w2{animation:b2 ${d} ease-in-out infinite}@keyframes b1{0%,100%{transform:translateY(0)}50%{transform:translateY(-1px)}}@keyframes b2{0%,100%{transform:translateY(0)}50%{transform:translateY(1px)}}</style><path class="w1" d="M3 10c2 2 4-2 6 0s4 2 6 0"/><path class="w2" d="M3 14c2-2 4 2 6 0s4-2 6 0"/>`);

    case 'bfs-expand':
      return wrap(`<style>.n{fill:currentColor;opacity:.35;animation:ex ${d} ease-out infinite}.n1{animation-delay:0s}.n2{animation-delay:.15s}.n3{animation-delay:.3s}@keyframes ex{0%{transform:scale(.5);opacity:.2}100%{transform:scale(1.2);opacity:1}}</style><circle class="n n1" cx="12" cy="12" r="2"/><circle class="n n2" cx="7" cy="12" r="1.5"/><circle class="n n3" cx="17" cy="12" r="1.5"/><circle class="n n2" cx="12" cy="7" r="1.5"/><circle class="n n3" cx="12" cy="17" r="1.5"/>`);

    case 'binary-search':
      return wrap(`<style>.r{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.m{fill:currentColor;animation:hl ${d} ease-in-out infinite}@keyframes hl{0%,100%{transform:translate(4px,12px);opacity:.4}50%{transform:translate(12px,12px);opacity:1}}</style><rect class="r" x="3" y="8" width="18" height="8" rx="1"/><rect class="m" x="0" y="0" width="4" height="6" rx=".5"/>`);

    case 'blood-flow':
      return wrap(`<style>.p{fill:currentColor;animation:fl ${d} linear infinite}.v{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}@keyframes fl{0%{transform:translate(4px,12px)}100%{transform:translate(20px,12px)}}</style><path class="v" d="M4 12c3-2 6 2 8 0s5-2 8 0"/><circle class="p" cx="0" cy="0" r="1.1"/>`);

    case 'bridge-vibrate':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1.4;fill:none;animation:bv ${d} ease-in-out infinite;transform-origin:12px 14px}@keyframes bv{0%,100%{transform:rotate(-2deg)}50%{transform:rotate(2deg)}}</style><path class="b" d="M4 14 Q12 10 20 14"/><line x1="8" y1="14" x2="8" y2="18" stroke="currentColor" stroke-width="1.2"/><line x1="16" y1="14" x2="16" y2="18" stroke="currentColor" stroke-width="1.2"/>`);

    case 'bubble-sort':
      return wrap(`<style>.b{fill:currentColor}.b1{animation:s1 ${d} ease-in-out infinite}.b2{animation:s2 ${d} ease-in-out infinite}.b3{animation:s3 ${d} ease-in-out infinite}@keyframes s1{0%,100%{transform:translate(6px,14px)}50%{transform:translate(10px,14px)}}@keyframes s2{0%,100%{transform:translate(10px,10px)}50%{transform:translate(14px,10px)}}@keyframes s3{0%,100%{transform:translate(14px,6px)}50%{transform:translate(10px,6px)}}</style><rect class="b b1" x="0" y="0" width="3" height="6" rx=".5"/><rect class="b b2" x="0" y="0" width="3" height="10" rx=".5"/><rect class="b b3" x="0" y="0" width="3" height="14" rx=".5"/>`);

    case 'cache-line':
      return wrap(`<style>.h{fill:currentColor;opacity:.35;animation:hi ${d} ease-in-out infinite}.m{animation:mi ${d} ease-in-out infinite}@keyframes hi{0%,100%{opacity:.2}50%{opacity:1}}@keyframes mi{0%,100%{opacity:1}50%{opacity:.2}}</style><rect class="h" x="4" y="8" width="4" height="8" rx=".5"/><rect class="h m" x="10" y="8" width="4" height="8" rx=".5"/><rect class="h" x="16" y="8" width="4" height="8" rx=".5"/>`);

    case 'cam-follower':
      return wrap(`<style>.c{stroke:currentColor;stroke-width:1.4;fill:none}.f{stroke:currentColor;stroke-width:1.4;animation:cf ${d} ease-in-out infinite;transform-origin:12px 14px}@keyframes cf{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}</style><circle class="c" cx="12" cy="10" r="4"/><line class="f" x1="12" y1="14" x2="12" y2="18"/>`);

    case 'cell-membrane':
      return wrap(`<style>.m{stroke:currentColor;stroke-width:1.5;fill:none;opacity:.4}.g{fill:currentColor;animation:op ${d} ease-in-out infinite}@keyframes op{0%,100%{transform:translateX(-3px);opacity:.3}50%{transform:translateX(3px);opacity:1}}</style><ellipse class="m" cx="12" cy="12" rx="8" ry="5"/><circle class="g" cx="14" cy="12" r="1.5"/><circle class="g" cx="10" cy="12" r="1.5" style="animation-delay:.3s"/>`);

    case 'cold-front':
      return wrap(`<style>.c{stroke:currentColor;stroke-width:1.4;fill:none;animation:cf ${d} linear infinite}@keyframes cf{0%{transform:translateX(-3px)}100%{transform:translateX(3px)}}</style><path class="c" d="M4 8 L12 8 L10 18 L18 18"/><path class="c" d="M12 8 L20 12" opacity=".5"/>`);

    case 'conductor-wave':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none;animation:cw ${d} ease-in-out infinite;transform-origin:6px 16px}@keyframes cw{0%,100%{transform:rotate(-15deg)}50%{transform:rotate(35deg)}}</style><line class="b" x1="6" y1="16" x2="6" y2="6"/><circle cx="6" cy="5" r="1" fill="currentColor"/>`);

    case 'conveyor-belt':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.p{fill:currentColor;animation:cb ${d} linear infinite}@keyframes cb{0%{transform:translate(5px,12px)}100%{transform:translate(19px,12px)}}</style><line class="b" x1="4" y1="10" x2="20" y2="10"/><line class="b" x1="4" y1="14" x2="20" y2="14"/><rect class="p" x="0" y="0" width="3" height="3" rx=".4"/>`);

    case 'crane-jib':
      return wrap(`<style>.j{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.c{animation:cj ${d} ease-in-out infinite;transform-origin:6px 18px}@keyframes cj{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(20deg)}}</style><line class="j" x1="6" y1="18" x2="6" y2="10"/><line class="j c" x1="6" y1="10" x2="18" y2="8"/><line class="j" x1="18" y1="8" x2="18" y2="12"/><circle cx="18" cy="13" r="1.2" fill="currentColor"/>`);

    case 'dfs-path':
      return wrap(`<style>.e{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.p{fill:currentColor;animation:df ${d} linear infinite}@keyframes df{0%{transform:translate(12px,17px)}33%{transform:translate(12px,12px)}66%{transform:translate(7px,7px)}100%{transform:translate(12px,7px)}}</style><line class="e" x1="12" y1="17" x2="12" y2="12"/><line class="e" x1="12" y1="12" x2="7" y2="7"/><line class="e" x1="7" y1="7" x2="12" y2="7"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'dna-helix': {
      const d1 = delayFrac(d, 1 / 3);
      const d2 = delayFrac(d, 2 / 3);
      return wrap(`<style>.st{stroke:currentColor;stroke-width:1.35;fill:none;stroke-linecap:round}.rg{animation:tw ${d} linear infinite;transform-origin:0 0}.rg line{stroke:currentColor;stroke-width:1.35;stroke-linecap:round}@keyframes tw{0%{transform:translate(12px,4px) scaleX(1);opacity:.4}12%{opacity:1}50%{transform:translate(12px,12px) scaleX(.28);opacity:1}88%{opacity:1}100%{transform:translate(12px,20px) scaleX(1);opacity:.4}}</style><path class="st" d="M9 4Q7 8 9 12Q7 16 9 20"/><path class="st" d="M15 4Q17 8 15 12Q17 16 15 20"/><g class="rg"><line x1="-3" y1="0" x2="3" y2="0"/></g><g class="rg" style="animation-delay:${d1}"><line x1="-3" y1="0" x2="3" y2="0"/></g><g class="rg" style="animation-delay:${d2}"><line x1="-3" y1="0" x2="3" y2="0"/></g>`);
    }

    case 'dna-replicate':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.4;fill:none;stroke-linecap:round}.s{animation:un ${d} ease-in-out infinite;transform-origin:12px 12px}.b{stroke-dasharray:4;animation:rp ${d} linear infinite}@keyframes un{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.35)}}@keyframes rp{0%{stroke-dashoffset:8}100%{stroke-dashoffset:0}}</style><path class="f s" d="M6 5v14"/><path class="f s" d="M18 5v14"/><path class="f b" d="M6 8h12"/><path class="f b" d="M6 12h12" style="animation-delay:.2s"/><path class="f b" d="M6 16h12" style="animation-delay:.4s"/>`);

    case 'drum-pulse':
      return wrap(`<style>.d{fill:currentColor;animation:dp ${d} ease-in-out infinite;transform-origin:12px 14px}.s{stroke:currentColor;stroke-width:1.4;animation:st ${d} ease-in-out infinite;transform-origin:12px 10px}@keyframes dp{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}@keyframes st{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}</style><ellipse class="d" cx="12" cy="14" rx="6" ry="2"/><line class="s" x1="8" y1="10" x2="16" y2="10"/>`);

    case 'enzyme-binding':
      return wrap(`<style>.e{fill:currentColor;opacity:.5}.s{fill:currentColor;animation:bd ${d} ease-in-out infinite}@keyframes bd{0%,100%{transform:translate(16px,12px)}45%,55%{transform:translate(11px,12px)}}</style><ellipse cx="8" cy="12" rx="4" ry="3" class="e"/><circle class="s" cx="0" cy="0" r="1.6"/>`);

    case 'fault-slip':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.4;fill:none}.s{animation:sl ${d} ease-in-out infinite}@keyframes sl{0%,100%{transform:translate(0,0)}50%{transform:translate(2px,-1px)}}</style><path class="f s" d="M4 10 L20 8"/><path class="f" d="M4 14 L20 16"/>`);

    case 'fiber-tir':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.5;fill:none}.p{fill:currentColor;animation:fi ${d} linear infinite}@keyframes fi{0%{transform:translate(4px,6px)}100%{transform:translate(18px,18px)}}</style><path class="f" d="M4 6 Q12 12 4 18"/><circle class="p" cx="0" cy="0" r="1.2"/>`);

    case 'four-bar-link':
      return wrap(`<style>.l{stroke:currentColor;stroke-width:1.4;fill:none;stroke-linecap:round}.cr{animation:fb ${d} ease-in-out infinite;transform-origin:8px 14px}@keyframes fb{0%,100%{transform:rotate(-15deg)}50%{transform:rotate(15deg)}}</style><line class="l" x1="8" y1="14" x2="14" y2="10"/><line class="l cr" x1="8" y1="14" x2="6" y2="8"/><line class="l" x1="14" y1="10" x2="18" y2="14"/><circle cx="8" cy="14" r="1" fill="currentColor"/><circle cx="14" cy="10" r="1" fill="currentColor"/>`);

    case 'gear-train':
      return wrap(`<style>.g{stroke:currentColor;stroke-width:1.3;fill:none;animation:gr ${d} linear infinite;transform-origin:9px 12px}.g2{animation-direction:reverse;transform-origin:15px 12px}@keyframes gr{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><circle class="g" cx="9" cy="12" r="4"/><circle class="g g2" cx="15" cy="12" r="3"/><line class="g" x1="9" y1="8" x2="9" y2="16"/><line class="g" x1="5" y1="12" x2="13" y2="12"/>`);

    case 'git-merge':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1.3;fill:none}.c{fill:currentColor;animation:mg ${d} linear infinite}@keyframes mg{0%{transform:translate(6px,6px)}40%{transform:translate(6px,12px)}70%{transform:translate(15px,18px)}100%{transform:translate(15px,18px)}}</style><path class="b" d="M6 6v6a3 3 0 003 3h6"/><path class="b" d="M18 6v6a3 3 0 01-3 3"/><circle class="c" cx="0" cy="0" r="1.5"/>`);

    case 'glacier-flow':
      return wrap(`<style>.g{stroke:currentColor;stroke-width:1.4;fill:none;animation:gl ${d} ease-in-out infinite}@keyframes gl{0%,100%{transform:translateX(0)}50%{transform:translateX(3px)}}</style><path class="g" d="M4 10 L10 8 L16 10 L20 14 L16 18 L8 18 Z"/>`);

    case 'graph-edge':
      return wrap(`<style>.e{stroke:currentColor;stroke-width:1.3;fill:none;stroke-dasharray:6;animation:ed ${d} linear infinite}.n{fill:currentColor}@keyframes ed{0%{stroke-dashoffset:12}100%{stroke-dashoffset:0}}</style><circle class="n" cx="6" cy="12" r="1.8"/><circle class="n" cx="18" cy="8" r="1.8"/><circle class="n" cx="18" cy="16" r="1.8"/><line class="e" x1="6" y1="12" x2="18" y2="8"/><line class="e" x1="6" y1="12" x2="18" y2="16"/>`);

    case 'grating-diffract':
      return wrap(`<style>.g{stroke:currentColor;stroke-width:1.2;opacity:.35}.d{stroke:currentColor;stroke-width:1.2;animation:df ${d} ease-in-out infinite;transform-origin:12px 12px}@keyframes df{0%,100%{transform:rotate(-6deg);opacity:.3}50%{transform:rotate(6deg);opacity:1}}</style><line class="g" x1="10" y1="4" x2="10" y2="20"/><line class="g" x1="12" y1="4" x2="12" y2="20"/><line class="g" x1="14" y1="4" x2="14" y2="20"/><line class="d" x1="2" y1="12" x2="10" y2="12"/><line class="d" x1="14" y1="10" x2="22" y2="8" style="animation-delay:.1s"/><line class="d" x1="14" y1="14" x2="22" y2="16" style="animation-delay:.2s"/>`);

    case 'groundwater':
      return wrap(`<style>.g{stroke:currentColor;stroke-width:1.2;opacity:.35;fill:none}.d{fill:currentColor;animation:gw ${d} ease-in-out infinite}@keyframes gw{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}</style><path class="g" d="M4 14 Q12 10 20 14"/><circle class="d" cx="8" cy="15" r="1" style="animation-delay:0s"/><circle class="d" cx="14" cy="14" r="1.2" style="animation-delay:.2s"/><circle class="d" cx="18" cy="15" r=".9" style="animation-delay:.4s"/>`);

    case 'hash-chain':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1.2;fill:none;opacity:.35}.d{fill:currentColor;animation:ch ${d} linear infinite}@keyframes ch{0%{transform:translate(7px,11px)}100%{transform:translate(17px,11px)}}</style><rect class="b" x="5" y="8" width="4" height="8"/><rect class="b" x="10" y="8" width="4" height="8"/><rect class="b" x="15" y="8" width="4" height="8"/><circle class="d" cx="0" cy="0" r="1"/>`);

    case 'heapify':
      return wrap(`<style>.b{fill:currentColor;animation:hp ${d} ease-in-out infinite;transform-origin:center bottom}@keyframes hp{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}</style><rect x="10" y="6" width="4" height="3" rx=".4" class="b"/><rect x="6" y="11" width="4" height="3" rx=".4" class="b" style="animation-delay:.1s"/><rect x="14" y="11" width="4" height="3" rx=".4" class="b" style="animation-delay:.2s"/><rect x="10" y="16" width="4" height="3" rx=".4" class="b" style="animation-delay:.3s"/>`);

    case 'heartbeat-ecg':
      return wrap(`<style>.ecg{stroke:currentColor;stroke-width:1.5;fill:none;stroke-linecap:round;stroke-dasharray:40;animation:ec ${d} linear infinite}@keyframes ec{0%{stroke-dashoffset:40}100%{stroke-dashoffset:0}}</style><path class="ecg" d="M2 12h4l2-4 2 8 2-6 2 4h6"/>`);

    case 'hurricane-spin':
      return wrap(`<style>.s{stroke:currentColor;stroke-width:1.3;fill:none;animation:sp ${d} linear infinite;transform-origin:12px 12px}@keyframes sp{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><path class="s" d="M12 6c3 2 4 5 2 8s-5 4-7 2"/><path class="s" d="M12 18c-3-2-4-5-2-8s5-4 7-2"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>`);

    case 'interference-ring':
      return wrap(`<style>.r{stroke:currentColor;stroke-width:1.2;fill:none;animation:rg ${d} ease-in-out infinite;transform-origin:12px 12px}@keyframes rg{0%,100%{opacity:.25;transform:scale(.9)}50%{opacity:1;transform:scale(1.05)}}</style><circle class="r" cx="12" cy="12" r="3"/><circle class="r" cx="12" cy="12" r="5" style="animation-delay:.15s"/><circle class="r" cx="12" cy="12" r="7" style="animation-delay:.3s"/>`);

    case 'laser-cavity':
      return wrap(`<style>.m{stroke:currentColor;stroke-width:1.4;fill:none;opacity:.35}.b{fill:currentColor;animation:lc ${d} linear infinite}@keyframes lc{0%,100%{transform:translate(6px,12px)}50%{transform:translate(18px,12px)}}</style><line class="m" x1="6" y1="8" x2="6" y2="16"/><line class="m" x1="18" y1="8" x2="18" y2="16"/><circle class="b" cx="0" cy="0" r="1.3"/>`);

    case 'lens-focus':
      return wrap(`<style>.l{stroke:currentColor;stroke-width:1.4;fill:none}.r{stroke:currentColor;stroke-width:1.2;animation:fc ${d} ease-in-out infinite}@keyframes fc{0%,100%{transform:translateX(-2px)}50%{transform:translateX(2px)}}</style><path class="l" d="M8 5 Q12 12 8 19"/><path class="l" d="M16 5 Q12 12 16 19"/><line class="r" x1="2" y1="9" x2="8" y2="10"/><line class="r" x1="2" y1="15" x2="8" y2="14"/><line class="r" x1="16" y1="10" x2="22" y2="12"/><line class="r" x1="16" y1="14" x2="22" y2="12"/>`);

    case 'lever-pulley':
      return wrap(`<style>.l{stroke:currentColor;stroke-width:1.4;fill:none;stroke-linecap:round}.w{animation:lp ${d} ease-in-out infinite;transform-origin:8px 8px}.p{animation:pu ${d} ease-in-out infinite}@keyframes lp{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}@keyframes pu{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}</style><line class="l w" x1="4" y1="16" x2="16" y2="8"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/><circle class="p" cx="16" cy="6" r="2" stroke="currentColor" stroke-width="1.3" fill="none"/>`);

    case 'linked-list':
      return wrap(`<style>.n{fill:currentColor}.a{stroke:currentColor;stroke-width:1.2;fill:none;animation:lk ${d} linear infinite}.p{fill:currentColor;animation:mv ${d} linear infinite}@keyframes lk{0%{stroke-dashoffset:8}100%{stroke-dashoffset:0}}@keyframes mv{0%{transform:translate(6px,12px)}100%{transform:translate(18px,12px)}}</style><circle class="n" cx="6" cy="12" r="2"/><circle class="n" cx="12" cy="12" r="2"/><circle class="n" cx="18" cy="12" r="2"/><line class="a" x1="8" y1="12" x2="10" y2="12" stroke-dasharray="4"/><line class="a" x1="14" y1="12" x2="16" y2="12" stroke-dasharray="4"/><circle class="p" cx="0" cy="0" r="1"/>`);

    case 'metronome':
      return wrap(`<style>.m{stroke:currentColor;stroke-width:1.4;fill:none}.p{animation:pe ${d} ease-in-out infinite;transform-origin:12px 16px}@keyframes pe{0%,100%{transform:rotate(-25deg)}50%{transform:rotate(25deg)}}</style><line class="m" x1="12" y1="18" x2="12" y2="16"/><line class="p m" x1="12" y1="16" x2="12" y2="6"/><circle cx="12" cy="6" r="1.2" fill="currentColor"/>`);

    case 'mirror-reflect':
      return wrap(`<style>.m{stroke:currentColor;stroke-width:1.5;fill:none}.i,.o{stroke:currentColor;stroke-width:1.2;animation:rf ${d} ease-in-out infinite;transform-origin:9px 10px}.o{transform-origin:9px 10px;animation-name:ro}@keyframes rf{0%,100%{transform:rotate(-4deg)}50%{transform:rotate(4deg)}}@keyframes ro{0%,100%{transform:rotate(8deg)}50%{transform:rotate(16deg)}}</style><path class="m" d="M6 18 Q12 6 18 18"/><line class="i" x1="2" y1="8" x2="9" y2="10"/><line class="o" x1="9" y1="10" x2="20" y2="6" style="animation-delay:.08s"/>`);

    case 'mitosis-split':
      return wrap(`<style>.c{stroke:currentColor;stroke-width:1.4;fill:none;animation:ce ${d} ease-in-out infinite;transform-origin:12px 12px}.n{fill:currentColor;animation:sp ${d} ease-in-out infinite}@keyframes ce{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.15)}}@keyframes sp{0%,100%{transform:translateX(0)}50%{transform:translateX(3px)}}</style><ellipse class="c" cx="12" cy="12" rx="7" ry="4"/><circle class="n" cx="9" cy="12" r="1.2"/><circle class="n" cx="15" cy="12" r="1.2" style="animation-delay:.15s"/>`);

    case 'muscle-contract':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round}.z{animation:ct ${d} ease-in-out infinite;transform-origin:12px 12px}@keyframes ct{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.65)}}</style><line class="f" x1="4" y1="10" x2="20" y2="10"/><line class="f" x1="4" y1="14" x2="20" y2="14"/><g class="z"><line class="f" x1="8" y1="8" x2="8" y2="16"/><line class="f" x1="16" y1="8" x2="16" y2="16"/></g>`);

    case 'neural-layers':
      return wrap(`<style>.l{fill:currentColor;opacity:.35}.p{fill:currentColor;animation:np ${d} linear infinite}@keyframes np{0%{transform:translate(5px,12px);opacity:0}10%{opacity:1}90%{opacity:1}100%{transform:translate(19px,12px);opacity:0}}</style><circle class="l" cx="5" cy="8" r="1.2"/><circle class="l" cx="5" cy="16" r="1.2"/><circle class="l" cx="12" cy="6" r="1.2"/><circle class="l" cx="12" cy="12" r="1.2"/><circle class="l" cx="12" cy="18" r="1.2"/><circle class="l" cx="19" cy="12" r="1.2"/><circle class="p" cx="0" cy="0" r="1.2"/>`);

    case 'neuron-pulse':
      return wrap(`<style>.ax{stroke:currentColor;stroke-width:1.5;fill:none}.pl{fill:currentColor;animation:pu ${d} linear infinite}@keyframes pu{0%{transform:translate(4px,12px);opacity:0}10%{opacity:1}90%{opacity:1}100%{transform:translate(20px,12px);opacity:0}}</style><line class="ax" x1="4" y1="12" x2="20" y2="12"/><circle class="pl" cx="0" cy="0" r="1.4"/>`);

    case 'ocean-gyre':
      return wrap(`<style>.o{stroke:currentColor;stroke-width:1.3;fill:none;animation:gy ${d} linear infinite;transform-origin:12px 12px}@keyframes gy{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><ellipse class="o" cx="12" cy="12" rx="8" ry="5"/><ellipse class="o" cx="12" cy="12" rx="5" ry="3" style="animation-direction:reverse"/>`);

    case 'osmosis-flow':
      return wrap(`<style>.m{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.w{fill:currentColor;animation:os ${d} ease-in-out infinite}@keyframes os{0%,100%{transform:translateX(-3px)}50%{transform:translateX(3px)}}</style><line class="m" x1="12" y1="5" x2="12" y2="19"/><circle class="w" cx="8" cy="12" r="1"/><circle class="w" cx="16" cy="12" r="1.4" style="animation-delay:.2s"/>`);

    case 'photosynthesis-lab':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.3;fill:none}.s{fill:currentColor;animation:sn ${d} linear infinite}.l{animation:ph ${d} ease-in-out infinite;transform-origin:12px 10px}@keyframes sn{0%{transform:translate(-2px,4px);opacity:.2}50%{opacity:1}100%{transform:translate(2px,-4px);opacity:.2}}@keyframes ph{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}</style><path class="f" d="M12 18 Q12 10 8 6"/><circle class="s" cx="4" cy="6" r="1.5"/><circle class="f l" cx="12" cy="10" r="2"/>`);

    case 'piano-key':
      return wrap(`<style>.k{fill:currentColor;animation:ky ${d} ease-in-out infinite;transform-origin:12px 16px}.h{stroke:currentColor;stroke-width:1.4;animation:ht ${d} ease-in-out infinite;transform-origin:12px 18px}@keyframes ky{0%,100%{transform:rotate(0deg)}50%{transform:rotate(6deg)}}@keyframes ht{0%,100%{transform:translateY(0)}50%{transform:translateY(1px)}}</style><rect class="k" x="8" y="8" width="8" height="10" rx="1"/><line class="h" x1="10" y1="18" x2="14" y2="18"/>`);

    case 'piston-cycle':
      return wrap(`<style>.p{stroke:currentColor;stroke-width:1.4;fill:none}.r{animation:pc ${d} ease-in-out infinite;transform-origin:12px 10px}@keyframes pc{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}</style><rect class="p" x="8" y="6" width="8" height="12" rx="1"/><rect class="p r" x="9" y="8" width="6" height="3" rx=".5"/><line class="p" x1="12" y1="11" x2="12" y2="18"/>`);

    case 'plate-subduct':
      return wrap(`<style>.p{stroke:currentColor;stroke-width:1.4;fill:none;animation:sb ${d} ease-in-out infinite;transform-origin:12px 16px}@keyframes sb{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-8deg)}}</style><path class="p" d="M4 16h16"/><path class="p" d="M14 16 L18 8 L20 12"/><path class="p" d="M10 16 L5 9 L8 7"/>`);

    case 'polarization':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.4;fill:none}.w{animation:pl ${d} linear infinite;transform-origin:12px 12px}@keyframes pl{0%{transform:rotate(0deg)}100%{transform:rotate(90deg)}}</style><line class="f" x1="4" y1="12" x2="20" y2="12"/><rect class="f w" x="10" y="8" width="4" height="8" rx=".5"/>`);

    case 'prism-dispers':
      return wrap(`<style>.p{fill:none;stroke:currentColor;stroke-width:1.3}.r{stroke:currentColor;stroke-width:1.2;animation:ds ${d} ease-in-out infinite;transform-origin:12px 12px}@keyframes ds{0%,100%{transform:rotate(-10deg);opacity:.35}50%{transform:rotate(10deg);opacity:1}}</style><polygon class="p" points="10,6 14,12 10,18 6,12"/><line class="r" x1="2" y1="10" x2="6" y2="12"/><line class="r" x1="14" y1="11" x2="22" y2="9" style="animation-delay:.1s"/><line class="r" x1="14" y1="12" x2="22" y2="12"/><line class="r" x1="14" y1="13" x2="22" y2="15" style="animation-delay:.2s"/>`);

    case 'protein-fold':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.4;fill:none;stroke-linecap:round}.ch{animation:fd ${d} ease-in-out infinite;transform-origin:12px 10px}@keyframes fd{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(35deg)}}</style><path class="f ch" d="M4 14 L8 8 L12 12 L16 6 L20 10"/>`);

    case 'queue-flow':
      return wrap(`<style>.q{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.b{fill:currentColor;animation:qu ${d} linear infinite}@keyframes qu{0%{transform:translate(5px,12px)}100%{transform:translate(18px,12px)}}</style><line class="q" x1="4" y1="10" x2="20" y2="10"/><line class="q" x1="4" y1="14" x2="20" y2="14"/><rect class="b" x="0" y="0" width="3" height="3" rx=".4"/>`);

    case 'recursion-tree':
      return wrap(`<style>.e{stroke:currentColor;stroke-width:1.2;fill:none;opacity:.4}.p{fill:currentColor;animation:tw ${d} linear infinite}@keyframes tw{0%{transform:translate(12px,5px)}35%{transform:translate(7px,11px)}70%{transform:translate(5px,17px)}100%{transform:translate(5px,17px)}}</style><line class="e" x1="12" y1="5" x2="7" y2="11"/><line class="e" x1="12" y1="5" x2="17" y2="11"/><line class="e" x1="7" y1="11" x2="5" y2="17"/><line class="e" x1="7" y1="11" x2="9" y2="17"/><circle class="p" cx="0" cy="0" r="1.3"/>`);

    case 'rna-transcribe':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.4;fill:none}.d{stroke:currentColor;stroke-width:1.2;opacity:.35}.p{fill:currentColor;animation:mv ${d} linear infinite}@keyframes mv{0%{transform:translate(5px,10px)}100%{transform:translate(18px,10px)}}</style><line class="d" x1="4" y1="10" x2="20" y2="10"/><line class="f" x1="4" y1="8" x2="4" y2="14"/><path class="f" d="M18 8v6"/><circle class="p" cx="0" cy="0" r="1.2"/>`);

    case 'season-tilt':
      return wrap(`<style>.e{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.a{stroke:currentColor;stroke-width:1.4;animation:tl ${d} ease-in-out infinite;transform-origin:12px 12px}@keyframes tl{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}</style><circle class="e" cx="12" cy="12" r="2"/><line class="a" x1="12" y1="12" x2="12" y2="5"/><ellipse class="e" cx="12" cy="12" rx="9" ry="3"/>`);

    case 'seismic-wave':
      return wrap(`<style>.g{stroke:currentColor;stroke-width:1.25;opacity:.3}.w{stroke:currentColor;stroke-width:1.4;fill:none;stroke-dasharray:8;animation:sw ${d} linear infinite}@keyframes sw{0%{stroke-dashoffset:16}100%{stroke-dashoffset:0}}</style><line class="g" x1="2" y1="18" x2="22" y2="18"/><path class="w" d="M4 14c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/>`);

    case 'spectrum-fall':
      return wrap(`<style>.b{fill:currentColor;animation:sf ${d} ease-in-out infinite;transform-origin:center bottom}@keyframes sf{0%,100%{transform:scaleY(.5)}50%{transform:scaleY(1)}}</style><rect class="b" x="6" y="14" width="2" height="4" style="animation-delay:0s"/><rect class="b" x="10" y="10" width="2" height="8" style="animation-delay:.1s"/><rect class="b" x="14" y="6" width="2" height="12" style="animation-delay:.2s"/><rect class="b" x="18" y="10" width="2" height="8" style="animation-delay:.15s"/>`);

    case 'stack-push':
      return wrap(`<style>.st{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.b{fill:currentColor;animation:ps ${d} ease-in-out infinite}@keyframes ps{0%,100%{transform:translate(10px,16px)}50%{transform:translate(10px,10px)}}</style><rect class="st" x="6" y="6" width="8" height="14" rx="1"/><rect class="b" x="0" y="0" width="6" height="2" rx=".4"/>`);

    case 'string-harmonic':
      return wrap(`<style>.s{stroke:currentColor;stroke-width:1.4;fill:none;animation:st ${d} ease-in-out infinite;transform-origin:12px 12px}@keyframes st{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.35)}}</style><line class="s" x1="4" y1="12" x2="20" y2="12"/>`);

    case 'telescope-focus':
      return wrap(`<style>.t{stroke:currentColor;stroke-width:1.4;fill:none}.r{stroke:currentColor;stroke-width:1.2;animation:tf ${d} linear infinite}@keyframes tf{0%{transform:translate(2px,11px)}100%{transform:translate(22px,12px)}}</style><circle class="t" cx="8" cy="12" r="3"/><line class="t" x1="11" y1="12" x2="18" y2="12"/><line class="r" x1="2" y1="10" x2="5" y2="11"/><line class="r" x1="2" y1="14" x2="5" y2="13"/><line class="r" x1="18" y1="12" x2="22" y2="12"/>`);

    case 'thin-film':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.w{stroke:currentColor;stroke-width:1.2;animation:tm ${d} linear infinite}@keyframes tm{0%{transform:translateX(-2px)}100%{transform:translateX(2px)}}</style><line class="f" x1="4" y1="10" x2="20" y2="10"/><line class="f" x1="4" y1="14" x2="20" y2="14"/><line class="w" x1="2" y1="12" x2="10" y2="12"/><line class="w" x1="14" y1="12" x2="22" y2="12"/>`);

    case 'tube-resonance':
      return wrap(`<style>.t{stroke:currentColor;stroke-width:1.5;fill:none}.w{stroke:currentColor;stroke-width:1.2;animation:rs ${d} ease-in-out infinite;transform-origin:12px 12px}@keyframes rs{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.3)}}</style><line class="t" x1="8" y1="6" x2="8" y2="18"/><line class="t" x1="16" y1="6" x2="16" y2="18"/><line class="w" x1="8" y1="12" x2="16" y2="12"/>`);

    case 'turbine-spin':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1.3;fill:none;animation:ts ${d} linear infinite;transform-origin:12px 12px}@keyframes ts{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><circle cx="12" cy="12" r="2" fill="currentColor"/><line class="b" x1="12" y1="12" x2="12" y2="5"/><line class="b" x1="12" y1="12" x2="18" y2="15"/><line class="b" x1="12" y1="12" x2="6" y2="15"/>`);

    case 'vibrato-pitch':
      return wrap(`<style>.w{stroke:currentColor;stroke-width:1.4;fill:none;animation:vi ${d} ease-in-out infinite;transform-origin:12px 12px}@keyframes vi{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.25)}}</style><path class="w" d="M3 12c2-1 4 1 6 0s4-1 6 0 4 1 6 0"/>`);

    case 'virus-infect':
      return wrap(`<style>.v{fill:currentColor;animation:at ${d} ease-in-out infinite}.h{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}@keyframes at{0%,100%{transform:translate(16px,12px)}50%{transform:translate(8px,12px)}}</style><circle class="h" cx="8" cy="12" r="4"/><circle class="v" cx="0" cy="0" r="1.8"/><line class="v" x1="0" y1="0" x2="2" y2="-2"/><line class="v" x1="0" y1="0" x2="-2" y2="2"/>`);

    case 'volcano-erupt':
      return wrap(`<style>.v{stroke:currentColor;stroke-width:1.4;fill:none}.a{fill:currentColor;animation:er ${d} ease-out infinite}@keyframes er{0%,70%{transform:translateY(0);opacity:0}75%{opacity:1}100%{transform:translateY(-6px);opacity:0}}</style><path class="v" d="M8 18 L12 8 L16 18 Z"/><circle class="a" cx="12" cy="10" r="1"/><circle class="a" cx="11" cy="8" r=".8" style="animation-delay:.1s"/><circle class="a" cx="13" cy="7" r=".8" style="animation-delay:.2s"/>`);

    default:
      return null;
  }
}
