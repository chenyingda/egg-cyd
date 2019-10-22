'use strict';

const mock = require('egg-mock');

describe('test/cyd.test.js', () => {
  let app;
  before(() => {
    app = mock.app({
      baseDir: 'apps/cyd-test',
    });
    return app.ready();
  });

  after(() => app.close());
  afterEach(mock.restore);

  it('should GET /', () => {
    return app.httpRequest()
      .get('/')
      .expect('hi, cyd')
      .expect(200);
  });
});
