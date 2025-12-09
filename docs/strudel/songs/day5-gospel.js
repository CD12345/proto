export const song = {
  name: 'Day 5: Glory Hallelujah - Gospel Soul Christmas',
  code: `// "Glory Hallelujah" - A Gospel Soul Christmas Anthem
// Style: Traditional Gospel / Soul
// Form: Verse-Chorus with call and response
// Key: G major
// Features: Rich harmonies, powerful bass, soulful builds, choir-like layers

stack(
  // LEAD VOICE - Soulful gospel melody (soulful vocal-like synth)
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [g4 ~ a4 b4] [d5 ~ ~ ~]
    [b4 ~ c5 d5] [e5 ~ d5 ~] [c5 ~ b4 ~] [a4 ~ ~ ~]
    [g4 ~ a4 b4] [d5 ~ e5 ~] [d5 ~ c5 b4] [a4 ~ g4 ~]
    [a4 ~ b4 c5] [d5 ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [g5 ~ ~ ~] [f#5 ~ e5 ~] [d5 ~ c5 ~] [b4 ~ ~ ~]
    [e5 ~ d5 c5] [b4 ~ a4 ~] [g4 ~ a4 b4] [g4 ~ ~ ~]
    [g5 ~ ~ ~] [f#5 ~ e5 ~] [d5 ~ e5 d5] [c5 ~ b4 ~]
    [a4 ~ b4 c5] [d5 ~ ~ ~] [g4 ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("gm_synth_lead_1")
    .gain(0.38)
    .attack(0.03)
    .decay(0.2)
    .sustain(0.5)
    .release(0.7)
    .room(0.55)
    .slow(8),

  // HARMONY VOICE 1 - Third above, choir effect
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [b4 ~ c5 d5] [f#5 ~ ~ ~]
    [d5 ~ e5 f#5] [g5 ~ f#5 ~] [e5 ~ d5 ~] [c5 ~ ~ ~]
    [b4 ~ c5 d5] [f#5 ~ g5 ~] [f#5 ~ e5 d5] [c5 ~ b4 ~]
    [c5 ~ d5 e5] [f#5 ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [b5 ~ ~ ~] [a5 ~ g5 ~] [f#5 ~ e5 ~] [d5 ~ ~ ~]
    [g5 ~ f#5 e5] [d5 ~ c5 ~] [b4 ~ c5 d5] [b4 ~ ~ ~]
    [b5 ~ ~ ~] [a5 ~ g5 ~] [f#5 ~ g5 f#5] [e5 ~ d5 ~]
    [c5 ~ d5 e5] [f#5 ~ ~ ~] [b4 ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("gm_synth_lead_1")
    .gain(0.28)
    .attack(0.04)
    .decay(0.22)
    .sustain(0.45)
    .release(0.7)
    .room(0.55)
    .slow(8),

  // HARMONY VOICE 2 - Fifth below, adds depth
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [d4 ~ e4 g4] [a4 ~ ~ ~]
    [g4 ~ a4 b4] [c5 ~ b4 ~] [a4 ~ g4 ~] [f#4 ~ ~ ~]
    [d4 ~ e4 g4] [a4 ~ c5 ~] [b4 ~ a4 g4] [f#4 ~ e4 ~]
    [f#4 ~ g4 a4] [b4 ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [d5 ~ ~ ~] [c5 ~ b4 ~] [a4 ~ g4 ~] [g4 ~ ~ ~]
    [c5 ~ b4 a4] [g4 ~ f#4 ~] [e4 ~ f#4 g4] [d4 ~ ~ ~]
    [d5 ~ ~ ~] [c5 ~ b4 ~] [a4 ~ b4 a4] [g4 ~ g4 ~]
    [f#4 ~ g4 a4] [b4 ~ ~ ~] [d4 ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("gm_synth_lead_1")
    .gain(0.24)
    .attack(0.04)
    .decay(0.22)
    .sustain(0.45)
    .release(0.7)
    .room(0.55)
    .slow(8),

  // ORGAN PAD - Rich sustained chords (Hammond-style organ)
  note(\`
    <g2 b2 d3> <g2 b2 d3> <c3 e3 g3> <d3 f#3 a3>
    <g2 b2 d3> <c3 e3 g3> <d3 f#3 a3> <d3 f#3 a3>
    <g2 b2 d3> <g2 b2 d3> <c3 e3 g3> <d3 f#3 a3>
    <e2 g2 b2> <d2 f#2 a2> <g2 b2 d3> <g2 b2 d3>
    <g3 b3 d4> <d3 f#3 a3> <c3 e3 g3> <g2 b2 d3>
    <c3 e3 g3> <d3 f#3 a3> <g2 b2 d3> <g2 b2 d3>
    <g3 b3 d4> <d3 f#3 a3> <c3 e3 g3> <c3 e3 g3>
    <d3 f#3 a3> <d3 f#3 a3> <g2 b2 d3> <g2 b2 d3>
  \`)
    .s("gm_organ")
    .gain(0.22)
    .attack(0.2)
    .decay(0.25)
    .sustain(0.7)
    .release(1.2)
    .room(0.6)
    .slow(8),

  // BASS - Deep gospel bass with walkups (electric bass)
  note(\`
    g1 g1 a1 b1 c2 c2 d2 d2
    g1 g1 c2 c2 d2 d2 d2 e2
    g1 g1 a1 b1 c2 c2 d2 d2
    e2 e2 d2 d2 g1 g1 g1 g1
    g2 g2 d2 d2 c2 c2 g1 g1
    c2 c2 d2 d2 g1 g1 g1 a1
    g2 g2 d2 d2 c2 c2 c2 c2
    d2 d2 d2 d2 g1 g1 g1 g1
  \`)
    .s("gm_electric_bass_finger")
    .gain(0.48)
    .attack(0.01)
    .decay(0.15)
    .sustain(0.55)
    .release(0.3)
    .room(0.35)
    .slow(8),

  // KICK - Strong gospel beat
  s("bd ~ ~ bd ~ ~ bd ~")
    .bank("RolandTR808")
    .gain(0.7)
    .slow(1),

  // SNARE - Powerful 2 and 4
  s("~ sd ~ sd")
    .bank("RolandTR808")
    .gain(0.55)
    .room(0.4)
    .slow(1),

  // TAMBOURINE - Gospel shaker feel
  s("hh*4")
    .bank("RolandTR808")
    .gain(0.28)
    .lpf(7000)
    .slow(1),

  // CLAPS - Congregation feel
  s("~ cp ~ cp")
    .bank("RolandTR808")
    .gain(0.3)
    .room(0.5)
    .slow(1)

).cpm(85)`
};
