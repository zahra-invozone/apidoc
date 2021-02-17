/**
* @api {post} /meal/create Create a Meal
* @apiName Create a new Meals
* @apiPermission admin
* @apiGroup Meal --admin
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "Success",
*       "message": "Created!!"
*     }

* @apiSuccess {String} name name of the meal.
* @apiSuccess {String} description Description of the meal.
* @apiSuccess {String} Image Image of the meal.
* @apiSuccess {Number} Price Price of the meal.
* @apiSuccess {Number} resturant_id resturant id of the meal.
* @apiSuccess {Number} category_id category id of the meal.
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "MealNotCreated"
*     }
*/

router.post('/meal/create', function(req, res, next) {
});

/**
* @api {get} /meal/:id Meal detail information
* @apiName GetMealId
* @apiPermission admin
* @apiGroup Meal --admin
*
* @apiParam (Params){Number} id Meal's unique ID.
*
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Detail retrieved !!"
        "data":"{"name":"biryani","description":"","image":"http:food-insta/assets/images/food-order-21.png","price":PKR 100,"restaurant_id":1,"category_id":1}"

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
    * @apiGroup Meal --admin
    * @apiPermission admin
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
    * @apiGroup Meal --admin
    * @apiPermission admin
    * @apiParam (Params){Number} id Meal's unique ID.
    * @apiSuccess {String} name update name of the meal.
    * @apiSuccess {String} description update Description of the meal.
    * @apiSuccess {String} Image update Image of the meal.
    * @apiSuccess {Number} Price update Price of the meal.
    * @apiSuccess {Number} resturant_id update resturant id of the meal.
    * @apiSuccess {Number} category_id category id of the meal.
    * 
    * @apiSuccessExample Success-Response:
    *     {
    *       "status": "success",
    *       "message": "detail updated !!"
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
* @api {get} /meals Meal List
* @apiName GetMeal
* @apiPermission admin
* @apiGroup Meal --admin
*
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Detail retrieved !!"
        "data":"{"name":"biryani","description":"","image":"http:food-insta/assets/images/food-order-21.png","price":PKR 100,"restaurant_id":1,"category_id":1}"

*     }
*  * @apiError MealNotFound Meal was not added yet.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "MealNotFound"
*     }
*/

router.get('/meals', function (req, res) {
        // Access Id via: req.params.id
        res.send(req.params);
        })

/**
* @api {get} /meals Meal List
* @apiName GetMeal
* @apiPermission customer
* @apiGroup Meal --customer
*
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Detail retrieved !!"
        "data":"{"name":"biryani","description":"","image":"http:food-insta/assets/images/food-order-21.png","price":PKR 100,"restaurant_id":1,"category_id":1}"

*     }
*  * @apiError MealNotFound Meal was not added yet.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "MealNotFound"
*     }
*/

router.get('/meals', function (req, res) {
        // Access Id via: req.params.id
        res.send(req.params);
        })
