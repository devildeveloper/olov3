require.config({
  "baseUrl":'js/lib',
  paths:{
    "jquery":"//ajax.googleapis.com/ajax/libs/jquery/2.0.0/jquery.min" || "vendor/jquery.min.js",
    "app":"app"
  }
});

requirejs(["app/main"])
