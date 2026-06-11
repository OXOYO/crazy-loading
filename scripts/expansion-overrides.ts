/** 扩展批次中错配共用模板的图标 — 按 id 独立视觉 */
export const EXPANSION_OVERRIDE_BODIES: Record<string, string> = {
  // —— 微积分 ——
  'epsilon-delta':
    '<style>.ax{stroke:currentColor;stroke-width:1.2;opacity:.35}.b{fill:none;stroke:currentColor;stroke-width:1.3;animation:sh 2s ease-in-out infinite}@keyframes sh{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}</style><line class="ax" x1="4" y1="18" x2="20" y2="18"/><line class="ax" x1="12" y1="6" x2="12" y2="18"/><rect class="b" x="10" y="10" width="4" height="6" rx=".5"/><circle cx="12" cy="13" r="1.2" fill="currentColor"/>',
  'rolle-theorem':
    '<style>.c{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.4}.t{stroke:currentColor;stroke-width:1.5;animation:ht 1.8s ease-in-out infinite}@keyframes ht{0%,100%{transform:translateY(0);opacity:.35}50%{transform:translateY(-1px);opacity:1}}</style><path class="c" d="M4 16c3-8 7-10 12-6s6 6 4 10"/><line class="t" x1="6" y1="12" x2="18" y2="12"/>',
  'mean-value':
    '<style>.c{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.35}.s{stroke:currentColor;stroke-width:1.5;stroke-dasharray:6;animation:sl 2s ease-in-out infinite}.t{stroke:currentColor;stroke-width:1.5;animation:tl 2s ease-in-out infinite}@keyframes sl{0%,100%{opacity:.3}50%{opacity:1}}@keyframes tl{0%,100%{transform:translateY(2px)}50%{transform:translateY(-2px)}}</style><path class="c" d="M4 16c2-6 5-9 10-7s7 4 6 9"/><line class="s" x1="6" y1="14" x2="16" y2="10"/><line class="t" x1="9" y1="11" x2="15" y2="11"/>',
  'improper-integral':
    '<style>.a{fill:currentColor;opacity:.25;animation:gr 2s ease-in-out infinite}.x{stroke:currentColor;stroke-width:1.3;opacity:.35}@keyframes gr{0%,100%{transform:scaleX(.7)}50%{transform:scaleX(1)}}</style><line class="x" x1="4" y1="18" x2="20" y2="18"/><path class="a" d="M4 18 L4 14 Q12 8 20 12 L20 18 Z"/>',
  'parametric-curve':
    '<style>.t{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:tr 2.4s linear infinite}@keyframes tr{0%{transform:translate(6px,14px)}25%{transform:translate(16px,8px)}50%{transform:translate(18px,16px)}75%{transform:translate(8px,18px)}100%{transform:translate(6px,14px)}}</style><ellipse class="t" cx="12" cy="12" rx="7" ry="5"/><circle class="p" cx="0" cy="0" r="1.5"/>',

  // —— 三角 ——
  'unit-circle-trig':
    '<style>.c{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:or 2s linear infinite;transform-origin:12px 12px}.h,.v{stroke:currentColor;stroke-width:1.2;animation:pv 2s ease-in-out infinite}@keyframes or{0%{transform:rotate(0deg) translate(5px)}100%{transform:rotate(360deg) translate(5px)}}@keyframes pv{0%,100%{opacity:.35}50%{opacity:1}}</style><circle class="c" cx="12" cy="12" r="6"/><line class="h" x1="12" y1="12" x2="17" y2="12"/><line class="v" x1="17" y1="12" x2="17" y2="12"/><circle class="p" cx="17" cy="12" r="1.4"/>',
  'arcsin-wave':
    '<style>.d{stroke:currentColor;stroke-width:1.2;opacity:.35}.w{fill:none;stroke:currentColor;stroke-width:1.5;animation:as 2s ease-in-out infinite}.p{fill:currentColor;animation:mv 2s ease-in-out infinite}@keyframes as{0%,100%{stroke-dashoffset:0}50%{stroke-dashoffset:8}}@keyframes mv{0%{transform:translate(5px,14px)}50%{transform:translate(12px,8px)}100%{transform:translate(19px,14px)}}</style><line class="d" x1="4" y1="8" x2="4" y2="16"/><line class="d" x1="20" y1="8" x2="20" y2="16"/><path class="w" d="M5 12c2-4 4-4 7 0s5 4 7 0" stroke-dasharray="8"/><circle class="p" cx="0" cy="0" r="1.4"/>',
  'arccos-wave':
    '<style>.w{fill:none;stroke:currentColor;stroke-width:1.5;animation:ac 2s ease-in-out infinite}.p{fill:currentColor;animation:mv 2s ease-in-out infinite}@keyframes ac{0%,100%{transform:translateY(1px)}50%{transform:translateY(-1px)}}@keyframes mv{0%{transform:translate(5px,8px)}50%{transform:translate(12px,14px)}100%{transform:translate(19px,8px)}}</style><path class="w" d="M5 14c2-6 4-8 7-4s5 6 7 2"/><circle class="p" cx="0" cy="0" r="1.4"/>',
  'tan-asymptote':
    '<style>.a{stroke:currentColor;stroke-width:1.2;opacity:.35;stroke-dasharray:3 2}.b{fill:none;stroke:currentColor;stroke-width:1.5;animation:ju 1.6s ease-in-out infinite}@keyframes ju{0%,100%{transform:scaleY(.6)}50%{transform:scaleY(1.2)}}</style><line class="a" x1="12" y1="5" x2="12" y2="19"/><path class="b" d="M4 16 L10 10 L12 18" style="transform-origin:10px 13px"/><path class="b" d="M14 6 L18 12 L20 16" style="transform-origin:16px 11px;animation-delay:.3s"/>',
  'cot-period':
    '<style>.w{fill:none;stroke:currentColor;stroke-width:1.5;animation:cp 2s linear infinite}.m{stroke:currentColor;stroke-width:1;opacity:.3}@keyframes cp{0%{transform:translateX(0)}100%{transform:translateX(4px)}}</style><line class="m" x1="8" y1="6" x2="8" y2="18"/><line class="m" x1="16" y1="6" x2="16" y2="18"/><path class="w" d="M5 12c2 3 4-3 6 0s4 3 6 0"/>',
  'sec-amplify':
    '<style>.w{fill:none;stroke:currentColor;stroke-width:1.5;animation:sp 1.8s ease-in-out infinite;transform-origin:12px 12px}@keyframes sp{0%,100%{transform:scaleY(.5)}50%{transform:scaleY(1.4)}}</style><path class="w" d="M3 12c2-8 4-8 6 0s4 8 6 0 4-8 6 0"/>',
  'csc-inverse':
    '<style>.w{fill:none;stroke:currentColor;stroke-width:1.5;animation:cs 1.8s ease-in-out infinite}@keyframes cs{0%,100%{opacity:.4}50%{opacity:1}}</style><path class="w" d="M4 8c2 8 4 8 6 0s4-8 6 0 4 8 6 0"/><path class="w" d="M4 16c2-8 4-8 6 0" opacity=".5"/>',
  'half-angle':
    '<style>.a{stroke:currentColor;stroke-width:1.4;transform-origin:12px 14px;animation:ha 2s ease-in-out infinite}.b{stroke:currentColor;stroke-width:1.2;opacity:.35}@keyframes ha{0%,100%{transform:rotate(-20deg)}50%{transform:rotate(20deg)}}</style><line class="b" x1="4" y1="16" x2="20" y2="16"/><line class="a" x1="12" y1="14" x2="18" y2="8"/><line class="a" x1="12" y1="14" x2="18" y2="14" style="animation-delay:.5s;opacity:.5"/>',
  'sum-formula':
    '<style>.w1,.w2,.s{fill:none;stroke:currentColor;stroke-width:1.3}.s{stroke-width:1.6;animation:sm 2s ease-in-out infinite}@keyframes sm{0%,100%{opacity:.35}50%{opacity:1}}</style><path class="w1" d="M5 10c2 2 4-2 6 0 4 2 6 0"/><path class="w2" d="M5 14c2-2 4 2 6 0 4-2 6 0"/><path class="s" d="M5 12c2 0 4-1 6 0s4 1 6 0 4-1 6 0"/>',

  // —— 几何 ——
  'desargues':
    '<style>.t{fill:none;stroke:currentColor;stroke-width:1.3}.l{stroke-dasharray:4;animation:dl 2s ease-in-out infinite}@keyframes dl{0%,100%{opacity:.3}50%{opacity:1}}</style><polygon class="t" points="6,16 10,8 14,16"/><polygon class="t" points="10,18 14,10 18,18"/><line class="l" x1="8" y1="12" x2="16" y2="14"/>',
  'penrose-tile':
    '<style>.k,.d{fill:none;stroke:currentColor;stroke-width:1.2;animation:pt 2.4s ease-in-out infinite}@keyframes pt{0%,100%{opacity:.35}50%{opacity:1}}</style><path class="k" d="M8 8 L12 6 L14 10 L10 12 Z"/><path class="d" d="M14 10 L18 12 L16 16 L12 14 Z" style="animation-delay:.3s"/>',
  'delone-tri':
    '<style>.e{stroke:currentColor;stroke-width:1.2;fill:none;opacity:.35}.t{fill:currentColor;animation:fl 2s ease-in-out infinite}@keyframes fl{0%,100%{opacity:.25}50%{opacity:1}}</style><line class="e" x1="6" y1="16" x2="12" y2="8"/><line class="e" x1="12" y1="8" x2="18" y2="16"/><line class="e" x1="6" y1="16" x2="18" y2="16"/><circle class="t" cx="12" cy="12" r="1.2"/>',
  'steiner-tree':
    '<style>.e{stroke:currentColor;stroke-width:1.3;fill:none;animation:st 2s ease-in-out infinite}@keyframes st{0%{stroke-dashoffset:10}100%{stroke-dashoffset:0}}</style><circle cx="6" cy="16" r="1.5" fill="currentColor"/><circle cx="18" cy="16" r="1.5" fill="currentColor"/><circle cx="12" cy="7" r="1.5" fill="currentColor"/><path class="e" d="M6 16 L10 11 L18 16" stroke-dasharray="10"/><line class="e" x1="10" y1="11" x2="12" y2="7" stroke-dasharray="6"/>',
  'fractal-tree':
    '<style>.b{stroke:currentColor;stroke-width:1.3;fill:none;stroke-linecap:round;animation:gr 2.4s ease-in-out infinite}@keyframes gr{0%,100%{opacity:.35}50%{opacity:1}}</style><line class="b" x1="12" y1="18" x2="12" y2="13"/><line class="b" x1="12" y1="13" x2="8" y2="9" style="animation-delay:.15s"/><line class="b" x1="12" y1="13" x2="16" y2="9" style="animation-delay:.3s"/><line class="b" x1="8" y1="9" x2="6" y2="6" style="animation-delay:.45s"/><line class="b" x1="16" y1="9" x2="18" y2="6" style="animation-delay:.6s"/>',
  'tessellation':
    '<style>.h{fill:none;stroke:currentColor;stroke-width:1.2;animation:ts 2s ease-in-out infinite}@keyframes ts{0%,100%{opacity:.3}50%{opacity:1}}</style><polygon class="h" points="8,8 12,6 16,8 16,12 12,14 8,12"/><polygon class="h" points="12,14 16,12 20,14 20,18 16,20 12,18" style="animation-delay:.2s"/>',

  // —— 化学 ——
  'sn1-reaction':
    '<style>.c{fill:currentColor}.lg{fill:currentColor;animation:lv 2s ease-in-out infinite}@keyframes lv{0%,100%{transform:translate(14px,12px);opacity:1}50%{transform:translate(19px,8px);opacity:.3}}</style><circle class="c" cx="10" cy="12" r="2.5"/><circle class="lg" cx="0" cy="0" r="1.4"/><line x1="10" y1="12" x2="6" y2="12" stroke="currentColor" stroke-width="1.3"/>',
  'sn2-reaction':
    '<style>.n{fill:currentColor;animation:at 1.8s ease-in-out infinite}.c{fill:currentColor;opacity:.5}@keyframes at{0%,100%{transform:translate(5px,12px)}50%{transform:translate(10px,12px)}}</style><circle class="c" cx="14" cy="12" r="2.5"/><circle class="n" cx="0" cy="0" r="1.5"/><line x1="14" y1="12" x2="18" y2="12" stroke="currentColor" stroke-width="1.3" opacity=".4"/>',
  'esterification':
    '<style>.w{fill:currentColor;animation:ev 2s ease-in-out infinite}.b{stroke:currentColor;stroke-width:1.2;opacity:.35}@keyframes ev{0%,100%{transform:translateY(0);opacity:.3}50%{transform:translateY(-3px);opacity:1}}</style><circle cx="8" cy="14" r="2" fill="currentColor" opacity=".5"/><circle cx="16" cy="14" r="2" fill="currentColor" opacity=".5"/><circle class="w" cx="12" cy="10" r="1.2"/><line class="b" x1="10" y1="14" x2="14" y2="14"/>',
  'hydrolysis':
    '<style>.b{stroke:currentColor;stroke-width:1.5;animation:br 2s ease-in-out infinite}.w{fill:currentColor;animation:ap 2s ease-in-out infinite}@keyframes br{0%,100%{opacity:1}50%{opacity:.3}}@keyframes ap{0%,100%{transform:translate(16px,12px)}50%{transform:translate(12px,12px)}}</style><line class="b" x1="6" y1="12" x2="18" y2="12"/><circle class="w" cx="0" cy="0" r="1.3"/>',
  'polymer-chain':
    '<style>.m{fill:currentColor;animation:gr 2s linear infinite}@keyframes gr{0%{transform:translate(5px,12px)}100%{transform:translate(19px,12px)}}</style><circle cx="6" cy="12" r="1.8" fill="currentColor" opacity=".4"/><circle cx="10" cy="12" r="1.8" fill="currentColor" opacity=".4"/><circle cx="14" cy="12" r="1.8" fill="currentColor" opacity=".4"/><circle class="m" cx="0" cy="0" r="1.5"/>',
  'catalyst-surface':
    '<style>.s{stroke:currentColor;stroke-width:1.4;fill:none;opacity:.35}.a{fill:currentColor;animation:ad 2s ease-in-out infinite}.p{animation:rx 2s ease-in-out infinite}@keyframes ad{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}@keyframes rx{0%,100%{opacity:.3}50%{opacity:1}}</style><line class="s" x1="4" y1="14" x2="20" y2="14"/><circle class="a" cx="8" cy="11" r="1.2"/><circle class="a p" cx="16" cy="10" r="1.2"/>',
  'ph-indicator':
    '<style>.b{fill:currentColor;animation:ph 2s ease-in-out infinite}@keyframes ph{0%,100%{transform:scaleY(.6)}50%{transform:scaleY(1.1)}}</style><rect x="9" y="8" width="6" height="10" rx="1" fill="none" stroke="currentColor" stroke-width="1.3"/><rect class="b" x="10" y="12" width="4" height="4" rx=".5" style="transform-origin:12px 14px"/>',
  'galvanic-cell':
    '<style>.e{stroke:currentColor;stroke-width:1.3;fill:none}.i{fill:currentColor;animation:fl 1.8s linear infinite}@keyframes fl{0%{transform:translate(6px,12px)}100%{transform:translate(18px,12px)}}</style><rect class="e" x="5" y="8" width="5" height="8" rx=".5"/><rect class="e" x="14" y="8" width="5" height="8" rx=".5"/><circle class="i" cx="0" cy="0" r="1.1"/><line class="e" x1="10" y1="10" x2="14" y2="10"/>',
  'electrolysis-cell':
    '<style>.e{stroke:currentColor;stroke-width:1.3;fill:none}.b{fill:currentColor;animation:el 1.6s ease-in-out infinite}@keyframes el{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}</style><line class="e" x1="8" y1="6" x2="8" y2="18"/><line class="e" x1="16" y1="6" x2="16" y2="18"/><circle class="b" cx="8" cy="10" r="1.2"/><circle class="b" cx="16" cy="14" r="1.2" style="animation-delay:.3s"/>',
  'chromatography':
    '<style>.c{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.b{fill:currentColor;animation:el 2.4s linear infinite}@keyframes el{0%{transform:translate(8px,6px)}100%{transform:translate(8px,18px)}}</style><rect class="c" x="7" y="5" width="10" height="14" rx="1"/><circle class="b" cx="0" cy="0" r="1.1" style="animation-delay:0s"/><circle class="b" cx="0" cy="0" r="1.1" style="animation-delay:.8s;transform:translate(11px,8px)"/>',
  'mass-spec':
    '<style>.b{fill:currentColor;animation:pk 2s ease-in-out infinite}@keyframes pk{0%,100%{opacity:.3}50%{opacity:1}}</style><rect x="5" y="14" width="2" height="3" rx=".3" class="b"/><rect x="9" y="11" width="2" height="6" rx=".3" class="b" style="animation-delay:.15s"/><rect x="13" y="8" width="2" height="9" rx=".3" class="b" style="animation-delay:.3s"/><rect x="17" y="12" width="2" height="5" rx=".3" class="b" style="animation-delay:.45s"/>',
  'ir-spectrum':
    '<style>.b{fill:none;stroke:currentColor;stroke-width:1.5;animation:ab 2s ease-in-out infinite}@keyframes ab{0%,100%{opacity:.35}50%{opacity:1}}</style><path class="b" d="M4 16 L8 16 L9 10 L11 16 L13 8 L15 16 L20 16"/>',

  // —— 光学（错配） ——
  'hologram':
    '<style>.p{stroke:currentColor;stroke-width:1.2;fill:none;opacity:.35}.r{stroke:currentColor;stroke-width:1.3;animation:rb 2s ease-in-out infinite;transform-origin:12px 12px}@keyframes rb{0%,100%{transform:scale(.9);opacity:.35}50%{transform:scale(1.08);opacity:1}}</style><circle class="p" cx="12" cy="12" r="5"/><line x1="4" y1="12" x2="9" y2="12" stroke="currentColor" stroke-width="1.2" class="r"/><line x1="15" y1="10" x2="20" y2="8" stroke="currentColor" stroke-width="1.2" class="r" style="animation-delay:.15s"/><line x1="15" y1="14" x2="20" y2="16" stroke="currentColor" stroke-width="1.2" class="r" style="animation-delay:.3s"/>',
  'michelson-mirror':
    '<style>.m{stroke:currentColor;stroke-width:1.3}.b{fill:currentColor;animation:sp 2s linear infinite}@keyframes sp{0%{transform:translate(4px,12px)}100%{transform:translate(18px,12px)}}</style><line class="m" x1="4" y1="12" x2="12" y2="12"/><line class="m" x1="12" y1="12" x2="12" y2="6"/><line class="m" x1="12" y1="12" x2="18" y2="12"/><circle class="b" cx="0" cy="0" r="1.3"/>',

  // —— 地球 ——
  'watershed':
    '<style>.r{stroke:currentColor;stroke-width:1.3;fill:none;opacity:.35}.s{fill:currentColor;animation:fl 2s ease-in-out infinite}@keyframes fl{0%,100%{transform:translate(12px,6px)}50%{transform:translate(12px,16px)}}</style><path class="r" d="M6 10 L12 6 L18 10 L18 18 L6 18 Z"/><circle class="s" cx="0" cy="0" r="1.2"/><line x1="12" y1="6" x2="8" y2="14" stroke="currentColor" stroke-width="1" opacity=".3"/><line x1="12" y1="6" x2="16" y2="14" stroke="currentColor" stroke-width="1" opacity=".3"/>',

  // —— 相对论 ——
  'wormhole':
    '<style>.t{fill:none;stroke:currentColor;stroke-width:1.3;opacity:.35}.p{fill:currentColor;animation:wh 2.4s linear infinite}@keyframes wh{0%{transform:translate(5px,12px)}50%{transform:translate(12px,12px) scale(.5)}100%{transform:translate(19px,12px)}}</style><ellipse class="t" cx="7" cy="12" rx="3" ry="5"/><ellipse class="t" cx="17" cy="12" rx="3" ry="5"/><circle class="p" cx="0" cy="0" r="1.4"/>',
  'cosmological-constant':
    '<style>.g{fill:currentColor;opacity:.4;animation:ex 2s ease-in-out infinite}.a{stroke:currentColor;stroke-width:1.2;animation:ar 2s ease-in-out infinite}@keyframes ex{0%,100%{transform:scale(1)}50%{transform:scale(1.15)}}@keyframes ar{0%,100%{opacity:.3}50%{opacity:1}}</style><circle class="g" cx="12" cy="12" r="2"/><line class="a" x1="12" y1="12" x2="18" y2="8"/><line class="a" x1="12" y1="12" x2="6" y2="8" style="animation-delay:.2s"/><line class="a" x1="12" y1="12" x2="12" y2="5" style="animation-delay:.4s"/>',
  'gravitational-redshift':
    '<style>.w{stroke:currentColor;stroke-width:1.5;animation:rs 2s ease-in-out infinite}.p{fill:currentColor}@keyframes rs{0%,100%{transform:translateY(0);opacity:1}50%{transform:translateY(2px);opacity:.45}}</style><circle class="p" cx="12" cy="14" r="2.5"/><path class="w" d="M12 5v4" fill="none" stroke-linecap="round"/><path class="w" d="M9 7l3-2 3 2" fill="none" stroke-linecap="round" style="animation-delay:.2s"/>',
  'shapiro-delay':
    '<style>.p{fill:currentColor;animation:dl 2.4s ease-in-out infinite}.g{stroke:currentColor;stroke-width:1.25;opacity:.35}@keyframes dl{0%{transform:translate(4px,10px)}50%{transform:translate(12px,14px)}100%{transform:translate(20px,10px)}}</style><circle class="g" cx="12" cy="13" r="3"/><circle class="p" cx="0" cy="0" r="1.3"/>',
  'ergosphere':
    '<style>.d{fill:none;stroke:currentColor;stroke-width:1.3;animation:sp 2s linear infinite;transform-origin:12px 12px}.e{stroke:currentColor;stroke-width:1.2;opacity:.35}@keyframes sp{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><ellipse class="e" cx="12" cy="12" rx="8" ry="4"/><ellipse class="d" cx="12" cy="12" rx="5" ry="7"/>',
  'penrose-process':
    '<style>.d{fill:currentColor}.p{fill:currentColor;animation:ex 2s ease-in-out infinite}@keyframes ex{0%,100%{transform:translate(14px,12px)}50%{transform:translate(19px,8px)}}</style><circle class="d" cx="12" cy="12" r="3" opacity=".5"/><circle class="p" cx="0" cy="0" r="1.4"/><path d="M12 12 L18 8" stroke="currentColor" stroke-width="1.2" opacity=".4"/>',
  'alcubierre':
    '<style>.b{stroke:currentColor;stroke-width:1.3;fill:none;animation:bu 2s ease-in-out infinite}@keyframes bu{0%,100%{transform:scaleX(.8)}50%{transform:scaleX(1.2)}}</style><ellipse class="b" cx="12" cy="12" rx="7" ry="3"/><circle cx="16" cy="12" r="1.5" fill="currentColor"/>',
  'blandford-znajek':
    '<style>.j{stroke:currentColor;stroke-width:1.3;animation:jt 1.8s linear infinite;transform-origin:12px 12px}.d{fill:currentColor}@keyframes jt{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><circle class="d" cx="12" cy="12" r="2"/><line class="j" x1="12" y1="12" x2="12" y2="4"/><line class="j" x1="12" y1="12" x2="18" y2="16" style="animation-delay:.2s"/>',
  'naked-singularity':
    '<style>.r{stroke:currentColor;stroke-width:1.2;fill:none;animation:pu 1.4s ease-in-out infinite}@keyframes pu{0%,100%{opacity:.2;transform:scale(.8)}50%{opacity:1;transform:scale(1.1)}}</style><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle class="r" cx="12" cy="12" r="4"/><circle class="r" cx="12" cy="12" r="7" style="animation-delay:.2s"/>',
  'ads-cft':
    '<style>.b{stroke:currentColor;stroke-width:1.2;fill:none;opacity:.35}.h{fill:currentColor;animation:du 2s ease-in-out infinite}@keyframes du{0%,100%{opacity:.3}50%{opacity:1}}</style><path class="b" d="M6 18 Q12 6 18 18"/><circle class="h" cx="12" cy="10" r="1.5"/><line class="b" x1="4" y1="18" x2="20" y2="18"/>',

  // —— 天文 ——
  'exoplanet-transit':
    '<style>.s{fill:currentColor}.p{fill:currentColor;animation:tr 2.4s ease-in-out infinite}.b{fill:currentColor;animation:dp 2.4s ease-in-out infinite}@keyframes tr{0%,100%{transform:translateX(0)}45%,55%{transform:translateX(-1px)}50%{opacity:.5}}@keyframes dp{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.7)}}</style><circle class="s" cx="10" cy="12" r="3.5"/><circle class="p" cx="16" cy="12" r="1.8"/><rect class="b" x="5" y="16" width="14" height="2" rx=".4" opacity=".35"/>',
  'habitable-zone':
    '<style>.s{fill:currentColor}.z{fill:none;stroke:currentColor;stroke-width:1.2;animation:pz 2s ease-in-out infinite}@keyframes pz{0%,100%{opacity:.25}50%{opacity:1}}</style><circle class="s" cx="12" cy="12" r="2"/><ellipse class="z" cx="12" cy="12" rx="8" ry="3"/><ellipse class="z" cx="12" cy="12" rx="5" ry="2" style="animation-delay:.2s"/><circle cx="18" cy="12" r="1.2" fill="currentColor"/>',
  'tidal-heating':
    '<style>.m{fill:currentColor;animation:td 2s ease-in-out infinite;transform-origin:12px 12px}.p{fill:currentColor;animation:or 2.4s linear infinite;transform-origin:12px 12px}@keyframes td{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.15)}}@keyframes or{0%{transform:rotate(0deg) translate(6px)}100%{transform:rotate(360deg) translate(6px)}}</style><ellipse cx="12" cy="12" rx="3" ry="4" class="m"/><circle class="p" cx="18" cy="12" r="1.3"/>',
  'ring-resonance':
    '<style>.r{stroke:currentColor;stroke-width:1.2;fill:none;opacity:.35}.s{fill:currentColor;animation:rs 2.4s linear infinite;transform-origin:12px 12px}@keyframes rs{0%{transform:rotate(0deg) translate(7px)}100%{transform:rotate(360deg) translate(7px)}}</style><ellipse cx="12" cy="12" rx="8" ry="3" class="r"/><circle class="s" cx="19" cy="12" r="1.2"/><circle cx="12" cy="12" r="2" fill="currentColor" opacity=".5"/>',
  'stellar-wind-bubble':
    '<style>.b{stroke:currentColor;stroke-width:1.3;fill:none;animation:ex 2s ease-in-out infinite}@keyframes ex{0%,100%{transform:scale(.85);opacity:.35}50%{transform:scale(1.05);opacity:1}}</style><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle class="b" cx="12" cy="12" r="5"/><circle class="b" cx="12" cy="12" r="8" style="animation-delay:.3s"/>',
  'planetary-migration':
    '<style>.d{stroke:currentColor;stroke-width:1.2;fill:none;opacity:.35}.p{fill:currentColor;animation:in 2.4s ease-in-out infinite}@keyframes in{0%{transform:translate(18px,12px)}100%{transform:translate(8px,12px)}}</style><circle class="d" cx="12" cy="12" r="2.5"/><circle class="p" cx="0" cy="0" r="1.4"/>',
  'dust-disk':
    '<style>.s{stroke:currentColor;stroke-width:1.3;fill:none;animation:sp 2.4s linear infinite;transform-origin:12px 12px}.c{fill:currentColor}@keyframes sp{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><circle class="c" cx="12" cy="12" r="2"/><path class="s" d="M12 12c4-2 6 0 4 4"/><path class="s" d="M12 12c-4 2-6 0-4-4" style="animation-direction:reverse"/>',
  'microlensing':
    '<style>.s{fill:currentColor}.l{stroke:currentColor;stroke-width:1.3;animation:mg 2s ease-in-out infinite}@keyframes mg{0%,100%{opacity:.35}50%{opacity:1}}</style><circle class="s" cx="8" cy="12" r="2"/><circle cx="16" cy="12" r="1.5" fill="currentColor" opacity=".5"/><line class="l" x1="4" y1="10" x2="8" y2="11"/><line class="l" x1="4" y1="14" x2="8" y2="13"/><line class="l" x1="10" y1="11" x2="20" y2="10"/><line class="l" x1="10" y1="13" x2="20" y2="14"/>',
  'fast-radio-burst':
    '<style>.b{stroke:currentColor;stroke-width:1.5;animation:fr 1.2s ease-out infinite}@keyframes fr{0%,85%{opacity:0;transform:scaleX(.3)}90%{opacity:1}100%{opacity:0;transform:scaleX(1.2)}}</style><circle cx="12" cy="12" r="1.5" fill="currentColor"/><line class="b" x1="12" y1="12" x2="20" y2="12"/><line class="b" x1="12" y1="12" x2="4" y2="12" style="animation-delay:.1s"/>',
  'pulsar-glitch':
    '<style>.b{stroke:currentColor;stroke-width:1.5;animation:gl 1.6s ease-in-out infinite;transform-origin:12px 12px}@keyframes gl{0%,100%{transform:rotate(0deg)}45%{transform:rotate(180deg)}50%{transform:rotate(200deg)}55%{transform:rotate(180deg)}}</style><circle cx="12" cy="12" r="2" fill="currentColor"/><line class="b" x1="12" y1="12" x2="12" y2="5"/><line class="b" x1="12" y1="12" x2="18" y2="14"/>',

  // —— 量子 ——
  'top-quark':
    '<style>.d{fill:currentColor;animation:dc 1.4s ease-in-out infinite}.j{stroke:currentColor;stroke-width:1.2;animation:jt 1.4s ease-out infinite}@keyframes dc{0%,100%{opacity:1}50%{opacity:.2}}@keyframes jt{0%,70%{opacity:0}75%{opacity:1}100%{opacity:0;transform:translate(4px,-4px)}}</style><circle class="d" cx="12" cy="14" r="2"/><line class="j" x1="12" y1="14" x2="16" y2="8"/><line class="j" x1="12" y1="14" x2="8" y2="9" style="animation-delay:.15s"/>',
  'higgs-boson':
    '<style>.f{stroke:currentColor;stroke-width:1.3;opacity:.35}.h{fill:currentColor;animation:em 2s ease-in-out infinite}@keyframes em{0%,100%{transform:scale(.5);opacity:.3}50%{transform:scale(1.2);opacity:1}}</style><line class="f" x1="6" y1="12" x2="18" y2="12"/><circle class="h" cx="12" cy="12" r="2"/>',
  'gluon-jet':
    '<style>.j{stroke:currentColor;stroke-width:1.3;animation:sp 1.6s ease-out infinite}@keyframes sp{0%,100%{opacity:.2}50%{opacity:1}}</style><circle cx="12" cy="12" r="1.8" fill="currentColor"/><line class="j" x1="12" y1="12" x2="18" y2="8"/><line class="j" x1="12" y1="12" x2="17" y2="14" style="animation-delay:.1s"/><line class="j" x1="12" y1="12" x2="6" y2="9" style="animation-delay:.2s"/>',
  'muon-g2':
    '<style>.m{fill:currentColor;animation:pr 1.6s linear infinite;transform-origin:12px 12px}.a{stroke:currentColor;stroke-width:1.2;opacity:.35}@keyframes pr{0%{transform:rotate(0deg)}100%{transform:rotate(378deg)}}</style><circle class="m" cx="12" cy="12" r="2"/><ellipse class="a" cx="12" cy="12" rx="7" ry="4"/>',
  'anyon-braid':
    '<style>.p{fill:none;stroke:currentColor;stroke-width:1.4;stroke-linecap:round}.w{stroke-dasharray:8;animation:br 2.4s linear infinite}@keyframes br{0%{stroke-dashoffset:16}100%{stroke-dashoffset:0}}</style><path class="p w" d="M6 16 C6 10 10 10 12 12"/><path class="p w" d="M18 16 C18 10 14 10 12 12" style="animation-delay:.4s"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/>',
  'majorana-zero':
    '<style>.w{stroke:currentColor;stroke-width:1.5}.z{fill:currentColor;animation:ze 2s ease-in-out infinite}@keyframes ze{0%,100%{opacity:.25}50%{opacity:1}}</style><line class="w" x1="6" y1="12" x2="18" y2="12"/><circle class="z" cx="12" cy="12" r="1.5"/><line class="w" x1="12" y1="8" x2="12" y2="16" opacity=".35"/>',
  'quantum-dot':
    '<style>.l{stroke:currentColor;stroke-width:1.3}.e{fill:currentColor;animation:jt 1.8s ease-in-out infinite}@keyframes jt{0%,100%{transform:translateY(4px)}50%{transform:translateY(-2px)}}</style><line class="l" x1="5" y1="9" x2="19" y2="9"/><line class="l" x1="5" y1="12" x2="19" y2="12"/><line class="l" x1="5" y1="15" x2="19" y2="15"/><circle class="e" cx="12" cy="12" r="1.6"/>',
  'superconduct-qubit':
    '<style>.j{stroke:currentColor;stroke-width:1.4;fill:none}.i{fill:currentColor;animation:os 1.6s ease-in-out infinite}@keyframes os{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}</style><rect x="8" y="7" width="2" height="10" rx=".4" class="j"/><rect x="14" y="7" width="2" height="10" rx=".4" class="j"/><path class="j" d="M10 10 Q12 8 14 10 Q12 14 10 14 Q12 16 14 14"/><circle class="i" cx="12" cy="11" r="1.2"/>',
};
