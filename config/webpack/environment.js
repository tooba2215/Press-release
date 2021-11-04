const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

//=========================================
// 16 avril 2021
// ===============
// Il n'y a plus besoin d'expose-loader
// https://stackoverflow.com/questions/60801331/module-build-failed-from-node-modules-html-loader-dist-cjs-js
//=========================================
environment.plugins.prepend("Provide", new webpack.ProvidePlugin({
    $: 'jquery',
    jQuery: 'jquery/src/jquery',
    Popper: ['popper.js', 'default']
}))

module.exports = environment