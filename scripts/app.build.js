({
    appDir: "../public",
    baseUrl: "../js/",
    dir: "../release",
    mainConfigFile: "../js/main.js",
    modules: [
      {
        name: "common",
        include: ['jquery',
                  'underscore',
                  'backbone'
                 ]
     }
    ]
})
