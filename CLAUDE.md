# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static single-page site for the *comité des fêtes* of Cieutat (Hautes-Pyrénées, Bigorre), presenting the annual Saint-Barthélemy festival. Angular 20 + Angular Material, no backend. All content is in French; keep it that way (including commit messages, which follow the existing `feat:` / `fix:` + French summary style).

The site is currently on the **2026 edition (28–31 August 2026)**.

## Commands

```bash
npm install              # required — node_modules is not checked in
npm start                # ng serve → http://localhost:4200
npm run build            # ng build (defaults to the production configuration)
npm run watch            # ng build --watch --configuration development
npm test                 # ng test (Karma + Jasmine, Chrome)
npx ng test --include='**/home.spec.ts'   # run a single spec file
npx ng test --watch=false --browsers=ChromeHeadless   # single CI-style run
```

`ng test` runs and passes (8 smoke specs, one per component). Coverage is only "does it instantiate" — a green run means nothing broke structurally, not that behaviour is verified. Any spec for a component using `routerLink` / `<router-outlet>` needs `providers: [provideRouter([])]` in its TestBed.

## Architecture

**Standalone components throughout** — there are no NgModules. Bootstrap is `src/main.ts` → `appConfig` (`src/app/app.config.ts`) → `provideRouter(routes)`. Each component declares its own Material imports in the `imports:` array of its `@Component` decorator.

**Routes** (`src/app/app.routes.ts`): `/`, `/programme`, `/chants`, `/galerie`, `/partenaires`, plus a `**` redirect to `/`. `/partenaires` is deliberately absent from the header nav — it is reached from the footer only, at the committee's request. `App` (`src/app/app.ts`) is a fixed `HeaderComponent` + `<router-outlet>` + `FooterComponent` shell.

**All festival content is hardcoded**, not fetched:
- `src/app/services/festival.ts` — `FestivalService` is the single source of truth for the edition: `edition`, `dates`, `boutiqueUrl`, `motDuComite`, the 4-day `programme`, the `repas` (menu + reservation contacts), the `tshirt` block and the songbook list, all returned via `of(...)`. Rolling the site over to a new year means editing this one file, not the templates.
  **Only put in it what is actually printed on the committee's material** (affiche, flyer, Instagram carousel). `Event.description` and `Event.lieu` are optional precisely so unstated details stay absent rather than being invented — several 2026 events genuinely have no venue printed.
- `src/app/galerie/galerie.ts` — the gallery image list lives inline in `allImages`, with a "voir plus" pager (`initialImagesCount = 3`, +3 per click).
- The HelloAsso shop URL lives once in `FestivalService.boutiqueUrl` (it is year-specific — the 2026 one ends in `/boutiques/le-t-shirt-cieutatois-2026`). The Facebook/Instagram links are still hardcoded in `footer.html` and `home.html`.

`src/app/models/event.model.ts` defines `Event` (with `jour` narrowed to `'vendredi' | 'samedi' | 'dimanche' | 'lundi'`, plus optional `description`, `lieu` and `artistes`), `JourProgramme`, `Chant`, `MenuFormule`, `Contact`, `Repas` and `Tshirt`. Event `icon` values are Material Icons ligature names. `Contact` carries both the printed `telephone` (display) and `tel` (international, for `tel:` links) — build `href`s from `tel`, never by transforming the display string in the template.

## Styling

The visual identity is re-derived from the committee's own material **every year**. The 2026 edition copies the Instagram carousel directly, and the whole site is built from three ideas only — keep new work inside them rather than inventing a fourth:

1. **One background**: the `--mariniere` blue/white stripes, set once on `main` in `app.scss`. No section defines its own background.
2. **One container**: `.etiquette` — the cream, scallop-edged "stamp" from the stories. Every section is one etiquette; pages are just a `.pile` of them (`display:flex; column; gap`). Inside an etiquette, sub-blocks use `.carte` (plain white, rounded). Nothing else.
   `.etiquette--titre` is the inverted variant (navy ground, cream heading): it is what marks a page's title banner apart from the content below it, since otherwise the first etiquette reads as just another section. Inner pages open with one; the home page instead opens on the logo lock-up, which is distinctive enough on its own. Title banners carry no corner ornaments — the line art is drawn in navy and would vanish.
   Corner ornaments come from `public/assets/decor/*.svg` — hand-drawn line art (bunting, sparkles, mirror ball, balloons, scallop shell, starfish, clinking glasses, party hats) matching the stories' stroke style: `fill:none`, `stroke:#1a2a72`, `stroke-width:2.6`, round caps, 100×100 viewBox. Place them with `.decor` + `.decor-hg/-hd/-bg/-bd`, always `alt="" aria-hidden="true"`. Any new one must match that stroke recipe or not exist.
