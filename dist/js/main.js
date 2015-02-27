require.config({
  "baseUrl":'js/vendor',
  "paths":{
    "app":"../app"
  },
  "shim":{
    "slick":["jquery"]
  }
});

requirejs(["app/main"])
