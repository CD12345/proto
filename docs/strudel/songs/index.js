// Song manifest - auto-discovers and exports all songs
// Add new songs here and they'll automatically appear in the player

export { song as chopinSonataMv1 } from './chopin-sonata-mv1.js';
export { song as chopinSonataMv2 } from './chopin-sonata-mv2.js';
export { song as chopinSonataMv3 } from './chopin-sonata-mv3.js';

// Export as array for easy iteration
import { song as mv1 } from './chopin-sonata-mv1.js';
import { song as mv2 } from './chopin-sonata-mv2.js';
import { song as mv3 } from './chopin-sonata-mv3.js';

export const songs = [
  { id: 'chopin-sonata-mv1', ...mv1 },
  { id: 'chopin-sonata-mv2', ...mv2 },
  { id: 'chopin-sonata-mv3', ...mv3 }
];
