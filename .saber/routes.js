
    export default [
      {
              path: "/about.html",
              meta: {
                __relative: 'about.md',
                __pageId: '0f84bc04'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--about-md" */ "/sandbox/pages/about.md?saberPage=0f84bc04")
                
              }
            },
{
              path: "/",
              meta: {
                __relative: 'index.md',
                __pageId: '949816c2'
              },
              component: function() {
                
                return import(/* webpackChunkName: "page--index-md" */ "/sandbox/pages/index.md?saberPage=949816c2")
                
              }
            },
      // An addtional route to catch all other requests, i.e. 404 page
      {
        path: '*',
        name: 404,
        component: function () {
          return import(/* webpackChunkName: "404-page" */ "/sandbox/node_modules/saber/vue-renderer/app/404.vue")
        }
      }
    ]