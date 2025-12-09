# Claude Code Context

## Project Overview

This is a **Strudel Music Player** - a static web application for composing and playing algorithmic music using the Strudel live coding framework. Currently features a three-movement Chopin-style sonata.

## Tech Stack

- **Strudel** (v1.2.5) - Live coding music library loaded via CDN (`@strudel/web`)
- **Web Audio API** - Browser-based audio synthesis
- **ES Modules** - Modern JavaScript modules
- **Static hosting** - GitHub Pages compatible (served from `docs/` folder)

## Project Structure

```
proto/
├── docs/                          # Web root (GitHub Pages)
│   ├── index.html                 # Main application
│   ├── .nojekyll                  # Disable Jekyll processing
│   └── strudel/
│       ├── README.md              # User documentation
│       └── songs/
│           ├── index.js           # Song manifest (add new songs here)
│           └── *.js               # Individual song files
```

## Adding New Songs

1. Create a new file in `docs/strudel/songs/`:

```javascript
export const song = {
  name: 'Display Name',
  code: `// Strudel pattern code
stack(
  note("c4 e4 g4").s("triangle").lpf(2000).gain(0.3)
).cpm(60)`
};
```

2. Register in `docs/strudel/songs/index.js`:

```javascript
export { song as newSong } from './new-song.js';
import { song as newSongData } from './new-song.js';

export const songs = [
  // ... existing songs
  { id: 'new-song', ...newSongData }
];
```

## Song File Conventions

Each song exports a `song` object with:
- `name`: Display name shown in dropdown
- `code`: Strudel pattern code as template literal

### Common Strudel Patterns

```javascript
// Basic note pattern
note("c4 d4 e4 f4").s("sine").gain(0.3)

// Layered composition
stack(
  note("...").s("triangle").lpf(2500),  // Melody
  note("...").s("sawtooth").lpf(800),   // Bass
)

// Common parameters
.s("sine|triangle|sawtooth")  // Oscillator type
.lpf(freq)                     // Low-pass filter (Hz)
.gain(0-1)                     // Volume
.attack(seconds)               // ADSR envelope
.decay(seconds)
.sustain(0-1)
.release(seconds)
.room(0-1)                     // Reverb amount
.delay(0-1)                    // Delay mix
.slow(n)                       // Stretch pattern duration
.cpm(n)                        // Cycles per minute (tempo)
```

### Note Syntax

```javascript
"c4 d4 e4"           // Sequential notes
"[c4 d4 e4 f4]"      // Notes in one beat
"<c3 e3 g3>"         // Chord
"~"                  // Rest/silence
"c4 ~ ~ ~"           // Note followed by rests
```

## Key Files

| File | Purpose |
|------|---------|
| `docs/index.html` | Main app with player UI and Strudel initialization |
| `docs/strudel/songs/index.js` | Song manifest - single source of truth for available songs |
| `docs/strudel/songs/*.js` | Individual compositions |

## Development Notes

- **No build process** - Pure HTML/JS, just serve the `docs/` folder
- **Debug console** - Built into the UI, shows loading and playback status
- **Strudel docs** - https://strudel.cc for pattern language reference
- **Samples** - Uses `dirt-samples` from TidalCycles (loaded at init)

## Common Tasks

### Test locally
```bash
cd docs && python -m http.server 8000
```

### Strudel initialization
The app uses `initStrudel()` with `samples()` to load dirt-samples. This happens automatically on page load.

### Playback
Songs are evaluated with `eval(code)` and played with `.play()`. Stop with global `hush()`.

---

## Strudel Best Practices Guide

A comprehensive guide to composing music in Strudel, covering multi-part compositions, piano arrangements, rhythm alignment, melody harmonization, and classical chord progressions.

