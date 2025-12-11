export const song = {
  name: 'Day 6: The Yuletide Reel - Celtic Folk Christmas',
  code: `// "The Yuletide Reel" - A Celtic Folk Christmas
// Style: Irish/Scottish Traditional
// Form: AABB reel structure
// Key: D Mixolydian (modal, festive)
// Features: Fiddle-like melody, bouncy rhythm, drone bass, ornamentation

stack(
  // FIDDLE MELODY - Lively reel with ornaments
  note(\`
    [d5 e5 f#5 g5] [a5 g5 f#5 e5] [d5 f#5 a5 f#5] [g5 f#5 e5 d5]
    [c5 d5 e5 f#5] [g5 f#5 e5 d5] [c5 e5 g5 e5] [f#5 e5 d5 c5]
    [d5 e5 f#5 g5] [a5 g5 f#5 e5] [d5 f#5 a5 f#5] [g5 f#5 e5 d5]
    [c5 d5 e5 f#5] [g5 a5 b5 a5] [g5 f#5 e5 d5] [d5 ~ ~ ~]
    [d5 e5 f#5 g5] [a5 g5 f#5 e5] [d5 f#5 a5 f#5] [g5 f#5 e5 d5]
    [c5 d5 e5 f#5] [g5 f#5 e5 d5] [c5 e5 g5 e5] [f#5 e5 d5 c5]
    [d5 e5 f#5 g5] [a5 g5 f#5 e5] [d5 f#5 a5 f#5] [g5 f#5 e5 d5]
    [c5 d5 e5 f#5] [g5 a5 b5 a5] [g5 f#5 e5 d5] [d5 ~ ~ ~]
    [a5 b5 c6 b5] [a5 g5 f#5 e5] [d5 e5 f#5 g5] [a5 g5 f#5 e5]
    [f#5 g5 a5 g5] [f#5 e5 d5 c5] [b4 c5 d5 e5] [f#5 e5 d5 c5]
    [a5 b5 c6 b5] [a5 g5 f#5 e5] [d5 e5 f#5 g5] [a5 g5 f#5 e5]
    [f#5 g5 a5 b5] [c6 b5 a5 g5] [f#5 e5 d5 c5] [d5 ~ ~ ~]
    [a5 b5 c6 b5] [a5 g5 f#5 e5] [d5 e5 f#5 g5] [a5 g5 f#5 e5]
    [f#5 g5 a5 g5] [f#5 e5 d5 c5] [b4 c5 d5 e5] [f#5 e5 d5 c5]
    [a5 b5 c6 b5] [a5 g5 f#5 e5] [d5 e5 f#5 g5] [a5 g5 f#5 e5]
    [f#5 g5 a5 b5] [c6 b5 a5 g5] [f#5 e5 d5 c5] [d5 ~ ~ ~]
  \`)
    .s("triangle")
    .lpf(3500)
    .gain(0.32)
    .attack(0.01)
    .decay(0.1)
    .sustain(0.4)
    .release(0.3)
    .room(0.45)
    .slow(16),

  // SECOND FIDDLE - Harmony line (thirds and sixths)
  note(\`
    [f#4 g4 a4 b4] [c5 b4 a4 g4] [f#4 a4 c5 a4] [b4 a4 g4 f#4]
    [e4 f#4 g4 a4] [b4 a4 g4 f#4] [e4 g4 b4 g4] [a4 g4 f#4 e4]
    [f#4 g4 a4 b4] [c5 b4 a4 g4] [f#4 a4 c5 a4] [b4 a4 g4 f#4]
    [e4 f#4 g4 a4] [b4 c5 d5 c5] [b4 a4 g4 f#4] [f#4 ~ ~ ~]
    [f#4 g4 a4 b4] [c5 b4 a4 g4] [f#4 a4 c5 a4] [b4 a4 g4 f#4]
    [e4 f#4 g4 a4] [b4 a4 g4 f#4] [e4 g4 b4 g4] [a4 g4 f#4 e4]
    [f#4 g4 a4 b4] [c5 b4 a4 g4] [f#4 a4 c5 a4] [b4 a4 g4 f#4]
    [e4 f#4 g4 a4] [b4 c5 d5 c5] [b4 a4 g4 f#4] [f#4 ~ ~ ~]
    [f#5 g5 a5 g5] [f#5 e5 d5 c5] [f#4 g4 a4 b4] [c5 b4 a4 g4]
    [a4 b4 c5 b4] [a4 g4 f#4 e4] [g4 a4 b4 c5] [a4 g4 f#4 e4]
    [f#5 g5 a5 g5] [f#5 e5 d5 c5] [f#4 g4 a4 b4] [c5 b4 a4 g4]
    [a4 b4 c5 d5] [e5 d5 c5 b4] [a4 g4 f#4 e4] [f#4 ~ ~ ~]
    [f#5 g5 a5 g5] [f#5 e5 d5 c5] [f#4 g4 a4 b4] [c5 b4 a4 g4]
    [a4 b4 c5 b4] [a4 g4 f#4 e4] [g4 a4 b4 c5] [a4 g4 f#4 e4]
    [f#5 g5 a5 g5] [f#5 e5 d5 c5] [f#4 g4 a4 b4] [c5 b4 a4 g4]
    [a4 b4 c5 d5] [e5 d5 c5 b4] [a4 g4 f#4 e4] [f#4 ~ ~ ~]
  \`)
    .s("triangle")
    .lpf(2800)
    .gain(0.22)
    .attack(0.01)
    .decay(0.1)
    .sustain(0.35)
    .release(0.3)
    .room(0.4)
    .slow(16),

  // BODHRAN RHYTHM - Celtic drum pattern
  s(\`
    bd ~ hh ~ bd hh ~ hh
    bd ~ hh ~ bd hh ~ hh
  \`)
    .gain(0.45)
    .slow(2),

  // GUITAR STRUM - Rhythmic chordal accompaniment
  note(\`
    <d3 a3 d4> ~ <d3 a3 d4> <c3 g3 c4>
    <d3 a3 d4> <c3 g3 c4> <d3 a3 d4> ~
    <d3 a3 d4> ~ <d3 a3 d4> <c3 g3 c4>
    <d3 a3 d4> <c3 g3 c4> <d3 a3 d4> ~
    <d3 a3 d4> ~ <d3 a3 d4> <c3 g3 c4>
    <d3 a3 d4> <c3 g3 c4> <d3 a3 d4> ~
    <d3 a3 d4> ~ <d3 a3 d4> <c3 g3 c4>
    <g2 d3 g3> <a2 e3 a3> <d3 a3 d4> ~
  \`)
    .s("triangle")
    .lpf(1800)
    .gain(0.18)
    .attack(0.01)
    .decay(0.12)
    .sustain(0.3)
    .release(0.25)
    .room(0.35)
    .slow(8),

  // DRONE BASS - Traditional Celtic drone on D
  note(\`
    d2 ~ d2 ~ d2 ~ d2 ~
    d2 ~ d2 ~ d2 ~ d2 ~
    d2 ~ d2 ~ d2 ~ d2 ~
    d2 ~ d2 ~ d2 ~ d2 ~
    a1 ~ a1 ~ a1 ~ a1 ~
    a1 ~ a1 ~ a1 ~ a1 ~
    a1 ~ a1 ~ a1 ~ a1 ~
    g1 a1 d2 ~ d2 ~ ~ ~
  \`)
    .s("sawtooth")
    .lpf(400)
    .gain(0.35)
    .attack(0.02)
    .decay(0.2)
    .sustain(0.6)
    .release(0.4)
    .room(0.3)
    .slow(8)

).cpm(95)`
};
