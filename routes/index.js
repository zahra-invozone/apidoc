var express = require('express');
var router = express.Router();
const routes =()=>{
router.use(require('./category'));
router.use(require('./coupon'));
router.use(require('./meal'));
router.use(require("./order"));
router.use(require("./restaurant"));
router.use(require("user"));
return router
}
module.exports = routes;
