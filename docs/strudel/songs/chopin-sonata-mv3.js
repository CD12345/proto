export const song = {
  name: 'Chopin Sonata - III. Vivace con fuoco',
  code: `// Chopin-Style Sonata - Movement III: Vivace con fuoco
// Rondo-Sonata form: A-B-A-C-A-B-A (Coda)
// Duration: ~3 minutes

stack(
  // A SECTION - Main theme (brilliant, virtuosic)
  note(\`
    [c5 d5 e5 f5] [g5 a5 b5 c6] [b5 a5 g5 f5] [e5 d5 c5 b4]
    [a4 b4 c5 d5] [e5 f5 g5 a5] [g5 f5 e5 d5] [c5 ~ ~ ~]
    [c5 d5 e5 f5] [g5 a5 b5 c6] [d6 c6 b5 a5] [g5 f5 e5 d5]
    [e5 f5 g5 a5] [b5 c6 d6 e6] [d6 c6 b5 a5] [g5 ~ ~ ~]
  \`)
    .s("kawai")
    .lpf(3500)
    .gain(0.35)
    .attack(0.005)
    .decay(0.15)
    .sustain(0.3)
    .release(0.4)
    .room(0.5)
    .delay(0.1)
    .slow(6),

  // B SECTION - Second theme (more lyrical contrast)
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [e5 ~ f5 ~] [g5 ~ ~ a5] [g5 ~ f5 ~] [e5 ~ ~ ~]
    [d5 ~ e5 ~] [f5 ~ ~ g5] [f5 ~ e5 ~] [d5 ~ ~ ~]
    [c5 ~ d5 ~] [e5 ~ f5 ~] [g5 ~ a5 ~] [b5 ~ ~ ~]
    [c6 ~ b5 ~] [a5 ~ g5 ~] [f5 ~ e5 ~] [d5 ~ ~ ~]
  \`)
    .s("kawai")
    .lpf(3000)
    .gain(0.30)
    .attack(0.03)
    .decay(0.25)
    .sustain(0.4)
    .release(0.7)
    .room(0.6)
    .delay(0.15)
    .slow(6),

  // A' SECTION - Return of main theme
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [c5 d5 e5 f5] [g5 a5 b5 c6] [b5 a5 g5 f5] [e5 d5 c5 b4]
    [a4 b4 c5 d5] [e5 f5 g5 a5] [g5 f5 e5 d5] [c5 ~ ~ ~]
  \`)
    .s("kawai")
    .lpf(3500)
    .gain(0.34)
    .attack(0.005)
    .decay(0.15)
    .sustain(0.3)
    .release(0.4)
    .room(0.5)
    .slow(6),

  // C SECTION - Development episode (stormy, dramatic)
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
    [eb5 f5 g5 ab5] [bb5 c6 d6 eb6] [d6 c6 bb5 ab5] [g5 f5 eb5 d5]
    [c5 d5 eb5 f5] [g5 ab5 bb5 c6] [bb5 ab5 g5 f5] [eb5 ~ ~ ~]
    [f5 g5 ab5 bb5] [c6 d6 eb6 f6] [eb6 d6 c6 bb5] [ab5 g5 f5 eb5]
    [d5 eb5 f5 g5] [ab5 bb5 c6 d6] [c6 bb5 ab5 g5] [f5 ~ ~ ~]
  \`)
    .s("kawai")
    .lpf(3200)
    .gain(0.36)
    .attack(0.005)
    .decay(0.12)
    .sustain(0.28)
    .release(0.35)
    .room(0.55)
    .slow(6),

  // A'' SECTION - Final return with intensification
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
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [c5 d5 e5 f5] [g5 a5 b5 c6] [d6 e6 f6 g6] [f6 e6 d6 c6]
    [b5 c6 d6 e6] [f6 e6 d6 c6] [b5 a5 g5 f5] [e5 ~ ~ ~]
  \`)
    .s("kawai")
    .lpf(4000)
    .gain(0.38)
    .attack(0.003)
    .decay(0.12)
    .sustain(0.25)
    .release(0.3)
    .room(0.5)
    .slow(6),

  // CODA - Triumphant conclusion
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
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [g5 a5 b5 c6] [d6 e6 f6 g6] [e6 ~ c6 ~] [g5 ~ ~ ~]
    [c6 ~ e6 ~] [g6 ~ ~ ~] [c6 ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("kawai")
    .lpf(4500)
    .gain(0.42)
    .attack(0.002)
    .decay(0.1)
    .sustain(0.3)
    .release(0.5)
    .room(0.6)
    .slow(6),

  // Left hand - Rapid broken chords tracking melody (Chopin Scherzo style)
  note(\`
    <[c3 g3] [e3 c4]> <[g2 d3] [b2 g3]> <[a2 e3] [c3 a3]> <[e3 b3] [g3 e4]>
    <[a2 e3] [c3 a3]> <[f2 c3] [a2 f3]> <[g2 d3] [b2 g3]> <[c3 g3] [e3 c4]>
    <[c3 g3] [e3 c4]> <[g2 d3] [b2 g3]> <[d3 a3] [f3 d4]> <[e3 b3] [g3 e4]>
    <[f3 c4] [a3 f4]> <[g3 d4] [b3 g4]> <[e3 b3] [g3 e4]> <[g2 d3] [b2 g3]>
    <[c3 g3] [e3 c4]> <[g2 d3] [b2 g3]> <[a2 e3] [c3 a3]> <[c3 g3] [e3 c4]>
    <[d3 a3] [f3 d4]> <[e3 b3] [g3 e4]> <[f3 c4] [a3 f4]> <[g3 d4] [b3 g4]>
    <[a2 e3] [c3 a3]> <[g2 d3] [b2 g3]> <[c3 g3] [e3 c4]> <[d3 a3] [f3 d4]>
    <[g2 d3] [b2 g3]> <[c3 g3] [e3 c4]> <[g2 d3] [b2 g3]> <[c3 g3] [e3 c4]>
    <[c3 g3] [e3 c4]> <[g2 d3] [b2 g3]> <[a2 e3] [c3 a3]> <[e3 b3] [g3 e4]>
    <[a2 e3] [c3 a3]> <[f2 c3] [a2 f3]> <[g2 d3] [b2 g3]> <[c3 g3] [e3 c4]>
    <[eb3 bb3] [g3 eb4]> <[bb2 f3] [d3 bb3]> <[c3 g3] [eb3 c4]> <[g3 d4] [bb3 g4]>
    <[c3 g3] [eb3 c4]> <[ab2 eb3] [c3 ab3]> <[bb2 f3] [d3 bb3]> <[eb3 bb3] [g3 eb4]>
    <[f3 c4] [ab3 f4]> <[c3 g3] [eb3 c4]> <[g3 d4] [bb3 g4]> <[ab3 eb4] [c4 ab4]>
    <[bb2 f3] [d3 bb3]> <[eb3 bb3] [g3 eb4]> <[d3 a3] [f3 d4]> <[eb3 bb3] [g3 eb4]>
    <[c3 g3] [e3 c4]> <[g2 d3] [b2 g3]> <[a2 e3] [c3 a3]> <[e3 b3] [g3 e4]>
    <[f3 c4] [a3 f4]> <[g3 d4] [b3 g4]> <[e3 b3] [g3 e4]> <[c3 g3] [e3 c4]>
    <[c3 g3] [e3 c4]> <[g2 d3] [b2 g3]> <[c3 g3] [e3 c4]> <[g2 d3] [b2 g3]>
    <[c3 g3] [e3 c4]> <[e3 b3] [g3 e4]> <[c3 g3] [e3 c4]> <[c3 g3] [e3 c4]>
  \`)
    .s("kawai")
    .lpf(1100)
    .gain(0.22)
    .attack(0.005)
    .decay(0.1)
    .sustain(0.25)
    .release(0.3)
    .room(0.4)
    .slow(6),

  // Bass octaves - Beethovenian harmonic foundation
  note(\`
    c2 g1 a1 e2
    a1 f1 g1 c2
    c2 g1 d2 e2
    f2 g2 e2 g1
    c2 g1 a1 c2
    d2 e2 f2 g2
    a1 g1 c2 d2
    g1 c2 g1 c2
    c2 g1 a1 e2
    a1 f1 g1 c2
    eb2 bb1 c2 g2
    c2 ab1 bb1 eb2
    f2 c2 g2 ab2
    bb1 eb2 d2 eb2
    c2 g1 a1 e2
    f2 g2 e2 c2
    c2 g1 c2 g1
    c2 e2 c2 c2
  \`)
    .s("kawai")
    .lpf(700)
    .gain(0.28)
    .attack(0.005)
    .decay(0.15)
    .sustain(0.35)
    .release(0.4)
    .room(0.35)
    .slow(6)
).cpm(28)`
};
