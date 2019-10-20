import { NextFunction, Request, Response } from "express";
var express = require('express');
var path = require('path');
var router = express.Router();
/* GET home page. */
router.get('/', function (req: Request, res: Response, next: NextFunction) {
  res.sendFile(path.join(__dirname, '../../../client/build/index.html'));
});

module.exports = router;
