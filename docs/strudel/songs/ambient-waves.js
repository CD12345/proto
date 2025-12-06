export const song = {
  name: 'Ambient Waves',
  code: `// Ambient Waves - Ethereal soundscape
stack(
  note("<c2 g2 f2 e2>")
    .s("sawtooth")
    .lpf(800)
    .gain(0.4)
    .room(0.9)
    .delay(0.5),
  note("<e3 g3 d3 c3>")
    .s("triangle")
    .lpf(1200)
    .gain(0.3)
    .slow(2),
  note("c4 e4 g4 a4")
    .s("sine")
    .gain(0.25)
    .delay(0.7)
    .delaytime(0.375)
    .slow(4)
).cpm(60)`
};
