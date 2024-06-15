const proxy = require("http-proxy-middleware").createProxyMiddleware;

module.exports = function (app) {
  app.use(
    proxy(`/auth/**`, {
      target: `http://localhost:${process.env.REACT_APP_PROXY_PORT}`,
    })
  );
};
