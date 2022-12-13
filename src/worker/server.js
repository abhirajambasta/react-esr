"use strict";

import render from "./render";
import itty from "itty-router";

import { JS_BUNDLE_DELAY } from "./delays";

function sleep(time) {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
}

const router = itty.Router();

router.all("*", async (request) => {
  return await render(request);
});

function onError(error) {
  return new Response(error.message || "Server Error", {
    status: error.status || 500,
  });
}

export default {
  async fetch(req) {
    if (req.url.endsWith(".js") || req.url.endsWith(".css")) {
      if (req.url.endsWith(".js")) {
        // Artificially delay serving JS
        await sleep(JS_BUNDLE_DELAY);
      }
      return fetch(req);
    }
    return router.handle(req).catch(onError);
  },
};
