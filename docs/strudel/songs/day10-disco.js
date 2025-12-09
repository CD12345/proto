export const song = {
  name: 'Day 10: Glitterball Holiday - Disco Funk Christmas',
  code: `// "Glitterball Holiday" - A Disco Funk Christmas Celebration
// Style: Chic / Earth Wind & Fire / Donna Summer
// Form: Intro-Verse-Chorus-Verse-Chorus-Breakdown-Chorus
// Key: C minor (funky, energetic)
// Features: Four-on-floor, funky bass, string stabs, brass hits

stack(
  // LEAD MELODY - Funky, danceable hook
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
    .s("sawtooth")
    .lpf(3500)
    .gain(0.28)
    .attack(0.02)
    .decay(0.12)
    .sustain(0.4)
    .release(0.4)
    .room(0.45)
    .slow(12),

  // STRING STABS - Disco string section
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
    .s("sawtooth")
    .lpf(2400)
    .gain(0.2)
    .attack(0.01)
    .decay(0.15)
    .sustain(0.4)
    .release(0.3)
    .room(0.4)
    .slow(12),

  // BRASS HITS - Funky horn section
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
    .s("square")
    .lpf(2000)
    .gain(0.18)
    .attack(0.01)
    .decay(0.1)
    .sustain(0.3)
    .release(0.2)
    .room(0.35)
    .slow(12),

  // BASS - Funky disco octave bass
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
    .s("sawtooth")
    .lpf(550)
    .gain(0.42)
    .attack(0.01)
    .decay(0.08)
    .sustain(0.5)
    .release(0.15)
    .room(0.25)
    .slow(12),

  // KICK - Four on the floor disco beat
  s("bd bd bd bd")
    .gain(0.75)
    .slow(1),

  // SNARE - Punchy backbeat
  s("~ sd ~ sd")
    .gain(0.6)
    .room(0.35)
    .slow(1),

  // HI-HAT - Disco open hat pattern
  s("[hh hh oh hh] [hh hh oh hh]")
    .gain(0.35)
    .lpf(8000)
    .slow(1),

  // CLAPS - Extra energy
  s("~ cp ~ cp")
    .gain(0.35)
    .room(0.4)
    .slow(1),

  // CONGA - Disco percussion
  s("[~ bd ~ ~] [bd ~ ~ bd]")
    .gain(0.25)
    .lpf(2000)
    .slow(1)

).cpm(120)`
};
