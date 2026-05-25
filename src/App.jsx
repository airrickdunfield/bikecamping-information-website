import { useEffect, useState } from "react";

const homePath = "/";

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
  { path: homePath },
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
    <>
      <nav className="site-menu" aria-label="Main navigation">
        <ul role="menu-bar">
          <li
            className={currentPath === homePath ? "is-active" : undefined}
            role="menu-item"
            tabIndex="0"
            aria-haspopup="false"
          >
            <a
              href={homePath}
              aria-current={currentPath === homePath ? "page" : undefined}
              onClick={(event) => navigateTo(event, homePath)}
            >
              Bikecamping BC
            </a>
          </li>
          <li
            className={currentPath === "/about" ? "is-active" : undefined}
            role="menu-item"
            tabIndex="0"
            aria-haspopup="false"
          >
            <a
              href="/about"
              aria-current={currentPath === "/about" ? "page" : undefined}
              onClick={(event) => navigateTo(event, "/about")}
            >
              About
            </a>
          </li>
          <li
            className={isGearRoute ? "is-active" : undefined}
            role="menu-item"
            tabIndex="0"
            aria-haspopup="true"
          >
            <a
              className="has-dropdown"
              href="/gear"
              aria-current={isGearRoute ? "page" : undefined}
              onClick={(event) => navigateTo(event, "/gear")}
            >
              Gear
            </a>
            <ul role="menu">
              {gearPages.map((page) => (
                <li role="menu-item" key={page.path}>
                  <a
                    href={page.path}
                    aria-current={currentPath === page.path ? "page" : undefined}
                    onClick={(event) => navigateTo(event, page.path)}
                  >
                    {page.title}
                  </a>
                </li>
              ))}
            </ul>
          </li>
          <li
            className={currentPath === "/community" ? "is-active" : undefined}
            role="menu-item"
            tabIndex="0"
            aria-haspopup="false"
          >
            <a
              href="/community"
              aria-current={currentPath === "/community" ? "page" : undefined}
              onClick={(event) => navigateTo(event, "/community")}
            >
              Community
            </a>
          </li>
        </ul>
      </nav>

      <main>
        {currentPath === homePath && <HomePage navigateTo={navigateTo} />}
        {currentPath === "/about" && <AboutPage />}
        {currentPath === "/gear" && <GearPage navigateTo={navigateTo} />}
        {activeGearPage && <GearDetailPage page={activeGearPage} />}
        {currentPath === "/community" && <CommunityPage />}
        {!routes.some((route) => route.path === currentPath) &&
          !activeGearPage && <NotFoundPage navigateTo={navigateTo} />}
      </main>
    </>
  );
}

function HomePage({ navigateTo }) {
  return (
    <>
      <PageWindow title="Bikecamping BC" details={["Home", "Beginner Guide"]}>
        <h1>Start bike camping without making it weirdly complicated.</h1>
        <p>
          A friendly starting point for curious riders in Vancouver and British
          Columbia who want to try a simple overnight trip by bike.
        </p>
        <section className="field-row">
          <a
            className="btn btn-default"
            href="/gear"
            onClick={(event) => navigateTo(event, "/gear")}
          >
            Browse gear basics
          </a>
          <a
            className="btn"
            href="/community"
            onClick={(event) => navigateTo(event, "/community")}
          >
            Find community
          </a>
        </section>
      </PageWindow>

      <div className="window">
        <div className="title-bar">
          <button aria-label="Close" className="close"></button>
          <h2 className="title">First Trip Checklist</h2>
          <button aria-label="Resize" className="resize"></button>
        </div>
        <div className="separator"></div>
        <div className="window-pane">
          <p>Keep the first plan small.</p>
          <ol>
            {beginnerSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </div>

      <div className="standard-dialog center">
        <h2 className="dialog-text">Short ride. Simple camp. Good snacks.</h2>
      </div>
    </>
  );
}

function AboutPage() {
  return (
    <PageWindow title="About" details={["Project", "Plain Language"]}>
      <h1>A practical companion for first trips.</h1>
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
    <PageWindow title="Gear" details={["Bikes", "Bags", "Tents"]}>
      <h1>The basic setup areas.</h1>
      <p>
        These starter pages will hold plain-language notes about the biggest
        gear choices for a first bike camping trip.
      </p>

      {gearPages.map((item) => (
        <section key={item.title}>
          <h2>{item.title}</h2>
          <p>{item.text}</p>
          <a
            className="btn"
            href={item.path}
            onClick={(event) => navigateTo(event, item.path)}
          >
            Open {item.title.toLowerCase()}
          </a>
          <hr />
        </section>
      ))}
    </PageWindow>
  );
}

function GearDetailPage({ page }) {
  return (
    <PageWindow title={page.title} details={["Gear", "Draft Content"]}>
      <h1>{page.title}</h1>
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
    <PageWindow title="Community" details={["Groups", "Resources"]}>
      <h1>Riding with others can make starting easier.</h1>
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
    <PageWindow title="Missing Page" details={["404", "Not Found"]}>
      <h1>That page is not here yet.</h1>
      <p>
        The site does not have content for this address yet. Head back home and
        keep exploring from there.
      </p>
      <a
        className="btn btn-default"
        href={homePath}
        onClick={(event) => navigateTo(event, homePath)}
      >
        Back home
      </a>
    </PageWindow>
  );
}

function PageWindow({ title, details, children }) {
  // This markup follows System.css window examples: title bar, details bar, pane.
  return (
    <section className="window">
      <div className="title-bar">
        <button aria-label="Close" className="close"></button>
        <h1 className="title">{title}</h1>
        <button aria-label="Resize" className="resize"></button>
      </div>
      <div className="details-bar">
        {details.map((detail) => (
          <span key={detail}>{detail}</span>
        ))}
      </div>
      <div className="window-pane">{children}</div>
    </section>
  );
}

export default App;
