/**
* @api {post} /user/create register a User
* @apiName Register a new Users
* @apiPermission customer
* @apiGroup User --customer
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
    * @api {get} /user/:id User Profile detail
    * @apiName GetUserId
    * @apiPermission customer
    * @apiGroup User --customer
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
    * @apiGroup User --admin
    * @apiPermission admin
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
    * @apiGroup User --customer
    * @apiPermission customer
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
    * @api {get} /users Users List
    * @apiName GetUsers
    * @apiGroup User --admin
    * @apiPermission admin
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
