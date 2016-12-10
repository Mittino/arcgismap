'use strict'

const express = require('express');
const router = express.Router();

var knex = require('../knex');
const {decamelizeKeys, camelizeKeys} = require('humps');

const index =

router.get('/', (req, res, next) => {
  res.send('../public/index.html');
  })
  .catch((err) => {
    next(err);
  });
});

module.exports = router;
