# React application with Edge Side Rendering

Features:
* React
* ESR
* Wrangler
* Cloudflare

### Intro

This sample application deals with the `rendering of an application with on edge`.

The thought behind this seed project is to leverage the edge for server side rendering of react application.

Please refer the official docs for details on account setup and configuration here[https://developers.cloudflare.com/]

### Prerequisite

Please make sure to install wrangler globally `npm install wrangler -g` or use the commands for deployment as given below preceded with `npx`.

### How to run locally

Use `yarn dev` command to run the server on local.

### How to deploy?

You can leverage the following commands in order:
* wrangler generate `app-name` https://github.com/abhirajambasta/react-esr
* wrangler publish
