export const song = {
  name: 'Chopin Sonata - II. Andante cantabile',
  code: `// Chopin-Style Sonata - Movement II: Andante cantabile
// Ternary form (ABA') - Nocturne-like character
// Duration: ~3 minutes

stack(
  // A SECTION - Main lyrical theme (singing melody like a Chopin Nocturne)
  note(\`
    [g4 ~ a4 b4] [c5 ~ d5 ~] [e5 ~ ~ d5] [c5 ~ b4 ~]
    [a4 ~ b4 c5] [d5 ~ e5 ~] [d5 ~ ~ c5] [b4 ~ ~ ~]
    [g4 ~ a4 b4] [c5 ~ d5 ~] [e5 ~ f5 ~] [g5 ~ ~ f5]
    [e5 ~ d5 c5] [b4 ~ c5 ~] [d5 ~ ~ ~] [~ ~ ~ ~]
    [e5 ~ f5 g5] [a5 ~ ~ g5] [f5 ~ e5 ~] [d5 ~ ~ c5]
    [b4 ~ c5 d5] [e5 ~ ~ d5] [c5 ~ b4 ~] [a4 ~ ~ ~]
    [g4 ~ a4 b4] [c5 ~ d5 e5] [f5 ~ e5 d5] [c5 ~ ~ ~]
    [b4 ~ c5 ~] [d5 ~ ~ ~] [c5 ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("kawai")
    .lpf(2800)
    .gain(0.32)
    .attack(0.08)
    .decay(0.5)
    .sustain(0.6)
    .release(1.5)
    .room(0.8)
    .delay(0.25)
    .delaytime(0.5)
    .slow(12),

  // B SECTION - Contrasting middle (more passionate, darker)
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [eb5 ~ f5 g5] [ab5 ~ ~ g5] [f5 ~ eb5 ~] [d5 ~ ~ ~]
    [c5 ~ d5 eb5] [f5 ~ g5 ~] [ab5 ~ g5 f5] [eb5 ~ ~ ~]
    [bb4 ~ c5 d5] [eb5 ~ f5 ~] [g5 ~ ~ f5] [eb5 ~ d5 ~]
    [c5 ~ bb4 ~] [ab4 ~ bb4 ~] [c5 ~ ~ ~] [~ ~ ~ ~]
    [d5 ~ eb5 f5] [g5 ~ ab5 ~] [bb5 ~ ~ ab5] [g5 ~ f5 ~]
    [eb5 ~ d5 ~] [c5 ~ ~ ~] [bb4 ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("kawai")
    .lpf(2400)
    .gain(0.30)
    .attack(0.06)
    .decay(0.45)
    .sustain(0.55)
    .release(1.4)
    .room(0.75)
    .delay(0.2)
    .slow(12),

  // A' SECTION - Return of main theme with ornamentation
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
    [g4 a4 b4 c5] [d5 ~ e5 ~] [f5 e5 d5 c5] [b4 ~ ~ ~]
    [a4 b4 c5 d5] [e5 ~ f5 ~] [e5 d5 c5 b4] [c5 ~ ~ ~]
    [g4 a4 b4 c5] [d5 e5 f5 g5] [a5 ~ g5 f5] [e5 ~ d5 ~]
    [c5 ~ ~ ~] [b4 ~ ~ ~] [c5 ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("kawai")
    .lpf(3200)
    .gain(0.28)
    .attack(0.05)
    .decay(0.5)
    .sustain(0.55)
    .release(1.8)
    .room(0.85)
    .delay(0.3)
    .delaytime(0.6)
    .slow(12),

  // Left hand - Flowing arpeggios following melody (Chopin Op.9 No.2 style)
  note(\`
    <g2 [b2 d3] [g3 d3] [b2 g2]> <a2 [c3 e3] [a3 e3] [c3 a2]>
    <c3 [e3 g3] [c4 g3] [e3 c3]> <g2 [b2 d3] [g3 d3] [b2 g2]>
    <e2 [g2 b2] [e3 b2] [g2 e2]> <d3 [f3 a3] [d4 a3] [f3 d3]>
    <c3 [e3 g3] [c4 g3] [e3 c3]> <b2 [d3 g3] [b3 g3] [d3 b2]>
    <a2 [c3 e3] [a3 e3] [c3 a2]> <d3 [f3 a3] [d4 a3] [f3 d3]>
    <e3 [g3 b3] [e4 b3] [g3 e3]> <a2 [c3 e3] [a3 e3] [c3 a2]>
    <g2 [b2 d3] [g3 d3] [b2 g2]> <c3 [e3 g3] [c4 g3] [e3 c3]>
    <d3 [f3 a3] [d4 a3] [f3 d3]> <g2 [b2 d3] [g3 d3] [b2 g2]>
    <eb3 [g3 bb3] [eb4 bb3] [g3 eb3]> <ab2 [c3 eb3] [ab3 eb3] [c3 ab2]>
    <f2 [ab2 c3] [f3 c3] [ab2 f2]> <bb2 [d3 f3] [bb3 f3] [d3 bb2]>
    <eb3 [g3 bb3] [eb4 bb3] [g3 eb3]> <ab2 [c3 eb3] [ab3 eb3] [c3 ab2]>
    <g2 [bb2 eb3] [g3 eb3] [bb2 g2]> <c3 [eb3 g3] [c4 g3] [eb3 c3]>
    <bb2 [d3 f3] [bb3 f3] [d3 bb2]> <eb3 [g3 bb3] [eb4 bb3] [g3 eb3]>
    <ab2 [c3 eb3] [ab3 eb3] [c3 ab2]> <bb2 [d3 f3] [bb3 f3] [d3 bb2]>
    <eb3 [g3 bb3] [eb4 bb3] [g3 eb3]> <bb2 [d3 f3] [bb3 f3] [d3 bb2]>
    <g2 [b2 d3] [g3 d3] [b2 g2]> <g2 [b2 d3] [g3 d3] [b2 g2]>
    <c3 [e3 g3] [c4 g3] [e3 c3]> <g2 [b2 d3] [g3 d3] [b2 g2]>
    <a2 [c3 e3] [a3 e3] [c3 a2]> <b2 [d3 g3] [b3 g3] [d3 b2]>
    <c3 [e3 g3] [c4 g3] [e3 c3]> <g2 [b2 d3] [g3 d3] [b2 g2]>
    <c3 [e3 g3] [c4 g3] [e3 c3]> <c3 [e3 g3] [c4 g3] [e3 c3]>
  \`)
    .s("kawai")
    .lpf(1200)
    .gain(0.18)
    .attack(0.02)
    .decay(0.3)
    .sustain(0.35)
    .release(0.9)
    .room(0.7)
    .slow(12),

  // Deep bass pedal tones - supporting harmonic rhythm
  note(\`
    g1 ~ a1 ~
    c2 ~ g1 ~
    e1 ~ d2 ~
    c2 ~ b1 ~
    a1 ~ d2 ~
    e2 ~ a1 ~
    g1 ~ c2 ~
    d2 ~ g1 ~
    eb2 ~ ab1 ~
    f1 ~ bb1 ~
    eb2 ~ ab1 ~
    g1 ~ c2 ~
    bb1 ~ eb2 ~
    ab1 ~ bb1 ~
    eb2 ~ bb1 ~
    g1 ~ g1 ~
    c2 ~ g1 ~
    a1 ~ b1 ~
    c2 ~ g1 ~
    c2 ~ c2 ~
  \`)
    .s("kawai")
    .lpf(500)
    .gain(0.22)
    .attack(0.02)
    .decay(0.4)
    .sustain(0.5)
    .release(1.2)
    .room(0.6)
    .slow(12)
).cpm(16)`
};
