// Weirdest Job Title: Blind Judge Showdown
// Writes exactly one job title (a single line, 60 chars or fewer)
// to $MAKEFUN_OUTPUT_DIR/entry.txt. Deterministic: same title every run.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TITLE = "Senior Moonlight Auditor for Werewolf Overtime Claims";

// The bounty caps the title at 60 characters; fail loudly instead of
// ever writing an over-long line.
if (TITLE.length > 60 || TITLE.includes("\n")) {
  throw new Error("Title must be a single line of 60 characters or fewer.");
}

function main(): void {
  const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outputDir, { recursive: true });
  writeFileSync(join(outputDir, "entry.txt"), TITLE + "\n", "utf8");
}

main();
