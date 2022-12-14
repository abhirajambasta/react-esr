import * as React from "react";
export default ({ assets, title }) => (
  <head>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
    />
    <link rel="stylesheet" href={assets["main.css"]} />
    <title>{title}</title>

    <link rel="stylesheet" href="./presentation/resource/reveal.css" />
    <link
      rel="stylesheet"
      href="./presentation/resource/theme/black.css"
      id="theme"
    />
    <link rel="stylesheet" href="./presentation/plugin/highlight/monokai.css" />
    <script src="./presentation/resource/reveal.js"></script>
    <script src="./presentation/plugin/highlight/highlight.js"></script>
  </head>
);
