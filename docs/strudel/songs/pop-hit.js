export const song = {
  name: 'Sunrise Boulevard - American Pop Hit',
  code: `// "Sunrise Boulevard" - Modern American Pop Hit
// Verse-Chorus-Bridge structure with catchy hook
// Genre: Pop / Dance-Pop
// Tempo: 120 BPM

stack(
  // INTRO - Build up (8 bars)
  note(\`
    ~ ~ ~ ~
    ~ ~ ~ ~
    [c5 ~ e5 ~] [g5 ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [c5 ~ e5 ~] [g5 a5 ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("triangle")
    .lpf(1500)
    .gain(0.25)
    .attack(0.1)
    .release(0.3)
    .room(0.4)
    .slow(4),

  // VERSE 1 - Melodic storytelling (16 bars)
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [c5 ~ d5 ~] [e5 ~ e5 ~] [d5 ~ c5 ~] [~ ~ ~ ~]
    [g4 ~ a4 ~] [c5 ~ c5 ~] [b4 ~ g4 ~] [~ ~ ~ ~]
    [a4 ~ b4 ~] [c5 ~ d5 ~] [e5 ~ ~ ~] [~ ~ ~ ~]
    [c5 ~ d5 ~] [e5 ~ g5 ~] [f5 ~ e5 ~] [d5 ~ ~ ~]
  \`)
    .s("triangle")
    .lpf(2000)
    .gain(0.3)
    .attack(0.05)
    .decay(0.2)
    .sustain(0.4)
    .release(0.4)
    .room(0.5)
    .delay(0.15)
    .slow(8),

  // CHORUS - Catchy hook! (16 bars, starts at bar 25)
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [c5 e5 g5 e5] [c5 e5 g5 a5] [g5 ~ a5 ~] [g5 ~ e5 ~]
    [c5 e5 g5 e5] [c5 e5 g5 a5] [g5 ~ a5 ~] [c6 ~ ~ ~]
    [d6 ~ c6 ~] [a5 ~ g5 ~] [e5 ~ d5 ~] [c5 ~ ~ ~]
    [g5 ~ a5 ~] [g5 ~ e5 ~] [d5 ~ e5 ~] [g5 ~ ~ ~]
    [c5 e5 g5 e5] [c5 e5 g5 a5] [g5 ~ a5 ~] [g5 ~ e5 ~]
    [c5 e5 g5 e5] [d5 ~ e5 ~] [g5 ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("triangle")
    .lpf(2800)
    .gain(0.38)
    .attack(0.02)
    .decay(0.15)
    .sustain(0.5)
    .release(0.5)
    .room(0.6)
    .delay(0.2)
    .slow(8),

  // VERSE 2 (starts at bar 41)
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
    [c5 ~ d5 ~] [e5 ~ e5 ~] [d5 ~ c5 ~] [~ ~ ~ ~]
    [g4 ~ a4 ~] [c5 ~ c5 ~] [b4 ~ g4 ~] [a4 ~ ~ ~]
  \`)
    .s("triangle")
    .lpf(2000)
    .gain(0.3)
    .attack(0.05)
    .decay(0.2)
    .sustain(0.4)
    .release(0.4)
    .room(0.5)
    .delay(0.15)
    .slow(8),

  // BRIDGE - Breakdown and build (8 bars, around bar 53)
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
    [f5 ~ g5 ~] [a5 ~ a5 ~] [g5 ~ f5 ~] [e5 ~ ~ ~]
    [d5 ~ e5 ~] [f5 ~ g5 ~] [a5 ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("triangle")
    .lpf(2200)
    .gain(0.32)
    .attack(0.08)
    .release(0.5)
    .room(0.7)
    .delay(0.25)
    .slow(8),

  // FINAL CHORUS - Big finish (16+ bars)
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
    [c5 e5 g5 e5] [c5 e5 g5 a5] [g5 ~ a5 ~] [g5 ~ e5 ~]
    [c5 e5 g5 e5] [c5 e5 g5 a5] [g5 ~ a5 ~] [c6 ~ ~ ~]
    [d6 ~ c6 ~] [a5 ~ g5 ~] [e5 ~ d5 ~] [c5 ~ ~ ~]
    [g5 ~ a5 ~] [g5 ~ e5 ~] [d5 ~ e5 ~] [g5 ~ ~ ~]
    [c5 e5 g5 e5] [c5 e5 g5 a5] [g5 ~ a5 ~] [c6 ~ ~ ~]
  \`)
    .s("triangle")
    .lpf(3000)
    .gain(0.4)
    .attack(0.02)
    .decay(0.15)
    .sustain(0.5)
    .release(0.6)
    .room(0.65)
    .delay(0.2)
    .slow(8),

  // KICK DRUM - Four-on-the-floor pattern
  s("bd").gain(0.8).slow(1),

  // SNARE - On beats 2 and 4
  s("~ sd ~ sd").gain(0.6).slow(1),

  // HI-HAT - Eighth note pattern
  s("hh*8").gain(0.35).lpf(8000).slow(1),

  // CLAPS - Extra energy on chorus
  s(\`
    ~ ~ ~ ~
    ~ ~ ~ ~
    ~ ~ ~ ~
    ~ ~ ~ ~
    ~ ~ ~ ~
    ~ ~ ~ ~
    [~ ~ cp ~]*4 [~ ~ cp ~]*4 [~ ~ cp ~]*4 [~ ~ cp ~]*4
    [~ ~ cp ~]*4 [~ ~ cp ~]*4 [~ ~ cp ~]*4 [~ ~ cp ~]*4
    [~ ~ cp ~]*4 [~ ~ cp ~]*4 [~ ~ cp ~]*4 [~ ~ cp ~]*4
    [~ ~ cp ~]*4 [~ ~ cp ~]*4 [~ ~ cp ~]*4 [~ ~ cp ~]*4
  \`)
    .gain(0.4)
    .slow(4),

  // BASS LINE - Pop chord progression C-G-Am-F
  note(\`
    c2 c2 g2 g2 a2 a2 f2 f2
    c2 c2 g2 g2 a2 a2 f2 f2
    c2 c2 g2 g2 a2 a2 f2 f2
    c2 c2 g2 g2 a2 a2 f2 f2
    c2 c2 g2 g2 a2 a2 f2 f2
    c2 c2 g2 g2 a2 a2 f2 f2
    c2 c2 g2 g2 a2 a2 f2 f2
    c2 c2 g2 g2 a2 a2 f2 f2
    c2 c2 g2 g2 a2 a2 f2 f2
    c2 c2 g2 g2 a2 a2 f2 f2
    c2 c2 g2 g2 a2 a2 f2 f2
    c2 c2 g2 g2 a2 a2 f2 f2
    c2 c2 g2 g2 a2 a2 f2 f2
    d2 d2 d2 d2 d2 d2 g2 g2
    c2 c2 g2 g2 a2 a2 f2 f2
    c2 c2 g2 g2 a2 a2 f2 f2
    c2 c2 g2 g2 a2 a2 f2 f2
    c2 c2 g2 g2 a2 a2 f2 f2
    c2 c2 g2 g2 a2 a2 f2 f2
    c2 c2 c2 c2 c2 ~ ~ ~
  \`)
    .s("sawtooth")
    .lpf(400)
    .gain(0.5)
    .attack(0.01)
    .decay(0.1)
    .sustain(0.6)
    .release(0.2)
    .slow(4),

  // SYNTH PAD - Atmospheric chords
  note(\`
    <c3 e3 g3> <g2 b2 d3> <a2 c3 e3> <f2 a2 c3>
    <c3 e3 g3> <g2 b2 d3> <a2 c3 e3> <f2 a2 c3>
    <c3 e3 g3> <g2 b2 d3> <a2 c3 e3> <f2 a2 c3>
    <c3 e3 g3> <g2 b2 d3> <a2 c3 e3> <f2 a2 c3>
    <c3 e3 g3> <g2 b2 d3> <a2 c3 e3> <f2 a2 c3>
    <c3 e3 g3> <g2 b2 d3> <a2 c3 e3> <f2 a2 c3>
    <c3 e3 g3> <g2 b2 d3> <a2 c3 e3> <f2 a2 c3>
    <c3 e3 g3> <g2 b2 d3> <a2 c3 e3> <f2 a2 c3>
    <c3 e3 g3> <g2 b2 d3> <a2 c3 e3> <f2 a2 c3>
    <c3 e3 g3> <g2 b2 d3> <a2 c3 e3> <f2 a2 c3>
    <c3 e3 g3> <g2 b2 d3> <a2 c3 e3> <f2 a2 c3>
    <c3 e3 g3> <g2 b2 d3> <a2 c3 e3> <f2 a2 c3>
    <c3 e3 g3> <g2 b2 d3> <a2 c3 e3> <f2 a2 c3>
    <d3 f3 a3> <d3 f3 a3> <d3 f3 a3> <g2 b2 d3>
    <c3 e3 g3> <g2 b2 d3> <a2 c3 e3> <f2 a2 c3>
    <c3 e3 g3> <g2 b2 d3> <a2 c3 e3> <f2 a2 c3>
    <c3 e3 g3> <g2 b2 d3> <a2 c3 e3> <f2 a2 c3>
    <c3 e3 g3> <g2 b2 d3> <a2 c3 e3> <f2 a2 c3>
    <c3 e3 g3> <g2 b2 d3> <a2 c3 e3> <f2 a2 c3>
    <c3 e3 g3> ~ ~ ~
  \`)
    .s("sawtooth")
    .lpf(1200)
    .gain(0.18)
    .attack(0.3)
    .decay(0.2)
    .sustain(0.7)
    .release(1.5)
    .room(0.6)
    .slow(4),

  // LEAD SYNTH - Bright stabs for energy
  note(\`
    ~ ~ ~ ~
    ~ ~ ~ ~
    ~ ~ ~ ~
    [c5 e5 g5]*4 [c5 e5 g5]*4 [c5 e5 g5]*4 [c5 e5 g5]*4
    ~ ~ ~ ~
    ~ ~ ~ ~
    [c5 e5 g5]*8 [g4 b4 d5]*8 [a4 c5 e5]*8 [f4 a4 c5]*8
    [c5 e5 g5]*8 [g4 b4 d5]*8 [a4 c5 e5]*8 [f4 a4 c5]*8
    [c5 e5 g5]*8 [g4 b4 d5]*8 [a4 c5 e5]*8 [f4 a4 c5]*8
    [c5 e5 g5]*8 [g4 b4 d5]*8 [a4 c5 e5]*8 [f4 a4 c5]*8
    [c5 e5 g5]*8 [g4 b4 d5]*8 [a4 c5 e5]*8 [f4 a4 c5]*8
    [c5 e5 g5]*8 [g4 b4 d5]*8 [a4 c5 e5]*8 [f4 a4 c5]*8
    ~ ~ ~ ~
    ~ ~ ~ ~
    ~ ~ ~ ~
    [c5 e5 g5]*8 [g4 b4 d5]*8 [a4 c5 e5]*8 [f4 a4 c5]*8
    [c5 e5 g5]*8 [g4 b4 d5]*8 [a4 c5 e5]*8 [f4 a4 c5]*8
    [c5 e5 g5]*8 [g4 b4 d5]*8 [a4 c5 e5]*8 [f4 a4 c5]*8
    [c5 e5 g5]*8 [g4 b4 d5]*8 [a4 c5 e5]*8 [f4 a4 c5]*8
    [c5 e5 g5]*4 ~ ~ ~
  \`)
    .s("square")
    .lpf(3500)
    .gain(0.22)
    .attack(0.01)
    .decay(0.05)
    .sustain(0.2)
    .release(0.1)
    .room(0.3)
    .slow(4)

).cpm(120)`
};
