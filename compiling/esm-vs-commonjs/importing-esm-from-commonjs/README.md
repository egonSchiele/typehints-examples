# Importing CommonJS from ESM

I had to make a few changes to make this work correctly.
1. Install type definitions for node (`npm i -D @types/node`)
2. set module and module resolution to `NodeNext`
3. use the `.cts` file extension to specify this file as CommonJS
4. import it with a `.cjs` extension.

```
npm run build
node dist/index.js
```