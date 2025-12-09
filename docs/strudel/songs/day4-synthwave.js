export const song = {
  name: 'Day 4: Neon Snowfall - Synthwave Christmas',
  code: `// "Neon Snowfall" - A Synthwave Christmas
// Style: 80s Synth / Retrowave
// Form: Intro-Verse-Chorus-Verse-Chorus-Outro
// Key: A minor
// Features: Arpeggiated synths, pulsing bass, gated pads, driving beat

stack(
  // LEAD SYNTH - Bright, soaring melody
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [a4 ~ b4 c5] [e5 ~ d5 ~] [c5 ~ b4 ~] [a4 ~ ~ ~]
    [g4 ~ a4 b4] [d5 ~ c5 ~] [b4 ~ a4 ~] [g4 ~ ~ ~]
    [a4 ~ c5 e5] [g5 ~ e5 ~] [d5 ~ c5 ~] [b4 ~ ~ ~]
    [c5 ~ d5 e5] [g5 ~ f5 e5] [d5 ~ c5 ~] [a4 ~ ~ ~]
    [a4 ~ b4 c5] [e5 ~ d5 ~] [c5 ~ b4 ~] [a4 ~ ~ ~]
    [g4 ~ a4 b4] [d5 ~ c5 ~] [b4 ~ a4 ~] [g4 ~ ~ ~]
    [e5 ~ f5 g5] [a5 ~ g5 f5] [e5 ~ d5 ~] [c5 ~ ~ ~]
    [a5 ~ g5 f5] [e5 ~ d5 c5] [b4 ~ a4 ~] [a4 ~ ~ ~]
  \`)
    .s("sawtooth")
    .lpf(4000)
    .gain(0.28)
    .attack(0.02)
    .decay(0.15)
    .sustain(0.5)
    .release(0.6)
    .room(0.5)
    .delay(0.25)
    .slow(9),

  // ARPEGGIO SYNTH - Classic 80s arp pattern
  note(\`
    [a3 c4 e4 c4 a3 c4 e4 c4] [a3 c4 e4 c4 a3 c4 e4 c4]
    [g3 b3 d4 b3 g3 b3 d4 b3] [g3 b3 d4 b3 g3 b3 d4 b3]
    [f3 a3 c4 a3 f3 a3 c4 a3] [f3 a3 c4 a3 f3 a3 c4 a3]
    [e3 g#3 b3 g#3 e3 g#3 b3 g#3] [e3 g#3 b3 g#3 e3 g#3 b3 g#3]
    [a3 c4 e4 c4 a3 c4 e4 c4] [a3 c4 e4 c4 a3 c4 e4 c4]
    [g3 b3 d4 b3 g3 b3 d4 b3] [g3 b3 d4 b3 g3 b3 d4 b3]
    [f3 a3 c4 a3 f3 a3 c4 a3] [f3 a3 c4 a3 f3 a3 c4 a3]
    [e3 g#3 b3 g#3 e3 g#3 b3 g#3] [e3 g#3 b3 g#3 e3 g#3 b3 g#3]
    [a3 c4 e4 c4 a3 c4 e4 c4] [a3 c4 e4 c4 a3 c4 e4 c4]
  \`)
    .s("square")
    .lpf(2500)
    .gain(0.18)
    .attack(0.005)
    .decay(0.08)
    .sustain(0.3)
    .release(0.15)
    .room(0.45)
    .delay(0.15)
    .slow(9),

  // SYNTH PAD - Lush, evolving chords
  note(\`
    <a2 c3 e3> <a2 c3 e3> <g2 b2 d3> <g2 b2 d3>
    <f2 a2 c3> <f2 a2 c3> <e2 g#2 b2> <e2 g#2 b2>
    <a2 c3 e3> <a2 c3 e3> <g2 b2 d3> <g2 b2 d3>
    <f2 a2 c3> <f2 a2 c3> <e2 g#2 b2> <e2 g#2 b2>
    <a2 c3 e3> ~ ~ ~
  \`)
    .s("sawtooth")
    .lpf(1200)
    .gain(0.15)
    .attack(0.4)
    .decay(0.3)
    .sustain(0.7)
    .release(1.5)
    .room(0.6)
    .slow(9),

  // BASS - Pumping synthwave bass
  note(\`
    [a1 ~ a1 ~] [a1 ~ a1 ~] [g1 ~ g1 ~] [g1 ~ g1 ~]
    [f1 ~ f1 ~] [f1 ~ f1 ~] [e1 ~ e1 ~] [e1 ~ e1 ~]
    [a1 ~ a1 ~] [a1 ~ a1 ~] [g1 ~ g1 ~] [g1 ~ g1 ~]
    [f1 ~ f1 ~] [f1 ~ f1 ~] [e1 ~ e1 ~] [e1 ~ e1 ~]
    [a1 ~ a1 ~] [a1 ~ a1 ~] [g1 ~ g1 ~] [g1 ~ g1 ~]
    [f1 ~ f1 ~] [f1 ~ f1 ~] [e1 ~ e1 ~] [e1 ~ e1 ~]
    [a1 ~ a1 ~] [a1 ~ a1 ~] [g1 ~ g1 ~] [g1 ~ g1 ~]
    [f1 ~ f1 ~] [f1 ~ f1 ~] [e1 ~ e1 ~] [e1 ~ e1 ~]
    [a1 a1 a1 a1] [a1 ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("sawtooth")
    .lpf(400)
    .gain(0.42)
    .attack(0.01)
    .decay(0.1)
    .sustain(0.6)
    .release(0.15)
    .slow(9),

  // KICK - Four on the floor (LinnDrum for 80s authenticity)
  s("bd bd bd bd")
    .bank("LinnDrum")
    .gain(0.75)
    .slow(1),

  // SNARE - Gated 80s snare
  s("~ sd ~ sd")
    .bank("LinnDrum")
    .gain(0.6)
    .room(0.4)
    .slow(1),

  // HI-HAT - Driving eighths with open hat accents
  s("hh hh [hh oh] hh hh hh [hh oh] hh")
    .bank("LinnDrum")
    .gain(0.32)
    .lpf(8000)
    .slow(1),

  // CLAPS - Layered with snare
  s("~ cp ~ cp")
    .bank("LinnDrum")
    .gain(0.35)
    .room(0.5)
    .slow(1)

).cpm(115)`
};
