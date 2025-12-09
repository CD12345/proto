export const song = {
  name: 'Day 9: Aurora Borealis - Orchestral Film Score Christmas',
  code: `// "Aurora Borealis" - An Orchestral Christmas Film Score
// Style: John Williams / Hans Zimmer influenced
// Form: Theme and Development with Climax
// Key: D major (heroic, triumphant)
// Features: Sweeping strings, brass fanfares, building dynamics, cinematic scope

stack(
  // STRINGS - Main melodic theme (violins)
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [d4 ~ e4 f#4] [g4 ~ a4 ~]
    [b4 ~ a4 g4] [f#4 ~ e4 ~] [d4 ~ ~ ~] [~ ~ ~ ~]
    [a4 ~ b4 c#5] [d5 ~ e5 ~] [f#5 ~ e5 d5] [c#5 ~ b4 ~]
    [a4 ~ g4 f#4] [e4 ~ d4 ~] [d4 ~ ~ ~] [~ ~ ~ ~]
    [d5 ~ c#5 b4] [a4 ~ g4 ~] [f#4 ~ e4 ~] [d4 ~ ~ ~]
    [g4 ~ a4 b4] [c#5 ~ d5 ~] [e5 ~ d5 c#5] [b4 ~ a4 ~]
    [f#5 ~ e5 d5] [c#5 ~ b4 a4] [g4 ~ f#4 ~] [e4 ~ d4 ~]
    [e4 ~ f#4 g4] [a4 ~ b4 c#5] [d5 ~ ~ ~] [~ ~ ~ ~]
    [d5 ~ e5 f#5] [g5 ~ a5 ~] [b5 ~ a5 g5] [f#5 ~ e5 ~]
    [d5 ~ c#5 b4] [a4 ~ b4 c#5] [d5 ~ e5 ~] [f#5 ~ ~ ~]
    [g5 ~ f#5 e5] [d5 ~ c#5 b4] [a4 ~ g4 f#4] [e4 ~ d4 ~]
    [d5 ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("gm_violin")
    .gain(0.35)
    .attack(0.08)
    .decay(0.3)
    .sustain(0.6)
    .release(1.2)
    .room(0.6)
    .slow(12),

  // VIOLAS/CELLOS - Counter melody and harmony
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [f#3 ~ g3 a3] [b3 ~ c#4 ~]
    [d4 ~ c#4 b3] [a3 ~ g3 ~] [f#3 ~ ~ ~] [~ ~ ~ ~]
    [d4 ~ e4 f#4] [g4 ~ a4 ~] [a4 ~ g4 f#4] [e4 ~ d4 ~]
    [c#4 ~ b3 a3] [g3 ~ f#3 ~] [f#3 ~ ~ ~] [~ ~ ~ ~]
    [f#4 ~ e4 d4] [c#4 ~ b3 ~] [a3 ~ g3 ~] [f#3 ~ ~ ~]
    [b3 ~ c#4 d4] [e4 ~ f#4 ~] [g4 ~ f#4 e4] [d4 ~ c#4 ~]
    [a4 ~ g4 f#4] [e4 ~ d4 c#4] [b3 ~ a3 ~] [g3 ~ f#3 ~]
    [g3 ~ a3 b3] [c#4 ~ d4 e4] [f#4 ~ ~ ~] [~ ~ ~ ~]
    [f#4 ~ g4 a4] [b4 ~ c#5 ~] [d5 ~ c#5 b4] [a4 ~ g4 ~]
    [f#4 ~ e4 d4] [c#4 ~ d4 e4] [f#4 ~ g4 ~] [a4 ~ ~ ~]
    [b4 ~ a4 g4] [f#4 ~ e4 d4] [c#4 ~ b3 a3] [g3 ~ f#3 ~]
    [f#4 ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("gm_cello")
    .gain(0.28)
    .attack(0.1)
    .decay(0.3)
    .sustain(0.55)
    .release(1)
    .room(0.55)
    .slow(12),

  // BRASS - Heroic fanfares and swells (French horn)
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    <d4 f#4 a4> ~ ~ ~
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    <a3 d4 f#4> ~ ~ ~
    [~ ~ ~ ~] [~ ~ ~ ~] <b3 d4 f#4> ~
    <g3 b3 d4> ~ <a3 c#4 e4> ~
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    <d4 f#4 a4> ~ ~ ~
    <d4 f#4 a4 d5> ~ ~ ~
    <g4 b4 d5> ~ <a4 c#5 e5> ~
    <d4 f#4 a4 d5> ~ ~ ~
    <d4 f#4 a4 d5> ~ ~ ~
  \`)
    .s("gm_french_horn")
    .gain(0.28)
    .attack(0.15)
    .decay(0.3)
    .sustain(0.6)
    .release(1)
    .room(0.5)
    .slow(12),

  // DEEP BASS - Orchestra bass (contrabass)
  note(\`
    d2 ~ ~ ~ a1 ~ ~ ~
    d2 ~ ~ ~ a1 ~ ~ ~
    d2 ~ ~ ~ g1 ~ ~ ~
    a1 ~ ~ ~ d2 ~ ~ ~
    d2 ~ ~ ~ b1 ~ ~ ~
    g1 ~ ~ ~ a1 ~ ~ ~
    d2 ~ ~ ~ g1 ~ ~ ~
    a1 ~ ~ ~ d2 ~ ~ ~
    d2 d2 ~ ~ g1 g1 ~ ~
    a1 a1 ~ ~ d2 d2 ~ ~
    g1 ~ a1 ~ d2 ~ ~ ~
    d2 ~ ~ ~ ~ ~ ~ ~
  \`)
    .s("gm_contrabass")
    .gain(0.45)
    .attack(0.02)
    .decay(0.25)
    .sustain(0.6)
    .release(0.8)
    .room(0.45)
    .slow(12),

  // STRING PAD - Lush orchestral bed (synth strings)
  note(\`
    <d3 f#3 a3 d4> ~ ~ ~
    <a2 c#3 e3 a3> ~ ~ ~
    <d3 f#3 a3 d4> ~ ~ ~
    <a2 c#3 e3 a3> ~ ~ ~
    <d3 f#3 a3 d4> ~ <b2 d3 f#3 b3> ~
    <g2 b2 d3 g3> ~ <a2 c#3 e3 a3> ~
    <d3 f#3 a3 d4> ~ <g2 b2 d3 g3> ~
    <a2 c#3 e3 a3> ~ <d3 f#3 a3 d4> ~
    <d3 f#3 a3 d4> ~ <g3 b3 d4 g4> ~
    <a3 c#4 e4 a4> ~ <d3 f#3 a3 d4> ~
    <g2 b2 d3 g3> ~ <a2 c#3 e3 a3> ~
    <d3 f#3 a3 d4> ~ ~ ~
  \`)
    .s("gm_synth_strings_1")
    .gain(0.2)
    .attack(0.4)
    .decay(0.3)
    .sustain(0.7)
    .release(1.8)
    .room(0.65)
    .slow(12),

  // TIMPANI - Dramatic percussion
  s(\`
    bd ~ ~ ~ ~ ~ ~ ~
    bd ~ ~ ~ ~ ~ ~ ~
    bd ~ ~ ~ bd ~ ~ ~
    bd ~ ~ ~ bd ~ ~ ~
    bd ~ ~ ~ bd ~ ~ ~
    bd bd ~ ~ bd bd ~ ~
    bd ~ ~ ~ bd ~ ~ ~
    bd bd bd bd bd ~ ~ ~
  \`)
    .gain(0.5)
    .room(0.4)
    .slow(8),

  // CYMBALS - Building swells
  s(\`
    ~ ~ ~ ~ ~ ~ ~ ~
    ~ ~ ~ ~ ~ ~ ~ ~
    ~ ~ ~ ~ ~ ~ ~ ~
    ~ ~ ~ ~ hh ~ ~ ~
    ~ ~ ~ ~ ~ ~ ~ ~
    ~ ~ ~ ~ hh ~ ~ ~
    ~ ~ ~ ~ ~ ~ ~ ~
    hh ~ ~ ~ ~ ~ ~ ~
  \`)
    .gain(0.35)
    .room(0.5)
    .lpf(6000)
    .slow(8)

).cpm(55)`
};
