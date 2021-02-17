  
/**
* @api {post} /category/create Create a Category
@apiPermission admin
* @apiName Create a new Category
* @apiGroup Category --admin
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Created!!"
*     }
* @apiSuccess {String} name name of the Category.
* @apiSuccess {String} description  Description of the Category.
* @apiSuccess {String} image Image of the Category.
* @apiSuccess {String} address Address of the Category.
* @apiSuccess {number} restaurant_id restaurant id of the Category.

* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "CategoryNotCreated"
*     }
*/

router.post('/category/create', function(req, res, next) {
});

/**
* @api {get} /category/:id category detail information
* @apiName GetCategoryId
* @apiPermission admin
* @apiGroup Category --admin
*
* @apiParam (Params){Number} id Category's unique ID.
*
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Detail retrieved !!"
    "data":"{"title":"biryani specialist","description":"","image":"http:food-insta/assets/images/food-order-21.png","address":"johar town","category)id":1}"

*     }
*  * @apiError CategoryNotFound The id of the Category was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "CategoryNotFound"
*     }
*/

router.get('/category/:id', isAuth ,  function (req, res) {
// Access Id via: req.params.id
res.send(req.params);
})

/**
* @api {put} /category/:id update Category detail information
* @apiName UpdateCategoryId
* @apiGroup Category --admin
* @apiPermission admin
* @apiParam (Params){Number} id Category's unique ID.
* @apiSuccess {String} name update name of the Category.
* @apiSuccess {String} description update Description of the Category.
* @apiSuccess {String} Image update Image of the Category.
* @apiSuccess {String} restaurant_id update restaurant id of the Category.
* 
* @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "detail updated !!"
*     }
* @apiError CategoryNotFound The id of the Category was not found.

*  @apiError NoAccessRight Only authenticated Admins can access the data.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "CategoryNotFound"
*     }
*/

router.put('/category/:id', function (req, res) {
// Access Id via: req.params.id
res.send(req.params);
})

 /**
* @api {delete} /category/destroy:id Category destroy
* @apiName DestroyCategoryId
* @apiGroup Category --admin
* @apiPermission admin
*  @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Deleted !!"
*     }
* @apiParam (Params){Number} id Category's unique ID.
*

*  * @apiError CategoryNotFound The id of the Category was not found.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "CategoryNotFound"
*     }
*/

router.delete('/category/:id', function (req, res) {
// Access Id via: req.params.id
res.send(req.params);
}
)

/**
* @api {get} /categories Category List
* @apiName GetCategory
* @apiPermission customer
* @apiGroup Category --customer
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
*       "error": "CategoryNotFound"
*     }
*/

router.get('/categories', function (req, res) {
// Access Id via: req.params.id
res.send(req.params);
})

/**
* @api {get} /categories Category List
* @apiName GetCategory
* @apiPermission admin
* @apiGroup Category --admin
*
*  * @apiSuccessExample Success-Response:
*     {
*       "status": "success",
*       "message": "Detail retrieved !!"
    "data":"{"name":"biryani master","description":"","image":"http:food-insta/assets/images/food-order-21.png","address":"johar town","meal_id":1,"restaurant_id":1}"

*     }
*  * @apiError MealNotFound Meal was not added yet.
*
* @apiErrorExample Error-Response:
*     HTTP/1.1 404 Not Found
*     {
*       "error": "CategoryNotFound"
*     }
*/

router.get('/Categories', function (req, res) {
// Access Id via: req.params.id
res.send(req.params);
})
