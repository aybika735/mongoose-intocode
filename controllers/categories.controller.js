const Category = require("../models/Category.model");



module.exports.categoriescontroller = {
  createCategory: async function (req, res) {
    try {
      await Category.create({
        name: req.body.name, 
      });
      res.json("Категория добавлена");
    } catch (error) {
      console.log(error.toString());
    }
  },

  deleteCategoryById: async function (req, res) {
    try {
      const category = await Category.findByIdAndRemove(req.params.id);
      res.json("Категория удалена");
    } catch (error) {
      console.log(error.toString());
    }
  },
  changeCategoryById: async function (req, res) {
    try {
      const category = await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name, 
      });
      res.json("Категория изменена");
    } catch (error) {
      console.log(error.toString());
    }
  },
  // Посмотреть все категории
  getCategories: async function (req, res) {
    try {
      const categories = await Category.find();
      res.json(categories);
    } catch (error) {
      console.log(error.toString());
    }
  },
 
 
};