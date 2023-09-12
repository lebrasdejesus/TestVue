const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
//ajout de lignes pour pouvoir publier sur git
//trouvées sur https://dfaveris.medium.com/publier-une-application-vuejs-sur-github-ee7662c94667
const publicPath = process.env.NODE_ENV === 'production' ? '/TestVue/' : '/'
module.exports = {
  publicPath: publicPath,
}