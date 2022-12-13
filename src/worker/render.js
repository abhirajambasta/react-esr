import * as React from "react";
import { renderToReadableStream } from "react-dom/server.browser";
import App from "../App";
import { DataProvider } from "../data";
import { API_DELAY } from './delays';

// In a real setup, you'd read it from webpack build stats.
let assets = {
  "index.js": `/index.js`,
  "main.css": `/main.css`,
};

export default async function render(url, res) {
  const data = await createServerData();
  let controller = new AbortController();
  let didError = false;
  try {
    const stream = await renderToReadableStream(
      <DataProvider data={data}>
        <App assets={assets} />
      </DataProvider>,
      {
        signal: controller.signal,
        onError(error) {
          didError = true;
          console.error(error);
        },
      }
    );

    // uncomment this to buffer till it's all ready
    // await stream.allReady;

    return new Response(stream, {
      status: didError ? 500 : 200,
      headers: { "Content-Type": "text/html" },
    });
  } catch (err) {
    console.error("Server Error", err);
    return new Response(
      '<!doctype html><p>Loading...</p><script src="/index.js"></script>',
      {
        status: 500,
        headers: { "Content-Type": "text/html" },
      }
    );
  }
}

const getData = async () => {
  const response = await fetch("https://api.chucknorris.io/jokes/random");
  const result = await response.json();
  return result;
};

async function createServerData () {
  let done = false;
  let promise = null;
  const data = await getData();
  return {
    read() {
      if (done) {
      return data.value;
      }
      if (promise) {
        throw promise;
      }
      promise = new Promise((resolve) => {
        setTimeout(() => {
          done = true;
          promise = null;
          resolve();
        }, API_DELAY);
      });
      throw promise;
    }
  };
}