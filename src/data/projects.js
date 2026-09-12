// Single source of truth for every project surface: the homepage preview,
// the /projects grid, and the /projects/:slug detail template.
//
// PLACEHOLDER COPY — the structure is final, the words are not. Replace
// `problem`, `responsibilities`, `features`, `challenge`, `solution` and
// `outcome` with real content. `icon` keys map to src/data/techIcons.jsx.

export const categories = [
  "Web App",
  "E-commerce",
  "Real Estate",
  "Marketing Site",
  "Tools",
];

export const projects = [
  {
    slug: "itsolera",
    title: "ITSolera",
    tagline: "Company platform for a software house, from brand site to client portal.",
    category: "Web App",
    featured: true,
    role: "Full-Stack Developer",
    duration: "4 months",
    type: "Client",
    status: "Live",
    coverImage: "/itsolera.webp",
    githubUrl: "https://github.com/waqas-gul/itsolera",
    liveUrl: "https://itsolera.com/",
    problem:
      "ITSolera was running its entire client intake through email and spreadsheets, which made it impossible to track where any project actually stood. They needed a single public-facing site and an internal portal that shared one source of truth.",
    responsibilities: [
      "Designed the database schema for clients, projects and service enquiries",
      "Built the authenticated client portal with role-based access",
      "Implemented the enquiry pipeline from public form through to internal dashboard",
      "Set up image upload and optimisation via a CDN",
      "Handled deployment and environment configuration",
    ],
    techStack: [
      { name: "React.js", icon: "react", reason: "Component reuse across the public site and the portal." },
      { name: "Express.js", icon: "express", reason: "Thin, explicit API layer that was quick to reason about." },
      { name: "Node.js", icon: "node", reason: "One language across the whole stack cut context switching." },
      { name: "MongoDB", icon: "mongodb", reason: "Enquiry documents varied in shape between service types." },
      { name: "Redux", icon: "redux", reason: "Portal state was shared across many disconnected screens." },
      { name: "Tailwindcss", icon: "tailwind", reason: "Kept spacing and colour consistent without a separate design system." },
      { name: "Figma", icon: "figma", reason: "Agreed layouts with the client before any code was written." },
    ],
    features: [
      {
        image: "/itsolera.webp",
        title: "Public service pages",
        description:
          "Each service has its own page generated from the same content model, so adding a service does not mean adding a page.",
      },
      {
        image: "/dashboard.webp",
        title: "Client portal dashboard",
        description:
          "Clients see only their own projects, with status, latest update and attached files in one view.",
      },
      {
        image: "/project.webp",
        title: "Enquiry pipeline",
        description:
          "Submissions from the public form land directly in the internal queue with a status that staff can move along.",
      },
    ],
    challenge:
      "The public site and the client portal shared components but needed completely different auth behaviour, and early on a single misconfigured route exposed portal data to unauthenticated requests.",
    solution:
      "I split the API into clearly separated public and authenticated routers, moved the auth check into router-level middleware rather than per-endpoint, and added tests covering the unauthenticated case for every protected route.",
    outcome:
      "Replaced the spreadsheet workflow entirely. Placeholder: add real numbers here (enquiries handled per month, time saved, uptime) once you have them.",
  },
  {
    slug: "foodlakay",
    title: "Foodlakay",
    tagline: "Multilingual ordering and presence site for a French food business.",
    category: "E-commerce",
    featured: true,
    role: "Frontend Developer",
    duration: "3 months",
    type: "Freelance",
    status: "Live",
    coverImage: "/lidialakay.webp",
    githubUrl: "https://github.com/waqas-gul/foodlakay",
    liveUrl: "https://lidialakay.fr/fr",
    problem:
      "The business was taking every order over the phone and losing them at busy times. They needed a site that worked in French first, loaded quickly on mobile data, and let customers order without calling.",
    responsibilities: [
      "Built the French-first routing structure with locale-prefixed URLs",
      "Implemented the menu browsing and cart flow",
      "Optimised images and fonts for slow mobile connections",
      "Integrated the order submission and confirmation flow",
      "Made the whole site keyboard and screen-reader navigable",
    ],
    techStack: [
      { name: "Next Js", icon: "next", reason: "Routing per locale and server rendering for search visibility." },
      { name: "Postgresql", icon: "postgres", reason: "Orders and menu items are strongly relational." },
      { name: "Redux", icon: "redux", reason: "Cart state had to survive navigation between menu sections." },
      { name: "TailwindCss", icon: "tailwind", reason: "Fast iteration while matching an existing brand palette." },
      { name: "JavaScript", icon: "javascript", reason: "Team familiarity and no build-time type overhead needed." },
      { name: "Figma", icon: "figma", reason: "The client approved every screen before build." },
    ],
    features: [
      {
        image: "/lidialakay.webp",
        title: "Locale-first routing",
        description:
          "French is the default rather than a translation layer bolted on, so the primary audience never sees a language switch.",
      },
      {
        image: "/real.webp",
        title: "Menu and cart",
        description:
          "Items can be added from any point in the menu without losing scroll position or cart contents.",
      },
      {
        image: "/lms.webp",
        title: "Order confirmation",
        description:
          "Customers get an immediate on-screen confirmation with an order reference they can quote by phone.",
      },
    ],
    challenge:
      "Cart state was being lost whenever a customer switched menu category, because each category was a separate route and the cart lived in component state.",
    solution:
      "Moved the cart into a Redux slice persisted to storage, so it survives navigation and a full page reload. Added a rehydration guard so a stale cart older than a day is cleared rather than silently restored.",
    outcome:
      "Orders moved off the phone. Placeholder: add real figures (online order share, average basket, page load time) once measured.",
  },
  {
    slug: "zaroori-zameen",
    title: "Zaroori Zameen",
    tagline: "Property listing and search platform for the Pakistani market.",
    category: "Real Estate",
    featured: true,
    role: "Full-Stack Developer",
    duration: "5 months",
    type: "Personal",
    status: "In Progress",
    coverImage: "/real.webp",
    githubUrl: "https://github.com/waqas-gul/foodlakay",
    liveUrl: "https://lidialakay.fr/fr",
    problem:
      "Property listings in the region are scattered across social media posts with no structured search. Buyers cannot filter by the things they actually care about, like plot size, location and price band.",
    responsibilities: [
      "Modelled listings, locations and price history",
      "Built multi-criteria search with filters that combine",
      "Implemented the listing creation flow with multi-image upload",
      "Added saved searches and favourites for signed-in users",
      "Built the agent dashboard for managing active listings",
    ],
    techStack: [
      { name: "React.js", icon: "react", reason: "Search results update constantly; the component model suits it." },
      { name: "Express.js", icon: "express", reason: "Straightforward REST layer over the search queries." },
      { name: "Node.js", icon: "node", reason: "Shared validation logic between client and server." },
      { name: "MongoDB", icon: "mongodb", reason: "Listing attributes vary widely between property types." },
      { name: "Redux", icon: "redux", reason: "Filter state is read by results, map and summary at once." },
      { name: "Material UI", icon: "mui", reason: "Dense form controls for the filter panel, ready-made." },
      { name: "Tailwindcss", icon: "tailwind", reason: "Layout work outside the MUI form components." },
    ],
    features: [
      {
        image: "/real.webp",
        title: "Combined filters",
        description:
          "Price, size, location and property type all narrow the same result set, and the URL reflects the active filters so a search can be shared.",
      },
      {
        image: "/dashboard.webp",
        title: "Agent dashboard",
        description:
          "Agents manage their own listings, see view counts, and mark properties as sold without contacting an administrator.",
      },
      {
        image: "/project.webp",
        title: "Saved searches",
        description:
          "Buyers store a filter combination and return to it, rather than rebuilding the same search on every visit.",
      },
    ],
    challenge:
      "Search response times degraded badly once listings passed a few thousand rows, because every filter combination triggered a full collection scan.",
    solution:
      "Added compound indexes matched to the most common filter combinations and restructured the query to narrow on the most selective field first. Response times dropped from seconds to well under a hundred milliseconds.",
    outcome:
      "Currently in progress. Placeholder: replace with listing counts and search performance figures at launch.",
  },
  {
    slug: "flowadmin",
    title: "FlowAdmin React",
    tagline: "Free open-source Tailwind admin dashboard template.",
    category: "Tools",
    featured: false,
    role: "Frontend Developer",
    duration: "6 weeks",
    type: "Personal",
    status: "Live",
    coverImage: "/dashboard.webp",
    githubUrl: "https://github.com/waqas-gul/react-tailwind-admin-dashboard-main",
    liveUrl: "https://68b5af81d6dac40637705bfe--flowadmin1.netlify.app/",
    problem:
      "Most free admin templates ship as one enormous bundle with every widget enabled, so anyone using them starts by deleting code. I wanted a starting point that was genuinely small.",
    responsibilities: [
      "Designed the component API so sections can be removed cleanly",
      "Built the chart, table and form primitives",
      "Implemented light and dark themes from shared design tokens",
      "Wrote the typed prop contracts for every public component",
      "Documented usage for each component",
    ],
    techStack: [
      { name: "React.js", icon: "react", reason: "The audience for a React template is React developers." },
      { name: "typeScript", icon: "typescript", reason: "Typed props are the main quality signal in a template." },
      { name: "Redux", icon: "redux", reason: "Demonstrates a realistic state pattern rather than toy local state." },
      { name: "Material UI", icon: "mui", reason: "Used selectively for complex controls only." },
      { name: "Tailwindcss", icon: "tailwind", reason: "Consumers restyle with utility overrides, no CSS surgery." },
      { name: "Figma", icon: "figma", reason: "Kept the component set visually coherent." },
    ],
    features: [
      {
        image: "/dashboard.webp",
        title: "Composable layout",
        description:
          "Sidebar, topbar and content area are independent, so removing one does not break the others.",
      },
      {
        image: "/project.webp",
        title: "Themed from tokens",
        description:
          "Light and dark modes read the same variables, so a rebrand is a token change rather than a rewrite.",
      },
    ],
    challenge:
      "Supporting both themes without doubling the CSS, while letting consumers override any colour without editing template source.",
    solution:
      "Every colour resolves through CSS custom properties defined once per theme. Consumers redefine the variables in their own stylesheet and the whole template follows, with no build step or fork required.",
    outcome:
      "Published as an open-source template. Placeholder: add GitHub stars, forks or download counts once available.",
  },
  {
    slug: "shadesco",
    title: "Shadesco",
    tagline: "Marketing site for a Dubai-based cleaning company.",
    category: "Marketing Site",
    featured: false,
    role: "Frontend Developer",
    duration: "3 weeks",
    type: "Client",
    status: "Live",
    coverImage: "/shadesco.ae_.webp",
    githubUrl: "https://github.com/waqas-gul/cleaning-company-website",
    liveUrl: "https://shadesco.ae/",
    problem:
      "The company had no web presence at all and was relying entirely on word of mouth. They needed something credible and fast to build, with a clear route to contacting them.",
    responsibilities: [
      "Built the full responsive marketing site from an agreed design",
      "Implemented the service breakdown and quote request form",
      "Optimised for first-load speed on mobile connections",
      "Set up basic on-page SEO and structured metadata",
    ],
    techStack: [
      { name: "HTML", icon: "html", reason: "A brochure site does not need a framework runtime." },
      { name: "Bootstrap", icon: "bootstrap", reason: "Fastest path to a solid responsive grid on a short timeline." },
      { name: "JavaScript", icon: "javascript", reason: "Only the small amount needed for the form and nav." },
      { name: "Figma", icon: "figma", reason: "Design signed off before build started." },
    ],
    features: [
      {
        image: "/shadesco.ae_.webp",
        title: "Service breakdown",
        description:
          "Each service is presented with scope and context so enquiries arrive better qualified.",
      },
      {
        image: "/project.webp",
        title: "Quote request",
        description:
          "A short form captures the details needed to price a job, cutting the usual back-and-forth.",
      },
    ],
    challenge:
      "The brief called for a rich, image-heavy design, but the audience is largely on mobile data where that would have meant an unusable first load.",
    solution:
      "Compressed and correctly sized every asset, deferred everything below the fold, and inlined the critical CSS. The design survived intact while the initial payload stayed small.",
    outcome:
      "Gave the business its first web presence. Placeholder: add enquiry volume or search ranking once tracked.",
  },
  {
    slug: "sportsbuzz",
    title: "SportsBuzz",
    tagline: "Learning platform with course delivery and media hosting.",
    category: "Web App",
    featured: false,
    role: "Full-Stack Developer",
    duration: "4 months",
    type: "Personal",
    status: "In Progress",
    coverImage: "/lms.webp",
    githubUrl: "",
    liveUrl: "https://sportsbuzz.com",
    problem:
      "Coaching content was spread across chat groups and video links with no structure, so learners had no sense of order or progress through the material.",
    responsibilities: [
      "Built course, module and lesson data models",
      "Implemented video upload and streaming via a media CDN",
      "Added progress tracking per learner",
      "Built the instructor course-authoring interface",
      "Implemented authentication and enrolment",
    ],
    techStack: [
      { name: "React.js", icon: "react", reason: "Course player state changes constantly during playback." },
      { name: "Express.js", icon: "express", reason: "Simple API surface over courses and progress." },
      { name: "Node.js", icon: "node", reason: "Streaming uploads without a second runtime." },
      { name: "MongoDB", icon: "mongodb", reason: "Nested course/module/lesson structure maps naturally." },
      { name: "Cloudinary", icon: "cloudinary", reason: "Video transcoding and delivery without self-hosting." },
      { name: "Redux", icon: "redux", reason: "Playback and progress state shared across the player UI." },
      { name: "Tailwindcss", icon: "tailwind", reason: "Consistent spacing across many similar lesson screens." },
    ],
    features: [
      {
        image: "/lms.webp",
        title: "Structured courses",
        description:
          "Content is ordered into modules and lessons so learners always know what comes next.",
      },
      {
        image: "/dashboard.webp",
        title: "Progress tracking",
        description:
          "Completion is recorded per lesson and surfaced as overall course progress.",
      },
      {
        image: "/project.webp",
        title: "Instructor authoring",
        description:
          "Instructors build and reorder their own courses without developer involvement.",
      },
    ],
    challenge:
      "Large video uploads were timing out and, when they failed near the end, the whole upload had to restart from zero.",
    solution:
      "Switched to chunked uploads sent directly to the media CDN with resume support, so a dropped connection continues from the last completed chunk instead of restarting.",
    outcome:
      "In active development. Placeholder: add learner numbers and completion rates once live.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const getProjectBySlug = (slug) =>
  projects.find((p) => p.slug === slug) ?? null;

// Wraps around, so the last project links back to the first.
export const getNextProject = (slug) => {
  const i = projects.findIndex((p) => p.slug === slug);
  if (i === -1) return null;
  return projects[(i + 1) % projects.length];
};
