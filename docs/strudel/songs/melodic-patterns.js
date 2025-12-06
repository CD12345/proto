export const song = {
  name: 'Melodic Patterns',
  code: `// Melodic Patterns - Arpeggiated sequences
stack(
  note("c4 e4 g4 b4 c5 b4 g4 e4")
    .s("square")
    .lpf(sine.range(400, 2000).slow(8))
    .gain(0.4)
    .delay(0.4)
    .delaytime(0.25),
  note("<c2 a1 f2 g2>")
    .s("sawtooth")
    .lpf(300)
    .gain(0.5),
  sound("bd ~ ~ ~")
    .gain(0.7),
  sound("~ ~ hh ~")
    .gain(0.4)
).cpm(140)`
};
