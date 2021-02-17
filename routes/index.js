var express = require('express');
var router = express.Router();

/**
* @api {post} /meal/create Create a Meal
* @apiName Create a new Meals
* @apiGroup Meal
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Created!!"
*     }
* @apiSuccess {String} name name of the meal.
* @apiSuccess {String} description  Description of the meal.
* @apiSuccess {String} Image  Image of the meal.
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "MealNotCreated"
*     }
*/

router.post('/meal/create', function(req, res, next) {
res.render('index', { title: 'Express' });
});

/**
* @api {get} /meal/:id Meal detail information
* @apiName GetMealId
* @apiGroup Meal
*
* @apiParam (Params){Number} id Meal's unique ID.
*
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Detail retrieved !!"
*     }
*  * @apiError MealNotFound The id of the Meal was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "MealNotFound"
*     }
*/

router.get('/meal/:id', function (req, res) {
// Access Id via: req.params.id
res.send(req.params);
})

/**
* @api {delete} /meal/destroy:id Meal destroy
* @apiName DestroyMealId
* @apiGroup Meal
*  @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Deleted !!"
*     }
* @apiParam (Params){Number} id Meal's unique ID.
*

*  * @apiError MealNotFound The id of the Meal was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "MealNotFound"
*     }
*/

router.delete('/meal/:id', function (req, res) {
// Access Id via: req.params.id
res.send(req.params);
})

/**
* @api {put} /meal/:id update Meal detail information
* @apiName UpdateMealId
* @apiGroup Meal
*
* @apiParam (Params){Number} id Meal's unique ID.
*
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "detail retrieved !!"
*     }
* @apiError MealNotFound The id of the Meal was not found.

*  @apiError NoAccessRight Only authenticated Admins can access the data.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "MealNotFound"
*     }
*/

router.put('/meal/:id', function (req, res) {
// Access Id via: req.params.id
res.send(req.params);
})

var express = require('express');
var router = express.Router();
/**
*  @apiGroup User
* */

/**
* @api {get} /users Request Users List
* @apiName GetUsers
* @apiGroup User
* @apiSuccessExample Success-Response:
*     {
*       "first_name": "syeda muqadas",
*       "last_name": "zahra",
*       "email": "muqadas.zahra@invozone.com",
*       "address": "h#10,johar-town"
*     }
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Created!!"
*     }
* @apiError User Not Added Yet.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "UserNotFound",
*     }
*/

router.get('/users', function(req, res, next) {
res.render('index', { title: 'Express' });
});

/**
* @api {post} /user/create Create a User
* @apiName Create a new Users
* @apiGroup User
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "retrieved lists!!"
*     }
* @apiSuccess {String} first name first name of the user.
* @apiSuccess {String} last name last name of the user.
* @apiSuccess {String} password  password of the user.
* @apiSuccess {String} address address of the user.
* @apiSuccess {Number} role_id role of the user.

* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "UserNotCreated"
*     }
*/

router.post('/user/create', function(req, res, next) {
res.render('index', { title: 'Express' });
});

/**
* @api {get} /user/:id User detail information
* @apiName GetUserId
* @apiGroup User
* @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "retrieved!!"
*     }
* @apiParam (Params){Number} id User's unique ID.

*  @apiError UserNotFound The id of the User was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "UserNotFound"
*     }
*/

router.get('/user/:id', function (req, res) {
// Access Id via: req.params.id
res.send(req.params);
})

/**
* @api {delete} /user/destroy:id User destroy
* @apiName DestroyUserId
* @apiGroup User
*
* @apiParam (Params){Number} id User's unique ID.
*
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Deleted!!"
*     }
*  * @apiError UserNotFound The id of the User was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "UserNotFound"
*     }
*/

router.delete('/user/:id', function (req, res) {
// Access Id via: req.params.id
res.send(req.params);
})

/**
* @api {put} /user/:id update User detail information
* @apiName UpdateUserId
* @apiGroup User
*
* @apiParam (Params){Number} id User's unique ID.
*
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "detail retrieved !!"
*     }

* @apiError UserNotFound The id of the User was not found.

*  @apiError NoAccessRight Only authenticated Admins can access the data.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "UserNotFound"
*     }
*/

router.put('/user/:id', function (req, res) {
// Access Id via: req.params.id
res.send(req.params);
})

/**
* @api {post} /order/create Create an Order
* @apiName Create an Order
* @apiGroup Order
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Created!!"
*     }

* @apiSuccess {Number} resturant_id restorants_id of the meal.
* @apiSuccess {Number} user_id  user_id of the meal.
* @apiSuccess {Number} meal_id  meal_id of the meal.
* @apiSuccess {Number} deal_id  deal_id of the meal.
* @apiSuccess {Number} discount_id  discount_id of the meal.
* @apiSuccess {Number} coupon_id  coupon_id of the meal.
* @apiSuccess {Number} price  price of the meal.

* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "MealNotCreated"
*     }
*/

router.post('/order/create', function(req, res, next) {
  res.render('index', { title: 'Express' });
  });
  
/**
* @api {post} /restaurant/create Create a Restaurant
* @apiName Create a new Restaurants
* @apiGroup Restaurant
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Created!!"
*     }
* @apiSuccess {String} name name of the Restaurant.
* @apiSuccess {String} description  Description of the Restaurant.
* @apiSuccess {String} Image  Image of the Restaurant.
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "RestaurantNotCreated"
*     }
*/

/**
* @api {post} /coupon/create Create a coupon
* @apiName Create a new coupons
* @apiGroup coupon
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Created!!"
*     }
* @apiSuccess {String} title title of the coupon.
* @apiSuccess {String} description  Description of the coupon.
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "CouponNotCreated"
*     }
*/

module.exports = router;
