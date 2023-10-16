const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api/auth/login',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
  app.use(
    '/api/auth/signup',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
    })
  );
  app.use(
    '/api/tasks',
    createProxyMiddleware({
      target: 'http://localhost:8080',
      changeOrigin: true,
      onProxyReq(proxyReq, req, res) {
        console.log('Forwarding request to /api/auth/tasks');
      },
    })
  );
};