### Table of Contents
1. [Understanding Cycles and Tempo](#understanding-cycles-and-tempo)
2. [Multi-Part Songs and Sequencing](#multi-part-songs-and-sequencing)
3. [Piano Parts: Left and Right Hand Stacking](#piano-parts-left-and-right-hand-stacking)
4. [Rhythm Alignment](#rhythm-alignment)
5. [Melody Harmonization](#melody-harmonization)
6. [Classical Chord Progressions](#classical-chord-progressions)
7. [Sound Design for Different Genres](#sound-design-for-different-genres)

---

### Understanding Cycles and Tempo

Strudel uses **cycles** as its fundamental timing unit rather than traditional measures. One cycle equals one complete pattern repetition.

#### Setting Tempo

```javascript
// Cycles Per Minute - most intuitive for musicians
.cpm(120)  // 120 cycles per minute

// Cycles Per Second (default is 0.5)
setcps(0.5)  // Half a cycle per second = 30 cpm

// Convert BPM: divide by beats-per-cycle
setcpm(120/4)  // 120 BPM with 4 beats per cycle = 30 cpm
```

#### Cycle Math
- **4 events** in a pattern = each event is 1/4 cycle (quarter note feel)
- **8 events** = each is 1/8 cycle (eighth note feel)
- Use `.slow(n)` to stretch patterns across n cycles
- Use `.fast(n)` or `*n` to compress patterns

```javascript
// 4-beat pattern stretched over 2 cycles = half-time feel
note("c4 e4 g4 c5").slow(2)

// 4-beat pattern compressed to half cycle = double-time feel
note("c4 e4 g4 c5").fast(2)
```

---

### Multi-Part Songs and Sequencing

#### Basic Song Structure with `stack()`

Use `stack()` to layer multiple parts that play simultaneously:

```javascript
stack(
  // Melody
  note("c5 e5 g5 e5").s("triangle"),

  // Harmony
  note("<c3 e3 g3>").s("sawtooth"),

  // Bass
  note("c2").s("sawtooth").lpf(400)
).cpm(60)
```

#### Sequencing Parts Over Time (Verse/Chorus Structure)

Use **rest placeholders** (`~`) to create song sections. Each part uses the same `.slow()` value to stay synchronized:

```javascript
stack(
  // INTRO (bars 1-4)
  note(`
    [c5 e5 g5 ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
  `).s("triangle").slow(8),

  // VERSE (bars 5-8) - enters after intro
  note(`
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [e5 d5 c5 d5] [e5 f5 g5 ~] [a5 g5 f5 e5] [d5 ~ ~ ~]
  `).s("triangle").slow(8),

  // BASS - continuous throughout
  note(`
    c2 g2 a2 f2
    c2 g2 a2 f2
  `).s("sawtooth").lpf(300).slow(8)
).cpm(30)
```

#### Using `cat()` for Sequential Sections

`cat()` plays patterns one after another, each taking one cycle:

```javascript
cat(
  // Section A
  note("c4 e4 g4 c5").s("piano"),
  // Section B
  note("d4 f4 a4 d5").s("piano"),
  // Section A (return)
  note("c4 e4 g4 c5").s("piano")
).slow(4).cpm(60)
```

#### Using `arrange()` for Complex Forms

`arrange()` gives precise control over section lengths:

```javascript
arrange(
  [4, note("c4 e4 g4 e4").s("piano")],  // 4 cycles of verse
  [2, note("g4 a4 b4 c5").s("piano")],  // 2 cycles of pre-chorus
  [4, note("c5 e5 g5 e5").s("piano")]   // 4 cycles of chorus
).cpm(60)
```

---

### Piano Parts: Left and Right Hand Stacking

Piano music requires coordinating melody (right hand) with accompaniment (left hand). Stack them with complementary voices.

#### Basic Two-Hand Layout

```javascript
stack(
  // RIGHT HAND - Melody in upper register
  note("e5 d5 c5 d5 e5 e5 e5 ~")
    .s("piano")
    .lpf(3000)
    .gain(0.4)
    .slow(2),

  // LEFT HAND - Blocked chords in lower register
  note("<c3 e3 g3> <c3 e3 g3> <g2 b2 d3> <g2 b2 d3>")
    .s("piano")
    .lpf(1500)
    .gain(0.25)
    .slow(2)
).cpm(60)
```

#### Alberti Bass Pattern (Classical Style)

The Alberti bass breaks chords into a flowing pattern (low-high-middle-high):

```javascript
stack(
  // RIGHT HAND - Melody
  note("e5 ~ d5 ~ c5 ~ b4 ~ c5 ~ ~ ~")
    .s("piano")
    .gain(0.35)
    .slow(3),

  // LEFT HAND - Alberti bass (C-G-E-G pattern)
  note(`
    [c3 g3 e3 g3] [c3 g3 e3 g3] [g2 d3 b2 d3] [g2 d3 b2 d3]
    [a2 e3 c3 e3] [a2 e3 c3 e3] [g2 d3 b2 d3] [g2 d3 b2 d3]
    [c3 g3 e3 g3] [c3 g3 e3 g3] [c3 g3 e3 g3] [c3 g3 e3 g3]
  `)
    .s("piano")
    .lpf(1200)
    .gain(0.2)
    .slow(3)
).cpm(40)
```

#### Arpeggiated Accompaniment (Romantic Style)

Flowing arpeggios create a more expressive accompaniment:

```javascript
stack(
  // RIGHT HAND - Expressive melody with longer notes
  note("g4 ~ a4 b4 c5 ~ d5 ~ e5 ~ ~ d5 c5 ~ b4 ~ c5 ~ ~ ~")
    .s("piano")
    .attack(0.05)
    .decay(0.3)
    .sustain(0.5)
    .release(1.2)
    .gain(0.35)
    .room(0.6)
    .slow(5),

  // LEFT HAND - Rolling arpeggios
  note(`
    [c3 e3 g3 c4 g3 e3] [c3 e3 g3 c4 g3 e3]
    [g2 b2 d3 g3 d3 b2] [g2 b2 d3 g3 d3 b2]
    [a2 c3 e3 a3 e3 c3] [a2 c3 e3 a3 e3 c3]
    [g2 b2 d3 g3 d3 b2] [g2 b2 d3 g3 d3 b2]
    [c3 e3 g3 c4 g3 e3] [c3 e3 g3 c4 g3 e3]
  `)
    .s("piano")
    .lpf(1800)
    .gain(0.18)
    .room(0.5)
    .slow(5)
).cpm(25)
```

#### Octave Doubling for Power

Double the bass for a fuller sound:

```javascript
stack(
  // Melody
  note("c5 e5 g5 e5 c5 ~ ~ ~").s("piano").gain(0.35).slow(2),

  // Left hand chords
  note("<c3 e3 g3> <f3 a3 c4> <g3 b3 d4> <c3 e3 g3>")
    .s("piano").lpf(1500).gain(0.22).slow(2),

  // Bass octaves (reinforces harmonic foundation)
  note("c2 f2 g2 c2").s("piano").lpf(600).gain(0.28).slow(2)
).cpm(60)
```

---

### Rhythm Alignment

The key to rhythm alignment is ensuring all parts share compatible time structures.

#### The Golden Rule: Matching `.slow()` Values

All parts in a `stack()` should use the **same `.slow()` value** to stay synchronized:

```javascript
stack(
  note("c5 d5 e5 f5 g5 f5 e5 d5").slow(4),  // 8 notes over 4 cycles
  note("c3 g3 c3 g3").slow(4),              // 4 notes over 4 cycles
  note("c2 ~ g2 ~").slow(4)                 // 2 notes over 4 cycles
).cpm(60)
```

#### Using Rests for Rhythmic Variety

Rests (`~`) create space and syncopation:

```javascript
stack(
  // Syncopated melody (emphasis on off-beats)
  note("~ c5 ~ e5 ~ g5 ~ e5").slow(2),

  // Steady bass (emphasis on beats)
  note("c3 ~ c3 ~ c3 ~ c3 ~").slow(2)
).cpm(60)
```

#### Beat Subdivision with Brackets

Square brackets `[]` subdivide time equally:

```javascript
// All four approaches produce 8 events per cycle:
note("c d e f g a b c")           // 8 events in 1 cycle
note("[c d] [e f] [g a] [b c]")   // 4 groups of 2
note("[c d e f] [g a b c]")       // 2 groups of 4
note("[c d e f g a b c]")         // 1 group of 8

// Mixing rhythms: triplet against duple
stack(
  note("[c e g]").slow(1),        // 3 notes (triplet)
  note("[c g]").slow(1)           // 2 notes (duple)
).cpm(60)
```

#### Elongation with `@` for Held Notes

Use `@` to give a note more time relative to others in a group:

```javascript
// Half note followed by two quarter notes
note("[c5@2 e5 g5]")  // c5 gets 2 beats, e5 and g5 get 1 each

// Dotted rhythm
note("[c5@3 e5]")     // c5 gets 3 parts, e5 gets 1 (dotted quarter + eighth)
```

#### Polyrhythm: Different Divisions, Same Duration

Create polyrhythms by using different numbers of events with matching `.slow()`:

```javascript
stack(
  // 3 against 4 polyrhythm
  note("[c5 e5 g5]").slow(1),     // 3 notes per cycle
  note("[c4 e4 g4 c5]").slow(1)   // 4 notes per cycle
).cpm(60)
```

#### Euclidean Rhythms for Algorithmic Patterns

Euclidean rhythms distribute beats evenly across steps:

```javascript
// bd(3,8) = 3 hits distributed over 8 steps: x..x..x.
stack(
  s("bd(3,8)"),           // Kick: 3 over 8
  s("hh(5,8)"),           // Hi-hat: 5 over 8
  s("sd(2,8)")            // Snare: 2 over 8
).cpm(60)

// With melody
note("c4(3,8) e4(5,8)").s("triangle").cpm(60)
```

---

### Melody Harmonization

#### Parallel Thirds and Sixths

The simplest harmonization adds parallel intervals:

```javascript
stack(
  // Main melody
  note("c5 d5 e5 f5 g5 f5 e5 d5").s("triangle").gain(0.35),

  // Harmony a third below
  note("a4 b4 c5 d5 e5 d5 c5 b4").s("triangle").gain(0.25),

  // Optional: sixth below for richer sound
  note("e4 f4 g4 a4 b4 a4 g4 f4").s("triangle").gain(0.2)
).slow(2).cpm(60)
```

#### Using `add()` for Interval Stacking

```javascript
// Add a third (4 semitones) and fifth (7 semitones)
note("c4 d4 e4 f4 g4 f4 e4 d4")
  .add(note("0,4,7"))  // Adds major triad above each note
  .s("triangle")
  .slow(2)
  .cpm(60)
```

#### Voice Leading with Chords

Good voice leading minimizes movement between chord tones:

```javascript
stack(
  // Melody
  note("e5 e5 f5 g5 g5 f5 e5 d5 c5 c5 d5 e5 e5 ~ d5 d5")
    .s("triangle").gain(0.35).slow(4),

  // Harmony with smooth voice leading
  // I - I - IV - V - V - IV - I - V - I (etc.)
  note(`
    <c4 e4 g4> <c4 e4 g4> <c4 f4 a4> <b3 d4 g4>
    <b3 d4 g4> <c4 f4 a4> <c4 e4 g4> <b3 d4 g4>
    <c4 e4 g4> <c4 e4 g4> <b3 d4 g4> <c4 e4 g4>
    <c4 e4 g4> <c4 e4 g4> <b3 d4 g4> <b3 d4 g4>
  `)
    .s("triangle").lpf(2000).gain(0.2).slow(4)
).cpm(45)
```

#### Counterpoint: Independent Melodic Lines

Create a second melody that moves independently:

```javascript
stack(
  // Primary melody (soprano)
  note("c5 d5 e5 d5 c5 b4 c5 ~")
    .s("triangle").gain(0.35).slow(2),

  // Counter-melody (alto) - contrary motion
  note("g4 f4 e4 f4 g4 a4 g4 ~")
    .s("triangle").gain(0.28).slow(2),

  // Bass line (contrary to soprano)
  note("c3 b2 a2 b2 c3 d3 c3 ~")
    .s("sawtooth").lpf(800).gain(0.25).slow(2)
).cpm(60)
```

#### Using Scale Functions for Diatonic Harmony

```javascript
// Harmonize within C major scale
n("0 2 4 5 7 5 4 2")
  .scale("C4:major")
  .add(n("0,2,4").scale("C4:major"))  // Add diatonic thirds and fifths
  .s("triangle")
  .slow(2)
  .cpm(60)
```

---

### Classical Chord Progressions

#### I-IV-V-I (The Foundational Progression)

```javascript
stack(
  // Melody over the progression
  note("e5 ~ f5 ~ g5 ~ ~ ~ a5 ~ g5 ~ e5 ~ ~ ~")
    .s("piano").gain(0.35).slow(4),

  // Chords: C - F - G - C
  note(`
    <c4 e4 g4> <c4 e4 g4> <c4 f4 a4> <c4 f4 a4>
    <b3 d4 g4> <b3 d4 g4> <c4 e4 g4> <c4 e4 g4>
  `)
    .s("piano").lpf(2000).gain(0.22).slow(4),

  // Bass: root notes
  note("c3 c3 f2 f2 g2 g2 c3 c3")
    .s("piano").lpf(600).gain(0.28).slow(4)
).cpm(30)
```

#### I-V-vi-IV (The "Pop" Progression)

Also known as the "Axis" progression, used in countless pop songs:

```javascript
stack(
  // Melody
  note("c5 ~ d5 e5 g5 ~ e5 ~ f5 ~ e5 d5 c5 ~ ~ ~")
    .s("triangle").gain(0.35).slow(4),

  // Chords: C - G - Am - F
  note(`
    <c4 e4 g4> <b3 d4 g4> <a3 c4 e4> <a3 c4 f4>
  `)
    .s("sawtooth").lpf(1500).gain(0.2).slow(4),

  // Bass
  note("c2 g2 a2 f2").s("sawtooth").lpf(400).gain(0.3).slow(4)
).cpm(30)
```

#### ii-V-I (Jazz Foundation)

The most important jazz progression:

```javascript
stack(
  // Jazz melody with chromaticism
  note("d5 ~ e5 f5 g5 ~ a5 ~ b5 ~ a5 g5 c6 ~ ~ ~")
    .s("triangle").gain(0.32).slow(4),

  // Chords: Dm7 - G7 - Cmaj7
  note(`
    <d4 f4 a4 c5> <d4 f4 a4 c5>
    <b3 d4 f4 g4> <b3 d4 f4 g4>
    <c4 e4 g4 b4> <c4 e4 g4 b4>
    <c4 e4 g4 b4> <c4 e4 g4 b4>
  `)
    .s("triangle").lpf(2500).gain(0.2).slow(4),

  // Walking bass
  note("d3 e3 f3 f#3 g3 a3 b3 b3 c3 ~ ~ ~")
    .s("sawtooth").lpf(600).gain(0.28).slow(4)
).cpm(30)
```

#### i-iv-V-i (Minor Key Progression)

For darker, more dramatic moods:

```javascript
stack(
  // Dramatic minor melody
  note("a4 ~ b4 c5 e5 ~ d5 ~ c5 ~ b4 ~ a4 ~ ~ ~")
    .s("triangle").gain(0.35).slow(4),

  // Chords: Am - Dm - E - Am
  note(`
    <a3 c4 e4> <a3 c4 e4> <a3 d4 f4> <a3 d4 f4>
    <g#3 b3 e4> <g#3 b3 e4> <a3 c4 e4> <a3 c4 e4>
  `)
    .s("triangle").lpf(2000).gain(0.2).slow(4),

  // Bass
  note("a2 a2 d3 d3 e3 e3 a2 a2")
    .s("sawtooth").lpf(500).gain(0.28).slow(4)
).cpm(30)
```

#### Circle of Fifths Progression

Moves through related keys (vi-ii-V-I):

```javascript
stack(
  // Melody following the progression
  note("a4 ~ g4 ~ f4 ~ e4 ~ d4 ~ c4 ~ b3 ~ c4 ~")
    .s("piano").gain(0.35).slow(4),

  // Chords: Am - Dm - G - C (circle of fifths)
  note(`
    <a3 c4 e4> <a3 d4 f4> <g3 b3 d4> <g3 c4 e4>
  `)
    .s("piano").lpf(2000).gain(0.22).slow(4),

  // Bass descending in fifths
  note("a2 d3 g2 c3").s("piano").lpf(600).gain(0.28).slow(4)
).cpm(30)
```

#### Baroque-Style Progression (I-vi-IV-ii-V-I)

Extended classical cadence:

```javascript
stack(
  // Baroque melody with ornaments
  note(`
    [c5 d5 e5 ~] [a4 b4 c5 ~] [f4 g4 a4 ~] [d4 e4 f4 ~]
    [g4 a4 b4 ~] [c5 ~ ~ ~]
  `)
    .s("triangle").gain(0.32).slow(6),

  // Full progression: C - Am - F - Dm - G - C
  note(`
    <c4 e4 g4> <a3 c4 e4> <a3 c4 f4> <a3 d4 f4>
    <g3 b3 d4> <g3 c4 e4>
  `)
    .s("triangle").lpf(2200).gain(0.2).slow(6),

  // Figured bass style
  note("c3 a2 f2 d3 g2 c3").s("sawtooth").lpf(500).gain(0.26).slow(6)
).cpm(25)
```

---

### Sound Design for Different Genres

#### Classical Piano Settings

```javascript
.s("piano")       // or "kawai" for softer tone
.lpf(2500)        // Warm but clear
.gain(0.3)
.attack(0.01)     // Quick attack for clarity
.decay(0.3)
.sustain(0.4)
.release(0.8)     // Natural piano decay
.room(0.5)        // Concert hall ambience
```

#### Romantic/Expressive Piano

```javascript
.s("piano")
.lpf(3000)        // Brighter for expression
.gain(0.32)
.attack(0.05)     // Slightly softer attack
.decay(0.4)
.sustain(0.5)
.release(1.5)     // Longer sustain for rubato
.room(0.7)        // More reverb for depth
.delay(0.2)       // Subtle delay for shimmer
```

#### Electronic/Synth Pad

```javascript
.s("sawtooth")    // or "triangle", "square"
.lpf(1500)        // Filter for warmth
.gain(0.25)
.attack(0.3)      // Slow attack for pad
.decay(0.2)
.sustain(0.7)     // High sustain
.release(1.5)
.room(0.6)
```

#### Bass Sounds

```javascript
// Warm bass
.s("sawtooth").lpf(400).gain(0.35).attack(0.01).release(0.3)

// Sub bass
.s("sine").lpf(200).gain(0.4).attack(0.01).release(0.2)

// Punchy bass
.s("square").lpf(600).gain(0.3).attack(0.005).decay(0.1).release(0.2)
```

---

### Complete Example: Classical Sonata Movement

Here's a template combining all best practices:

```javascript
// Sonata-form movement template
stack(
  // THEME A - Primary melody (measures 1-8)
  note(`
    [c5 d5 e5 f5] [g5 ~ a5 ~] [g5 f5 e5 d5] [c5 ~ ~ ~]
    [e5 f5 g5 a5] [b5 ~ c6 ~] [b5 a5 g5 f5] [e5 ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
  `)
    .s("piano").lpf(2800).gain(0.35)
    .attack(0.01).decay(0.3).sustain(0.4).release(0.8)
    .room(0.5).slow(8),

  // THEME B - Contrasting lyrical theme (measures 9-16)
  note(`
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~] [~ ~ ~ ~]
    [g4 ~ a4 b4] [c5 ~ d5 ~] [e5 ~ d5 c5] [b4 ~ ~ ~]
    [a4 ~ b4 c5] [d5 ~ e5 ~] [d5 ~ c5 ~] [b4 ~ ~ ~]
  `)
    .s("piano").lpf(3200).gain(0.3)
    .attack(0.05).decay(0.4).sustain(0.5).release(1.2)
    .room(0.6).slow(8),

  // LEFT HAND - Alberti bass pattern
  note(`
    [c3 g3 e3 g3] [c3 g3 e3 g3] [g2 d3 b2 d3] [c3 g3 e3 g3]
    [a2 e3 c3 e3] [g2 d3 b2 d3] [c3 g3 e3 g3] [c3 g3 e3 g3]
    [g2 d3 b2 d3] [a2 e3 c3 e3] [c3 g3 e3 g3] [g2 d3 b2 d3]
    [f2 c3 a2 c3] [g2 d3 b2 d3] [g2 d3 b2 d3] [g2 d3 b2 d3]
  `)
    .s("piano").lpf(1200).gain(0.2)
    .attack(0.01).decay(0.2).sustain(0.3).release(0.5)
    .room(0.4).slow(8),

  // BASS - Root foundation
  note(`
    c2 c2 g1 c2
    a1 g1 c2 c2
    g1 a1 c2 g1
    f1 g1 g1 g1
  `)
    .s("piano").lpf(600).gain(0.25)
    .attack(0.01).decay(0.3).sustain(0.4).release(0.6)
    .room(0.3).slow(8)

).cpm(20)
```

---

### Quick Reference Card

| Concept | Syntax | Example |
|---------|--------|---------|
| Sequential notes | Space-separated | `"c d e f"` |
| Subdivision | `[notes]` | `"[c d e f]"` = 4 notes in 1 beat |
| Chord | `<notes>` or `,` | `"<c e g>"` or `"c,e,g"` |
| Rest | `~` | `"c ~ e ~"` |
| Elongation | `@n` | `"[c@2 e]"` = c is twice as long |
| Repeat | `!n` | `"c!4"` = cccc without speedup |
| Speed up | `*n` | `"c*4"` = 4x faster |
| Slow down | `/n` | `"c/4"` = 4x slower |
| Euclidean | `(hits,steps)` | `"c(3,8)"` = 3 hits in 8 steps |
| Random choice | `\|` | `"c \| e \| g"` |
| Maybe play | `?` | `"c?"` = 50% chance |

### Recommended Filter Ranges

| Register | LPF Range | Use Case |
|----------|-----------|----------|
| Sub bass | 100-300 Hz | Deep foundation |
| Bass | 300-600 Hz | Warm bass lines |
| Low mid | 600-1200 Hz | Left hand piano, warmth |
| Mid | 1200-2500 Hz | Harmony, pads |
| High mid | 2500-4000 Hz | Melody, clarity |
| Bright | 4000+ Hz | Sparkle, air |
