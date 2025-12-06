export const song = {
  name: 'Jazz Improv',
  code: `// Jazz Improv - Swing rhythms and walking bass
stack(
  note("<c3 eb3 g3 bb3>")
    .s("sawtooth")
    .lpf(600)
    .gain(0.5)
    .room(0.3),
  note("c5 d5 e5 g5 a5 g5 e5 d5")
    .s("triangle")
    .gain(0.4)
    .delay(0.2)
    .fast(2),
  sound("jazz:0*4")
    .gain(0.6)
    .speed("<1 0.9 1.1 0.95>"),
  sound("[~ hh]*4")
    .gain(0.3)
).cpm(120)`
};