3. **One type scale**, matching the posts:
   - `--titre` = **Poppins** 600/700, uppercase → all `h1`–`h4`, buttons, `.heure`, `.prix`
   - `--serif` = **Playfair Display** → body copy, and `.surtitre` (the letterspaced "FÊTE DE CIEUTAT 2026" line above every title)
   - `.vedette` (serif bold) marks a band or podium name, inline in a sentence — as on the slides.

`src/styles.scss` owns all of it: the M2 theme built on two hand-written palettes (`$navy-palette`, `$orange-palette`), the `--navy / --ink / --sky / --cream / --orange / --red` custom properties, and the shared `.container / .etiquette / .carte / .surtitre / .heure / .vedette` helpers. Component stylesheets should only do layout.

The scallop edge — the stamp-perforation / doily border lifted from the stories' cream block — is a five-layer `mask`: one repeating inline-SVG strip per side, plus a centre `linear-gradient`, with `-webkit-mask` alongside.

The thing that makes it look finished rather than sloppy is **`mask-repeat: round`** on the repeating axis of each strip (`round no-repeat` for the top/bottom bands, `no-repeat round` for the sides). It stretches the tile slightly so a whole number of scallops fits each edge exactly. A fixed `px` tile leaves a clipped tooth at the end of every run — which is unavoidable otherwise, since etiquette heights range from ~200px to ~2000px. Keep `--pas` (tile pitch) and `--dent` (tooth depth) roughly at a 2:1 ratio so scallops stay near half-circles.

The four strips overlap at the angles — mask layers add up — which leaves a small filled square in each corner. `border-radius: calc(var(--dent) * 2.9)` crops it into a fully round corner; that ratio was picked by comparison (below it the square still shows, above it the stamp look turns into a plain rounded card). Change `--dent` and the corner follows automatically.

Because the mask crops the element: `box-shadow` would be clipped, so the shadow is a `filter: drop-shadow()`; and nothing may be positioned outside the etiquette's box.

**Two scrolling rules that are load-bearing — do not "tidy" them away:**

- `html, body` use `overflow-x: **clip**`, never `hidden`, and must not set `height: 100%`. Either one turns `body` into the scroll container, `document.documentElement.scrollHeight` collapses to the viewport height, and the sticky header stops working.
- The sticky header is on `app-header`'s `:host`, **not** on `.header-toolbar`. `position: sticky` is bounded by its parent, and `<app-header>` is exactly the height of the bar — sticking it inside would pin it to nothing.

The stripe background lives on `main` and **scrolls with the content**. `background-attachment: fixed` was tried and reverted: stripes sliding under the etiquettes produce a moiré that is genuinely unpleasant to read. Stripe pitch is wide (64px bands) for the same reason.

Decorative Material icons were deliberately removed — the committee's visuals carry none, and they were the main source of clutter. Icons remain only where they are the control itself (hamburger, social links).

**Component style budgets**: `angular.json` warns at 8kB and **errors at 12kB** per component stylesheet. Sheets are currently 1–4kB each because the shared helpers do the work; if one starts growing past ~6kB, that usually means a global helper is missing.

**Responsive**: mobile-first is a hard requirement (festival-goers read this on a phone). Layouts use `clamp()` and `repeat(auto-fit, minmax(...))`, so most breakpoints are implicit; the explicit ones are 768px (header switches to the hamburger `mat-menu`, footer centres) and ~760px (two-column sections collapse). Verify at 390 / 768 / 1280 before considering a visual change done — see below.

### Checking the rendering

`ng build` catches nothing visual. To actually look at the site, `npx ng serve --port 4321`, then drive Chrome over CDP (puppeteer-core against `/usr/bin/google-chrome`; there is no puppeteer dependency in the project, install it in a scratch dir).

**`google-chrome --headless --screenshot --window-size=W,H` is useless here**: it does not apply the window size as the CSS layout viewport, so the page renders at ~980px and every mobile capture looks catastrophically broken. Use `page.setViewport({width, height, isMobile: true})` instead. A cheap overflow check that catches real regressions:

```js
await page.evaluate(() => {
  const vw = document.documentElement.clientWidth;
  return [...document.querySelectorAll('body *')]
    .filter(el => { const r = el.getBoundingClientRect();
                    return r.width > 0 && (r.right > vw + 1 || r.left < -1); })
    .map(el => el.tagName + '.' + el.className);
});
```

## Deployment

There is no CI, hosting config, or deploy script in the repo — `ng build` output in `dist/` is deployed manually.
