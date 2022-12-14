import * as React from "react";
import Header from "./Header";
import Presentation from "./Presentation";

export default function Html({ assets, children, title }) {
  return (
    <html lang="en">
      <Header assets={assets} title={title} />
      <body>
        <noscript
          dangerouslySetInnerHTML={{
            __html: `<b>Enable JavaScript to run this app.</b>`,
          }}
        />
        <Presentation />
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `assetManifest = ${JSON.stringify(assets)};`,
          }}
        />
        <script async src={assets["index.js"]} type="module" />
      </body>
    </html>
  );
}
