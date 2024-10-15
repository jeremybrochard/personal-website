<p align="center">
  <a href="https://jeremybrochard.dev">
    <img alt="JB logo" src="./static/favicon.png" width="120" />
  </a>
</p>
<h1 align="center">
  Personal website of Jeremy Brochard
</h1>

This repository contains the source code of [my personal website](https://jeremybrochard.dev).

- Made with [Svelte](https://svelte.dev/)
- Hosted on [Render](https://render.com/)
- Tech stack icons from [Simple Icons](https://simpleicons.org/)

## Start in local

The project uses [Bun](https://bun.sh/) as a replacement for NodeJS, but it can also work with NodeJS if needed.

```bash
# install project dependencies
bun install

# then start a development server
bun run dev 

# or 
bun start

# you can also start the server and open the app in a new browser tab
bun run dev -- --open
```

## Building

To create a production version of your app:

```bash
bun run build
```

You can preview the production build with `bun run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
