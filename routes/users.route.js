const { Router } = require("express");
const {
  userscontroller,
} = require("../controllers/users.controller");
const router = Router();

router.post("/users", userscontroller.createUser);

router.delete("/users/:id", userscontroller.deleteUserById);

router.patch("/users/:id", userscontroller.changeUserById);
router.get("/users", userscontroller.getUsers);
router.get("/users/category/:id", userscontroller.getUsersByCategory);
router.get("/users/group/:id", userscontroller.getUsersByGroup);
router.get("/users/paymentall", userscontroller.getUsersByPaymentAll);
router.get("/users/paymenthalf", userscontroller.getUsersByPaymentHalf);
router.get("/users/notpayment", userscontroller.getUsersByNotPayment);
module.exports = router;