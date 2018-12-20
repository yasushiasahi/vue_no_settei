module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: ['>1% in JP'],
        modules: false,
        useBuiltIns: 'usage',
      },
    ],
  ],
}
