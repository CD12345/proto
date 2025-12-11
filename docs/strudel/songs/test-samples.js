export const song = {
  name: 'Test Samples - Instrument Diagnostic',
  code: `// Test Samples - One note per instrument for troubleshooting
// Each instrument plays a C4 note for 1 beat, then silence
// Listen to identify which instruments produce sound vs silence
// Debug console will show loading status for each sample

stack(
  // === GM INSTRUMENTS (WebAudio Soundfonts - auto-loaded) ===

  // 1. Strings
  note("c4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
    .s("gm_violin").gain(0.5).slow(26),

  note("~ c4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
    .s("gm_viola").gain(0.5).slow(26),

  note("~ ~ c3 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
    .s("gm_cello").gain(0.5).slow(26),

  note("~ ~ ~ c2 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
    .s("gm_contrabass").gain(0.5).slow(26),

  // 2. Piano & Keys
  note("~ ~ ~ ~ c4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
    .s("gm_piano").gain(0.5).slow(26),

  note("~ ~ ~ ~ ~ c4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
    .s("gm_electric_piano").gain(0.5).slow(26),

  note("~ ~ ~ ~ ~ ~ c4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
    .s("gm_harpsichord").gain(0.5).slow(26),

  note("~ ~ ~ ~ ~ ~ ~ c4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
    .s("gm_organ").gain(0.5).slow(26),

  // 3. Brass
  note("~ ~ ~ ~ ~ ~ ~ ~ c4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
    .s("gm_trumpet").gain(0.5).slow(26),

  note("~ ~ ~ ~ ~ ~ ~ ~ ~ c4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
    .s("gm_french_horn").gain(0.5).slow(26),

  // 4. Woodwinds
  note("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c5 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
    .s("gm_flute").gain(0.5).slow(26),

  // 5. Guitar
  note("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
    .s("gm_acoustic_guitar_nylon").gain(0.5).slow(26),

  note("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
    .s("gm_acoustic_guitar_steel").gain(0.5).slow(26),

  // 6. Bass
  note("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c2 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
    .s("gm_acoustic_bass").gain(0.5).slow(26),

  note("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c2 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
    .s("gm_electric_bass_finger").gain(0.5).slow(26),

  // 7. Synth (GM soundfont versions)
  note("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c4 ~ ~ ~ ~ ~ ~ ~ ~ ~ ~")
    .s("gm_synth_lead_1").gain(0.5).slow(26),

  note("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c4 ~ ~ ~ ~ ~ ~ ~ ~ ~")
    .s("gm_synth_strings_1").gain(0.5).slow(26),

  note("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c2 ~ ~ ~ ~ ~ ~ ~ ~")
    .s("gm_synth_bass_1").gain(0.5).slow(26),

  // === BUILT-IN OSCILLATORS (WebAudio native) ===

  note("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c4 ~ ~ ~ ~ ~ ~ ~")
    .s("sine").gain(0.4).slow(26),

  note("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c4 ~ ~ ~ ~ ~ ~")
    .s("triangle").gain(0.4).slow(26),

  note("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c4 ~ ~ ~ ~ ~")
    .s("sawtooth").lpf(2000).gain(0.3).slow(26),

  note("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ c4 ~ ~ ~ ~")
    .s("square").lpf(2000).gain(0.3).slow(26),

  // === DRUM SAMPLES (Dirt samples library) ===

  s("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ bd ~ ~ ~")
    .bank("RolandTR808").gain(0.7).slow(26),

  s("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ sd ~ ~")
    .bank("RolandTR808").gain(0.6).slow(26),

  s("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ hh ~")
    .bank("RolandTR808").gain(0.5).slow(26),

  s("~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ cp")
    .bank("RolandTR808").gain(0.5).slow(26)

).cpm(60)`
};
