  
/**
* @api {post} /restaurant/create Create a Restaurant
@apiPermission admin
* @apiName Create a new Restaurant
* @apiGroup Restaurant --admin
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Created!!"
*     }
* @apiSuccess {String} name name of the Restaurant.
* @apiSuccess {String} description  Description of the Restaurant.
* @apiSuccess {String} image Image of the Restaurant.
* @apiSuccess {String} address Address of the Restaurant.

* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "RestaurantNotCreated"
*     }
*/

router.post('/restaurant/create', function(req, res, next) {
    });

/**
* @api {get} /restaurant/:id restaurant detail information
* @apiName GetRestaurantId
* @apiPermission admin
* @apiGroup Restaurant --admin
*
* @apiParam (Params){Number} id Restaurant's unique ID.
*
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Detail retrieved !!"
        "data":"{"title":"biryani specialist","description":"","image":"http:food-insta/assets/images/food-order-21.png","address":"johar town"}"

*     }
*  * @apiError RestaurantNotFound The id of the Restaurant was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "RestaurantNotFound"
*     }
*/

router.get('/restaurant/:id', isAuth ,  function (req, res) {
    // Access Id via: req.params.id
    res.send(req.params);
    })
    
    /**
    * @api {put} /restaurant/:id update Restaurant detail information
    * @apiName UpdateRestaurantId
    * @apiGroup Restaurant --admin
    * @apiPermission admin
    * @apiParam (Params){Number} id Restaurant's unique ID.
    * @apiSuccess {String} name update name of the restaurant.
    * @apiSuccess {String} description update Description of the Restaurant.
    * @apiSuccess {String} Image update Image of the Restaurant.
    * @apiSuccess {String} address address of the user.
    * 
    * @apiSuccessExample Success-Response:
    *     {
    *       "status": "success",
    *       "message": "detail updated !!"
    *     }
    * @apiError RestaurantNotFound The id of the Restaurant was not found.
    
    *  @apiError NoAccessRight Only authenticated Admins can access the data.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "RestaurantNotFound"
    *     }
    */
    
    router.put('/restaurant/:id', function (req, res) {
    // Access Id via: req.params.id
    res.send(req.params);
    })
    
     /**
    * @api {delete} /restaurant/destroy:id Restaurant destroy
    * @apiName DestroyRestaurantId
    * @apiGroup Restaurant --admin
    * @apiPermission admin
    *  @apiSuccessExample Success-Response:
    *     {
    *       "status": "success",
    *       "message": "Deleted !!"
    *     }
    * @apiParam (Params){Number} id Restaurant's unique ID.
    *
    
    *  * @apiError RestaurantNotFound The id of the Restaurant was not found.
    *
    * @apiErrorExample Error-Response:
    *     HTTP/1.1 404 Not Found
    *     {
    *       "error": "RestaurantNotFound"
    *     }
    */
    
   router.delete('/restaurant/:id', function (req, res) {
    // Access Id via: req.params.id
    res.send(req.params);
    }
    )

/**
* @api {get} /restaurants Restaurants List
* @apiName GetRestaurant
* @apiPermission customer
* @apiGroup Restaurant --customer
*
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Detail retrieved !!"
        "data":"{"name":"biryani master","description":"","image":"http:food-insta/assets/images/food-order-21.png","meal_id":1,"category_id":1}"

*     }
*  * @apiError MealNotFound Meal was not added yet.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "RestaurantNotFound"
*     }
*/

router.get('/restaurants', function (req, res) {
    // Access Id via: req.params.id
    res.send(req.params);
    })

    /**
* @api {get} /restaurants Restaurants List
* @apiName GetRestaurant
* @apiPermission admin
* @apiGroup Restaurant --admin
*
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Detail retrieved !!"
        "data":"{"name":"biryani master","description":"","image":"http:food-insta/assets/images/food-order-21.png","address":"johar town","meal_id":1,"category_id":1}"

*     }
*  * @apiError MealNotFound Meal was not added yet.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "RestaurantNotFound"
*     }
*/

router.get('/restaurants', function (req, res) {
    // Access Id via: req.params.id
    res.send(req.params);
    })
