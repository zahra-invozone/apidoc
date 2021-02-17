    
    /**
    * @api {post} /order/create Create an Order
    * @apiName Create an Order
    * @apiPermission customer
    * 
    * @apiGroup Order --customer
    *  * @apiSuccessExample Success-Response:
    *     {
    *       "status": "success",
    *       "message": "Created!!"
    *     }
    
    * @apiSuccess {Number} restaurant_id restaurant id of the meal.
    * @apiSuccess {Number} user_id  user id of the meal.
    * @apiSuccess {Number} meal_id  meal id of the meal.
    * @apiSuccess {Number} deal_id  deal id of the meal.
    * @apiSuccess {Number} discount_id  discount id of the meal.
    * @apiSuccess {Number} coupon_id  coupon id of the meal.(optional)
    * @apiSuccess {Number} price  price of the meal.
    
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "MealNotCreated"
    *     }
    */

   router.post('/order/cancel', function(req, res, next) {
    });
    
    /**
    * @api {post} /order/cancel Cancel an Order
    * @apiName Order --customer an Order
    * @apiPermission customer, admin
    * 
    * @apiGroup Order --customer
    *  * @apiSuccessExample Success-Response:
    *     {
    *       "status": "success",
    *       "message": "Canceled!!"
    *     }
    
    * @apiSuccess {Number} order_id  order id of the meal.
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "OrderNotFound"
    *     }
    */

   router.post('/order/cancel', function(req, res, next) {
    });

    /**
    * @api {post} /orders Orders List
    * @apiName Orders List
    * @apiPermission admin
    * 
    * @apiGroup Order --admin
*
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "List retrieved !!"
        "data":"{"meal name":"biryani","description":"","image":"http:food-insta/assets/images/food-order-21.png","price":PKR 100,"restaurant_id":1,"category_id":1,"meal_id":1}"

*     }
*  * @apiError MealNotFound Meal was not added yet.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "MealNotFound"
*     }
*/

router.get('/orders', function (req, res) {
    // Access Id via: req.params.id
    res.send(req.params);
    })

    /**
    * @api {post} /order/cancel Cancel an Order
    * @apiName Order --customer an Order
    * @apiPermission admin
    * 
    * @apiGroup Order --admin
    *  * @apiSuccessExample Success-Response:
    *     {
    *       "status": "success",
    *       "message": "Canceled!!"
    *     }
    
    * @apiSuccess {Number} order_id  order id of the meal.
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "OrderNotFound"
    *     }
    */

   router.post('/order/cancel', function(req, res, next) {
});
