'use strict'
;
module.exports = app => {
  return class indexService extends app.Service {
    set val(value) {
      this.value = value;
    }
    get val() {
      return this.value;
    }
  };
};
