'use strict';

module.exports = app => {
  const config = app.config.cyd;
  app.beforeStart(async () => {
    app.cyd = {
      username: config.username,
      password: config.password,
    };
  });
}
;
