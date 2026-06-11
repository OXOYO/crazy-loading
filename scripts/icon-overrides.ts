import type { IconDefinition } from './types.ts';
import { EXPANSION_OVERRIDE_BODIES } from './expansion-overrides.ts';

function wrap(body: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">${body}</svg>`;
}

/** 结构重复图标的独立视觉（canonical 保留原模板，其余走此覆盖） */
const OVERRIDE_BODIES: Record<string, string> = {
  ...EXPANSION_OVERRIDE_BODIES,
  'tsunami-wave':
    '<style>.w{fill:none;stroke:currentColor;stroke-width:2;stroke-linecap:round;animation:ru 2s linear infinite}@keyframes ru{0%{transform:translateX(-3px)}100%{transform:translateX(3px)}}</style><path class="w" d="M3 14 C6 12 10 12 13 14 S16 16 19 14"/>',
  'gradient-field':
    '<style>.a{stroke:currentColor;stroke-width:1.25;stroke-linecap:round;animation:up 1.6s ease-in-out infinite}@keyframes up{0%,100%{opacity:.35}50%{opacity:1}}</style><path d="M12 16V8" stroke="currentColor" stroke-width="1.5"/><line class="a" x1="12" y1="10" x2="9" y2="7"/><line class="a" x1="12" y1="10" x2="15" y2="7" style="animation-delay:.15s"/>',
  'divergence-field':
    '<style>.a{stroke:currentColor;stroke-width:1.25;animation:ex 1.6s ease-in-out infinite}@keyframes ex{0%,100%{transform:scale(.8)}50%{transform:scale(1.15)}}</style><circle cx="12" cy="12" r="1.5" fill="currentColor"/><line class="a" x1="12" y1="12" x2="12" y2="5" style="transform-origin:12px 12px"/><line class="a" x1="12" y1="12" x2="17" y2="15" style="transform-origin:12px 12px;animation-delay:.1s"/>',
  'inverse-square':
    '<style>.r{fill:none;stroke:currentColor;stroke-width:1.25;animation:fa 1.8s ease-in-out infinite}@keyframes fa{0%,100%{opacity:.35}50%{opacity:1}}</style><circle cx="12" cy="12" r="1.75" fill="currentColor"/><circle class="r" cx="12" cy="12" r="4"/><circle class="r" cx="12" cy="12" r="7" style="animation-delay:.2s"/>',
  'meissner-effect':
    '<style>.b{fill:currentColor;opacity:.5}.f{stroke:currentColor;stroke-width:1.25;animation:pu 1.6s ease-in-out infinite}@keyframes pu{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}</style><rect class="b" x="8" y="8" width="8" height="8" rx="1"/><path class="f" d="M4 10c3 4 6 4 9 0" style="animation-delay:0s"/><path class="f" d="M11 10c3 4 6 4 9 0" style="animation-delay:.2s"/>',
  'bayes-update':
    '<style>.c{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.35}.p{fill:currentColor;animation:sh 2s ease-in-out infinite}@keyframes sh{0%{transform:translate(5px,15px)}50%{transform:translate(12px,11px)}100%{transform:translate(19px,13px)}}</style><path class="c" d="M3 17 C7 13 10 11 15 12 S20 13 21 17"/><circle class="p" cx="0" cy="0" r="1.75"/>',
  'limit-process':
    '<style>.t{stroke:currentColor;stroke-width:1.25;stroke-dasharray:3 3;opacity:.4}.p{fill:currentColor;animation:ap 2s ease-in-out infinite}@keyframes ap{0%{transform:translate(5px,15px)}100%{transform:translate(16px,10px)}}</style><line class="t" x1="4" y1="10" x2="20" y2="10"/><circle class="p" cx="0" cy="0" r="1.5"/>',
  'eclipse-transit':
    '<style>.s{fill:currentColor}.p{fill:currentColor;transform-origin:16px 10px;animation:tr 2s ease-in-out infinite}.g{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.b{fill:currentColor;transform-origin:center bottom;animation:dp 2s ease-in-out infinite}@keyframes tr{0%,100%{transform:translateX(-2px);opacity:1}50%{transform:translateX(3px);opacity:.55}}@keyframes dp{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.72)}}</style><path class="g" d="M3 18h18"/><rect class="b" x="5" y="14" width="2" height="5" rx=".4"/><rect class="b" x="9" y="14" width="2" height="5" rx=".4" style="animation-delay:.1s"/><rect class="b" x="13" y="14" width="2" height="5" rx=".4" style="animation-delay:.2s"/><rect class="b" x="17" y="14" width="2" height="5" rx=".4" style="animation-delay:.3s"/><circle class="s" cx="9" cy="10" r="3.25"/><circle class="p" cx="16" cy="10" r="2"/>',
  'bifurcation-logistic':
    '<style>.p{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.4}.b{stroke:currentColor;stroke-width:1.5;animation:bl 1.6s ease-in-out infinite}@keyframes bl{0%,100%{opacity:.3}50%{opacity:1}}</style><path class="p" d="M4 16c4-10 8-10 12-4"/><line class="b" x1="6" y1="9" x2="10" y2="9"/><line class="b" x1="6" y1="12" x2="10" y2="12" style="animation-delay:.15s"/><line class="b" x1="14" y1="8" x2="18" y2="8" style="animation-delay:.1s"/><line class="b" x1="14" y1="11" x2="18" y2="11" style="animation-delay:.25s"/>',
  'pythagorean-tree':
    '<style>.s{stroke:currentColor;stroke-width:1.25;fill:none;animation:gr 2s ease-in-out infinite}@keyframes gr{0%,100%{opacity:.35}50%{opacity:1}}</style><rect class="s" x="9" y="14" width="6" height="4"/><rect class="s" x="7" y="8" width="4" height="4" style="animation-delay:.1s"/><rect class="s" x="13" y="8" width="4" height="4" style="animation-delay:.2s"/>',
  'fission-chain':
    '<style>.t{stroke:currentColor;stroke-width:1.25;stroke-linecap:round}.n{fill:currentColor;animation:ch 1.4s ease-in-out infinite}@keyframes ch{0%,100%{opacity:.35}50%{opacity:1}}</style><line class="t" x1="12" y1="18" x2="12" y2="14"/><line class="t" x1="12" y1="14" x2="8" y2="10"/><line class="t" x1="12" y1="14" x2="16" y2="10"/><circle class="n" cx="12" cy="18" r="1.5"/><circle class="n" cx="8" cy="10" r="1.25" style="animation-delay:.15s"/><circle class="n" cx="16" cy="10" r="1.25" style="animation-delay:.3s"/>',
  'standard-model':
    '<style>.q{fill:currentColor;animation:pu 1.6s ease-in-out infinite}@keyframes pu{0%,100%{opacity:.35}50%{opacity:1}}</style><circle class="q" cx="8" cy="9" r="1.5"/><circle class="q" cx="16" cy="9" r="1.5" style="animation-delay:.12s"/><circle class="q" cx="8" cy="15" r="1.5" style="animation-delay:.24s"/><circle class="q" cx="16" cy="15" r="1.5" style="animation-delay:.36s"/><line x1="8" y1="9" x2="16" y2="9" stroke="currentColor" stroke-width="1" opacity=".3"/><line x1="8" y1="15" x2="16" y2="15" stroke="currentColor" stroke-width="1" opacity=".3"/>',
  'bell-inequality':
    '<style>.a,.b{fill:currentColor}.l{stroke:currentColor;stroke-width:1.25;stroke-dasharray:4 2;animation:er 1.6s ease-in-out infinite}@keyframes er{0%,100%{opacity:.35}50%{opacity:1}}</style><circle class="a" cx="7" cy="12" r="2"/><circle class="b" cx="17" cy="12" r="2"/><path class="l" d="M9 12h6"/>',
  'michelson-interfer':
    '<style>.m{stroke:currentColor;stroke-width:1.25}.f{fill:none;stroke:currentColor;stroke-width:1.5;animation:fr 1.6s ease-in-out infinite}@keyframes fr{0%,100%{opacity:.35}50%{opacity:1}}</style><line class="m" x1="4" y1="12" x2="12" y2="12"/><line class="m" x1="12" y1="12" x2="12" y2="6"/><line class="m" x1="12" y1="12" x2="18" y2="12"/><path class="f" d="M14 14c1-2 2-2 3 0s2 2 3 0"/>',
  'neutrino-oscill':
    '<style>.f{fill:currentColor;animation:os 1.8s ease-in-out infinite}@keyframes os{0%{transform:translate(6px,10px);opacity:1}33%{transform:translate(12px,12px);opacity:.4}66%{transform:translate(18px,10px);opacity:1}100%{transform:translate(6px,10px);opacity:1}}</style><circle class="f" cx="0" cy="0" r="1.75"/><line x1="4" y1="16" x2="20" y2="16" stroke="currentColor" stroke-width="1" opacity=".3"/>',
  'casimir-effect':
    '<style>.p{stroke:currentColor;stroke-width:1.5}.d{fill:currentColor;animation:fl 1.4s ease-in-out infinite}@keyframes fl{0%,100%{opacity:.25}50%{opacity:1}}</style><line class="p" x1="8" y1="6" x2="8" y2="18"/><line class="p" x1="16" y1="6" x2="16" y2="18"/><circle class="d" cx="10" cy="10" r="1"/><circle class="d" cx="14" cy="12" r="1" style="animation-delay:.2s"/><circle class="d" cx="11" cy="15" r="1" style="animation-delay:.4s"/>',
  'three-body':
    '<style>.c{fill:currentColor;opacity:.5}.p{fill:currentColor;animation:tb 2.4s ease-in-out infinite}@keyframes tb{0%{transform:translate(6px,14px)}33%{transform:translate(16px,10px)}66%{transform:translate(10px,17px)}100%{transform:translate(6px,14px)}}</style><circle class="c" cx="6" cy="14" r="1.5"/><circle class="c" cx="16" cy="10" r="1.5"/><circle class="c" cx="10" cy="17" r="1.5"/><circle class="p" cx="0" cy="0" r="1.25"/>',
  'moon-orbit':
    '<style>.e{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.m{fill:currentColor}.p{fill:currentColor;animation:or 2.4s linear infinite;transform-origin:12px 12px}@keyframes or{0%{transform:rotate(0deg) translate(6px)}100%{transform:rotate(360deg) translate(6px)}}</style><ellipse class="e" cx="12" cy="12" rx="7" ry="5"/><circle class="m" cx="12" cy="12" r="2"/><circle class="p" cx="18" cy="12" r="1.25"/>',
  'kepler-area':
    '<style>.s{fill:currentColor;opacity:.25;animation:sw 2s ease-in-out infinite}.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:or 2s linear infinite;transform-origin:12px 12px}@keyframes sw{0%,100%{opacity:.15}50%{opacity:.45}}@keyframes or{0%{transform:rotate(0deg) translate(6px)}100%{transform:rotate(360deg) translate(6px)}}</style><ellipse class="o" cx="12" cy="12" rx="7" ry="5"/><path class="s" d="M12 12 L18 12 A7 5 0 0 1 14 16 Z"/><circle class="p" cx="18" cy="12" r="1.25"/>',
  'coupled-oscillator':
    '<style>.s{stroke:currentColor;stroke-width:1.25}.b{fill:currentColor;animation:cp 1.4s ease-in-out infinite}.b2{animation-direction:reverse}@keyframes cp{0%,100%{transform:translateY(0)}50%{transform:translateY(-3px)}}</style><line class="s" x1="5" y1="16" x2="5" y2="10"/><line class="s" x1="19" y1="16" x2="19" y2="10"/><line class="s" x1="5" y1="10" x2="19" y2="10" opacity=".35"/><circle class="b" cx="5" cy="13" r="2"/><circle class="b b2" cx="19" cy="13" r="2"/>',
  'duffing-oscillator':
    '<style>.s{stroke:currentColor;stroke-width:1.25}.b{fill:currentColor;animation:du 1.2s ease-in-out infinite}@keyframes du{0%,100%{transform:translate(0,0)}25%{transform:translate(2px,-4px)}50%{transform:translate(0,2px)}75%{transform:translate(-2px,-3px)}}</style><line class="s" x1="12" y1="6" x2="12" y2="16"/><circle class="b" cx="12" cy="13" r="2.5"/>',
  'random-walk-2d':
    '<style>.p{fill:currentColor;animation:rw 2.4s steps(1,end) infinite}@keyframes rw{0%{transform:translate(12px,12px)}20%{transform:translate(14px,11px)}40%{transform:translate(13px,14px)}60%{transform:translate(10px,13px)}80%{transform:translate(11px,10px)}100%{transform:translate(12px,12px)}}</style><path d="M4 4h16v16H4z" fill="none" stroke="currentColor" stroke-width="1" opacity=".2"/><circle class="p" cx="0" cy="0" r="1.5"/>',
  'maxwell-demon':
    '<style>.d{fill:currentColor}.g{stroke:currentColor;stroke-width:1.25;animation:gt 1.6s ease-in-out infinite}@keyframes gt{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}</style><line class="g" x1="12" y1="6" x2="12" y2="18"/><circle class="d" cx="8" cy="10" r="1.25" opacity=".5"/><circle class="d" cx="16" cy="14" r="1.25"/><circle class="d" cx="9" cy="15" r="1.25" opacity=".5"/>',
  'poincare-section':
    '<style>.s{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.d{fill:currentColor;animation:ps 2s ease-in-out infinite}@keyframes ps{0%,100%{opacity:.35}50%{opacity:1}}</style><circle class="s" cx="12" cy="12" r="6"/><circle class="d" cx="15" cy="10" r="1.25"/><circle class="d" cx="10" cy="14" r="1.25" style="animation-delay:.2s"/><circle class="d" cx="14" cy="15" r="1.25" style="animation-delay:.4s"/>',
  'feigenbaum-route':
    '<style>.t{stroke:currentColor;stroke-width:1.5}.p{animation:fo 1.8s ease-in-out infinite}@keyframes fo{0%,100%{opacity:.35}50%{opacity:1}}</style><line x1="12" y1="18" x2="12" y2="13" stroke="currentColor" stroke-width="1.5"/><line class="t p" x1="12" y1="13" x2="8" y2="8"/><line class="t p" x1="12" y1="13" x2="14" y2="9" style="animation-delay:.15s"/><line class="t p" x1="12" y1="13" x2="16" y2="8" style="animation-delay:.3s"/>',
  'phase-transition':
    '<style>.b{fill:currentColor;animation:pt 2s ease-in-out infinite}@keyframes pt{0%,100%{opacity:.3;transform:scaleY(.5)}50%{opacity:1;transform:scaleY(1)}}</style><rect class="b" x="9" y="10" width="6" height="8" rx="1"/>',
  'hamilton-flow':
    '<style>.f{fill:none;stroke:currentColor;stroke-width:1.25;stroke-dasharray:14;animation:fl 1.6s linear infinite}@keyframes fl{0%{stroke-dashoffset:14}100%{stroke-dashoffset:-14}}</style><path class="f" d="M5 14c3-4 6-5 10-3s5 5 4 8"/>',
  'green-theorem':
    '<style>.b{fill:none;stroke:currentColor;stroke-width:1.5}.f{stroke-dasharray:18;animation:lp 1.8s linear infinite}@keyframes lp{0%{stroke-dashoffset:18}100%{stroke-dashoffset:-18}}</style><rect class="b" x="7" y="8" width="10" height="8" rx="1"/><path class="b f" d="M7 12h10"/>',
  'surface-integral':
    '<style>.p{fill:none;stroke:currentColor;stroke-width:1.5;animation:fi 2s ease-in-out infinite}@keyframes fi{0%,100%{opacity:.3}50%{opacity:1}}</style><path class="p" d="M6 14c2-4 4-6 8-6s6 2 8 6"/>',
  'langmuir-wave':
    '<style>.w{fill:none;stroke:currentColor;stroke-width:1.5;animation:os 1.6s ease-in-out infinite}@keyframes os{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}</style><path class="w" d="M3 12c2-4 4-4 6 0s4 4 6 0 4-4 6 0" style="transform-origin:12px 12px"/>',
  'kelvin-wave':
    '<style>.w{fill:none;stroke:currentColor;stroke-width:1.5;animation:dr 2s linear infinite}@keyframes dr{0%{transform:translateX(0)}100%{transform:translateX(3px)}}</style><path class="w" d="M3 10c2 2 4 2 6 0s4-2 6 0 4 2 6 0"/><path class="w" d="M3 14c2-2 4-2 6 0s4 2 6 0 4-2 6 0" style="animation-delay:.3s"/>',
  'waveguide-mode':
    '<style>.p{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.w{stroke-width:1.75;animation:sw 1.6s ease-in-out infinite}@keyframes sw{0%,100%{transform:scaleY(.7)}50%{transform:scaleY(1)}}</style><line class="p" x1="5" y1="7" x2="5" y2="17"/><line class="p" x1="19" y1="7" x2="19" y2="17"/><path class="w" d="M5 12c3-5 6-5 9 0s6 5 9 0" fill="none" stroke="currentColor" stroke-linecap="round" style="transform-origin:12px 12px"/>',
  'wavelet-local':
    '<style>.w{fill:none;stroke:currentColor;stroke-width:1.75;animation:bl 1.6s ease-in-out infinite}@keyframes bl{0%,100%{transform:scaleX(.6)}50%{transform:scaleX(1)}}</style><path class="w" d="M8 12c1-4 2-5 3-2s2 5 3 2 2-5 3-2" style="transform-origin:12px 12px"/>',
  'de-broglie':
    '<style>.w{fill:none;stroke:currentColor;stroke-width:1.5;animation:mv 2s linear infinite}.p{fill:currentColor}@keyframes mv{0%{transform:translateX(-3px)}100%{transform:translateX(3px)}}</style><path class="w" d="M3 12c2-3 4-3 6 0s4 3 6 0"/><circle class="p" cx="16" cy="12" r="2"/>',
  'heisenberg-uncertainty':
    '<style>.w{fill:none;stroke:currentColor;stroke-width:1.75;animation:bl 1.8s ease-in-out infinite}@keyframes bl{0%,100%{transform:scaleX(1)}50%{transform:scaleX(1.35)}}</style><path class="w" d="M5 12c2-5 4-6 7-2s5 6 7 2" style="transform-origin:12px 12px"/>',
  'pauli-exclusion':
    '<style>.l{stroke:currentColor;stroke-width:1.5}.e{fill:currentColor;animation:ju 1.6s steps(1,end) infinite}@keyframes ju{0%,49%{transform:translate(10px,14px)}50%,100%{transform:translate(14px,10px)}}</style><line class="l" x1="5" y1="10" x2="19" y2="10"/><line class="l" x1="5" y1="14" x2="19" y2="14"/><circle class="e" cx="0" cy="0" r="1.5"/>',
  'harmonic-quantum':
    '<style>.l{stroke:currentColor;stroke-width:1.5}.e{fill:currentColor;animation:eq 1.4s ease-in-out infinite}@keyframes eq{0%,100%{transform:translateY(4px)}50%{transform:translateY(-2px)}}</style><line class="l" x1="5" y1="8" x2="19" y2="8"/><line class="l" x1="5" y1="11" x2="19" y2="11"/><line class="l" x1="5" y1="14" x2="19" y2="14"/><line class="l" x1="5" y1="17" x2="19" y2="17"/><circle class="e" cx="12" cy="14" r="1.5"/>',
  'landau-level':
    '<style>.l{stroke:currentColor;stroke-width:1.5;animation:st 1.6s ease-in-out infinite}@keyframes st{0%,100%{transform:translateY(0)}50%{transform:translateY(-2px)}}</style><line class="l" x1="5" y1="9" x2="19" y2="9"/><line class="l" x1="5" y1="12" x2="19" y2="12" style="animation-delay:.1s"/><line class="l" x1="5" y1="15" x2="19" y2="15" style="animation-delay:.2s"/>',
  'coriolis-deflect':
    '<style>.p{fill:currentColor;animation:df 2s ease-in-out infinite}@keyframes df{0%{transform:translate(5px,16px)}100%{transform:translate(18px,10px)}}</style><path d="M4 16c5-6 10-8 16-4" fill="none" stroke="currentColor" stroke-width="1.25" opacity=".35"/><circle class="p" cx="0" cy="0" r="1.75"/>',
  'curl-field':
    '<style>.c{fill:none;stroke:currentColor;stroke-width:1.5;animation:sp 1.6s linear infinite}@keyframes sp{0%{stroke-dashoffset:16}100%{stroke-dashoffset:-16}}</style><path class="c" d="M9 12c0-3 2-5 4-5s4 2 4 5" stroke-dasharray="16"/>',
  'phase-portrait':
    '<style>.f{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.45}.p{fill:currentColor;animation:or 2s linear infinite}@keyframes or{0%{transform:translate(8px,14px)}50%{transform:translate(14px,10px)}100%{transform:translate(8px,14px)}}</style><ellipse class="f" cx="12" cy="12" rx="7" ry="4"/><circle class="p" cx="0" cy="0" r="1.5"/>',
  'laplace-operator':
    '<style>.d{fill:currentColor;transform-origin:12px 12px;animation:df 2s ease-in-out infinite}.r{fill:none;stroke:currentColor;stroke-width:1;opacity:.35}@keyframes df{0%,100%{transform:scale(.5);opacity:.25}50%{transform:scale(1.1);opacity:.8}}</style><circle class="d" cx="12" cy="12" r="3"/><circle class="r" cx="12" cy="12" r="6"/>',
  'cavitation-bubble':
    '<style>.b{fill:currentColor;animation:cp 1.6s ease-in-out infinite}@keyframes cp{0%,100%{transform:scale(1);opacity:1}50%{transform:scale(.4);opacity:.3}}</style><circle class="b" cx="12" cy="12" r="3"/>',
  'stefan-boltzmann':
    '<style>.r{fill:currentColor;animation:ra 1.8s ease-in-out infinite}@keyframes ra{0%,100%{opacity:.3;transform:scale(.85)}50%{opacity:1;transform:scale(1.1)}}</style><circle class="r" cx="12" cy="13" r="2.5"/><line x1="12" y1="5" x2="12" y2="9" stroke="currentColor" stroke-width="1.5"/><line x1="9" y1="6" x2="12" y2="9" stroke="currentColor" stroke-width="1.25"/><line x1="15" y1="6" x2="12" y2="9" stroke="currentColor" stroke-width="1.25"/>',
  'central-limit':
    '<style>.b{fill:none;stroke:currentColor;stroke-width:1.5;animation:nr 2s ease-in-out infinite}@keyframes nr{0%,100%{opacity:.4}50%{opacity:1}}</style><path class="b" d="M4 16c1-6 3-9 8-9s7 3 8 9"/><circle cx="7" cy="15" r="1" fill="currentColor" opacity=".5"/><circle cx="11" cy="13" r="1" fill="currentColor" opacity=".5"/><circle cx="15" cy="14" r="1" fill="currentColor" opacity=".5"/>',
  'bose-einstein':
    '<style>.b{fill:none;stroke:currentColor;stroke-width:1.75;animation:co 2s ease-in-out infinite}@keyframes co{0%,100%{transform:scaleY(.8)}50%{transform:scaleY(1.1)}}</style><path class="b" d="M4 16c2-8 5-11 10-11s8 3 9 11" style="transform-origin:12px 14px"/>',
  'orbital-decay':
    '<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:dc 2s ease-in-out infinite}@keyframes dc{0%{transform:rotate(0deg) translate(7px)}100%{transform:rotate(360deg) translate(4px)}}</style><ellipse class="o" cx="12" cy="12" rx="8" ry="5"/><circle class="p" cx="19" cy="12" r="1.5" style="transform-origin:12px 12px"/>',
  'skin-effect':
    '<style>.b{fill:currentColor;animation:sk 1.6s ease-in-out infinite}@keyframes sk{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.3)}}</style><rect x="4" y="8" width="16" height="8" rx="1" fill="none" stroke="currentColor" stroke-width="1.25"/><rect class="b" x="4" y="8" width="3" height="8" rx=".5"/>',
  'hypothesis-test':
    '<style>.t{stroke:currentColor;stroke-width:1.5}.p{animation:im 1.4s ease-in-out infinite}@keyframes im{0%,100%{transform:scaleY(.5)}50%{transform:scaleY(1)}}</style><line class="t p" x1="12" y1="6" x2="12" y2="18" style="transform-origin:12px 18px"/><line class="t" x1="5" y1="18" x2="19" y2="18" opacity=".35"/>',
  'photoelectric':
    '<style>.e{stroke:currentColor;stroke-width:1.25;animation:em 1.6s ease-in-out infinite}.p{fill:currentColor}@keyframes em{0%,100%{opacity:.3}50%{opacity:1}}</style><line class="e" x1="6" y1="6" x2="10" y2="14"/><circle class="p" cx="14" cy="14" r="2"/>',
  'noether-symmetry':
    '<style>.p{fill:none;stroke:currentColor;stroke-width:1.75;stroke-dasharray:20;animation:cy 2s linear infinite}@keyframes cy{0%{stroke-dashoffset:20}100%{stroke-dashoffset:0}}</style><path class="p" d="M4 15c3-8 7-10 12-7s6 7 4 10"/>',
  'line-integral':
    '<style>.p{fill:none;stroke:currentColor;stroke-width:1.75;stroke-dasharray:22;animation:ac 2s ease-in-out infinite}.d{fill:currentColor;animation:mv 2s ease-in-out infinite}@keyframes ac{0%{stroke-dashoffset:22}100%{stroke-dashoffset:0}}@keyframes mv{0%{transform:translate(4px,16px)}100%{transform:translate(18px,9px)}}</style><path class="p" d="M4 16c4-10 8-12 12-8s6 8 4 10"/><circle class="d" cx="0" cy="0" r="1.5"/>',
  'plasma-oscillation':
    '<style>.e{stroke:currentColor;stroke-width:1.25;animation:os 1.2s ease-in-out infinite}.p{stroke:currentColor;stroke-width:1.25;animation:os 1.2s ease-in-out infinite reverse}@keyframes os{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}</style><line class="e" x1="6" y1="10" x2="18" y2="10"/><line class="p" x1="6" y1="14" x2="18" y2="14"/>',
  'van-der-pol':
    '<style>.w{fill:none;stroke:currentColor;stroke-width:1.5;animation:lp 1.6s ease-in-out infinite}@keyframes lp{0%,100%{transform:scale(1)}50%{transform:scale(1.12)}}</style><path class="w" d="M3 12c2-5 4-5 6 0s4 5 6 0 4-5 6 0" style="transform-origin:12px 12px"/>',
  'reynolds-number':
    '<style>.l{stroke:currentColor;stroke-width:1.5;animation:tu 1.6s ease-in-out infinite}@keyframes tu{0%,100%{transform:translateY(0)}50%{transform:translateY(-1px)}}</style><path d="M3 10h18M3 14h18" stroke="currentColor" stroke-width="1.25" opacity=".35"/><path class="l" d="M6 10c2 4 2 4 4 0" fill="none"/><path class="l" d="M12 10c1 2 2 2 3 0" fill="none" style="animation-delay:.2s"/>',
  'boundary-layer':
    '<style>.b{fill:none;stroke:currentColor;stroke-width:1.5;animation:gr 1.8s ease-in-out infinite}@keyframes gr{0%,100%{opacity:.35}50%{opacity:1}}</style><line x1="3" y1="16" x2="21" y2="16" stroke="currentColor" stroke-width="1.25"/><path class="b" d="M3 16c4-6 8-6 12 0"/>',
  'navier-stokes-t':
    '<style>.v{fill:none;stroke:currentColor;stroke-width:1.5;animation:sw 1.6s linear infinite}@keyframes sw{0%{stroke-dashoffset:14}100%{stroke-dashoffset:-14}}</style><path class="v" d="M10 12c-3-2-5-5-1-7s6 1 4 4" stroke-dasharray="14"/>',
  'eddy-current':
    '<style>.v{fill:none;stroke:currentColor;stroke-width:1.25;animation:ed 1.6s linear infinite}@keyframes ed{0%{stroke-dashoffset:12}100%{stroke-dashoffset:-12}}</style><circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" stroke-width="1.25" opacity=".35"/><path class="v" d="M12 8c2 0 3 2 3 4s-1 4-3 4" stroke-dasharray="12"/>',
  'radial-velocity':
    '<style>.b{fill:currentColor;animation:sh 1.8s ease-in-out infinite}@keyframes sh{0%,100%{transform:translateX(0)}50%{transform:translateX(-2px)}}</style><rect x="9" y="6" width="2" height="12" rx=".4"/><rect class="b" x="12" y="7" width="2" height="11" rx=".4" style="animation-delay:.15s"/><rect class="b" x="15" y="8" width="2" height="10" rx=".4" style="animation-delay:.3s"/>',
  'blackbody-spectrum':
    '<style>.b{fill:currentColor;animation:sp 1.8s ease-in-out infinite}@keyframes sp{0%,100%{opacity:.35}50%{opacity:1}}</style><rect x="6" y="12" width="2" height="4" rx=".4"/><rect class="b" x="9" y="10" width="2" height="6" rx=".4" style="animation-delay:.1s"/><rect class="b" x="12" y="8" width="2" height="8" rx=".4" style="animation-delay:.2s"/><rect class="b" x="15" y="10" width="2" height="6" rx=".4" style="animation-delay:.3s"/>',
  'continuity-wave':
    '<style>.w{fill:none;stroke:currentColor;stroke-width:1.75;stroke-linecap:round;animation:un 2s ease-in-out infinite}@keyframes un{0%,100%{stroke-dashoffset:20}50%{stroke-dashoffset:0}}</style><path class="w" d="M3 12h18" stroke-dasharray="20"/>',
  'n-body-chaos':
    '<style>.p{fill:currentColor;animation:nb 2.4s ease-in-out infinite}@keyframes nb{0%{transform:translate(6px,14px)}33%{transform:translate(14px,8px)}66%{transform:translate(10px,16px)}100%{transform:translate(6px,14px)}}</style><circle cx="12" cy="12" r="1.5" fill="currentColor" opacity=".5"/><circle class="p" cx="0" cy="0" r="1.5"/>',
  'tangent-slope':
    '<style>.c{fill:none;stroke:currentColor;stroke-width:1.5;opacity:.4}.t{stroke:currentColor;stroke-width:1.5;animation:fl 1.2s ease-in-out infinite}@keyframes fl{0%,100%{opacity:.35}50%{opacity:1}}</style><path class="c" d="M4 16c3-8 7-10 12-6"/><line class="t" x1="10" y1="14" x2="16" y2="8"/>',
  'hilbert-phase':
    '<style>.r{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:rt 2s linear infinite;transform-origin:12px 12px}@keyframes rt{0%{transform:rotate(0deg) translate(6px)}100%{transform:rotate(360deg) translate(6px)}}</style><circle class="r" cx="12" cy="12" r="6"/><circle class="p" cx="18" cy="12" r="1.75"/><line x1="12" y1="12" x2="18" y2="12" stroke="currentColor" stroke-width="1.25" opacity=".5"/>',
  'coulomb-oscillator':
    '<style>.c{fill:currentColor}.p{fill:currentColor;animation:cb 2s ease-in-out infinite}@keyframes cb{0%,100%{transform:translate(14px,12px)}50%{transform:translate(8px,12px)}}</style><circle class="c" cx="12" cy="12" r="2"/><circle class="p" cx="0" cy="0" r="1.5"/>',
  'rolling-ball':
    '<style>.w{fill:none;stroke:currentColor;stroke-width:1.25;animation:rl 2s linear infinite}@keyframes rl{0%{transform:translate(4px,14px) rotate(0deg)}100%{transform:translate(18px,14px) rotate(360deg)}}</style><line x1="3" y1="17" x2="21" y2="17" stroke="currentColor" stroke-width="1.25" opacity=".35"/><g class="w"><circle cx="0" cy="0" r="2.5"/><line x1="-2" y1="0" x2="2" y2="0" stroke="currentColor" stroke-width="1"/></g>',
  'sinh-cosh':
    '<style>.a{stroke:currentColor;stroke-width:1;opacity:.2}.s{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;animation:up 2s ease-in-out infinite}.c{fill:none;stroke:currentColor;stroke-width:1.5;stroke-linecap:round;animation:dn 2s ease-in-out infinite}@keyframes up{0%,100%{opacity:1}50%{opacity:.2}}@keyframes dn{0%,100%{opacity:.2}50%{opacity:1}}</style><line class="a" x1="3" y1="12" x2="21" y2="12"/><line class="a" x1="12" y1="5" x2="12" y2="19"/><path class="s" d="M3 17 C7 17 9 12 12 12 C15 12 17 7 21 7"/><path class="c" d="M3 11 C7 11 9 17 12 17 C15 17 17 11 21 11"/>',
  'julia-set':
    '<style>.b{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:js 2.2s linear infinite}@keyframes js{0%{transform:translate(9px,11px)}25%{transform:translate(15px,10px)}50%{transform:translate(14px,15px)}75%{transform:translate(8px,14px)}100%{transform:translate(9px,11px)}}</style><rect x="7" y="7" width="10" height="10" rx="1" class="b"/><circle class="p" cx="0" cy="0" r="1.25"/>',
  'strange-attractor':
    '<style>.t{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.p{fill:currentColor;animation:sa 2.6s ease-in-out infinite}@keyframes sa{0%{transform:translate(8px,10px)}30%{transform:translate(15px,12px)}60%{transform:translate(11px,16px)}100%{transform:translate(8px,10px)}}</style><path class="t" d="M7 12c2-2 5-3 8-1s4 5 2 7"/><circle class="p" cx="0" cy="0" r="1.75"/>',
  'ising-model':
    '<style>.s{fill:currentColor;animation:fl 1.4s steps(1,end) infinite}@keyframes fl{0%,49%{opacity:1}50%,100%{opacity:.25}}</style><rect x="7" y="7" width="3" height="3" rx=".4" class="s"/><rect x="11" y="7" width="3" height="3" rx=".4" class="s" style="animation-delay:.2s"/><rect x="7" y="11" width="3" height="3" rx=".4" class="s" style="animation-delay:.4s"/><rect x="11" y="11" width="3" height="3" rx=".4" class="s" style="animation-delay:.6s"/>',
  'confidence-band':
    '<style>.b{fill:none;stroke:currentColor;stroke-width:1;opacity:.35}.l{stroke:currentColor;stroke-width:1.5;stroke-dasharray:14;animation:dr 2s ease-in-out infinite}@keyframes dr{0%{stroke-dashoffset:14}100%{stroke-dashoffset:0}}</style><path class="b" d="M5 10c4 6 10 6 14 10"/><path class="b" d="M5 14c4-6 10-6 14-10"/><line class="l" x1="5" y1="17" x2="19" y2="7"/>',
  'nyquist-sampling':
    '<style>.w{fill:none;stroke:currentColor;stroke-width:1.25}.d{fill:currentColor;animation:sa 1.6s steps(1,end) infinite}@keyframes sa{0%,100%{opacity:1}50%{opacity:.2}}</style><path class="w" d="M3 12c1-3 2-3 3 0s2 3 3 0 2-3 3 0"/><circle class="d" cx="8" cy="12" r="1.25"/><circle class="d" cx="12" cy="12" r="1.25" style="animation-delay:.25s"/><circle class="d" cx="16" cy="12" r="1.25" style="animation-delay:.5s"/>',
  'compton-scatter':
    '<style>.i{stroke:currentColor;stroke-width:1.25;animation:in 1.6s ease-in-out infinite}.o{animation:out 1.6s ease-in-out infinite}@keyframes in{0%,100%{opacity:1}50%{opacity:.35}}@keyframes out{0%,100%{opacity:.35}50%{opacity:1}}</style><line class="i" x1="4" y1="8" x2="10" y2="12"/><line class="o" x1="10" y1="12" x2="18" y2="16" stroke="currentColor" stroke-width="1.25"/>',
  'josephson-junction':
    '<style>.b{fill:currentColor;opacity:.6}.p{fill:currentColor;animation:tn 1.8s ease-in-out infinite}@keyframes tn{0%,100%{transform:translate(4px,12px)}50%{transform:translate(20px,12px)}}</style><rect class="b" x="9" y="7" width="2" height="10" rx=".4"/><rect class="b" x="13" y="7" width="2" height="10" rx=".4"/><circle class="p" cx="0" cy="0" r="1.5"/>',
  'mhd-flux':
    '<style>.m{stroke:currentColor;stroke-width:1.25;animation:rc 1.6s ease-in-out infinite}.f{stroke:currentColor;stroke-width:1.25;animation:fl 1.6s ease-in-out infinite}@keyframes rc{0%,100%{transform:translateY(0)}50%{transform:translateY(2px)}}@keyframes fl{0%,100%{opacity:.35}50%{opacity:1}}</style><path class="m" d="M5 9c4 4 4 8 8 8" fill="none"/><path class="f" d="M19 9c-4 4-4 8-8 8" fill="none"/>',
  'magnetopause':
    '<style>.s{stroke:currentColor;stroke-width:1.5;animation:sh 1.6s ease-in-out infinite}@keyframes sh{0%,100%{transform:translateX(0)}50%{transform:translateX(2px)}}</style><line class="s" x1="4" y1="9" x2="10" y2="9"/><line class="s" x1="4" y1="12" x2="9" y2="12" style="animation-delay:.1s"/><line class="s" x1="4" y1="15" x2="8" y2="15" style="animation-delay:.2s"/>',
  'clausius-inequality':
    '<style>.c{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:24;animation:cy 2s linear infinite}.a{fill:currentColor;animation:sp 2s ease-in-out infinite}@keyframes cy{0%{stroke-dashoffset:24}100%{stroke-dashoffset:0}}@keyframes sp{0%,100%{opacity:.35}50%{opacity:1}}</style><rect class="c" x="7" y="8" width="10" height="8" rx="1"/><circle class="a" cx="12" cy="12" r="1.25"/>',
  'mars-transfer':
    '<style>.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.t{fill:none;stroke:currentColor;stroke-width:1.5;stroke-dasharray:20;animation:tr 2.4s ease-in-out infinite}.p{fill:currentColor;animation:mv 2.4s ease-in-out infinite}@keyframes tr{0%{stroke-dashoffset:20}100%{stroke-dashoffset:0}}@keyframes mv{0%{transform:translate(5px,12px)}100%{transform:translate(19px,12px)}}</style><circle class="o" cx="6" cy="12" r="2.5"/><circle class="o" cx="18" cy="12" r="2"/><path class="t" d="M7 12c5-7 10-7 15 0"/><circle class="p" cx="0" cy="0" r="1.5"/>',
  'precession-gyro':
    '<style>.a{stroke:currentColor;stroke-width:1.5;transform-origin:12px 12px;animation:pr 2s ease-in-out infinite}.r{fill:none;stroke:currentColor;stroke-width:1;opacity:.3}@keyframes pr{0%,100%{transform:rotate(-18deg)}50%{transform:rotate(18deg)}}</style><ellipse class="r" cx="12" cy="12" rx="7" ry="3"/><line class="a" x1="12" y1="12" x2="12" y2="5"/><circle cx="12" cy="5" r="1.5" fill="currentColor"/>',
  'bohr-orbit':
    '<style>.n{fill:currentColor}.o{fill:none;stroke:currentColor;stroke-width:1.25;opacity:.35}.e{fill:currentColor;animation:or 2s linear infinite;transform-origin:12px 12px}@keyframes or{0%{transform:rotate(0deg) translate(5px)}100%{transform:rotate(360deg) translate(5px)}}</style><circle class="n" cx="12" cy="12" r="2"/><circle class="o" cx="12" cy="12" r="6"/><circle class="e" cx="17" cy="12" r="1.25"/>',
  'binary-pulsar':
    '<style>.b1,.b2{stroke:currentColor;stroke-width:1.5;transform-origin:12px 12px;animation:sw 1.2s linear infinite}.b2{animation-direction:reverse}@keyframes sw{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}</style><circle cx="10" cy="12" r="1.5" fill="currentColor"/><circle cx="14" cy="12" r="1.5" fill="currentColor"/><line class="b1" x1="12" y1="12" x2="12" y2="4"/><line class="b2" x1="12" y1="12" x2="12" y2="20"/>',
  'spacetime-curve':
    '<style>.g1,.g2{fill:none;stroke:currentColor;stroke-width:1.25}.g1{animation:a1 1.8s ease-in-out infinite}.g2{animation:a2 1.8s ease-in-out infinite}@keyframes a1{0%,100%{opacity:1}50%{opacity:0}}@keyframes a2{0%,100%{opacity:0}50%{opacity:1}}</style><circle cx="12" cy="12" r="2" fill="currentColor"/><path class="g1" d="M5 10c4 6 10 6 14 2"/><path class="g2" d="M5 12c5 4 9 4 14 8"/>',
  'dark-energy-exp':
    '<style>.d{fill:currentColor;animation:ac 2s ease-in-out infinite}@keyframes ac{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(1px,-1px) scale(1.25)}}</style><circle class="d" cx="12" cy="12" r="1.5"/><circle class="d" cx="8" cy="14" r="1" style="animation-delay:.2s"/><circle class="d" cx="16" cy="10" r="1" style="animation-delay:.4s"/><path d="M12 12l3-5" stroke="currentColor" stroke-width="1.25" opacity=".5"/>',
  'stark-effect':
    '<style>.l{fill:currentColor;animation:sh 1.6s ease-in-out infinite}@keyframes sh{0%,100%{transform:translateX(0)}50%{transform:translateX(3px)}}</style><rect x="9" y="6" width="1.5" height="12" rx=".4"/><rect class="l" x="12" y="6" width="1.5" height="12" rx=".4" style="animation-delay:.12s"/><rect class="l" x="15" y="6" width="1.5" height="12" rx=".4" style="animation-delay:.24s"/><line x1="5" y1="12" x2="8" y2="12" stroke="currentColor" stroke-width="1.25"/><line x1="17" y1="12" x2="20" y2="12" stroke="currentColor" stroke-width="1.25"/>',
  'quantum-entangle':
    '<style>.a,.b{fill:currentColor;animation:er 1.6s ease-in-out infinite}@keyframes er{0%,100%{transform:rotate(0deg)}50%{transform:rotate(12deg)}}</style><circle class="a" cx="8" cy="12" r="2" style="transform-origin:12px 12px"/><circle class="b" cx="16" cy="12" r="2" style="transform-origin:12px 12px;animation-direction:reverse"/><path d="M10 12h4" stroke="currentColor" stroke-width="1.25" stroke-dasharray="2 2"/>',
  'rocket-equation':
    '<style>.h{fill:currentColor}.b{fill:none;stroke:currentColor;stroke-width:1.25}.m{fill:currentColor;transform-origin:11px 15px;animation:ms 2s ease-in-out infinite}.f{fill:currentColor;transform-origin:11px 18px;animation:ex 2s ease-in-out infinite}.v{stroke:currentColor;stroke-width:1.5;stroke-linecap:round;stroke-linejoin:round;animation:dv 2s ease-in-out infinite}.p{fill:currentColor;opacity:.55;animation:ej 2s ease-in-out infinite}@keyframes ms{0%,100%{transform:scaleY(1)}50%{transform:scaleY(.3)}}@keyframes ex{0%,100%{opacity:.3;transform:scaleY(.55)}50%{opacity:1;transform:scaleY(1)}}@keyframes dv{0%,100%{transform:scaleY(.45);opacity:.35}50%{transform:scaleY(1);opacity:1}}@keyframes ej{0%{transform:translate(9px,14px);opacity:0}35%{opacity:.75}100%{transform:translate(9px,21px);opacity:0}}</style><path class="h" d="M10 5 L14 5 L12 8 Z"/><rect class="b" x="10" y="8" width="4" height="5" rx=".5"/><rect class="m" x="10.5" y="13" width="3" height="4" rx=".4"/><rect class="f" x="9" y="18" width="1.5" height="2.5" rx=".3"/><rect class="f" x="12.5" y="18" width="1.5" height="2.5" rx=".3" style="animation-delay:.12s"/><line class="v" x1="19" y1="17" x2="19" y2="7" style="transform-origin:19px 17px"/><polyline class="v" points="17,9 19,6 21,9" fill="none"/><circle class="p" cx="0" cy="0" r=".9"/><circle class="p" cx="0" cy="0" r=".9" style="animation-delay:.5s"/>',
};

export function renderIconOverride(def: IconDefinition): string | null {
  const body = OVERRIDE_BODIES[def.id];
  return body ? wrap(body) : null;
}

export const OVERRIDE_ICON_IDS = new Set(Object.keys(OVERRIDE_BODIES));
