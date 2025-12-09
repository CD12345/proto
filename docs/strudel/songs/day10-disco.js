export const song = {
  name: 'Day 10: Glitterball Holiday - Disco Funk Christmas',
  code: `// "Glitterball Holiday" - A Disco Funk Christmas Celebration
// Style: Chic / Earth Wind & Fire / Donna Summer
// Form: Intro-Verse-Chorus-Verse-Chorus-Breakdown-Chorus
// Key: C minor (funky, energetic)
// Features: Four-on-floor, funky bass, string stabs, brass hits

stack(
  // LEAD MELODY - Funky, danceable hook (synth lead)
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [c5 ~ d5 eb5] [g5 ~ f5 ~]
    [eb5 ~ d5 ~] [c5 ~ ~ ~] [bb4 ~ c5 d5] [eb5 ~ ~ ~]
    [f5 ~ eb5 d5] [c5 ~ bb4 ~] [c5 ~ d5 eb5] [g5 ~ ~ ~]
    [g5 ~ f5 eb5] [d5 ~ c5 ~] [bb4 ~ c5 ~] [c5 ~ ~ ~]
    [c5 ~ d5 eb5] [g5 ~ f5 ~] [eb5 ~ d5 ~] [c5 ~ ~ ~]
    [bb4 ~ c5 d5] [eb5 ~ f5 ~] [g5 ~ f5 eb5] [d5 ~ ~ ~]
    [eb5 ~ d5 c5] [bb4 ~ ab4 ~] [g4 ~ ab4 bb4] [c5 ~ ~ ~]
    [d5 ~ eb5 f5] [g5 ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [g5 ~ ab5 g5] [f5 ~ eb5 ~] [d5 ~ c5 ~] [bb4 ~ ~ ~]
    [c5 ~ d5 eb5] [f5 ~ g5 ~] [ab5 ~ g5 f5] [eb5 ~ ~ ~]
    [c5 ~ d5 eb5] [g5 ~ f5 ~] [eb5 ~ d5 ~] [c5 ~ ~ ~]
    [c5 ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("gm_synth_lead_1")
    .gain(0.35)
    .attack(0.02)
    .decay(0.12)
    .sustain(0.4)
    .release(0.4)
    .room(0.45)
    .slow(12),

  // STRING STABS - Disco string section (synth strings)
  note(\`
    <c4 eb4 g4> ~ ~ ~ <c4 eb4 g4> ~ ~ ~
    <bb3 d4 f4> ~ ~ ~ <bb3 d4 f4> ~ ~ ~
    <ab3 c4 eb4> ~ ~ ~ <ab3 c4 eb4> ~ ~ ~
    <g3 bb3 d4> ~ ~ ~ <g3 bb3 d4> ~ ~ ~
    <c4 eb4 g4> ~ ~ ~ <c4 eb4 g4> ~ ~ ~
    <bb3 d4 f4> ~ ~ ~ <bb3 d4 f4> ~ ~ ~
    <ab3 c4 eb4> ~ ~ ~ <bb3 d4 f4> ~ ~ ~
    <c4 eb4 g4> ~ ~ ~ ~ ~ ~ ~
    <eb4 g4 bb4> ~ <eb4 g4 bb4> ~ <eb4 g4 bb4> ~ <d4 f4 ab4> ~
    <c4 eb4 g4> ~ <c4 eb4 g4> ~ <c4 eb4 g4> ~ <bb3 d4 f4> ~
    <c4 eb4 g4> ~ ~ ~ <c4 eb4 g4> ~ ~ ~
    <c4 eb4 g4> ~ ~ ~ ~ ~ ~ ~
  \`)
    .s("gm_synth_strings_1")
    .gain(0.28)
    .attack(0.01)
    .decay(0.15)
    .sustain(0.4)
    .release(0.3)
    .room(0.4)
    .slow(12),

  // BRASS HITS - Funky horn section (trumpet)
  note(\`
    [~ ~ ~ ~] [<c5 eb5 g5> ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [<bb4 d5 f5> ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [<ab4 c5 eb5> ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [<g4 bb4 d5> ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [<c5 eb5 g5> ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [<bb4 d5 f5> ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [<ab4 c5 eb5> ~ ~ ~] [~ ~ <bb4 d5 f5> ~] [~ ~ ~ ~]
    [<c5 eb5 g5> ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [<eb5 g5 bb5> ~ ~ ~] [~ ~ <eb5 g5 bb5> ~] [~ ~ ~ ~] [<d5 f5 ab5> ~ ~ ~]
    [<c5 eb5 g5> ~ ~ ~] [~ ~ <c5 eb5 g5> ~] [~ ~ ~ ~] [<bb4 d5 f5> ~ ~ ~]
    [<c5 eb5 g5> ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [<c5 eb5 g5> ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("gm_trumpet")
    .gain(0.25)
    .attack(0.01)
    .decay(0.1)
    .sustain(0.3)
    .release(0.2)
    .room(0.35)
    .slow(12),

  // BASS - Funky disco octave bass (synth bass)
  note(\`
    [c2 c2 c3 c2] [c2 c3 c2 c2] [bb1 bb1 bb2 bb1] [bb1 bb2 bb1 bb1]
    [ab1 ab1 ab2 ab1] [ab1 ab2 ab1 ab1] [g1 g1 g2 g1] [g1 g2 g1 g1]
    [c2 c2 c3 c2] [c2 c3 c2 c2] [bb1 bb1 bb2 bb1] [bb1 bb2 bb1 bb1]
    [ab1 ab1 ab2 ab1] [ab1 ab2 ab1 ab1] [g1 g1 g2 g1] [g1 g2 g1 g1]
    [c2 c2 c3 c2] [c2 c3 c2 c2] [bb1 bb1 bb2 bb1] [bb1 bb2 bb1 bb1]
    [ab1 ab1 ab2 ab1] [ab1 ab2 ab1 ab1] [g1 g1 g2 g1] [g1 g2 g1 g1]
    [ab1 ab1 ab2 ab1] [bb1 bb2 bb1 bb1] [c2 c2 c3 c2] [c2 c3 c2 c2]
    [c2 c3 c2 c3] [c2 ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [eb2 eb2 eb3 eb2] [eb2 eb3 eb2 eb2] [d2 d2 d3 d2] [d2 d3 d2 d2]
    [c2 c2 c3 c2] [c2 c3 c2 c2] [bb1 bb1 bb2 bb1] [bb1 bb2 bb1 bb1]
    [c2 c2 c3 c2] [c2 c3 c2 c2] [c2 c2 c3 c2] [c2 c3 c2 c2]
    [c2 c3 c2 c3] [c2 ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("gm_synth_bass_1")
    .gain(0.5)
    .attack(0.01)
    .decay(0.08)
    .sustain(0.5)
    .release(0.15)
    .room(0.25)
    .slow(12),

  // KICK - Four on the floor disco beat (TR-909)
  s("bd bd bd bd")
    .bank("RolandTR909")
    .gain(0.75)
    .slow(1),

  // SNARE - Punchy backbeat
  s("~ sd ~ sd")
    .bank("RolandTR909")
    .gain(0.6)
    .room(0.35)
    .slow(1),

  // HI-HAT - Disco open hat pattern
  s("[hh hh oh hh] [hh hh oh hh]")
    .bank("RolandTR909")
    .gain(0.35)
    .lpf(8000)
    .slow(1),

  // CLAPS - Extra energy
  s("~ cp ~ cp")
    .bank("RolandTR909")
    .gain(0.35)
    .room(0.4)
    .slow(1),

  // CONGA - Disco percussion
  s("[~ bd ~ ~] [bd ~ ~ bd]")
    .bank("RolandTR727")
    .gain(0.25)
    .lpf(2000)
    .slow(1)

).cpm(120)`
};
