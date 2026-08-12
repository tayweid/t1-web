# T1_Web

Classroom animation presenter used in ECON 0100 (fall 2024): a static site of
manim-animated episode pages with a custom JS player (pause points, scrubbing,
export). Successor project: `maniml`. This repo carries the player's development
history (as `T1_Presenter`, Aug 2024) with the classroom deployment
committed on top.

- `index.html` — episode index (was `main.html`)
- `PartA–PartD/` — episode pages (`PartX_EN.html` + `PartX_EN.js`), with
  their videos bundled alongside as `PartX_EN.mp4`
- `css/`, `js/` — player styles and logic
- `archive/` — old lecture pages and raw manim renders (kept as backup)

Serving: designed for GitHub Pages (deploy from `main`, root). All video
sources are local except **PartD_E0/E1**, which were never rendered to a
combined `media.mp4` — those two pages have no playable video (per-animation
clips exist in `ECON_0100/Animations_alt/Episode_D*` if ever needed).

Original next-steps note (2024): make a research page and a public facing
version for students to click through, with reduced controls (no scrubbing,
exporting, or modifiable/visible pause points).
