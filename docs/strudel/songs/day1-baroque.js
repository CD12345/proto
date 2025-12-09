export const song = {
  name: 'Day 1: Winter\'s First Light - Baroque Partita',
  code: `// "Winter's First Light" - A Baroque Christmas Partita
// Style: Johann Sebastian Bach influenced
// Form: Prelude with fugal elements
// Key: D minor (dramatic winter atmosphere)
// Features: Contrapuntal voices, ornamental runs, circle of fifths

stack(
  // SOPRANO VOICE - Primary melodic line with Baroque ornaments
  note(\`
    [d5 ~ e5 f5] [g5 ~ a5 ~] [bb5 a5 g5 f5] [e5 ~ d5 ~]
    [a5 ~ g5 f5] [e5 ~ d5 ~] [c#5 d5 e5 f5] [e5 ~ ~ ~]
    [f5 ~ g5 a5] [bb5 ~ c6 ~] [d6 c6 bb5 a5] [g5 ~ f5 ~]
    [e5 ~ f5 g5] [a5 ~ bb5 ~] [a5 g5 f5 e5] [d5 ~ ~ ~]
    [d5 e5 f5 g5] [a5 bb5 c6 d6] [c6 bb5 a5 g5] [f5 e5 d5 c5]
    [bb4 c5 d5 e5] [f5 g5 a5 bb5] [a5 ~ g5 ~] [f5 ~ ~ ~]
    [g5 ~ f5 e5] [d5 ~ c#5 ~] [d5 e5 f5 g5] [a5 ~ ~ ~]
    [bb5 a5 g5 f5] [e5 d5 c#5 d5] [e5 ~ d5 ~] [d5 ~ ~ ~]
  \`)
    .s("triangle")
    .lpf(3200)
    .gain(0.32)
    .attack(0.01)
    .decay(0.2)
    .sustain(0.5)
    .release(0.6)
    .room(0.5)
    .slow(8),

  // ALTO VOICE - Imitative counterpoint, enters 2 bars later
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [d4 ~ e4 f4] [g4 ~ a4 ~]
    [bb4 a4 g4 f4] [e4 ~ d4 ~] [a4 ~ g4 f4] [e4 ~ ~ ~]
    [d4 ~ e4 f4] [g4 ~ a4 ~] [bb4 ~ a4 g4] [f4 ~ e4 ~]
    [c#4 ~ d4 e4] [f4 ~ g4 ~] [f4 e4 d4 c#4] [d4 ~ ~ ~]
    [~ ~ ~ ~] [f4 g4 a4 bb4] [a4 g4 f4 e4] [d4 c4 bb3 a3]
    [g3 a3 bb3 c4] [d4 e4 f4 g4] [f4 ~ e4 ~] [d4 ~ ~ ~]
    [e4 ~ d4 c4] [bb3 ~ a3 ~] [bb3 c4 d4 e4] [f4 ~ ~ ~]
    [g4 f4 e4 d4] [c#4 d4 e4 f4] [c#4 ~ d4 ~] [d4 ~ ~ ~]
  \`)
    .s("triangle")
    .lpf(2400)
    .gain(0.26)
    .attack(0.01)
    .decay(0.2)
    .sustain(0.4)
    .release(0.5)
    .room(0.45)
    .slow(8),

  // TENOR VOICE - Flowing eighth note motion
  note(\`
    [a3 bb3 a3 g3] [f3 g3 a3 bb3] [a3 g3 f3 e3] [d3 e3 f3 g3]
    [f3 g3 f3 e3] [d3 e3 f3 g3] [a3 ~ a3 ~] [a3 ~ ~ ~]
    [d3 e3 f3 g3] [g3 a3 bb3 c4] [bb3 a3 g3 f3] [e3 f3 g3 a3]
    [a3 ~ bb3 c4] [c4 ~ d4 ~] [c4 bb3 a3 g3] [f3 ~ ~ ~]
    [f3 g3 a3 bb3] [c4 d4 e4 f4] [e4 d4 c4 bb3] [a3 g3 f3 e3]
    [d3 e3 f3 g3] [a3 bb3 c4 d4] [c4 ~ bb3 ~] [a3 ~ ~ ~]
    [bb3 ~ a3 g3] [f3 ~ e3 ~] [f3 g3 a3 bb3] [c4 ~ ~ ~]
    [d4 c4 bb3 a3] [g3 f3 e3 f3] [g3 ~ f3 ~] [f3 ~ ~ ~]
  \`)
    .s("triangle")
    .lpf(1800)
    .gain(0.22)
    .attack(0.01)
    .decay(0.15)
    .sustain(0.4)
    .release(0.4)
    .room(0.4)
    .slow(8),

  // BASS VOICE - Walking bass with circle of fifths progression
  note(\`
    d2 d2 g2 g2 c3 c3 a2 a2
    d2 d2 bb2 bb2 a2 a2 a2 a2
    d2 d2 g2 g2 g2 g2 c3 c3
    a2 a2 d2 d2 a2 a2 d2 d2
    d2 d2 f2 f2 c2 c2 f2 f2
    g2 g2 d2 d2 a2 a2 d2 d2
    g2 g2 a2 a2 bb2 bb2 f2 f2
    g2 g2 a2 a2 d2 d2 d2 d2
  \`)
    .s("sawtooth")
    .lpf(500)
    .gain(0.32)
    .attack(0.01)
    .decay(0.15)
    .sustain(0.5)
    .release(0.3)
    .room(0.35)
    .slow(8),

  // CONTINUO - Harpsichord-like chords on strong beats
  note(\`
    <d3 f3 a3> ~ <g3 bb3 d4> ~
    <c3 e3 g3> ~ <a3 c#4 e4> ~
    <d3 f3 a3> ~ <bb2 d3 f3> ~
    <a2 c#3 e3> ~ ~ ~
    <d3 f3 a3> ~ <g3 bb3 d4> ~
    <g3 bb3 d4> ~ <c3 e3 g3> ~
    <a2 c#3 e3> ~ <d3 f3 a3> ~
    <a2 c#3 e3> ~ <d3 f3 a3> ~
    <d3 f3 a3> ~ <f3 a3 c4> ~
    <c3 e3 g3> ~ <f3 a3 c4> ~
    <g2 bb2 d3> ~ <d3 f3 a3> ~
    <a2 c#3 e3> ~ ~ ~
    <g2 bb2 d3> ~ <a2 c#3 e3> ~
    <bb2 d3 f3> ~ <f2 a2 c3> ~
    <g2 bb2 d3> ~ <a2 c#3 e3> ~
    <d3 f3 a3> ~ ~ ~
  \`)
    .s("square")
    .lpf(1600)
    .gain(0.15)
    .attack(0.005)
    .decay(0.1)
    .sustain(0.2)
    .release(0.3)
    .room(0.4)
    .slow(8)

).cpm(35)`
};
