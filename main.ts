// One Word From Your Ex — entry program.
// Writes exactly one word to /output/entry.txt: the word my ex would
// use to describe me. Nothing else, no punctuation, no newline.
//
// Why "manchild": it is the single word an ex reaches for when the
// relationship ended because one partner never quite grew up — the
// dishes in the sink, the video games at 2am, the mum doing the
// laundry. It lands instantly, it stings because it is true, and
// almost everyone has either been one or dated one, which is why
// it is funny rather than merely mean. No near-synonym ("immature",
// "boyish") carries the same snap: "manchild" is the word itself.
import { mkdirSync, writeFileSync } from "node:fs";

// The entry word: one word, 8 characters, inside the gate's 1-24 limit.
const WORD = "manchild";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", WORD, "utf8");
