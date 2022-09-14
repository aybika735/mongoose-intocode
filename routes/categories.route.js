const { Router } = require("express");
const {
  categoriescontroller,
} = require("../controllers/categories.controller");
const router = Router();
router.post("/categories", categoriescontroller.createCategory);
router.delete("/categories/:id", categoriescontroller.deleteCategoryById);
router.patch("/categories/:id", categoriescontroller.changeCategoryById);
router.get("/categories", categoriescontroller.getCategories);

module.exports = router;
