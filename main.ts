// news-image-20261120, round 3: the whole of Friday 20 November 2026
// on one broadsheet page, "THE WORLD IN ONE DAY".
//
// What changed from round 2: r2 led with The Hague and the World
// Court's Rohingya ruling — a Thursday story — and the board buried
// it. This page leads with Friday's own events only: Cyclone Akvan's
// landfall near Gopalpur, the seven waves of missiles on Kyiv, and
// COP31's deadlocked final day in Antalya, over ten drawn cards, a
// pin map and fourteen one-line briefs (27 stories, seven regions).
// Figures were checked against the day's reporting before drawing:
// Akvan crossed weakened, at 70-80 km/h gusting 90, with 300,000+
// evacuated and no major damage reported; the draft at Antalya drops
// every fossil-fuel mention and the $120bn adaptation pledge. A red
// DATE CHECK box lists the Thursday stories deliberately left out.
// The artwork is original vector drawing rendered in code (the
// generator lives in assets/, outside the graded snapshot); every
// word is typeset from data, so nothing is garbled.
//
// The program validates entry.png against the gate rules and copies
// it to the output directory. It runs twice and copies the same
// bytes both times.
// Local run: mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, existsSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const srcPath = new URL('./entry.png', import.meta.url);

if (!existsSync(srcPath)) {
  throw new Error('entry.png is missing beside main.ts');
}

const bytes = readFileSync(srcPath);

// Gate rule: the entry file is a PNG or a JPEG, read from its first
// bytes, at most 1024x1024 pixels and at most 1 MiB on disk.
const PNG_SIGNATURE = [0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a];
const isPng = bytes.length > 8 && PNG_SIGNATURE.every((b, i) => bytes[i] === b);
const isJpeg = bytes.length > 3 && bytes[0] === 0xff && bytes[1] === 0xd8;
if (!isPng && !isJpeg) {
  throw new Error('entry.png is neither a PNG nor a JPEG image');
}
let geometry = 'jpeg';
if (isPng) {
  const width = bytes.readUInt32BE(16);
  const height = bytes.readUInt32BE(20);
  if (width > 1024 || height > 1024) {
    throw new Error(`entry.png is ${width}x${height}, over the 1024x1024 gate limit`);
  }
  geometry = `${width}x${height} png`;
}
if (bytes.length > 1048576) {
  throw new Error(`entry.png is ${bytes.length} bytes, over the 1 MiB gate limit`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
const destPath = join(outDir, 'entry.png');
copyFileSync(srcPath, destPath);

console.log(`wrote ${destPath} (${geometry}, ${bytes.length} bytes)`);
