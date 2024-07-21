This is a minimal example of using webpack to bundle your code. Notice how

1. It's transpiling the TypeScript into JavaScript
2. resolving the import
3. pulling in the node_modules package (which `tsc` will not do) and,
4. Creating a single file at `dist/bundle.js`.

## Build

```
npm run build
```

## Start

```
node dist/bundle.js
```

