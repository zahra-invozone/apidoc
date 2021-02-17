define({ "api": [
  {
    "type": "post",
    "url": "/category/create",
    "title": "Create a Category",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "name": "Create_a_new_Category",
    "group": "Category_--admin",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Created!!\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "number",
            "optional": false,
            "field": "restaurant_id",
            "description": "<p>restaurant id of the Category.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CategoryNotCreated\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category_--admin"
  },
  {
    "type": "delete",
    "url": "/category/destroy:id",
    "title": "Category destroy",
    "name": "DestroyCategoryId",
    "group": "Category_--admin",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Deleted !!\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Category's unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CategoryNotFound",
            "description": "<p>The id of the Category was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CategoryNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category_--admin"
  },
  {
    "type": "get",
    "url": "/categories",
    "title": "Category List",
    "name": "GetCategory",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "group": "Category_--admin",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Detail retrieved !!\"\n\"data\":\"{\"name\":\"biryani master\",\"description\":\"\",\"image\":\"http:food-insta/assets/images/food-order-21.png\",\"address\":\"johar town\",\"meal_id\":1,\"restaurant_id\":1}\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MealNotFound",
            "description": "<p>Meal was not added yet.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CategoryNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category_--admin"
  },
  {
    "type": "get",
    "url": "/category/:id",
    "title": "category detail information",
    "name": "GetCategoryId",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "group": "Category_--admin",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Category's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Detail retrieved !!\"\n\"data\":\"{\"title\":\"biryani specialist\",\"description\":\"\",\"image\":\"http:food-insta/assets/images/food-order-21.png\",\"address\":\"johar town\",\"category)id\":1}\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CategoryNotFound",
            "description": "<p>The id of the Category was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CategoryNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category_--admin"
  },
  {
    "type": "put",
    "url": "/category/:id",
    "title": "update Category detail information",
    "name": "UpdateCategoryId",
    "group": "Category_--admin",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Category's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>update name of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>update Description of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Image",
            "description": "<p>update Image of the Category.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "restaurant_id",
            "description": "<p>update restaurant id of the Category.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"detail updated !!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CategoryNotFound",
            "description": "<p>The id of the Category was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CategoryNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category_--admin"
  },
  {
    "type": "get",
    "url": "/categories",
    "title": "Category List",
    "name": "GetCategory",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "group": "Category_--customer",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Detail retrieved !!\"\n\"data\":\"{\"name\":\"biryani master\",\"description\":\"\",\"image\":\"http:food-insta/assets/images/food-order-21.png\",\"meal_id\":1,\"category_id\":1}\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MealNotFound",
            "description": "<p>Meal was not added yet.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CategoryNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/category.js",
    "groupTitle": "Category_--customer"
  },
  {
    "type": "post",
    "url": "/coupon/create",
    "title": "Create a Coupon",
    "name": "Create_a_new_coupons",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "group": "Coupon_--admin",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Created!!\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "title",
            "description": "<p>title of the coupon.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the coupon.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "meal_id",
            "description": "<p>Meal id of the coupon.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "discount_price",
            "description": "<p>discount price of the coupon.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CouponNotCreated\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/coupon.js",
    "groupTitle": "Coupon_--admin"
  },
  {
    "type": "delete",
    "url": "/coupon/destroy:id",
    "title": "Coupon destroy",
    "name": "DestroyCouponId",
    "group": "Coupon_--admin",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Deleted !!\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Coupon's unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CouponNotFound",
            "description": "<p>The id of the Coupon was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CouponNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/coupon.js",
    "groupTitle": "Coupon_--admin"
  },
  {
    "type": "get",
    "url": "/coupons",
    "title": "Coupons List",
    "name": "GetCoupon",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "group": "Coupon_--admin",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Detail retrieved !!\"\n\"data\":\"{\"name\":\"biryani-20-OFF\",\"description\":\"\",\"meal_id\":1,\"discount_price\":20}\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MealNotFound",
            "description": "<p>Meal was not added yet.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CouponNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/coupon.js",
    "groupTitle": "Coupon_--admin"
  },
  {
    "type": "get",
    "url": "/coupon/:id",
    "title": "coupon detail information",
    "name": "GetCouponId",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "group": "Coupon_--admin",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Coupon's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Detail retrieved !!\"\n\"data\":\"{\"title\":\"biryani-20-OFF\",\"description\":\"\",\"description\":\"\",\"meal_id\":9,\"discount_price\":20}\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CouponNotFound",
            "description": "<p>The id of the Coupon was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CouponNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/coupon.js",
    "groupTitle": "Coupon_--admin"
  },
  {
    "type": "put",
    "url": "/coupon/:id",
    "title": "update Coupon detail information",
    "name": "UpdateCouponId",
    "group": "Coupon_--admin",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Coupon's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>update name of the Coupon.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>update Description of the Coupon.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meal_id",
            "description": "<p>update meal id of the Coupon.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "discount_price",
            "description": "<p>update discount price of the Coupon.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"detail updated !!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "CouponNotFound",
            "description": "<p>The id of the Coupon was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CouponNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/coupon.js",
    "groupTitle": "Coupon_--admin"
  },
  {
    "type": "get",
    "url": "/coupon",
    "title": "Coupons List",
    "name": "GetCoupon",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "group": "Coupon_--customer",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "    {\n      \"status\": \"success\",\n      \"message\": \"Detail retrieved !!\"\n\"data\":\"{\"name\":\"biryani-20-OFF\",\"description\":\"\",\"meal_id\":1,\"discount_price\":20}\"\n    }",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MealNotFound",
            "description": "<p>Meal was not added yet.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"CouponNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/coupon.js",
    "groupTitle": "Coupon_--customer"
  },
  {
    "type": "post",
    "url": "/meal/create",
    "title": "Create a Meal",
    "name": "Create_a_new_Meals",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "group": "Meal_--admin",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"Success\",\n  \"message\": \"Created!!\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the meal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the meal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Image",
            "description": "<p>Image of the meal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Price",
            "description": "<p>Price of the meal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resturant_id",
            "description": "<p>resturant id of the meal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>category id of the meal.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"MealNotCreated\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/meal.js",
    "groupTitle": "Meal_--admin"
  },
  {
    "type": "delete",
    "url": "/meal/destroy:id",
    "title": "Meal destroy",
    "name": "DestroyMealId",
    "group": "Meal_--admin",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Deleted !!\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Meal's unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MealNotFound",
            "description": "<p>The id of the Meal was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"MealNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/meal.js",
    "groupTitle": "Meal_--admin"
  },
  {
    "type": "get",
    "url": "/meals",
    "title": "Meal List",
    "name": "GetMeal",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "group": "Meal_--admin",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Detail retrieved !!\"\n    \"data\":\"{\"name\":\"biryani\",\"description\":\"\",\"image\":\"http:food-insta/assets/images/food-order-21.png\",\"price\":PKR 100,\"restaurant_id\":1,\"category_id\":1}\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MealNotFound",
            "description": "<p>Meal was not added yet.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"MealNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/meal.js",
    "groupTitle": "Meal_--admin"
  },
  {
    "type": "get",
    "url": "/meal/:id",
    "title": "Meal detail information",
    "name": "GetMealId",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "group": "Meal_--admin",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Meal's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Detail retrieved !!\"\n    \"data\":\"{\"name\":\"biryani\",\"description\":\"\",\"image\":\"http:food-insta/assets/images/food-order-21.png\",\"price\":PKR 100,\"restaurant_id\":1,\"category_id\":1}\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MealNotFound",
            "description": "<p>The id of the Meal was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"MealNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/meal.js",
    "groupTitle": "Meal_--admin"
  },
  {
    "type": "put",
    "url": "/meal/:id",
    "title": "update Meal detail information",
    "name": "UpdateMealId",
    "group": "Meal_--admin",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Meal's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>update name of the meal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>update Description of the meal.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Image",
            "description": "<p>update Image of the meal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "Price",
            "description": "<p>update Price of the meal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "resturant_id",
            "description": "<p>update resturant id of the meal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "category_id",
            "description": "<p>category id of the meal.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"detail updated !!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MealNotFound",
            "description": "<p>The id of the Meal was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"MealNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/meal.js",
    "groupTitle": "Meal_--admin"
  },
  {
    "type": "get",
    "url": "/meals",
    "title": "Meal List",
    "name": "GetMeal",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "group": "Meal_--customer",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Detail retrieved !!\"\n    \"data\":\"{\"name\":\"biryani\",\"description\":\"\",\"image\":\"http:food-insta/assets/images/food-order-21.png\",\"price\":PKR 100,\"restaurant_id\":1,\"category_id\":1}\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MealNotFound",
            "description": "<p>Meal was not added yet.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"MealNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/meal.js",
    "groupTitle": "Meal_--customer"
  },
  {
    "type": "post",
    "url": "/order/cancel",
    "title": "Cancel an Order",
    "name": "Order_--customer_an_Order",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "group": "Order_--admin",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Canceled!!\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>order id of the meal.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"OrderNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/order.js",
    "groupTitle": "Order_--admin"
  },
  {
    "type": "post",
    "url": "/orders",
    "title": "Orders List",
    "name": "Orders_List",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "group": "Order_--admin",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"List retrieved !!\"\n    \"data\":\"{\"meal name\":\"biryani\",\"description\":\"\",\"image\":\"http:food-insta/assets/images/food-order-21.png\",\"price\":PKR 100,\"restaurant_id\":1,\"category_id\":1,\"meal_id\":1}\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MealNotFound",
            "description": "<p>Meal was not added yet.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"MealNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/order.js",
    "groupTitle": "Order_--admin"
  },
  {
    "type": "post",
    "url": "/order/create",
    "title": "Create an Order",
    "name": "Create_an_Order",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "group": "Order_--customer",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Created!!\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "restaurant_id",
            "description": "<p>restaurant id of the meal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "user_id",
            "description": "<p>user id of the meal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "meal_id",
            "description": "<p>meal id of the meal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "deal_id",
            "description": "<p>deal id of the meal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "discount_id",
            "description": "<p>discount id of the meal.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "coupon_id",
            "description": "<p>coupon id of the meal.(optional)</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "price",
            "description": "<p>price of the meal.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"MealNotCreated\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/order.js",
    "groupTitle": "Order_--customer"
  },
  {
    "type": "post",
    "url": "/order/cancel",
    "title": "Cancel an Order",
    "name": "Order_--customer_an_Order",
    "permission": [
      {
        "name": "customer, admin"
      }
    ],
    "group": "Order_--customer",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Canceled!!\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "order_id",
            "description": "<p>order id of the meal.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"OrderNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/order.js",
    "groupTitle": "Order_--customer"
  },
  {
    "type": "post",
    "url": "/restaurant/create",
    "title": "Create a Restaurant",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "name": "Create_a_new_Restaurant",
    "group": "Restaurant_--admin",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Created!!\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>name of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>Description of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "image",
            "description": "<p>Image of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>Address of the Restaurant.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"RestaurantNotCreated\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/restaurant.js",
    "groupTitle": "Restaurant_--admin"
  },
  {
    "type": "delete",
    "url": "/restaurant/destroy:id",
    "title": "Restaurant destroy",
    "name": "DestroyRestaurantId",
    "group": "Restaurant_--admin",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Deleted !!\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Restaurant's unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RestaurantNotFound",
            "description": "<p>The id of the Restaurant was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"RestaurantNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/restaurant.js",
    "groupTitle": "Restaurant_--admin"
  },
  {
    "type": "get",
    "url": "/restaurants",
    "title": "Restaurants List",
    "name": "GetRestaurant",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "group": "Restaurant_--admin",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Detail retrieved !!\"\n    \"data\":\"{\"name\":\"biryani master\",\"description\":\"\",\"image\":\"http:food-insta/assets/images/food-order-21.png\",\"address\":\"johar town\",\"meal_id\":1,\"category_id\":1}\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MealNotFound",
            "description": "<p>Meal was not added yet.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"RestaurantNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/restaurant.js",
    "groupTitle": "Restaurant_--admin"
  },
  {
    "type": "get",
    "url": "/restaurant/:id",
    "title": "restaurant detail information",
    "name": "GetRestaurantId",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "group": "Restaurant_--admin",
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Restaurant's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Detail retrieved !!\"\n    \"data\":\"{\"title\":\"biryani specialist\",\"description\":\"\",\"image\":\"http:food-insta/assets/images/food-order-21.png\",\"address\":\"johar town\"}\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RestaurantNotFound",
            "description": "<p>The id of the Restaurant was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"RestaurantNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/restaurant.js",
    "groupTitle": "Restaurant_--admin"
  },
  {
    "type": "put",
    "url": "/restaurant/:id",
    "title": "update Restaurant detail information",
    "name": "UpdateRestaurantId",
    "group": "Restaurant_--admin",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>Restaurant's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>update name of the restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "description",
            "description": "<p>update Description of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "Image",
            "description": "<p>update Image of the Restaurant.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of the user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"detail updated !!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "RestaurantNotFound",
            "description": "<p>The id of the Restaurant was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"RestaurantNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/restaurant.js",
    "groupTitle": "Restaurant_--admin"
  },
  {
    "type": "get",
    "url": "/restaurants",
    "title": "Restaurants List",
    "name": "GetRestaurant",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "group": "Restaurant_--customer",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Detail retrieved !!\"\n    \"data\":\"{\"name\":\"biryani master\",\"description\":\"\",\"image\":\"http:food-insta/assets/images/food-order-21.png\",\"meal_id\":1,\"category_id\":1}\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "MealNotFound",
            "description": "<p>Meal was not added yet.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"RestaurantNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/restaurant.js",
    "groupTitle": "Restaurant_--customer"
  },
  {
    "group": "User",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "routes/meal.js",
    "groupTitle": "User",
    "name": ""
  },
  {
    "type": "delete",
    "url": "/user/destroy:id",
    "title": "User destroy",
    "name": "DestroyUserId",
    "group": "User_--admin",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Deleted!!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User_--admin"
  },
  {
    "type": "get",
    "url": "/users",
    "title": "Users List",
    "name": "GetUsers",
    "group": "User_--admin",
    "permission": [
      {
        "name": "admin"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"first_name\": \"syeda muqadas\",\n  \"last_name\": \"zahra\",\n  \"email\": \"muqadas.zahra@invozone.com\",\n  \"address\": \"h#10,johar-town\"\n}",
          "type": "json"
        },
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"Created!!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "User",
            "description": "<p>Not Added Yet.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\",\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User_--admin"
  },
  {
    "type": "get",
    "url": "/user/:id",
    "title": "User Profile detail",
    "name": "GetUserId",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "group": "User_--customer",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"retrieved!!\"\n}",
          "type": "json"
        }
      ]
    },
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's unique ID.</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User_--customer"
  },
  {
    "type": "post",
    "url": "/user/create",
    "title": "register a User",
    "name": "Register_a_new_Users",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "group": "User_--customer",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"retrieved lists!!\"\n}",
          "type": "json"
        }
      ],
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "first",
            "description": "<p>name first name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "last",
            "description": "<p>name last name of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>password of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "address",
            "description": "<p>address of the user.</p>"
          },
          {
            "group": "Success 200",
            "type": "Number",
            "optional": false,
            "field": "role_id",
            "description": "<p>role of the user.</p>"
          }
        ]
      }
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotCreated\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User_--customer"
  },
  {
    "type": "put",
    "url": "/user/:id",
    "title": "update User detail information",
    "name": "UpdateUserId",
    "group": "User_--customer",
    "permission": [
      {
        "name": "customer"
      }
    ],
    "parameter": {
      "fields": {
        "Params": [
          {
            "group": "Params",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>User's unique ID.</p>"
          }
        ]
      }
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n  \"status\": \"success\",\n  \"message\": \"detail retrieved !!\"\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "UserNotFound",
            "description": "<p>The id of the User was not found.</p>"
          },
          {
            "group": "Error 4xx",
            "optional": false,
            "field": "NoAccessRight",
            "description": "<p>Only authenticated Admins can access the data.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 404 Not Found\n{\n  \"error\": \"UserNotFound\"\n}",
          "type": "json"
        }
      ]
    },
    "version": "0.0.0",
    "filename": "routes/user.js",
    "groupTitle": "User_--customer"
  }
] });
