import { useEffect, useState } from "react";

const gearPages = [
  {
    title: "Bikes",
    path: "/gear/bikes",
    text: "Start with the bike you already have. Most beginner trips are about comfort, simple repairs, and knowing how your bike feels with a little extra weight.",
  },
  {
    title: "Bags",
    path: "/gear/bags",
    text: "Bike bags help carry food, layers, tools, and camp supplies. You do not need a perfect setup to begin; you need a setup that stays secure and feels manageable.",
  },
  {
    title: "Tents",
    path: "/gear/tents",
    text: "A good shelter should be easy to pack, simple to set up, and comfortable enough for the kind of weather you expect.",
  },
];

const beginnerSteps = [
  "Pick a short route close to home.",
  "Plan one overnight instead of a long expedition.",
  "Bring food you know you like eating outside.",
  "Test your packed bike before the trip day.",
];

const routes = [
  { path: "/" },
  { path: "/about" },
  { path: "/gear" },
  { path: "/community" },
];

function getCurrentPath() {
  return window.location.pathname;
}

function App() {
  const [currentPath, setCurrentPath] = useState(getCurrentPath);

  useEffect(() => {
    function handlePopState() {
      setCurrentPath(getCurrentPath());
    }

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  function navigateTo(event, path) {
    event.preventDefault();

    if (path !== currentPath) {
      window.history.pushState({}, "", path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const activeGearPage = gearPages.find((page) => page.path === currentPath);
  const isGearRoute = currentPath === "/gear" || currentPath.startsWith("/gear/");

  return (
    <div className="site-shell">
      <header className="site-header">
        <a
          className="brand"
          href="/"
          onClick={(event) => navigateTo(event, "/")}
          aria-label="Bikecamping BC home"
        >
          <span className="brand-icon" aria-hidden="true">
            BC
          </span>
          <span>Bikecamping BC</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a
            href="/about"
            aria-current={currentPath === "/about" ? "page" : undefined}
            onClick={(event) => navigateTo(event, "/about")}
          >
            About
          </a>

          <div className="nav-dropdown">
            <a
              href="/gear"
              aria-current={isGearRoute ? "page" : undefined}
              onClick={(event) => navigateTo(event, "/gear")}
            >
              Gear
            </a>
            <div className="dropdown-menu" aria-label="Gear pages">
              {gearPages.map((page) => (
                <a
                  href={page.path}
                  key={page.path}
                  aria-current={currentPath === page.path ? "page" : undefined}
                  onClick={(event) => navigateTo(event, page.path)}
                >
                  {page.title}
                </a>
              ))}
            </div>
          </div>

          <a
            href="/community"
            aria-current={currentPath === "/community" ? "page" : undefined}
            onClick={(event) => navigateTo(event, "/community")}
          >
            Community
          </a>
        </nav>
      </header>

      <main>
        {currentPath === "/" && <HomePage navigateTo={navigateTo} />}
        {currentPath === "/about" && <AboutPage />}
        {currentPath === "/gear" && <GearPage navigateTo={navigateTo} />}
        {activeGearPage && <GearDetailPage page={activeGearPage} />}
        {currentPath === "/community" && <CommunityPage />}
        {!routes.some((route) => route.path === currentPath) &&
          !activeGearPage && <NotFoundPage navigateTo={navigateTo} />}
      </main>
    </div>
  );
}

function HomePage({ navigateTo }) {
  return (
    <>
      <section className="hero">
        <div className="window">
          <div className="window-bar" aria-hidden="true">
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="window-body hero-layout">
            <div>
              <p className="eyebrow">Beginner guide</p>
              <h1>Start bike camping without making it weirdly complicated.</h1>
              <p className="intro">
                A friendly starting point for curious riders in Vancouver and
                British Columbia who want to try a simple overnight trip by
                bike.
              </p>
              <div className="hero-actions">
                <a
                  className="button primary"
                  href="/gear"
                  onClick={(event) => navigateTo(event, "/gear")}
                >
                  Browse gear basics
                </a>
                <a
                  className="button"
                  href="/community"
                  onClick={(event) => navigateTo(event, "/community")}
                >
                  Find community
                </a>
              </div>
            </div>

            <div className="map-card" aria-label="Simple bike camping route sketch">
              <span className="route-dot start"></span>
              <span className="route-line"></span>
              <span className="route-dot camp"></span>
              <p>Short ride. Simple camp. Good snacks.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="content-band steps-band">
        <div className="section-heading">
          <p className="eyebrow">First trip</p>
          <h2>Keep the first plan small.</h2>
        </div>

        <ol className="step-list">
          {beginnerSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>
    </>
  );
}

function AboutPage() {
  return (
    <PageWindow eyebrow="About" title="A practical companion for first trips.">
      <p>
        This site will collect plain-language advice about routes, gear,
        planning, and local groups. The content here is placeholder text for
        now, but the structure is ready for real writing as the project grows.
      </p>
    </PageWindow>
  );
}

function GearPage({ navigateTo }) {
  return (
    <section className="content-band">
      <div className="section-heading">
        <p className="eyebrow">Gear</p>
        <h1>The basic setup areas.</h1>
        <p>
          These starter pages will hold plain-language notes about the biggest
          gear choices for a first bike camping trip.
        </p>
      </div>

      <div className="gear-grid">
        {gearPages.map((item) => (
          <article className="window mini-window" key={item.title}>
            <div className="window-bar" aria-hidden="true">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <div className="window-body">
              <h2>{item.title}</h2>
              <p>{item.text}</p>
              <a
                className="button"
                href={item.path}
                onClick={(event) => navigateTo(event, item.path)}
              >
                Open {item.title.toLowerCase()}
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function GearDetailPage({ page }) {
  return (
    <PageWindow eyebrow="Gear" title={page.title}>
      <p>{page.text}</p>
      <p>
        This page is ready for your notes, photos, examples, and beginner tips
        about {page.title.toLowerCase()}.
      </p>
    </PageWindow>
  );
}

function CommunityPage() {
  return (
    <PageWindow
      eyebrow="Community"
      title="Riding with others can make starting easier."
    >
      <p>
        This section will eventually list local riding groups, workshops, and
        beginner-friendly resources. For now it marks the home for that future
        content.
      </p>
    </PageWindow>
  );
}

function NotFoundPage({ navigateTo }) {
  return (
    <PageWindow eyebrow="Missing page" title="That page is not here yet.">
      <p>
        The site does not have content for this address yet. Head back home and
        keep exploring from there.
      </p>
      <a
        className="button primary"
        href="/"
        onClick={(event) => navigateTo(event, "/")}
      >
        Back home
      </a>
    </PageWindow>
  );
}

function PageWindow({ eyebrow, title, children }) {
  return (
    <section className="page-section">
      <div className="window">
        <div className="window-bar" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="window-body page-window-body">
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <div className="page-copy">{children}</div>
        </div>
      </div>
    </section>
  );
}

export default App;
