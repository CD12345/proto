export const song = {
  name: 'Day 8: Velvet December - R&B Neo-Soul Christmas',
  code: `// "Velvet December" - An R&B Neo-Soul Christmas
// Style: D'Angelo / Erykah Badu influenced
// Form: Verse-Chorus with extended groove
// Key: Eb minor (smooth, moody)
// Features: Complex chord extensions, laid-back groove, silky melodies

stack(
  // LEAD VOCAL LINE - Smooth, soulful melody (synth lead for vocal-like quality)
  note(\`
    [~ ~ ~ ~] [~ ~ ~ ~] [eb4 ~ f4 gb4] [ab4 ~ bb4 ~]
    [cb5 ~ bb4 ~] [ab4 ~ gb4 ~] [f4 ~ eb4 ~] [~ ~ ~ ~]
    [~ ~ gb4 ab4] [bb4 ~ cb5 ~] [db5 ~ cb5 bb4] [ab4 ~ ~ ~]
    [gb4 ~ f4 gb4] [ab4 ~ bb4 ~] [ab4 ~ ~ ~] [~ ~ ~ ~]
    [eb5 ~ db5 ~] [cb5 ~ bb4 ~] [ab4 ~ gb4 ~] [f4 ~ eb4 ~]
    [gb4 ~ ab4 bb4] [cb5 ~ db5 ~] [cb5 ~ bb4 ~] [ab4 ~ ~ ~]
    [eb5 ~ db5 ~] [cb5 ~ bb4 ~] [ab4 ~ bb4 cb5] [db5 ~ ~ ~]
    [cb5 ~ bb4 ab4] [gb4 ~ f4 ~] [eb4 ~ ~ ~] [~ ~ ~ ~]
  \`)
    .s("gm_synth_lead_1")
    .gain(0.36)
    .attack(0.04)
    .decay(0.25)
    .sustain(0.5)
    .release(0.9)
    .room(0.55)
    .delay(0.12)
    .slow(8),

  // RHODES PIANO - Warm extended chords (electric piano)
  note(\`
    <eb3 gb3 bb3 db4> ~ <eb3 gb3 bb3 db4> ~
    <ab2 cb3 eb3 gb3> ~ <ab2 cb3 eb3 gb3> ~
    <db3 f3 ab3 cb4> ~ <db3 f3 ab3 cb4> ~
    <bb2 db3 f3 ab3> ~ <bb2 db3 f3 ab3> ~
    <eb3 gb3 bb3 db4> ~ <eb3 gb3 bb3 db4> ~
    <ab2 cb3 eb3 gb3> ~ <ab2 cb3 eb3 gb3> ~
    <db3 f3 ab3 cb4> ~ <gb2 bb2 db3 f3> ~
    <bb2 db3 f3 ab3> ~ <eb3 gb3 bb3 db4> ~
    <eb3 gb3 bb3 db4> ~ <eb3 gb3 bb3 db4> ~
    <ab2 cb3 eb3 gb3> ~ <ab2 cb3 eb3 gb3> ~
    <db3 f3 ab3 cb4> ~ <db3 f3 ab3 cb4> ~
    <bb2 db3 f3 ab3> ~ <bb2 db3 f3 ab3> ~
    <eb3 gb3 bb3 db4> ~ <eb3 gb3 bb3 db4> ~
    <ab2 cb3 eb3 gb3> ~ <ab2 cb3 eb3 gb3> ~
    <db3 f3 ab3 cb4> ~ <gb2 bb2 db3 f3> ~
    <bb2 db3 f3 ab3> ~ <eb3 gb3 bb3 db4> ~
  \`)
    .s("gm_electric_piano")
    .gain(0.25)
    .attack(0.08)
    .decay(0.3)
    .sustain(0.6)
    .release(1.2)
    .room(0.5)
    .slow(8),

  // BASS - Smooth, groove-locked bass (electric bass)
  note(\`
    [eb2 ~ ~ gb2] [~ ab2 ~ ~] [ab1 ~ ~ cb2] [~ ab1 ~ ~]
    [db2 ~ ~ f2] [~ ab2 ~ ~] [bb1 ~ ~ db2] [~ bb1 ~ ~]
    [eb2 ~ ~ gb2] [~ ab2 ~ ~] [ab1 ~ ~ cb2] [~ ab1 ~ ~]
    [db2 ~ ~ f2] [gb1 ~ ~ ~] [bb1 ~ ~ db2] [eb2 ~ ~ ~]
    [eb2 ~ ~ gb2] [~ ab2 ~ ~] [ab1 ~ ~ cb2] [~ ab1 ~ ~]
    [db2 ~ ~ f2] [~ ab2 ~ ~] [bb1 ~ ~ db2] [~ bb1 ~ ~]
    [eb2 ~ ~ gb2] [~ ab2 ~ ~] [ab1 ~ ~ cb2] [~ ab1 ~ ~]
    [db2 ~ ~ f2] [gb1 ~ ~ ~] [bb1 ~ ~ db2] [eb2 ~ ~ ~]
  \`)
    .s("gm_electric_bass_finger")
    .gain(0.45)
    .attack(0.01)
    .decay(0.12)
    .sustain(0.55)
    .release(0.25)
    .room(0.3)
    .slow(8),

  // SYNTH PAD - Ethereal background texture (synth strings)
  note(\`
    <eb4 gb4 bb4> ~ ~ ~
    <ab3 cb4 eb4> ~ ~ ~
    <db4 f4 ab4> ~ ~ ~
    <bb3 db4 f4> ~ ~ ~
    <eb4 gb4 bb4> ~ ~ ~
    <ab3 cb4 eb4> ~ ~ ~
    <db4 f4 ab4> ~ ~ ~
    <bb3 db4 f4> ~ ~ ~
  \`)
    .s("gm_synth_strings_1")
    .gain(0.15)
    .attack(0.5)
    .decay(0.3)
    .sustain(0.7)
    .release(2)
    .room(0.65)
    .slow(8),

  // KICK - Laid back, slightly behind the beat feel
  s("bd ~ ~ ~ bd ~ ~ ~")
    .bank("RolandTR808")
    .gain(0.6)
    .slow(1),

  // SNARE - Soft, cracking snare
  s("~ ~ sd ~ ~ ~ sd ~")
    .bank("RolandTR808")
    .gain(0.4)
    .room(0.35)
    .slow(1),

  // HI-HATS - Delicate, swung pattern
  s("[hh ~ hh ~] [~ hh ~ hh] [hh ~ hh ~] [~ hh ~ hh]")
    .bank("RolandTR808")
    .gain(0.22)
    .lpf(7000)
    .slow(1),

  // FINGER SNAPS - Neo-soul texture
  s("~ ~ ~ cp ~ ~ ~ ~")
    .bank("RolandTR808")
    .gain(0.2)
    .room(0.5)
    .slow(1)

).cpm(75)`
};
