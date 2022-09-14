const Group = require("../models/Group.model");
const User = require("../models/User.model");
const Category = require("../models/Category.model");
const ObjectID = require("mongodb").ObjectId;

module.exports.groupscontroller = {
  createGroup: async function (req, res) {
    try {
      await Group.create({
        name: req.body.name,
        users: req.body.users,
        week: req.body.week,
      });
      res.json("Группа добавлена");
    } catch (error) {
      console.log(error.toString());
    }
  },

  deleteGroupById: async function (req, res) {
    try {
      const group = await Group.findByIdAndRemove(req.params.id);
      res.json("Группа удалена");
    } catch (error) {
      console.log(error.toString());
    }
  },
  changeGroupById: async function (req, res) {
    try {
      const note = await Group.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        users: req.body.users,
        week: req.body.week,
      });
      res.json("Группа изменена");
    } catch (error) {
      console.log(error.toString());
    }
  },
  // Посмотреть все группы
  getGroups: async function (req, res) {
    try {
      const groups = await Group.find().populate("week");
      res.json(groups);
    } catch (error) {
      console.log(error.toString());
    }
  },
  // добавить студентов группу
  addUsersToGroup: async function (req, res) {
    try {
      const users = await Group.findByIdAndUpdate(req.params.id, {
        $push: { users: req.body.users },
      });
      res.json(users);
    } catch (error) {
      console.log(error.toString());
    }
  },
  //удалить студентов из группы
  deleteUsersToGroup: async function (req, res) {
    try {
      const users = await Group.findByIdAndUpdate(
        req.params.id,
        {
          $pull: { users: req.body.users },
        },
        { new: true }
      );
      res.json(users);
    } catch (error) {
      console.log(error.toString());
    }
  },
  // - ВЫВОД ВСЕХ ГРУПП НАХОДЯЩИХСЯ НА ОПРЕДЕЛЕННОЙ НЕДЕЛЕ (1-15)
  getGroupsByWeek: async function (req, res) {
    try {
      const groups = await Group.find({ week: req.body.week });
      res.json(groups);
    } catch (error) {
      console.log(error.toString());
    }
  },
  // - ВЫВОД ГРУПП ОКОНЧИВШИХ ОБУЧЕНИЕ
  getGroupsFinish: async function (req, res) {
    try {
      const groups = await FGroup.find({ week: 15 });
      res.json(groups);
    } catch (error) {
      console.log(error.toString());
    }
  },
  // - ПОЛУЧИТЬ ПРОЦЕНТ ПОЛУЧИВШИХ ОФФЕР ИЗ ОПРЕДЕЛЕННОЙ ГРУППЫ
  getPersent: async function (req, res) {
    const groupStudent = await User.find({ group: req.params.id });
    try {
      let newArr = groupStudent.filter(
        (item) => item.category == req.params.idCategory
      );
      const result = (newArr.length * 100) / groupStudent.length;
      res.json(
        `Процент из группы получивших оффер составляет: ${Math.floor(result)}%`
      );
    } catch (error) {
      console.log(error.toString());
    }
  },
};
