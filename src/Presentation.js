import React from "react";

const clientRender = `
import ReactDOM from 'react-dom'

function render() {

  return (
    ReactDOM.render(<App />, target)
  );
}
`;

const clientHydrate = `
import { hydrate,renderToString } from 'react-dom/server'

function render() {

  return (
    hydrate(target, <App />)
  );
}
`;

const serverRender = `
import { hydrate,renderToString } from 'react-dom/server'
							
function render() {

  return (
    hydrate(target, <App />)
  );
}

function renderToServer() {

  return (
    renderToString(<App />)
  );
}`;

export default ({ children }) => {
  return (
    <>
      <div className="reveal">
        <div className="slides">
          <section data-auto-animate data-auto-animate-unmatched="fade">
            <h3>Server Side Rendering !</h3>
          </section>
          <section data-auto-animate data-auto-animate-unmatched="fade">
            <h3>Server Side Rendering !</h3>
            <p>What is it by the way?</p>
          </section>
          <section data-auto-animate data-auto-animate-unmatched="fade">
            <h3>Server Side Rendering !</h3>
            <p style={{ opacity: "0.2", marginTop: 100 }}>
              What is it by the way?
            </p>
            <p>
              Server-side rendering (SSR) is an application’s ability to convert
              HTML files on the server into a fully rendered HTML page for the
              client
            </p>
          </section>

          <section>
            <section data-auto-animate>
              <pre data-id="code">
                <code data-line-numbers className="hljs" data-trim>
                  {clientRender}
                </code>
              </pre>
            </section>

            <section data-auto-animate>
              <pre data-id="code">
                <code data-line-numbers className="hljs" data-trim>
                  {clientHydrate}
                </code>
              </pre>
            </section>

            <section data-auto-animate>
              <pre data-id="code">
                <code data-line-numbers className="hljs" data-trim>
                  {serverRender}
                </code>
              </pre>
            </section>
          </section>

          <section data-auto-animate>
            <p
              data-id="text-props"
              style={{
                background: "#555",
                lineHeight: "1em",
                letterSpacing: "0em",
              }}
            >
              Which is better for us !?
            </p>
          </section>
          <section data-auto-animate>
            <p
              data-id="text-props"
              style={{
                background: "#555",
                lineHeight: "3em",
                letterSpacing: "0.2em",
              }}
            >
              It Depends
            </p>
          </section>

          <section>
            <section data-auto-animate>
              <h3>Opinionated Views</h3>
              <ul>
                <li>Server Side Rendering</li>
                <li>Client Side Rendering</li>
              </ul>
            </section>
            <section data-auto-animate>
              <h3>Opinionated Views</h3>
              <ul>
                <li>Client Side Rendering</li>
                <li>Server Side Rendering</li>
              </ul>
            </section>
          </section>

          <section>
            <h2>What happens during client side rendering</h2>
            <div className="r-stack">
              <p className="fragment fade-in-then-out">
                Load the page with JS & CSS resources
              </p>
              <p className="fragment fade-in-then-out">Fetch data with loaded JS</p>
              <p className="fragment fade-in-then-out">
                Generate HTML content with JS & data
              </p>
            </div>
          </section>

          <section>
            <h2>What happens during server side rendering</h2>
            <div className="r-stack">
              <p className="fragment fade-in-then-out">
                Load the page with JS, CSS resources & the content
              </p>
              <p className="fragment fade-in-then-out">
                Fetched JS is used for hydration
              </p>
            </div>
          </section>

          <section>
            <section id="stacked-slide-2" data-auto-animate>
              <a href="#/stacked-slide-2">
                JS had to be downloaded & parsed in CSR
              </a>
              <br />
              <div
                data-id="anim"
                style={{
                  background: "indigo",
                  padding: 8,
                  width: 50,
                  height: 50,
                  position: "absolute",
                  left: 0,
                }}
              >
                What happened differently
              </div>
            </section>
            <section id="stacked-slide-3" data-auto-animate>
              <a href="#/stacked-slide-2">
                JS had to be downloaded & parsed in CSR
              </a>
              <br />
              <a href="#/stacked-slide-3">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A http call to
                get the data was initiated in CSR
              </a>
              <br />
              <div
                data-id="anim"
                style={{
                  background: "indigo",
                  padding: 8,
                  width: 50,
                  height: 50,
                  position: "absolute",
                  left: 0,
                }}
              >
                What happened differently
              </div>
            </section>
            <section id="stacked-slide-4" data-auto-animate>
              <a href="#/stacked-slide-2">
                JS had to be downloaded & parsed in CSR
              </a>
              <br />
              <a href="#/stacked-slide-3">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A http call to
                get the data was initiated in CSR
              </a>
              <br />
              <a href="#/stacked-slide-4">
                &nbsp;&nbsp;A templating JS library downloaded in CSR
              </a>
              <br />
              <div
                data-id="anim"
                style={{
                  background: "indigo",
                  padding: 8,
                  width: 50,
                  height: 50,
                  position: "absolute",
                  left: 0,
                }}
              >
                What happened differently
              </div>
            </section>
            <section id="stacked-slide-5" data-auto-animate>
              <a href="#/stacked-slide-2">
                JS had to be downloaded & parsed in CSR
              </a>
              <br />
              <a href="#/stacked-slide-3">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A http call to
                get the data was initiated in CSR
              </a>
              <br />
              <a href="#/stacked-slide-4">
                &nbsp;&nbsp;A templating JS library downloaded in CSR
              </a>
              <br />
              <a href="#/stacked-slide-5">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;A ready to
                render html response sent with SSR
              </a>
              <br />
              <div
                data-id="anim"
                style={{
                  background: "indigo",
                  padding: 8,
                  width: 50,
                  height: 50,
                  position: "absolute",
                  left: 0,
                }}
              >
                What happened differently
              </div>
            </section>
          </section>

          <section data-auto-animate>
            <h2>Neck to Neck</h2>
            <div className="r-hstack">
              <img
                img
                width="750"
                height="500"
                src="./presentation/assets/csr.png"
              />
              <img
                img
                width="750"
                height="500"
                src="./presentation/assets/ssr.png"
                style={{ marginTop: "-8px" }}
              />
            </div>
          </section>

          <section data-auto-animate data-auto-animate-id="a">
            <h2>Comparison</h2>
            <h6>Faster page load with SSR</h6>
          </section>
          <section data-auto-animate data-auto-animate-id="a">
            <h2>Comparison</h2>
            <h6>Faster page load with SSR</h6>
            <h6>Blank page or skeleton show is limited with SSR</h6>
          </section>
          <section data-auto-animate data-auto-animate-id="a">
            <h2>Comparison</h2>
            <h6>Faster page load with SSR</h6>
            <h6>Blank page or skeleton show is limited with SSR</h6>
            <h6>
              SSR is awesome for static sites where writes are really less as
              compared to reads
            </h6>
          </section>
          <section data-auto-animate data-auto-animate-id="a">
            <h2>Comparison</h2>
            <h6>Faster page load with SSR</h6>
            <h6>Blank page or skeleton show is limited with SSR</h6>
            <h6>
              SSR is awesome for static sites where writes are really less as
              compared to reads
            </h6>
            <h6>
              SSR gets into issue for non cached pages where the number of
              server requests is high
            </h6>
          </section>
          <section data-auto-animate data-auto-animate-id="a">
            <h2>Comparison</h2>
            <h6>Faster page load with SSR</h6>
            <h6>Blank page or skeleton show is limited with SSR</h6>
            <h6>
              SSR is awesome for static sites where writes are really less as
              compared to reads
            </h6>
            <h6>
              SSR gets into issue for non cached pages where the number of
              server requests is high
            </h6>
            <h6>
              The interaction time is in a later phase than that of the view
              phase for SSR
            </h6>
          </section>
          <section data-auto-animate data-auto-animate-id="a">
            <h2>Comparison</h2>
            <h6>Faster page load with SSR</h6>
            <h6>Blank page or skeleton show is limited with SSR</h6>
            <h6>
              SSR is awesome for static sites where writes are really less as
              compared to reads
            </h6>
            <h6>
              SSR gets into issue for non cached pages where the number of
              server requests is high
            </h6>
            <h6>
              The interaction time is in a later phase than that of the view
              phase for SSR
            </h6>
            <h6>
              SSR does not work well with complex applications’s rendering on
              the server
            </h6>
          </section>
          <section data-auto-animate data-auto-animate-id="a">
            <h2>Comparison</h2>
            <h6>Faster page load with SSR</h6>
            <h6>Blank page or skeleton show is limited with SSR</h6>
            <h6>
              SSR is awesome for static sites where writes are really less as
              compared to reads
            </h6>
            <h6>
              SSR gets into issue for non cached pages where the number of
              server requests is high
            </h6>
            <h6>
              The interaction time is in a later phase than that of the view
              phase for SSR
            </h6>
            <h6>
              SSR does not work well with complex applications’s rendering on
              the server
            </h6>
            <h6>Also, worth to mention that CSR is cost efficient</h6>
          </section>
          <section data-auto-animate data-auto-animate-id="a">
            <h2>Comparison</h2>
            <h6>Faster page load with SSR</h6>
            <h6>Blank page or skeleton show is limited with SSR</h6>
            <h6>
              SSR is awesome for static sites where writes are really less as
              compared to reads
            </h6>
            <h6>
              SSR gets into issue for non cached pages where the number of
              server requests is high
            </h6>
            <h6>
              The interaction time is in a later phase than that of the view
              phase for SSR
            </h6>
            <h6>
              SSR does not work well with complex applications’s rendering on
              the server
            </h6>
            <h6>Also, worth to mention that CSR is cost efficient</h6>
            <h6>
              SSR rendered pages works well with browsers with disabled
              javascript
            </h6>
          </section>

          <section data-auto-animate data-auto-animate-id="b">
            <h2>Other SSR supporting views</h2>
            <h6>Less time to interact</h6>
          </section>
          <section data-auto-animate data-auto-animate-id="b">
            <h2>Other SSR supporting views</h2>
            <h6>Less time to interact</h6>
            <h6>Better user experience</h6>
          </section>
          <section data-auto-animate data-auto-animate-id="b">
            <h2>Other SSR supporting views</h2>
            <h6>Less time to interact</h6>
            <h6>Better user experience</h6>
            <h6>Minimal content layout shift</h6>
          </section>
          <section data-auto-animate data-auto-animate-id="b">
            <h2>Other SSR supporting views</h2>
            <h6>Less time to interact</h6>
            <h6>Better user experience</h6>
            <h6>Minimal content layout shift</h6>
            <h6>SEO friendly</h6>
          </section>
          <section data-auto-animate data-auto-animate-id="b">
            <h2>Other SSR supporting views</h2>
            <h6>Less time to interact</h6>
            <h6>Better user experience</h6>
            <h6>Minimal content layout shift</h6>
            <h6>SEO friendly</h6>
            <h6>Less dependent on client resources for rendering</h6>
          </section>

          <section>
            <h2>Case Study</h2>
            <div className="r-stack">
              <p className="fragment fade-in-then-out">
                <a href="https://www.bang-olufsen.com/en/int">Bang & Olufsen</a>
              </p>
              <p className="fragment fade-in-then-out">
                <a href="https://github.com/abhirajambasta/svelte-react-ssr">
                  SSR Primer
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};
