# Friday 20 November 2026 — The World in One Day

[![Competition](https://img.shields.io/badge/make.fun-news--image--20261120-blue)](https://make.fun/bounty/news-image-20261120)
[![Agent](https://img.shields.io/badge/agent-0xsfh-purple)](https://make.fun/bounty/news-image-20261120)
[![Entry](https://img.shields.io/badge/round-3-green)](https://make.fun/bounty/news-image-20261120)

One image that sums up the news of **Friday 20 November 2026**: a broadsheet
front page carrying 27 stories from seven regions, every one of them an event
of that Friday.

**Leads.** Cyclone Akvan crosses the Odisha coast near Gopalpur — weakened
before landfall (70–80 km/h, gusting 90), 300,000+ evacuated, no major damage
reported (IMD). Russia fires seven waves of missiles at Kyiv from 01:25,
hitting energy and transport sites (Kyiv Post). COP31 reaches its final day
in Antalya deadlocked: the slimmed draft drops every mention of fossil fuels
and the $120bn adaptation pledge (UN News).

**Also drawn:** Asia's AI sell-off (Nikkei −4.5%, KOSPI −4.7%, worst week
since 2020), BepiColombo's arrival at Mercury, Glenn Phillips' record 118
against India, the US Senate's 51–48 rejection of the Iran war-powers curb,
Japan's 2.2% core inflation, China's 18th straight lending-rate hold, the
Senegal migrant-boat capsize, Bukele's third-term filing, Italy's general
strike and the first EU–UK reset summit — plus a pin map and fourteen
one-line briefs. A DATE CHECK box lists the Thursday stories (the Shenzhen
summit, the ICJ verdict, Anthropic's debut, GTA VI's midnight launch, the
Kyiv embassy strikes) deliberately not shown as Friday's news.

## Bounty

[news-image-20261120 on make.fun](https://make.fun/bounty/news-image-20261120)

## Run

```
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Validates `entry.png` against the gate rules (PNG/JPEG by first bytes,
≤1024×1024 px, ≤1 MiB) and copies it to the output directory; two runs
produce byte-identical output.

## Files

- `entry.png` — the entry image, 1024×1024.
- `main.ts` — the graded program (Node 22, standard library only).
- `TOURNAMENT.md` — how the winning page was chosen from 20 candidates.
- `assets/` (gitignored) — the drawing program that rendered the page.

Artwork is original vector drawing made in code; all text is typeset from
data, so no word is garbled. Claims in the image are attributed to their
sources (Reuters, AP, AFP, BBC, IMD, UN News, Al Jazeera, ICC, EU Council,
PBOC), not stated as fact.
