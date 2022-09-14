const User = require("../models/User.model");

module.exports.userscontroller = {
  createUser: async function (req, res) {
    try {
      await User.create({
        name: req.body.name,
        payment: req.body.payment,
        category: req.body.category,
        group: req.body.group,
      });
      res.json("Студент добавлен");
    } catch (error) {
      console.log(error.toString());
    }
  },

  deleteUserById: async function (req, res) {
    try {
      const user = await User.findByIdAndRemove(req.params.id);
      res.json("Студент удален");
    } catch (error) {
      console.log(error.toString());
    }
  },
  changeUserById: async function (req, res) {
    try {
      const user = await User.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        payment: req.body.payment,
        category: req.body.category,
        group: req.body.group,
      });
      res.json("Студент изменен");
    } catch (error) {
      console.log(error.toString());
    }
  },
  // Посмотреть всех студентов
  getUsers: async function (req, res) {
    try {
      const users = await User.find().populate(["category", "group"]);
      res.json(users);
    } catch (error) {
      console.log(error.toString());
    }
  },

  // просматривать студентов по определенному статусу
  getUsersByCategory: async function (req, res) {
    try {
      const users = await User.find({ category: req.params.id }).populate(
        "category"
      );
      res.json(users);
    } catch (error) {
      console.log(error.toString());
    }
  },
  // Просматривать студентов из определенной группы
  getUsersByGroup: async function (req, res) {
    try {
      const users = await User.find({ group: req.params.id });
      res.json(users);
    } catch (error) {
      console.log(error.toString());
    }
  },
  //  - ВЫВОД ВСЕХ СТУДЕНТОВ СДЕЛАВШИХ ОПЛАТУ

  getUsersByPaymentAll: async function (req, res) {
    try {
      const users = await User.find({ payment: 140 });
      res.json(users);
    } catch (error) {
      console.log(error.toString());
    }
  },
  // - ВЫВОД ВСЕХ СТУДЕНТОВ, СДЕЛАВШИХ НЕПОЛНУЮ ОПЛАТУ
  getUsersByPaymentHalf: async function (req, res) {
    try {
      const users = await User.find({ payment: 80 });
      res.json(users);
    } catch (error) {
      console.log(error.toString());
    }
  },
  // - ВЫВОД ВСЕХ СТУДЕНТОВ НЕ СДЕЛАВШИХ ОПЛАТУ
  getUsersByNotPayment: async function (req, res) {
    try {
      const users = await User.find({ payment: 0 });
      res.json(users);
    } catch (error) {
      console.log(error.toString());
    }
  },
};
