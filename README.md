# Self

Static website for Self Center (https://selfcounselingcenter.com/), deployed to GitHub Pages from `main`.

## Adding or changing a team member

- Team page content (English + Arabic bios): `js/team-data.js`
- Home page team cards: `TEAM_META` in `js/i18n.js`
- Photos: keep the 1080×1080 PNG master in `assets/team/`, and reference an 860×860 WebP copy
  (the PNGs are ~500 KB each; the WebP copies are ~30 KB with no visible difference):

  ```sh
  python3 -c "from PIL import Image; Image.open('assets/team/NAME.png').convert('RGB').resize((860, 860), Image.LANCZOS).save('assets/team/NAME.webp', quality=86, method=6)"
  ```

- When you add or remove a page, also update `sitemap.xml`.
