/**
* @api {post} /coupon/create Create a Coupon
* @apiName Create a new coupons
* @apiPermission admin
* @apiGroup Coupon  --admin
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Created!!"
*     }
* @apiSuccess {String} title title of the coupon.
* @apiSuccess {String} description  Description of the coupon.
* @apiSuccess {String} meal_id  Meal id of the coupon.
* @apiSuccess {Number} discount_price  discount price of the coupon.

* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "CouponNotCreated"
*     }
*/

router.post('/coupon/create', function(req, res, next) {
});

/**
* @api {get} /coupon/:id coupon detail information
* @apiName GetCouponId
* @apiPermission admin
* @apiGroup Coupon --admin
*
* @apiParam (Params){Number} id Coupon's unique ID.
*
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Detail retrieved !!"
    "data":"{"title":"biryani-20-OFF","description":"","description":"","meal_id":9,"discount_price":20}"
*     }
*  * @apiError CouponNotFound The id of the Coupon was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "CouponNotFound"
*     }
*/

router.get('/coupon/:id', function (req, res) {
// Access Id via: req.params.id
res.send(req.params);
})

/**
* @api {put} /coupon/:id update Coupon detail information
* @apiName UpdateCouponId
* @apiGroup Coupon --admin
* @apiPermission admin
* @apiParam (Params){Number} id Coupon's unique ID.
* @apiSuccess {String} name update name of the Coupon.
* @apiSuccess {String} description update Description of the Coupon.
* @apiSuccess {Number} meal_id update meal id of the Coupon.
* @apiSuccess {Number} discount_price update discount price of the Coupon.

* 
* @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "detail updated !!"
*     }
* @apiError CouponNotFound The id of the Coupon was not found.

*  @apiError NoAccessRight Only authenticated Admins can access the data.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "CouponNotFound"
*     }
*/

router.put('/coupon/:id', function (req, res) {
// Access Id via: req.params.id
res.send(req.params);
})

 /**
* @api {delete} /coupon/destroy:id Coupon destroy
* @apiName DestroyCouponId
* @apiGroup Coupon --admin
* @apiPermission admin
*  @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Deleted !!"
*     }
* @apiParam (Params){Number} id Coupon's unique ID.
*

*  * @apiError CouponNotFound The id of the Coupon was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "CouponNotFound"
*     }
*/

router.delete('/coupon/:id', function (req, res) {
// Access Id via: req.params.id
res.send(req.params);
}
)

/**
* @api {get} /coupon Coupons List
* @apiName GetCoupon
* @apiPermission customer
* @apiGroup Coupon --customer
*
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Detail retrieved !!"
"data":"{"name":"biryani-20-OFF","description":"","meal_id":1,"discount_price":20}"
*     }
*  * @apiError MealNotFound Meal was not added yet.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "CouponNotFound"
*     }
*/

router.get('/coupons', function (req, res) {
// Access Id via: req.params.id
res.send(req.params);
})

/**
* @api {get} /coupons Coupons List
* @apiName GetCoupon
* @apiPermission admin
* @apiGroup Coupon --admin
*
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Detail retrieved !!"
    "data":"{"name":"biryani-20-OFF","description":"","meal_id":1,"discount_price":20}"

*     }
*  * @apiError MealNotFound Meal was not added yet.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "CouponNotFound"
*     }
*/

router.get('/coupons', function (req, res) {
// Access Id via: req.params.id
res.send(req.params);
})
