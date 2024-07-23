## Build

```
npm run build
```

## Start

This is similar to the first example, but now we are importing a module from `node_modules` instead of a relative file. To make this import work, we needed to add `"moduleResolution":"node"`, in the `tsconfig`. Note that although TypeScript will type-check against the imported module, it won't bundle it!

If you run `npm run build`, the output file will *not* include the contents of the imported module. It will just contain the import line.

That is why if you start the server again using

```
python -m http.server
```

and go to `http://localhost:8000`, you will see this error in the console:

```
TypeError: Module name, 'tiny-package' does not resolve to a valid URL.
```