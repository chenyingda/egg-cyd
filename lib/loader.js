'use strict';

module.exports = app => {
  class CYD {
    constructor(...args) {
      const { username, password, weight, height } = args;
      this.username = username;
      this.password = password;
      this.height = height;
      this.weight = weight;
    }
    getHeight() {
      return this.height;
    }
    setHeight(height) {
      this.height = height;
    }
    getWeight() {
      return this.weight;
    }
    setWeight(weight) {
      this.weight = weight;
    }
  }
  app.beforeStart(async () => {
    const cyd = new CYD(app.config.cyd);
    app.cyd = cyd;
  });
}
;
