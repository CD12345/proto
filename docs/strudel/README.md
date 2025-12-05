# Strudel.cc sketches

This folder collects Strudel.cc sketches for musical ideas. You can copy any
`.strudel` file into https://strudel.cc to audition the patterns.

## Sonata in C# minor (after Chopin)
- `c-sharp-minor-sonata.strudel` defines three movements designed for the Strudel
  piano sampler.
- Paste the entire file into Strudel.cc, then trigger `movement1`, `movement2`,
  or `movement3` in the console. Use `solo(movementX)` to focus on a single
  movement or `stack([movement1, movement2, movement3])` for a continuous
  traversal.

Adjust `setcps` or add effects to taste to suit your rendering context.

## Browser player
- Open `index.html` in this folder to load the bundled Strudel runtime
  (v1.2.6), choose the C# minor sonata, and play any movement with
  play/pause/seek controls in your browser.
- When GitHub Pages is enabled for this repository with the `/docs` folder as the
  source, this player will be hosted at:
  `https://<your-username>.github.io/<this-repo>/strudel/`.
