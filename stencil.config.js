exports.config = {
  publicPath: 'build',
  bundles: [
    { components: ['stencil-site', 'site-header', 'landing-page', 'stencil-router', 'stencil-route-link', 'stencil-route'] },
    { components: ['docs-page', 'demos-page', 'getting-started'] },
  ],
  collections: [
    { name: '@ionic/core' }/*,
    { name: '@stencil/router'}*/
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
