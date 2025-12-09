export const song = {
  name: 'Day 3: Mistletoe Swing - Jazz Christmas',
  code: `// "Mistletoe Swing" - A Jazz Christmas Standard
// Style: Big Band Swing / Bebop
// Form: AABA (32-bar standard)
// Key: Bb major
// Features: Walking bass, jazz voicings, swing feel, ii-V-I progressions

stack(
  // MELODY - Swinging jazz line with blue notes (trumpet)
  note(\`
    [bb4 ~ c5 d5] [eb5 ~ d5 ~] [c5 ~ bb4 ~] [~ ~ ~ ~]
    [f5 ~ g5 ab5] [g5 ~ f5 ~] [eb5 ~ d5 ~] [~ ~ ~ ~]
    [bb4 ~ c5 d5] [eb5 f5 g5 ~] [f5 ~ eb5 d5] [c5 ~ bb4 ~]
    [a4 ~ bb4 c5] [d5 ~ eb5 ~] [d5 ~ ~ ~] [~ ~ ~ ~]
    [bb4 ~ c5 d5] [eb5 ~ d5 ~] [c5 ~ bb4 ~] [~ ~ ~ ~]
    [f5 ~ g5 ab5] [g5 ~ f5 ~] [eb5 ~ d5 ~] [~ ~ ~ ~]
    [d5 ~ eb5 f5] [g5 ~ f5 eb5] [d5 ~ c5 ~] [bb4 ~ a4 ~]
    [g4 ~ ab4 bb4] [c5 ~ d5 ~] [bb4 ~ ~ ~] [~ ~ ~ ~]
    [d5 ~ eb5 f5] [g5 ~ ab5 ~] [g5 f5 eb5 d5] [c5 ~ ~ ~]
    [eb5 ~ f5 g5] [ab5 ~ bb5 ~] [ab5 g5 f5 eb5] [d5 ~ ~ ~]
    [bb4 ~ c5 d5] [eb5 f5 g5 ~] [f5 ~ eb5 d5] [c5 ~ bb4 ~]
    [c5 ~ d5 eb5] [f5 ~ g5 ~] [f5 eb5 d5 c5] [bb4 ~ ~ ~]
  \`)
    .s("gm_trumpet")
    .gain(0.38)
    .attack(0.02)
    .decay(0.15)
    .sustain(0.4)
    .release(0.5)
    .room(0.5)
    .delay(0.1)
    .slow(12),

  // PIANO COMPING - Jazz chord voicings with rhythmic stabs
  note(\`
    <bb3 d4 f4 a4> ~ ~ <g3 bb3 d4 f4>
    <c4 eb4 g4 bb4> ~ ~ <f3 a3 c4 eb4>
    <bb3 d4 f4 a4> ~ <eb4 g4 bb4 d5> ~
    <f3 a3 c4 eb4> ~ <bb3 d4 f4 a4> ~
    <bb3 d4 f4 a4> ~ ~ <g3 bb3 d4 f4>
    <c4 eb4 g4 bb4> ~ ~ <f3 a3 c4 eb4>
    <g3 bb3 d4 f4> ~ <c4 eb4 g4 bb4> ~
    <eb3 g3 bb3 d4> <f3 a3 c4 eb4> <bb3 d4 f4 a4> ~
    <bb3 d4 f4 a4> ~ ~ <g3 bb3 d4 f4>
    <c4 eb4 g4 bb4> ~ ~ <f3 a3 c4 eb4>
    <bb3 d4 f4 a4> ~ <eb4 g4 bb4 d5> ~
    <f3 a3 c4 eb4> ~ <bb3 d4 f4 a4> ~
    <g3 bb3 eb4 g4> ~ <c4 eb4 g4 bb4> ~
    <ab3 c4 eb4 gb4> ~ <db4 f4 ab4 c5> ~
    <bb3 d4 f4 a4> ~ <eb4 g4 bb4 d5> ~
    <c4 eb4 g4 bb4> <f3 a3 c4 eb4> <bb3 d4 f4 a4> ~
  \`)
    .s("gm_electric_piano")
    .gain(0.24)
    .attack(0.01)
    .decay(0.1)
    .sustain(0.3)
    .release(0.3)
    .room(0.4)
    .slow(12),

  // WALKING BASS - Chromatic jazz bass line (upright bass)
  note(\`
    bb2 c3 d3 eb3 f3 g3 ab3 a3
    g3 f3 eb3 d3 c3 bb2 a2 ab2
    g2 a2 bb2 c3 d3 eb3 e3 f3
    eb3 d3 c3 bb2 a2 g2 f2 f2
    bb2 c3 d3 eb3 f3 g3 ab3 a3
    g3 f3 eb3 d3 c3 bb2 a2 ab2
    g2 a2 bb2 b2 c3 d3 eb3 e3
    f3 eb3 d3 db3 c3 f2 bb2 bb2
    bb2 c3 d3 eb3 f3 g3 ab3 a3
    g3 f3 eb3 d3 c3 bb2 a2 ab2
    g2 a2 bb2 c3 d3 eb3 e3 f3
    eb3 d3 c3 bb2 a2 g2 f2 f2
    g2 a2 bb2 b2 c3 d3 eb3 e3
    ab2 bb2 c3 db3 d3 eb3 f3 gb3
    g2 a2 bb2 c3 d3 eb3 e3 f3
    eb3 d3 c3 f2 bb2 bb2 bb2 bb2
  \`)
    .s("gm_acoustic_bass")
    .gain(0.45)
    .attack(0.01)
    .decay(0.12)
    .sustain(0.5)
    .release(0.25)
    .room(0.3)
    .slow(12),

  // BRUSH DRUMS - Swing pattern (jazz kit)
  s(\`
    hh hh hh hh hh hh hh hh
    hh hh hh hh hh hh hh hh
  \`)
    .bank("RolandTR707")
    .gain(0.25)
    .lpf(6000)
    .slow(2),

  // SNARE - Swing accents on 2 and 4
  s("~ sd ~ sd")
    .bank("RolandTR707")
    .gain(0.35)
    .lpf(4000)
    .slow(1),

  // KICK - Light jazz kick
  s("bd ~ ~ ~ bd ~ ~ ~")
    .bank("RolandTR707")
    .gain(0.4)
    .slow(1)

).cpm(55)`
};
