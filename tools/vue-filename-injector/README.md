# Vue Filename Injector

Inject the file path of the `.vue` on `this.$options.__source`.

## Usage

`vue.config.js`:

``` js
const VueFilenameInjector = require('./path/to/vue-filename-injector')

module.exports = {

  chainWebpack: config => {
    // only with chainWebpack
    VueFilenameInjector(config, {
      propName: '__source' // default
    })
  }
}
```

## Relevant

https://github.com/neutrinojs/webpack-chain
https://vue-loader.vuejs.org/guide/custom-blocks.html
