import type { IconDefinition } from './types.ts';

function wrap(body: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${body}</svg>`;
}

function seed(def: IconDefinition): number {
  return def.seed ?? 1;
}

function dur(def: IconDefinition, base = 1.4): number {
  const s = seed(def);
  return Number((base + (s % 7) * 0.12).toFixed(2));
}

/** 扩展模板渲染（67 个） */
export function renderExpansionTemplate(def: IconDefinition): string | null {
  const d = dur(def);

  switch (def.template) {
    case 'bacteria-divide':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1.4;fill:none}.d{animation:dv ${d} ease-in-out infinite;transform-origin:12px 12px}@keyframes dv{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.4)}}</style><ellipse class="b d" cx="12" cy="12" rx="5" ry="3"/><line class="b" x1="12" y1="9" x2="12" y2="15"/>`);

    case 'beat-mix':
      return wrap(`<style>.w1{stroke:currentColor;stroke-width:1.3;fill:none;animation:b1 ${d} ease-in-out infinite}.w2{stroke:currentColor;stroke-width:1.3;fill:none;animation:b2 ${d} ease-in-out infinite}@keyframes b1{0%,100%{opacity:.4}50%{opacity:1}}@keyframes b2{0%,100%{opacity:1}50%{opacity:.4}}</style><path class="w1" d="M3 10c2 2 4-2 6 0s4 2 6 0"/><path class="w2" d="M3 14c2-2 4 2 6 0s4-2 6 0"/>`);

    case 'bfs-expand':
      return wrap(`<style>.n{fill:currentColor;opacity:.35;animation:ex ${d} ease-out infinite}.n1{animation-delay:0s}.n2{animation-delay:.15s}.n3{animation-delay:.3s}@keyframes ex{0%{transform:scale(.5);opacity:.2}100%{transform:scale(1.2);opacity:1}}</style><circle class="n n1" cx="12" cy="12" r="2"/><circle class="n n2" cx="7" cy="12" r="1.5"/><circle class="n n3" cx="17" cy="12" r="1.5"/><circle class="n n2" cx="12" cy="7" r="1.5"/><circle class="n n3" cx="12" cy="17" r="1.5"/>`);

    case 'binary-search':
      return wrap(`<style>.r{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.m{fill:currentColor;animation:hl ${d} ease-in-out infinite}@keyframes hl{0%,100%{transform:translate(4px,12px);opacity:.4}50%{transform:translate(12px,12px);opacity:1}}</style><rect class="r" x="3" y="8" width="18" height="8" rx="1"/><rect class="m" x="0" y="0" width="4" height="6" rx=".5"/>`);

    case 'blood-flow':
      return wrap(`<style>.p{fill:currentColor;animation:fl ${d} linear infinite}.v{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}@keyframes fl{0%{transform:translate(4px,12px)}100%{transform:translate(20px,12px)}}</style><path class="v" d="M4 12c3-2 6 2 8 0s5-2 8 0"/><circle class="p" cx="0" cy="0" r="1.1"/>`);

    case 'bridge-vibrate':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1.4;fill:none;animation:bv ${d} ease-in-out infinite;transform-origin:12px 14px}@keyframes bv{0%,100%{transform:scaleY(1)}50%{transform:scaleY(-1)}}</style><path class="b" d="M4 14 Q12 10 20 14"/><line x1="8" y1="14" x2="8" y2="18" stroke="currentColor" stroke-width="1.2"/><line x1="16" y1="14" x2="16" y2="18" stroke="currentColor" stroke-width="1.2"/>`);

    case 'bubble-sort':
      return wrap(`<style>.b{fill:currentColor}.b1{animation:s1 ${d} ease-in-out infinite}.b2{animation:s2 ${d} ease-in-out infinite}.b3{animation:s3 ${d} ease-in-out infinite}@keyframes s1{0%,100%{transform:translate(6px,14px)}50%{transform:translate(10px,14px)}}@keyframes s2{0%,100%{transform:translate(10px,10px)}50%{transform:translate(14px,10px)}}@keyframes s3{0%,100%{transform:translate(14px,6px)}50%{transform:translate(10px,6px)}}</style><rect class="b b1" x="0" y="0" width="3" height="6" rx=".5"/><rect class="b b2" x="0" y="0" width="3" height="10" rx=".5"/><rect class="b b3" x="0" y="0" width="3" height="14" rx=".5"/>`);

    case 'cache-line':
      return wrap(`<style>.h{fill:currentColor;opacity:.35;animation:hi ${d} ease-in-out infinite}.m{animation:mi ${d} ease-in-out infinite}@keyframes hi{0%,100%{opacity:.2}50%{opacity:1}}@keyframes mi{0%,100%{opacity:1}50%{opacity:.2}}</style><rect class="h" x="4" y="8" width="4" height="8" rx=".5"/><rect class="h m" x="10" y="8" width="4" height="8" rx=".5"/><rect class="h" x="16" y="8" width="4" height="8" rx=".5"/>`);

    case 'cam-follower':
      return wrap(`<style>.c{stroke:currentColor;stroke-width:1.4;fill:none}.f{stroke:currentColor;stroke-width:1.4;animation:cf ${d} ease-in-out infinite;transform-origin:12px 14px}@keyframes cf{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}</style><circle class="c" cx="12" cy="10" r="4"/><line class="f" x1="12" y1="14" x2="12" y2="18"/>`);

    case 'cell-membrane':
      return wrap(`<style>.m{stroke:currentColor;stroke-width:1.5;fill:none;opacity:.4}.g{fill:currentColor;animation:op ${d} ease-in-out infinite}@keyframes op{0%,100%{transform:translateX(0);opacity:.3}50%{transform:translateX(2px);opacity:1}}</style><ellipse class="m" cx="12" cy="12" rx="8" ry="5"/><circle class="g" cx="14" cy="12" r="1.5"/><circle class="g" cx="10" cy="12" r="1.5" style="animation-delay:.3s"/>`);

    case 'cold-front':
      return wrap(`<style>.c{stroke:currentColor;stroke-width:1.4;fill:none;animation:cf ${d} linear infinite}@keyframes cf{0%{transform:translateX(-2px)}100%{transform:translateX(2px)}}</style><path class="c" d="M4 8 L12 8 L10 18 L18 18"/><path class="c" d="M12 8 L20 12" opacity=".5"/>`);

    case 'conductor-wave':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none;animation:cw ${d} ease-in-out infinite;transform-origin:6px 16px}@keyframes cw{0%,100%{transform:rotate(-15deg)}50%{transform:rotate(35deg)}}</style><line class="b" x1="6" y1="16" x2="6" y2="6"/><circle cx="6" cy="5" r="1" fill="currentColor"/>`);

    case 'conveyor-belt':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.p{fill:currentColor;animation:cb ${d} linear infinite}@keyframes cb{0%{transform:translate(5px,12px)}100%{transform:translate(19px,12px)}}</style><line class="b" x1="4" y1="10" x2="20" y2="10"/><line class="b" x1="4" y1="14" x2="20" y2="14"/><rect class="p" x="0" y="0" width="3" height="3" rx=".4"/>`);

    case 'crane-jib':
      return wrap(`<style>.j{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;fill:none}.c{animation:cj ${d} ease-in-out infinite;transform-origin:6px 18px}@keyframes cj{0%,100%{transform:rotate(-10deg)}50%{transform:rotate(20deg)}}</style><line class="j" x1="6" y1="18" x2="6" y2="10"/><line class="j c" x1="6" y1="10" x2="18" y2="8"/><line class="j" x1="18" y1="8" x2="18" y2="12"/><circle cx="18" cy="13" r="1.2" fill="currentColor"/>`);

    case 'dfs-path':
      return wrap(`<style>.e{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.p{fill:currentColor;animation:df ${d} linear infinite}@keyframes df{0%{transform:translate(12px,17px)}33%{transform:translate(12px,12px)}66%{transform:translate(7px,7px)}100%{transform:translate(12px,7px)}}</style><line class="e" x1="12" y1="17" x2="12" y2="12"/><line class="e" x1="12" y1="12" x2="7" y2="7"/><line class="e" x1="7" y1="7" x2="12" y2="7"/><circle class="p" cx="0" cy="0" r="1.5"/>`);

    case 'dna-helix':
      return wrap(`<style>.st{stroke:currentColor;stroke-width:1.35;fill:none;stroke-linecap:round}.r{animation:rt ${d} linear infinite;transform-origin:12px 12px}@keyframes rt{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><path class="st r" d="M8 4c2 3 2 6 0 9s-2 6 0 9"/><path class="st r" d="M16 4c-2 3-2 6 0 9s2 6 0 9" style="animation-direction:reverse"/><line class="st" x1="9" y1="7" x2="15" y2="8"/><line class="st" x1="9" y1="12" x2="15" y2="11"/><line class="st" x1="9" y1="17" x2="15" y2="16"/>`);

    case 'dna-replicate':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.4;fill:none;stroke-linecap:round}.s{animation:un ${d} ease-in-out infinite;transform-origin:12px 12px}@keyframes un{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.35)}}</style><path class="f s" d="M6 5v14"/><path class="f s" d="M18 5v14"/><path class="f" d="M6 8h12"/><path class="f" d="M6 12h12"/><path class="f" d="M6 16h12"/>`);

    case 'drum-pulse':
      return wrap(`<style>.d{fill:currentColor;animation:dp ${d} ease-in-out infinite;transform-origin:12px 14px}@keyframes dp{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}</style><ellipse class="d" cx="12" cy="14" rx="6" ry="2"/><line x1="8" y1="10" x2="16" y2="10" stroke="currentColor" stroke-width="1.4"/>`);

    case 'enzyme-binding':
      return wrap(`<style>.e{fill:currentColor}.s{fill:currentColor;animation:bd ${d} ease-in-out infinite}@keyframes bd{0%,100%{transform:translate(16px,12px)}45%,55%{transform:translate(11px,12px)}}</style><ellipse cx="8" cy="12" rx="4" ry="3" class="e" opacity=".5"/><circle class="s" cx="0" cy="0" r="1.6"/>`);

    case 'fault-slip':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.4;fill:none}.s{animation:sl ${d} ease-in-out infinite;transform-origin:12px 12px}@keyframes sl{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}</style><path class="f s" d="M4 10 L20 8"/><path class="f" d="M4 14 L20 16"/>`);

    case 'fiber-tir':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.5;fill:none}.p{fill:currentColor;animation:fi ${d} linear infinite}@keyframes fi{0%{transform:translate(4px,6px)}100%{transform:translate(18px,18px)}}</style><path class="f" d="M4 6 Q12 12 4 18"/><circle class="p" cx="0" cy="0" r="1.2"/>`);

    case 'four-bar-link':
      return wrap(`<style>.l{stroke:currentColor;stroke-width:1.4;fill:none;stroke-linecap:round}.cr{animation:fb ${d} ease-in-out infinite;transform-origin:8px 14px}@keyframes fb{0%,100%{transform:rotate(-15deg)}50%{transform:rotate(15deg)}}</style><line class="l" x1="8" y1="14" x2="14" y2="10"/><line class="l cr" x1="8" y1="14" x2="6" y2="8"/><line class="l" x1="14" y1="10" x2="18" y2="14"/><circle cx="8" cy="14" r="1" fill="currentColor"/><circle cx="14" cy="10" r="1" fill="currentColor"/>`);

    case 'gear-train':
      return wrap(`<style>.g{stroke:currentColor;stroke-width:1.3;fill:none;animation:gr ${d} linear infinite;transform-origin:9px 12px}.g2{animation-direction:reverse;transform-origin:15px 12px}@keyframes gr{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><circle class="g" cx="9" cy="12" r="4"/><circle class="g g2" cx="15" cy="12" r="3"/><line class="g" x1="9" y1="8" x2="9" y2="16"/><line class="g" x1="5" y1="12" x2="13" y2="12"/>`);

    case 'git-merge':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1.3;fill:none}.c{fill:currentColor;animation:mg ${d} ease-in-out infinite}@keyframes mg{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}</style><path class="b" d="M6 6v6a3 3 0 003 3h6"/><path class="b" d="M18 6v6a3 3 0 01-3 3"/><circle class="c" cx="6" cy="6" r="1.5"/><circle class="c" cx="18" cy="6" r="1.5"/><circle class="c" cx="15" cy="18" r="1.5"/>`);

    case 'glacier-flow':
      return wrap(`<style>.g{stroke:currentColor;stroke-width:1.4;fill:none;animation:gl ${d} ease-in-out infinite}@keyframes gl{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}</style><path class="g" d="M4 10 L10 8 L16 10 L20 14 L16 18 L8 18 Z"/>`);

    case 'graph-edge':
      return wrap(`<style>.e{stroke:currentColor;stroke-width:1.3;fill:none;stroke-dasharray:6;animation:ed ${d} linear infinite}.n{fill:currentColor}@keyframes ed{0%{stroke-dashoffset:12}100%{stroke-dashoffset:0}}</style><circle class="n" cx="6" cy="12" r="1.8"/><circle class="n" cx="18" cy="8" r="1.8"/><circle class="n" cx="18" cy="16" r="1.8"/><line class="e" x1="6" y1="12" x2="18" y2="8"/><line class="e" x1="6" y1="12" x2="18" y2="16"/>`);

    case 'grating-diffract':
      return wrap(`<style>.g{stroke:currentColor;stroke-width:1.2;opacity:.35}.d{stroke:currentColor;stroke-width:1.2;animation:df ${d} ease-in-out infinite}@keyframes df{0%,100%{opacity:.2}50%{opacity:1}}</style><line class="g" x1="10" y1="4" x2="10" y2="20"/><line class="g" x1="12" y1="4" x2="12" y2="20"/><line class="g" x1="14" y1="4" x2="14" y2="20"/><line class="d" x1="2" y1="12" x2="10" y2="12"/><line class="d" x1="14" y1="10" x2="22" y2="8"/><line class="d" x1="14" y1="14" x2="22" y2="16"/>`);

    case 'groundwater':
      return wrap(`<style>.g{stroke:currentColor;stroke-width:1.2;opacity:.35;fill:none}.d{fill:currentColor;animation:gw ${d} ease-in-out infinite}@keyframes gw{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}</style><path class="g" d="M4 14 Q12 10 20 14"/><circle class="d" cx="8" cy="15" r="1"/><circle class="d" cx="14" cy="14" r="1.2"/><circle class="d" cx="18" cy="15" r=".9"/>`);

    case 'hash-chain':
      return wrap(`<style>.b{stroke:currentColor;stroke-width:1.2;fill:none;opacity:.35}.d{fill:currentColor;animation:ch ${d} ease-in-out infinite}@keyframes ch{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}</style><rect class="b" x="5" y="8" width="4" height="8"/><rect class="b" x="10" y="8" width="4" height="8"/><rect class="b" x="15" y="8" width="4" height="8"/><circle class="d" cx="7" cy="11" r="1"/><circle class="d" cx="12" cy="13" r="1"/><circle class="d" cx="17" cy="11" r="1"/>`);

    case 'heapify':
      return wrap(`<style>.b{fill:currentColor;animation:hp ${d} ease-in-out infinite;transform-origin:12px 14px}@keyframes hp{0%,100%{transform:translateY(0)}50%{transform:translateY(3px)}}</style><rect x="10" y="6" width="4" height="3" rx=".4" class="b"/><rect x="6" y="11" width="4" height="3" rx=".4" class="b" style="animation-delay:.1s"/><rect x="14" y="11" width="4" height="3" rx=".4" class="b" style="animation-delay:.2s"/><rect x="10" y="16" width="4" height="3" rx=".4" class="b" style="animation-delay:.3s"/>`);

    case 'heartbeat-ecg':
      return wrap(`<style>.ecg{stroke:currentColor;stroke-width:1.5;fill:none;stroke-linecap:round;stroke-dasharray:40;animation:ec ${d} linear infinite}@keyframes ec{0%{stroke-dashoffset:40}100%{stroke-dashoffset:0}}</style><path class="ecg" d="M2 12h4l2-4 2 8 2-6 2 4h6"/>`);

    case 'hurricane-spin':
      return wrap(`<style>.s{stroke:currentColor;stroke-width:1.3;fill:none;animation:sp ${d} linear infinite;transform-origin:12px 12px}@keyframes sp{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><path class="s" d="M12 6c3 2 4 5 2 8s-5 4-7 2"/><path class="s" d="M12 18c-3-2-4-5-2-8s5-4 7-2"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>`);

    case 'interference-ring':
      return wrap(`<style>.r{stroke:currentColor;stroke-width:1.2;fill:none;animation:rg ${d} ease-in-out infinite}@keyframes rg{0%,100%{opacity:.25;transform:scale(.9)}50%{opacity:1;transform:scale(1.05)}}</style><circle class="r" cx="12" cy="12" r="3"/><circle class="r" cx="12" cy="12" r="5" style="animation-delay:.15s"/><circle class="r" cx="12" cy="12" r="7" style="animation-delay:.3s"/>`);

    case 'laser-cavity':
      return wrap(`<style>.m{stroke:currentColor;stroke-width:1.4;fill:none;opacity:.35}.b{fill:currentColor;animation:lc ${d} linear infinite}@keyframes lc{0%{transform:translate(6px,12px)}100%{transform:translate(18px,12px)}}</style><line class="m" x1="6" y1="8" x2="6" y2="16"/><line class="m" x1="18" y1="8" x2="18" y2="16"/><circle class="b" cx="0" cy="0" r="1.3"/>`);

    case 'lens-focus':
      return wrap(`<style>.l{stroke:currentColor;stroke-width:1.4;fill:none}.r{stroke:currentColor;stroke-width:1.2;animation:fc ${d} ease-in-out infinite}@keyframes fc{0%,100%{opacity:.3}50%{opacity:1}}</style><path class="l" d="M8 5 Q12 12 8 19"/><path class="l" d="M16 5 Q12 12 16 19"/><line class="r" x1="2" y1="9" x2="8" y2="10"/><line class="r" x1="2" y1="15" x2="8" y2="14"/><line class="r" x1="16" y1="10" x2="22" y2="12"/><line class="r" x1="16" y1="14" x2="22" y2="12"/>`);

    case 'lever-pulley':
      return wrap(`<style>.l{stroke:currentColor;stroke-width:1.4;fill:none;stroke-linecap:round}.w{animation:lp ${d} ease-in-out infinite;transform-origin:8px 8px}@keyframes lp{0%,100%{transform:rotate(-8deg)}50%{transform:rotate(8deg)}}</style><line class="l w" x1="4" y1="16" x2="16" y2="8"/><circle cx="8" cy="8" r="1.5" fill="currentColor"/><circle cx="16" cy="6" r="2" stroke="currentColor" stroke-width="1.3" fill="none"/>`);

    case 'linked-list':
      return wrap(`<style>.n{fill:currentColor}.a{stroke:currentColor;stroke-width:1.2;fill:none;animation:lk ${d} linear infinite}@keyframes lk{0%{stroke-dashoffset:8}100%{stroke-dashoffset:0}}</style><circle class="n" cx="6" cy="12" r="2"/><circle class="n" cx="12" cy="12" r="2"/><circle class="n" cx="18" cy="12" r="2"/><line class="a" x1="8" y1="12" x2="10" y2="12" stroke-dasharray="4"/><line class="a" x1="14" y1="12" x2="16" y2="12" stroke-dasharray="4"/>`);

    case 'metronome':
      return wrap(`<style>.m{stroke:currentColor;stroke-width:1.4;fill:none}.p{animation:pe ${d} ease-in-out infinite;transform-origin:12px 16px}@keyframes pe{0%,100%{transform:rotate(-25deg)}50%{transform:rotate(25deg)}}</style><line class="m" x1="12" y1="18" x2="12" y2="16"/><line class="p m" x1="12" y1="16" x2="12" y2="6"/><circle cx="12" cy="6" r="1.2" fill="currentColor"/>`);

    case 'mirror-reflect':
      return wrap(`<style>.m{stroke:currentColor;stroke-width:1.5;fill:none}.r{stroke:currentColor;stroke-width:1.2;animation:rf ${d} ease-in-out infinite}@keyframes rf{0%,100%{opacity:.35}50%{opacity:1}}</style><path class="m" d="M6 18 Q12 6 18 18"/><line class="r" x1="2" y1="8" x2="9" y2="10"/><line class="r" x1="9" y1="10" x2="20" y2="6"/>`);

    case 'mitosis-split':
      return wrap(`<style>.c{stroke:currentColor;stroke-width:1.4;fill:none}.n{fill:currentColor;animation:sp ${d} ease-in-out infinite}@keyframes sp{0%,100%{transform:translateX(0)}50%{transform:translateX(3px)}}</style><ellipse class="c" cx="12" cy="12" rx="7" ry="4"/><circle class="n" cx="9" cy="12" r="1.2"/><circle class="n" cx="15" cy="12" r="1.2" style="animation-delay:.15s"/>`);

    case 'muscle-contract':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.5;stroke-linecap:round}.z{animation:ct ${d} ease-in-out infinite;transform-origin:12px 12px}@keyframes ct{0%,100%{transform:scaleX(1)}50%{transform:scaleX(.7)}}</style><line class="f" x1="4" y1="10" x2="20" y2="10"/><line class="f" x1="4" y1="14" x2="20" y2="14"/><g class="z"><line class="f" x1="8" y1="8" x2="8" y2="16"/><line class="f" x1="16" y1="8" x2="16" y2="16"/></g>`);

    case 'neural-layers':
      return wrap(`<style>.l{fill:currentColor;opacity:.4;animation:np ${d} ease-in-out infinite}.l2{animation-delay:.2s}.l3{animation-delay:.4s}@keyframes np{0%,100%{opacity:.25}50%{opacity:1}}</style><circle class="l" cx="5" cy="8" r="1.2"/><circle class="l" cx="5" cy="16" r="1.2"/><circle class="l l2" cx="12" cy="6" r="1.2"/><circle class="l l2" cx="12" cy="12" r="1.2"/><circle class="l l2" cx="12" cy="18" r="1.2"/><circle class="l l3" cx="19" cy="12" r="1.2"/>`);

    case 'neuron-pulse':
      return wrap(`<style>.ax{stroke:currentColor;stroke-width:1.5;fill:none}.pl{fill:currentColor;animation:pu ${d} linear infinite}@keyframes pu{0%{transform:translate(4px,12px);opacity:0}10%{opacity:1}90%{opacity:1}100%{transform:translate(20px,12px);opacity:0}}</style><line class="ax" x1="4" y1="12" x2="20" y2="12"/><circle class="pl" cx="0" cy="0" r="1.4"/>`);

    case 'ocean-gyre':
      return wrap(`<style>.o{stroke:currentColor;stroke-width:1.3;fill:none;animation:gy ${d} linear infinite;transform-origin:12px 12px}@keyframes gy{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><ellipse class="o" cx="12" cy="12" rx="8" ry="5"/><ellipse class="o" cx="12" cy="12" rx="5" ry="3" style="animation-direction:reverse"/>`);

    case 'osmosis-flow':
      return wrap(`<style>.m{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.w{fill:currentColor;animation:os ${d} ease-in-out infinite}@keyframes os{0%,100%{transform:translateX(-2px)}50%{transform:translateX(2px)}}</style><line class="m" x1="12" y1="5" x2="12" y2="19"/><circle class="w" cx="8" cy="12" r="1"/><circle class="w" cx="16" cy="12" r="1.4" style="animation-delay:.2s"/>`);

    case 'photosynthesis-lab':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.3;fill:none}.s{fill:currentColor;animation:sn ${d} linear infinite}.l{animation:ph ${d} ease-in-out infinite}@keyframes sn{0%{transform:translate(-2px,4px);opacity:.2}50%{opacity:1}100%{transform:translate(2px,-4px);opacity:.2}}@keyframes ph{0%,100%{opacity:.3}50%{opacity:1}}</style><path class="f" d="M12 18 Q12 10 8 6"/><circle class="s" cx="4" cy="6" r="1.5"/><circle class="f l" cx="12" cy="10" r="2"/>`);

    case 'piano-key':
      return wrap(`<style>.k{fill:currentColor;animation:ky ${d} ease-in-out infinite;transform-origin:12px 16px}@keyframes ky{0%,100%{transform:rotate(0deg)}50%{transform:rotate(6deg)}}</style><rect class="k" x="8" y="8" width="8" height="10" rx="1"/><line x1="10" y1="18" x2="14" y2="18" stroke="currentColor" stroke-width="1.4"/>`);

    case 'piston-cycle':
      return wrap(`<style>.p{stroke:currentColor;stroke-width:1.4;fill:none}.r{animation:pc ${d} ease-in-out infinite;transform-origin:12px 10px}@keyframes pc{0%,100%{transform:translateY(0)}50%{transform:translateY(4px)}}</style><rect class="p" x="8" y="6" width="8" height="12" rx="1"/><rect class="p r" x="9" y="8" width="6" height="3" rx=".5"/><line class="p" x1="12" y1="11" x2="12" y2="18"/>`);

    case 'plate-subduct':
      return wrap(`<style>.p{stroke:currentColor;stroke-width:1.4;fill:none;animation:sb ${d} ease-in-out infinite;transform-origin:12px 16px}@keyframes sb{0%,100%{transform:rotate(0deg)}50%{transform:rotate(-8deg)}}</style><path class="p" d="M4 16h16"/><path class="p" d="M14 16 L18 8"/><path class="p" d="M10 16 L6 10"/>`);

    case 'polarization':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.4;fill:none}.w{animation:pl ${d} linear infinite;transform-origin:12px 12px}@keyframes pl{0%{transform:rotate(0deg)}100%{transform:rotate(90deg)}}</style><line class="f" x1="4" y1="12" x2="20" y2="12"/><rect class="f w" x="10" y="8" width="4" height="8" rx=".5"/>`);

    case 'prism-dispers':
      return wrap(`<style>.p{fill:none;stroke:currentColor;stroke-width:1.3}.r{stroke:currentColor;stroke-width:1.2;animation:ds ${d} ease-in-out infinite}@keyframes ds{0%,100%{opacity:.3}50%{opacity:1}}</style><polygon class="p" points="10,6 14,12 10,18 6,12"/><line class="r" x1="2" y1="10" x2="6" y2="12"/><line class="r" x1="14" y1="11" x2="22" y2="9" style="animation-delay:.1s"/><line class="r" x1="14" y1="12" x2="22" y2="12"/><line class="r" x1="14" y1="13" x2="22" y2="15" style="animation-delay:.2s"/>`);

    case 'protein-fold':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.4;fill:none;stroke-linecap:round}.ch{animation:fd ${d} ease-in-out infinite;transform-origin:12px 10px}@keyframes fd{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(35deg)}}</style><path class="f ch" d="M4 14 L8 8 L12 12 L16 6 L20 10"/>`);

    case 'queue-flow':
      return wrap(`<style>.q{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.b{fill:currentColor;animation:qu ${d} linear infinite}@keyframes qu{0%{transform:translate(5px,12px)}100%{transform:translate(18px,12px)}}</style><line class="q" x1="4" y1="10" x2="20" y2="10"/><line class="q" x1="4" y1="14" x2="20" y2="14"/><rect class="b" x="0" y="0" width="3" height="3" rx=".4"/>`);

    case 'recursion-tree':
      return wrap(`<style>.e{stroke:currentColor;stroke-width:1.2;fill:none;opacity:.4}.n{fill:currentColor;animation:tw ${d} ease-in-out infinite}@keyframes tw{0%,100%{opacity:.4}50%{opacity:1}}</style><line class="e" x1="12" y1="5" x2="7" y2="11"/><line class="e" x1="12" y1="5" x2="17" y2="11"/><line class="e" x1="7" y1="11" x2="5" y2="17"/><line class="e" x1="7" y1="11" x2="9" y2="17"/><circle class="n" cx="12" cy="5" r="1.5"/>`);

    case 'rna-transcribe':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.4;fill:none}.d{stroke:currentColor;stroke-width:1.2;opacity:.35}.p{fill:currentColor;animation:mv ${d} linear infinite}@keyframes mv{0%{transform:translate(5px,10px)}100%{transform:translate(18px,10px)}}</style><line class="d" x1="4" y1="10" x2="20" y2="10"/><line class="f" x1="4" y1="8" x2="4" y2="14"/><path class="f" d="M18 8v6"/><circle class="p" cx="0" cy="0" r="1.2"/>`);

    case 'season-tilt':
      return wrap(`<style>.e{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.a{stroke:currentColor;stroke-width:1.4;animation:tl ${d} ease-in-out infinite;transform-origin:12px 12px}@keyframes tl{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}</style><circle class="e" cx="12" cy="12" r="2"/><line class="a" x1="12" y1="12" x2="12" y2="5"/><ellipse class="e" cx="12" cy="12" rx="9" ry="3"/>`);

    case 'seismic-wave':
      return wrap(`<style>.g{stroke:currentColor;stroke-width:1.25;opacity:.3}.w{stroke:currentColor;stroke-width:1.4;fill:none;stroke-dasharray:8;animation:sw ${d} linear infinite}@keyframes sw{0%{stroke-dashoffset:16}100%{stroke-dashoffset:0}}</style><line class="g" x1="2" y1="18" x2="22" y2="18"/><path class="w" d="M4 14c2-3 4-3 6 0s4 3 6 0 4-3 6 0"/>`);

    case 'spectrum-fall':
      return wrap(`<style>.b{fill:currentColor;animation:sf ${d} ease-in-out infinite}.b1{animation-delay:0s;height:4px}.b2{animation-delay:.1s;height:8px}.b3{animation-delay:.2s;height:12px}@keyframes sf{0%,100%{opacity:.3}50%{opacity:1}}</style><rect class="b b1" x="6" y="14" width="2" height="4"/><rect class="b b2" x="10" y="10" width="2" height="8"/><rect class="b b3" x="14" y="6" width="2" height="12"/><rect class="b b2" x="18" y="10" width="2" height="8"/>`);

    case 'stack-push':
      return wrap(`<style>.st{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.b{fill:currentColor;animation:ps ${d} ease-in-out infinite}@keyframes ps{0%,100%{transform:translate(10px,16px);opacity:1}50%{transform:translate(10px,10px);opacity:1}}</style><rect class="st" x="6" y="6" width="8" height="14" rx="1"/><rect class="b" x="0" y="0" width="6" height="2" rx=".4"/>`);

    case 'string-harmonic':
      return wrap(`<style>.s{stroke:currentColor;stroke-width:1.4;fill:none}.p{fill:currentColor;animation:st ${d} ease-in-out infinite}@keyframes st{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}</style><line class="s" x1="4" y1="12" x2="20" y2="12"/><circle class="p" cx="8" cy="12" r="1"/><circle class="p" cx="12" cy="12" r="1.2"/><circle class="p" cx="16" cy="12" r="1"/>`);

    case 'telescope-focus':
      return wrap(`<style>.t{stroke:currentColor;stroke-width:1.4;fill:none}.r{stroke:currentColor;stroke-width:1.2;animation:tf ${d} ease-in-out infinite}@keyframes tf{0%,100%{opacity:.3}50%{opacity:1}}</style><circle class="t" cx="8" cy="12" r="3"/><line class="t" x1="11" y1="12" x2="18" y2="12"/><line class="r" x1="2" y1="10" x2="5" y2="11"/><line class="r" x1="2" y1="14" x2="5" y2="13"/><line class="r" x1="18" y1="12" x2="22" y2="12"/>`);

    case 'thin-film':
      return wrap(`<style>.f{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.w{stroke:currentColor;stroke-width:1.2;animation:tm ${d} ease-in-out infinite}@keyframes tm{0%,100%{opacity:.3}50%{opacity:1}}</style><line class="f" x1="4" y1="10" x2="20" y2="10"/><line class="f" x1="4" y1="14" x2="20" y2="14"/><line class="w" x1="2" y1="12" x2="10" y2="12"/><line class="w" x1="14" y1="12" x2="22" y2="12"/>`);

    case 'tube-resonance':
      return wrap(`<style>.t{stroke:currentColor;stroke-width:1.5;fill:none}.w{stroke:currentColor;stroke-width:1.2;animation:rs ${d} ease-in-out infinite}@keyframes rs{0%,100%{transform:scaleY(1)}50%{transform:scaleY(1.3)}}</style><line class="t" x1="8" y1="6" x2="8" y2="18"/><line class="t" x1="16" y1="6" x2="16" y2="18"/><line class="w" x1="8" y1="12" x2="16" y2="12"/>`);

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
