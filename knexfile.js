'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/map_dev'
  },

  test: {
    client: 'pg',
    connection:'postgres://localhost/map_test'
  },

  production: {}
};
