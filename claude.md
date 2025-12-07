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
