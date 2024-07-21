## Build

```
npm run build
```

## Start

You can't just open `index.html` directly because your browser won't load the javascript file. You'll get an error that looks like this:

```
Failed to load resource: Origin null is not allowed by Access-Control-Allow-Origin. Status code: 0
```

Instead, start a server in this directory:

```
python -m http.server
```

This will start a Python server that will serve the contents of this directory. Now go to `http://localhost:8000` and open your console. You should see console.logs printed in there. 