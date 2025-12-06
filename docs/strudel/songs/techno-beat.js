export const song = {
  name: 'Techno Beat',
  code: `// Techno Beat - Driving electronic rhythm
stack(
  sound("bd*4")
    .gain(0.8),
  sound("~ hh*2")
    .gain(0.5),
  sound("[~ sd]*2")
    .gain(0.6),
  sound("~ ~ ~ cp")
    .gain(0.7)
    .delay(0.3)
    .delaytime(0.125)
    .delayfeedback(0.4)
).cpm(128)`
};
