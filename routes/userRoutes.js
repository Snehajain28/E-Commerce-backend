
const express = require('express');
const { registerUser } = require('../controller/registerUser');
const { loginUser } = require('../controller/loginUser');
const { auth, isAdmin } = require('../middleware/authmid');
const { AddAddressController, AddressController } = require('../controller/AddressController');
const { AddOrderController, OrderController, getAllOrdersController, getSingleOrderController } = require('../controller/OrdersController');
const { getAllProductController } = require('../controller/ProductController');
const { forgotPassword } = require('../controller/forgetPassword');
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/forgot-password", forgotPassword);


router.post("/checkout/add-address", AddAddressController);
router.post("/checkout/address", AddressController);


router.post("/create-order", AddOrderController);
router.post("/orders", OrderController);
router.post("/all-orders", auth, isAdmin,getAllOrdersController);
router.post('/order-details',getSingleOrderController)
router.get("/all_products", getAllProductController);

router.post("/admin-auth", auth, isAdmin, (req, res) => {
  res.status(201).json({
    success: true,
  })
});



//router.put("/profile", auth, updateProfileController);
//router.get("/orders", auth, getOrdersController);

//router.put(
//"/order-status/:orderId",
//  requireSignIn,
//  isAdmin,
//orderStatusController
//);

module.exports = router;