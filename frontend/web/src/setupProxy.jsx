const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  const endpoints = [
    '/api/auth/login',
    '/api/auth/signup',
    '/api/tasks/create',
    '/api/tasks/get',
    '/api/tasks/put',
    '/api/tasks/delete',
    '/api/tags/create',
    '/api/tags/get',
    '/api/tags/getAll',
    '/api/tags/addTag',
    '/api/tags/remove',
    '/api/tags/delete',
  ];

  endpoints.forEach(endpoint => {
    app.use(
      endpoint,
      createProxyMiddleware({
        target: 'http://localhost:8080',
        changeOrigin: true,
      })
    );
  });
};