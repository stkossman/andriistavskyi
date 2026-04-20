<div align="center">
  <img src="https://github.com/stkossman/stkossman/blob/57bfb936de34fa343dcd7d2db8fb98e3288f3367/nanami.gif" alt="nanami kento adjusting tie" width="800" />
  
  <br />
  <br />

  <h1>andriistavskyi.me</h1>
  <p>Personal portfolio and digital workspace. Built with clear architecture, intentional design, and zero unnecessary noise.</p>

  <sub>[web](https://andriistavskyi.me) &ensp;·&ensp; [linkedin](https://linkedin.com/in/andriistavskyi) &ensp;·&ensp; [mail](mailto:an.stawski@outlook.com)</sub>
</div>

---

###### Architecture & Philosophy

This project rejects the "bloated portfolio" trend. It is built on a strictly modular, feature-sliced architecture adapted for Astro. 

Instead of dumping everything into a global components folder, the repository strictly separates concerns:
- **`src/const/`**: All textual data and dictionaries live here. UI components are completely stateless and decoupled from content, paving the way for seamless i18n.
- **`src/components/pages/`**: Page-specific blocks (e.g., `AboutHero`, `TechArchive`) are collocated by domain. 
- **`src/styles/theme/`**: Tailwind CSS v4 variables are strictly categorized (`colors.css`, `typography.css`), eliminating the need for SCSS overhead.

###### The "Salaryman" Aesthetic
The UI defaults to a custom light theme inspired by Nanami Kento.

###### Custom Cursor & Interactions
Project preview cards feature a custom interactive cursor and a CSS-driven grayscale-to-color transition, keeping animations smooth and JavaScript execution minimal.

###### The 7:3 Ratio Divider
A custom SVG component (`<RatioDivider />`) acts as a mathematical layout separator across the site, subtly divided at exactly 70% of its length. 

###### Production-Ready SEO & Analytics
- **Metadata**: Centralized `<Seo />` component generating Open Graph, Twitter Cards, and dynamic Canonical URLs.
- **Structured Data**: JSON-LD (`@type: "WebSite"`) implemented for precise Google Search Engine Results Page (SERP) branding.
- **Telemetry**: Fully integrated with Vercel Web Analytics and Speed Insights for Core Web Vitals tracking.

---

###### Tech Stack

- **Framework:** [Astro](https://astro.build/) (Static Site Generation)
- **UI/Components:** [React](https://react.dev/) (Strictly for islands like the live Clock)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Typography:** `@fontsource-variable` (Unbounded & Arimo)
- **Package Manager:** [Bun](https://bun.sh/)
- **Deployment:** [Vercel](https://vercel.com/)

---

<div align="center">
<sub>End of file. Resume operations.</sub>
</div>
