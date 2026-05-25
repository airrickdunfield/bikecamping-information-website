const gearPages = [
  {
    title: "Bikes",
    text: "Start with the bike you already have. Most beginner trips are about comfort, simple repairs, and knowing how your bike feels with a little extra weight.",
  },
  {
    title: "Bags",
    text: "Bike bags help carry food, layers, tools, and camp supplies. You do not need a perfect setup to begin; you need a setup that stays secure and feels manageable.",
  },
  {
    title: "Tents",
    text: "A good shelter should be easy to pack, simple to set up, and comfortable enough for the kind of weather you expect.",
  },
];

const beginnerSteps = [
  "Pick a short route close to home.",
  "Plan one overnight instead of a long expedition.",
  "Bring food you know you like eating outside.",
  "Test your packed bike before the trip day.",
];

function App() {
  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#home" aria-label="Bikecamping BC home">
          <span className="brand-icon" aria-hidden="true">
            BC
          </span>
          <span>Bikecamping BC</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#about">About</a>
          <a href="#gear">Gear</a>
          <a href="#community">Community</a>
        </nav>
      </header>

      <main>
        <section className="hero" id="home">
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
                  <a className="button primary" href="#gear">
                    Browse gear basics
                  </a>
                  <a className="button" href="#community">
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

        <section className="content-band" id="about">
          <div className="section-heading">
            <p className="eyebrow">About</p>
            <h2>A practical companion for first trips.</h2>
          </div>
          <p>
            This site will collect plain-language advice about routes, gear,
            planning, and local groups. The content here is placeholder text for
            now, but the structure is ready for real writing as the project
            grows.
          </p>
        </section>

        <section className="content-band" id="gear">
          <div className="section-heading">
            <p className="eyebrow">Gear</p>
            <h2>The basic setup areas.</h2>
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
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
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

        <section className="content-band" id="community">
          <div className="section-heading">
            <p className="eyebrow">Community</p>
            <h2>Riding with others can make starting easier.</h2>
          </div>
          <p>
            This section will eventually list local riding groups, workshops,
            and beginner-friendly resources. For now it marks the home for that
            future content.
          </p>
        </section>
      </main>
    </div>
  );
}

export default App;
