# Tournament log — news-image-20261120 r3

20 candidates built from one parameterized broadsheet engine
(assets/gen.py): original PIL vector art, all text typeset from data.
Variants crossed header (cream / navy band / ink band), accent (red /
burgundy / crimson), lead order (Akvan-Kyiv-COP31, Kyiv first, COP31
first), stat strip (A: 7 waves / -4.5% / 118; B: 01:25 / -7% / 317/6)
and density (calm 23 stories, full 25, max 27).

Before any candidate work, the live top 10 was read image by image:
all ten are cream broadsheet front pages with a giant serif date, a
six-stat strip, three drawn leads (Akvan, Kyiv, COP31 in some order),
a card grid, a pin map, briefs and a DATE CHECK box. Round 2's failure
was also diagnosed first: it led with The Hague and the ICJ Rohingya
ruling — Thursday 19 November news — which the rubric's first
criterion buries. Every story on this page was checked against
20 November reporting (IMD via The Hindu, UN News, Reuters); two
leader errors were corrected, not copied: Akvan's landfall winds were
70-80 km/h gusting 90 (the 110 figure was the forecast), and the Kyiv
embassy damage belongs to Thursday's strikes, so it sits in DATE
CHECK, not in the Kyiv lead.

Scoring used the kit rubric in the judge's priority order
(Date & specificity /25, Breadth /20, Readability /25, Faithful /10,
Craft /20). Visual reads killed early defects: in-panel text clipped
at the 28 px card bands (removed), a tofu minus glyph (switched to
ASCII), stat captions touching the region tabs, and max-density
briefs overflowing into the DATE CHECK box (layout rebalanced).

| cand | config | Date | Breadth | Read | Faith | Craft | Total |
|------|--------|------|---------|------|-------|-------|-------|
| 18 | cream, red, stats B, max, Akvan first | 25 | 20 | 22.5 | 10 | 19.3 | 96.8 |
| 07 | navy, red, stats B, max, Kyiv first | 25 | 20 | 22.5 | 10 | 19.3 | 96.8 |
| 11 | cream, red, stats B, full, Akvan first | 25 | 19 | 23.5 | 10 | 19.3 | 96.8 |
| 20 | navy, red, stats B, full, Akvan first | 25 | 19 | 23.5 | 10 | 19.3 | 96.8 |
| 01 | cream, red, stats A, full, Akvan first | 25 | 19 | 23.5 | 10 | 19 | 96.5 |

The tie broke on the 300 px test and a side-by-side against the
board's #1-#3: at 300 px the winner's stat strip and lead headlines
stay legible while #1's denser 36-story page falls to texture, and
the cream ground matches nine of the ten leaders. Two polish passes
followed: the Kyiv panel's "01:25 LOCAL - 7 WAVES" label was put on a
dark chip for contrast, and the Europe map pins were spread so
13/2/12/3 stay distinguishable.

Winner: cand-18, polished — entry.png, 1024x1024, 287,737 bytes,
sha256 dce5049a873ec10e71c4268d74f5b0ee271bcfab9130c8125646c7d784508ebb.
