module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [
    [
      'import',
      {
        libraryName: 'vant',
        libraryDirectory: 'es',
        style: (name) => `${name}/style/less`
      },
      'vant'
    ]
  ],
  // common + es6 共存
  sourceType: 'unambiguous'
}
