Exactly the same as [02-node-modules](../02-node-modules/), except

1. Install vite (`npm i -D vite`), and
2. Instead of starting a Python server, start vite (`npx vite`).

That's all! With just that, suddenly the npm package will resolve fine and everything will work correctly.

## vite build

If, instead of serving files, you want vite to make a build that you can then upload to Vercel or render.com or whatever, run `npx vite build`. It will look for an `index.html` file by default, use that as an entry point, and go through all the JavaScript files linked from there.