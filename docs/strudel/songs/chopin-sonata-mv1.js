export const song = {
  name: 'Chopin Sonata - I. Allegro maestoso',
  code: `// Chopin-Style Sonata - Movement I: Allegro maestoso
// Sonata form: Exposition - Development - Recapitulation
// Duration: ~3 minutes

stack(
  // EXPOSITION - First Theme (dramatic, passionate)
  // Main melody - right hand with Chopin-like ornamentation
  note(\`
    [e5 d5 c5 b4] [a4 g4 f4 e4] [d4 e4 f4 g4] [a4 b4 c5 d5]
    [e5 ~ ~ g5] [f5 e5 d5 c5] [b4 c5 d5 e5] [f5 ~ ~ ~]
    [g5 f5 e5 d5] [c5 b4 a4 g4] [a4 ~ b4 ~] [c5 ~ ~ ~]
    [d5 c5 b4 a4] [g4 f4 e4 d4] [e4 ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("kawai")
    .lpf(2500)
    .gain(0.35)
    .attack(0.01)
    .decay(0.3)
    .sustain(0.4)
    .release(0.8)
    .room(0.6)
    .delay(0.15)
    .slow(8),

  // Second Theme (lyrical, tender - contrasting character)
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [g4 a4 b4 c5] [d5 ~ e5 ~] [f5 e5 d5 c5] [b4 ~ ~ ~]
    [c5 d5 e5 f5] [g5 ~ a5 ~] [g5 f5 e5 d5] [c5 ~ ~ ~]
    [a4 b4 c5 d5] [e5 f5 g5 a5] [b5 a5 g5 f5] [e5 d5 c5 b4]
    [c5 ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("kawai")
    .lpf(3000)
    .gain(0.3)
    .attack(0.05)
    .decay(0.4)
    .sustain(0.5)
    .release(1.2)
    .room(0.7)
    .delay(0.2)
    .slow(8),

  // DEVELOPMENT - Fragmented themes, modulations
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [f5 e5 d5 c5] [b4 a4 g4 f4] [e4 f4 g4 a4] [b4 c5 d5 e5]
    [f5 g5 a5 b5] [c6 b5 a5 g5] [f5 e5 d5 c5] [b4 ~ ~ ~]
    [eb5 d5 c5 bb4] [a4 g4 f4 eb4] [d4 eb4 f4 g4] [a4 bb4 c5 d5]
    [eb5 ~ ~ ~] [d5 c5 bb4 a4] [g4 ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("kawai")
    .lpf(2200)
    .gain(0.32)
    .attack(0.02)
    .decay(0.35)
    .sustain(0.35)
    .release(0.9)
    .room(0.65)
    .slow(8),

  // RECAPITULATION - Return of first theme
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [e5 d5 c5 b4] [a4 g4 f4 e4] [d4 e4 f4 g4] [a4 b4 c5 d5]
    [e5 f5 g5 a5] [b5 c6 d6 e6] [c6 ~ ~ ~] [b5 a5 g5 f5]
    [e5 d5 c5 b4] [c5 ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("kawai")
    .lpf(2800)
    .gain(0.38)
    .attack(0.01)
    .decay(0.3)
    .sustain(0.45)
    .release(1.0)
    .room(0.7)
    .slow(8),

  // Left hand - Alberti bass and broken chords (Chopin-style accompaniment)
  note(\`
    <c3 e3 g3 e3> <c3 e3 g3 e3> <f3 a3 c4 a3> <g3 b3 d4 b3>
    <c3 e3 g3 e3> <a2 c3 e3 c3> <d3 f3 a3 f3> <g2 b2 d3 b2>
    <e3 g3 b3 g3> <c3 e3 g3 e3> <f3 a3 c4 a3> <c3 e3 g3 e3>
    <g2 b2 d3 b2> <g2 b2 d3 b2> <c3 e3 g3 e3> <c3 e3 g3 e3>
    <c3 e3 g3 e3> <d3 f3 a3 f3> <e3 g3 b3 g3> <e3 g3 b3 g3>
    <a2 c3 e3 c3> <b2 d3 g3 d3> <c3 e3 g3 e3> <c3 e3 g3 e3>
    <f2 a2 c3 a2> <g2 b2 d3 b2> <a2 c3 e3 c3> <b2 d3 f3 d3>
    <c3 e3 g3 e3> <c3 e3 g3 e3> <c3 e3 g3 e3> <c3 e3 g3 e3>
    <f3 a3 c4 a3> <f3 a3 c4 a3> <bb2 d3 f3 d3> <bb2 d3 f3 d3>
    <c3 e3 g3 e3> <c3 e3 g3 e3> <f3 a3 c4 a3> <g3 b3 d4 b3>
    <eb3 g3 bb3 g3> <eb3 g3 bb3 g3> <ab2 c3 eb3 c3> <bb2 d3 f3 d3>
    <eb3 g3 bb3 g3> <d3 f3 bb3 f3> <g3 bb3 d4 bb3> <g3 bb3 d4 bb3>
    <c3 e3 g3 e3> <c3 e3 g3 e3> <f3 a3 c4 a3> <g3 b3 d4 b3>
    <c3 e3 g3 e3> <d3 f3 a3 f3> <e3 g3 c4 g3> <e3 g3 b3 g3>
    <c3 e3 g3 e3> <c3 e3 g3 e3> <c3 e3 g3 e3> <c3 e3 g3 e3>
  \`)
    .s("kawai")
    .lpf(900)
    .gain(0.22)
    .attack(0.01)
    .decay(0.2)
    .sustain(0.3)
    .release(0.6)
    .room(0.5)
    .slow(8),

  // Bass line foundation
  note(\`
    c2 c2 f2 g2
    c2 a1 d2 g1
    e2 c2 f2 c2
    g1 g1 c2 c2
    c2 d2 e2 e2
    a1 b1 c2 c2
    f1 g1 a1 b1
    c2 c2 c2 c2
    f2 f2 bb1 bb1
    c2 c2 f2 g2
    eb2 eb2 ab1 bb1
    eb2 d2 g2 g2
    c2 c2 f2 g2
    c2 d2 e2 e2
    c2 c2 c2 c2
  \`)
    .s("kawai")
    .lpf(600)
    .gain(0.28)
    .attack(0.01)
    .decay(0.3)
    .sustain(0.4)
    .release(0.8)
    .room(0.4)
    .slow(8)
).cpm(20)`
};
