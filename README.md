# Aurelia Bundling Example

Demo of how to hot-load seperate bundles in an aurelia app

Lookin in `aurelia.json` for this bit

```
    "bundles": [{
        "name": "app-bundle.js",
        "source": [
          "[**/app.js]",
          "[**/environment.js]",
          "[**/main.js]",
          "**/app.html",
          "**/resources/index.js",
          "**/app.html"
        ]
      },
      {
        "name": "aaa-bundle.js",
        "source": [
          "[**/elements/aaa/**/*.js]",
          "**/elements/aaa/**/*.html"
        ]
      },
      {
        "name": "bbb-bundle.js",
        "source": [
          "[**/elements/bbb/**/*.js]",
          "**/elements/bbb/**/*.html"
        ]
      },
      {
        "name": "vendor-bundle.js",
        "prepend": [
          "node_modules/bluebird/js/browser/bluebird.core.js",
          "node_modules/requirejs/require.js"
        ],
        "dependencies": [
          "aurelia-binding",
      }

... etc .......

```

## Some info

http://stackoverflow.com/questions/39475791/how-to-exclude-files-from-bundling-in-aurelia-json

### too much

http://blog.aurelia.io/2015/09/11/bundling-aurelia-apps/

## Globbing patterns

https://gruntjs.com/configuring-tasks#globbing-patterns

