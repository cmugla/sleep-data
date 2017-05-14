"use strict";

const apiRouter = require('express').Router()
const { getSleepData } = require('../models/apiData')

/* GET STORY */
apiRouter.get('/:userCode', getSleepData, function(req, res) {
  res.json(res.results)
})

module.exports = apiRouter;