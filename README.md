# Dynafetch

Dynafetch is a simple library that loads CommonJS modules "asynchronously" in Node
and *asynchronously* in the browser.

It is meant to be used with [dynapack](https://github.com/bauerca/dynapack).

## Example

```js
var fetch = require('dynafetch')(require);
fetch(['superagent', 'underscore'], function(request, _) {
    // Do the coolest things.
});
```

## Details

In Node, dynafetch just wraps up a series of `require` calls inside a `process.nextTick`
callback.

In the browser, dynafetch assumes an enhanced require function that takes a callback
as a second parameter. The callback receives the loaded module as its sole argument. The
details of how that module is loaded are up to the implementer of the require function
that is passed to dynafetch.

# License

MIT
