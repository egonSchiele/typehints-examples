Exactly the same as [02b-node-modules-on-vite](../02b-node-modules-on-vite) except instead of linking to `dist/index.js` in `index.html`, I link to `index.ts`.

Run `npx vite build`. It will look for an `index.html` file by default, use that as an entry point, and go through all the JavaScript files linked from there.

It will make a build for you in a folder called `dist`. You can serve it from any static server, like the Python server, vite, nginx, vercel, render.com...