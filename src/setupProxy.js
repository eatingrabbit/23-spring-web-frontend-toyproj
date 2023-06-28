const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    "/test",
    createProxyMiddleware({
    //   target: "http://49.247.39.230",    //prod용
      target: "http://127.0.0.1:8000",      //dev용
      changeOrigin: true,
    })
  );
};