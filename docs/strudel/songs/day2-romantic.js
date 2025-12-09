export const song = {
  name: 'Day 2: Snowfall Nocturne - Romantic Piano Ballad',
  code: `// "Snowfall Nocturne" - A Romantic Christmas Piano Ballad
// Style: Chopin/Liszt influenced
// Form: ABA' with coda
// Key: E-flat major (warm, noble character)
// Features: Flowing arpeggios, expressive rubato, rich harmonies

stack(
  // RIGHT HAND - Expressive melody with ornamental grace notes
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [eb5 ~ f5 g5] [ab5 ~ ~ bb5] [c6 ~ bb5 ~] [ab5 ~ g5 ~]
    [f5 ~ g5 ab5] [bb5 ~ ~ c6] [bb5 ~ ab5 ~] [g5 ~ ~ ~]
    [ab5 ~ bb5 c6] [d6 ~ ~ eb6] [d6 ~ c6 ~] [bb5 ~ ab5 ~]
    [g5 ~ ab5 bb5] [c6 ~ bb5 ab5] [g5 ~ f5 ~] [eb5 ~ ~ ~]
    [eb5 ~ f5 g5] [ab5 ~ ~ bb5] [c6 ~ bb5 ~] [ab5 ~ g5 ~]
    [f5 ~ eb5 f5] [g5 ~ ab5 bb5] [ab5 ~ g5 ~] [f5 ~ eb5 ~]
    [d5 ~ eb5 f5] [g5 ~ ab5 bb5] [ab5 ~ g5 f5] [eb5 ~ ~ ~]
    [eb6 ~ d6 c6] [bb5 ~ ab5 g5] [f5 ~ eb5 ~] [~ ~ ~ ~]
  \`)
    .s("gm_piano")
    .gain(0.42)
    .attack(0.04)
    .decay(0.35)
    .sustain(0.55)
    .release(1.4)
    .room(0.7)
    .delay(0.15)
    .slow(9),

  // LEFT HAND - Flowing Romantic arpeggios
  note(\`
    [eb2 bb2 eb3 g3 bb3 g3] [eb2 bb2 eb3 g3 bb3 g3]
    [ab2 eb3 ab3 c4 eb4 c4] [ab2 eb3 ab3 c4 eb4 c4]
    [eb2 bb2 eb3 g3 bb3 g3] [eb2 bb2 eb3 g3 bb3 g3]
    [ab2 eb3 ab3 c4 eb4 c4] [ab2 eb3 ab3 c4 eb4 c4]
    [bb2 f3 bb3 d4 f4 d4] [bb2 f3 bb3 d4 f4 d4]
    [eb2 bb2 eb3 g3 bb3 g3] [eb2 bb2 eb3 g3 bb3 g3]
    [ab2 eb3 ab3 c4 eb4 c4] [bb2 f3 bb3 d4 f4 d4]
    [c3 g3 c4 eb4 g4 eb4] [f2 c3 f3 ab3 c4 ab3]
    [bb2 f3 bb3 d4 f4 d4] [bb2 f3 bb3 d4 f4 d4]
    [eb2 bb2 eb3 g3 bb3 g3] [eb2 bb2 eb3 g3 bb3 g3]
    [ab2 eb3 ab3 c4 eb4 c4] [ab2 eb3 ab3 c4 eb4 c4]
    [eb2 bb2 eb3 g3 bb3 g3] [eb2 bb2 eb3 g3 bb3 g3]
    [ab2 eb3 ab3 c4 eb4 c4] [bb2 f3 bb3 d4 f4 d4]
    [eb2 bb2 eb3 g3 bb3 g3] [ab2 eb3 ab3 c4 eb4 c4]
    [bb1 f2 bb2 d3 f3 d3] [bb1 f2 bb2 d3 f3 d3]
    [eb2 bb2 eb3 g3 bb3 g3] [eb2 bb2 eb3 g3 bb3 g3]
    [ab2 eb3 ab3 c4 eb4 c4] [ab2 eb3 ab3 c4 eb4 c4]
    [eb2 bb2 eb3 g3 bb3 g3] [~ ~ ~ ~ ~ ~]
  \`)
    .s("gm_piano")
    .gain(0.25)
    .attack(0.02)
    .decay(0.2)
    .sustain(0.4)
    .release(0.8)
    .room(0.6)
    .slow(9),

  // DEEP BASS - Pedal tones for warmth
  note(\`
    eb1 ~ ab1 ~
    eb1 ~ ab1 ~
    bb1 ~ eb1 ~
    ab1 bb1 c2 f1
    bb1 ~ eb1 ~
    ab1 ~ eb1 ~
    ab1 bb1 eb1 ab1
    bb1 ~ eb1 ~
    ab1 ~ eb1 ~
  \`)
    .s("gm_piano")
    .gain(0.35)
    .attack(0.02)
    .decay(0.3)
    .sustain(0.6)
    .release(1.2)
    .room(0.5)
    .slow(9),

  // INNER VOICE - Harmonic padding for richness (strings for orchestral color)
  note(\`
    <eb3 g3 bb3> ~ <ab3 c4 eb4> ~
    <eb3 g3 bb3> ~ <ab3 c4 eb4> ~
    <f3 bb3 d4> ~ <eb3 g3 bb3> ~
    <ab3 c4 eb4> <bb3 d4 f4> <c4 eb4 g4> <ab3 c4 f4>
    <bb3 d4 f4> ~ <eb3 g3 bb3> ~
    <ab3 c4 eb4> ~ <eb3 g3 bb3> ~
    <ab3 c4 eb4> <bb3 d4 f4> <eb3 g3 bb3> <ab3 c4 eb4>
    <bb3 d4 f4> ~ <eb3 g3 bb3> ~
    <ab3 c4 eb4> ~ <eb3 g3 bb3> ~
  \`)
    .s("gm_synth_strings_1")
    .gain(0.18)
    .attack(0.15)
    .decay(0.3)
    .sustain(0.6)
    .release(1.5)
    .room(0.65)
    .slow(9)

).cpm(22)`
};
