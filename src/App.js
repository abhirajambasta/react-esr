import * as React from "react";
import { Suspense, lazy } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Html from "./Html";
import Loader from "./Loader";
import Layout from "./Layout";
import Toggler from './Toggler';

const Heading = lazy(() => import("./Heading" /* webpackPrefetch: true */));
const Joke = lazy(() => import("./Joke" /* webpackPrefetch: true */));

export default function App({ assets }) {
  return (
    <Html assets={assets} title="ESR">
      <Suspense fallback={<Loader />}>
        <ErrorBoundary FallbackComponent={Error}>
          <Toggler />
          <Content />
        </ErrorBoundary>
      </Suspense>
    </Html>
  );
}

function Content() {
  return (
    <Layout>
      <article className="header">
        <Suspense fallback={<Loader />}>
          <Heading />
        </Suspense>
        <section className="joke">
          <h3>Here is Chuck Norris Joke For you</h3>
          <Suspense fallback={<Loader />}>
            <Joke />
          </Suspense>
        </section>
      </article>
    </Layout>
  );
}

function Error({ error }) {
  return (
    <div>
      <h1>Broke my leg!! Check for casualities ↓</h1>
      <pre style={{ whiteSpace: "pre-wrap" }}>{error.stack}</pre>
    </div>
  );
}
