// Song manifest - auto-discovers and exports all songs
// 10 Days of Christmas Collection - A Musical Journey Through Genres
// Add new songs here and they'll automatically appear in the player

export { song as day1Baroque } from './day1-baroque.js';
export { song as day2Romantic } from './day2-romantic.js';
export { song as day3Jazz } from './day3-jazz.js';
export { song as day4Synthwave } from './day4-synthwave.js';
export { song as day5Gospel } from './day5-gospel.js';
export { song as day6Celtic } from './day6-celtic.js';
export { song as day7Bossanova } from './day7-bossanova.js';
export { song as day8Rnb } from './day8-rnb.js';
export { song as day9Orchestral } from './day9-orchestral.js';
export { song as day10Disco } from './day10-disco.js';
export { song as testSamples } from './test-samples.js';

// Export as array for easy iteration
import { song as baroque } from './day1-baroque.js';
import { song as romantic } from './day2-romantic.js';
import { song as jazz } from './day3-jazz.js';
import { song as synthwave } from './day4-synthwave.js';
import { song as gospel } from './day5-gospel.js';
import { song as celtic } from './day6-celtic.js';
import { song as bossanova } from './day7-bossanova.js';
import { song as rnb } from './day8-rnb.js';
import { song as orchestral } from './day9-orchestral.js';
import { song as disco } from './day10-disco.js';
import { song as testSamplesData } from './test-samples.js';

export const songs = [
  { id: 'day1-baroque', ...baroque },
  { id: 'day2-romantic', ...romantic },
  { id: 'day3-jazz', ...jazz },
  { id: 'day4-synthwave', ...synthwave },
  { id: 'day5-gospel', ...gospel },
  { id: 'day6-celtic', ...celtic },
  { id: 'day7-bossanova', ...bossanova },
  { id: 'day8-rnb', ...rnb },
  { id: 'day9-orchestral', ...orchestral },
  { id: 'day10-disco', ...disco },
  { id: 'test-samples', ...testSamplesData }
];
