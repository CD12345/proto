export const song = {
  name: 'Day 7: Natal em Ipanema - Bossa Nova Christmas',
  code: `// "Natal em Ipanema" - A Bossa Nova Christmas
// Style: Brazilian Bossa Nova / MPB
// Form: AABA with coda
// Key: F major (warm, sunny)
// Features: Syncopated guitar rhythm, smooth melody, jazz harmonies, gentle groove

stack(
  // MELODY - Smooth, floating bossa line
  note(\`
    [~ ~ ~ ~] [~ ~ a4 bb4] [c5 ~ d5 ~] [c5 ~ bb4 ~]
    [a4 ~ g4 ~] [f4 ~ ~ ~] [~ ~ a4 bb4] [c5 ~ d5 ~]
    [e5 ~ d5 ~] [c5 ~ bb4 ~] [a4 ~ ~ ~] [~ ~ ~ ~]
    [~ ~ g4 a4] [bb4 ~ c5 ~] [d5 ~ c5 bb4] [a4 ~ ~ ~]
    [g4 ~ a4 ~] [bb4 ~ ~ ~] [~ ~ ~ ~] [~ ~ a4 bb4]
    [c5 ~ d5 ~] [c5 ~ bb4 ~] [a4 ~ g4 ~] [f4 ~ ~ ~]
    [~ ~ a4 bb4] [c5 ~ d5 ~] [e5 ~ d5 ~] [c5 ~ bb4 ~]
    [a4 ~ g4 a4] [f4 ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ d5 e5] [f5 ~ g5 ~] [f5 ~ e5 d5] [c5 ~ ~ ~]
    [~ ~ c5 d5] [e5 ~ f5 ~] [e5 ~ d5 c5] [bb4 ~ ~ ~]
    [~ ~ a4 bb4] [c5 ~ d5 ~] [c5 ~ bb4 ~] [a4 ~ g4 ~]
    [f4 ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("triangle")
    .lpf(3000)
    .gain(0.3)
    .attack(0.03)
    .decay(0.2)
    .sustain(0.5)
    .release(0.8)
    .room(0.5)
    .delay(0.15)
    .slow(12),

  // BOSSA GUITAR - Classic syncopated pattern
  note(\`
    [<f3 a3 c4> ~ <f3 a3 c4> ~] [~ <f3 a3 c4> ~ <f3 a3 c4>]
    [<g3 bb3 d4> ~ <g3 bb3 d4> ~] [~ <g3 bb3 d4> ~ <g3 bb3 d4>]
    [<c3 e3 g3 bb3> ~ <c3 e3 g3 bb3> ~] [~ <c3 e3 g3 bb3> ~ <c3 e3 g3 bb3>]
    [<f3 a3 c4> ~ <f3 a3 c4> ~] [~ <f3 a3 c4> ~ <f3 a3 c4>]
    [<f3 a3 c4> ~ <f3 a3 c4> ~] [~ <f3 a3 c4> ~ <f3 a3 c4>]
    [<g3 bb3 d4> ~ <g3 bb3 d4> ~] [~ <g3 bb3 d4> ~ <g3 bb3 d4>]
    [<c3 e3 g3 bb3> ~ <c3 e3 g3 bb3> ~] [~ <c3 e3 g3 bb3> ~ <c3 e3 g3 bb3>]
    [<f3 a3 c4> ~ <f3 a3 c4> ~] [~ <f3 a3 c4> ~ <f3 a3 c4>]
    [<bb2 d3 f3 a3> ~ <bb2 d3 f3 a3> ~] [~ <bb2 d3 f3 a3> ~ <bb2 d3 f3 a3>]
    [<a2 c3 e3 g3> ~ <a2 c3 e3 g3> ~] [~ <a2 c3 e3 g3> ~ <a2 c3 e3 g3>]
    [<d3 f3 a3> ~ <d3 f3 a3> ~] [~ <d3 f3 a3> ~ <d3 f3 a3>]
    [<g3 b3 d4> ~ <g3 b3 d4> ~] [~ <g3 b3 d4> ~ <g3 b3 d4>]
    [<c3 e3 g3 bb3> ~ <c3 e3 g3 bb3> ~] [~ <c3 e3 g3 bb3> ~ <c3 e3 g3 bb3>]
    [<f3 a3 c4> ~ <f3 a3 c4> ~] [~ <f3 a3 c4> ~ <f3 a3 c4>]
    [<bb2 d3 f3> ~ <bb2 d3 f3> ~] [~ <c3 e3 g3 bb3> ~ <c3 e3 g3 bb3>]
    [<f3 a3 c4> ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("triangle")
    .lpf(2200)
    .gain(0.2)
    .attack(0.01)
    .decay(0.1)
    .sustain(0.4)
    .release(0.35)
    .room(0.4)
    .slow(12),

  // BASS - Bossa bass pattern
  note(\`
    [f2 ~ ~ c2] [~ f2 ~ ~] [g2 ~ ~ d2] [~ g2 ~ ~]
    [c2 ~ ~ g1] [~ c2 ~ ~] [f2 ~ ~ c2] [~ f2 ~ ~]
    [f2 ~ ~ c2] [~ f2 ~ ~] [g2 ~ ~ d2] [~ g2 ~ ~]
    [c2 ~ ~ g1] [~ c2 ~ ~] [f2 ~ ~ c2] [~ f2 ~ ~]
    [bb1 ~ ~ f1] [~ bb1 ~ ~] [a1 ~ ~ e1] [~ a1 ~ ~]
    [d2 ~ ~ a1] [~ d2 ~ ~] [g1 ~ ~ d1] [~ g1 ~ ~]
    [c2 ~ ~ g1] [~ c2 ~ ~] [f2 ~ ~ c2] [~ f2 ~ ~]
    [bb1 ~ ~ ~] [c2 ~ ~ ~] [f2 ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("sawtooth")
    .lpf(500)
    .gain(0.35)
    .attack(0.01)
    .decay(0.12)
    .sustain(0.5)
    .release(0.3)
    .room(0.3)
    .slow(12),

  // LIGHT PERCUSSION - Bossa shaker/tambourine
  s("hh*8")
    .gain(0.18)
    .lpf(6000)
    .slow(1),

  // RIM CLICKS - Bossa clave-like pattern
  s("~ ~ sd ~ ~ sd ~ ~")
    .gain(0.22)
    .lpf(3000)
    .slow(1),

  // SOFT KICK - Understated pulse
  s("bd ~ ~ ~ bd ~ ~ ~")
    .gain(0.35)
    .slow(1),

  // PIANO FILLS - Occasional jazz voicings
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [<c4 e4 g4 bb4>@3 ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [<f4 a4 c5>@3 ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [<c4 e4 g4 bb4>@3 ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [<f4 a4 c5>@3 ~] [~ ~ ~ ~]
  \`)
    .s("sine")
    .lpf(2500)
    .gain(0.14)
    .attack(0.02)
    .decay(0.2)
    .sustain(0.4)
    .release(0.6)
    .room(0.45)
    .slow(12)

).cpm(70)`
};
