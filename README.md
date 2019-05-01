
### The most obvious way to import WASM

```
import('hello-wasm')
  .then(wasm => console.log(wasm))
  .catch(err => console.log(err));
```

Sadly, this fails at runtime with the following error:

```
TypeError: "__webpack_require__.w is undefined"
    wasm 0.chunk.c9660.esm.js:24
    __webpack_require__ bundle.esm.js:1470
    fn bundle.esm.js:830
    <anonymous> hello_wasm.js:1
    js 0.chunk.c9660.esm.js:11
    __webpack_require__ bundle.esm.js:1470
    fn bundle.esm.js:830
```

Seems like something in webpack is not implemented yet: https://github.com/webpack/webpack/issues/7647
