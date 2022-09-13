const Group = require("../models/Group.model");
const User = require("../models/User.model")
const Category = require("../models/Category.model")


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
      const groups = await Group.find().populate('week');
      res.json(groups);
    } catch (error) {
      console.log(error.toString());
    }
  },
  // добавить студентов группу
  addUsersToGroup: async function(req, res){
    try{
      const users = await Group.findByIdAndUpdate(req.params.id,{
        $push: { users: req.body.users },
      })
      res.json(users);
    }catch(error){
      console.log(error.toString());
    }
  },
//удалить студентов из группы
 deleteUsersToGroup: async function(req, res){
    try{
      const users = await Group.findByIdAndUpdate(req.params.id,{
        $pull: { users: req.body.users },
      },{ new: true })
      res.json(users);
    }catch(error){
      console.log(error.toString());
    }
  },
  // - ВЫВОД ВСЕХ ГРУПП НАХОДЯЩИХСЯ НА ОПРЕДЕЛЕННОЙ НЕДЕЛЕ (1-15)
  getGroupsByWeek:async function (req, res) {

    try {
     
        const groups = await Group.find({week: req.body.week});
      res.json(groups);
      }catch (error) {
      console.log(error.toString());
    }
  },
  // - ВЫВОД ГРУПП ОКОНЧИВШИХ ОБУЧЕНИЕ
  getGroupsFinish:async function (req, res) {

    try {
     
        const groups = await Group.find({week: 15});
      res.json(groups);
      }catch (error) {
      console.log(error.toString());
    }
  },
  // - ПОЛУЧИТЬ ПРОЦЕНТ ПОЛУЧИВШИХ ОФФЕР ИЗ ОПРЕДЕЛЕННОЙ ГРУППЫ
getPersent:async function (req, res) {
  const group = await Group.findById(req.params.idGroup);
  const  users = await User.find();
  const category = await Category.findById(req.params.idCategory);
 let offer;
  try {
   if(users.category.name==="получил оффер"&& users.group.id===group.id){
    offer = (category.name==="получил оффер").length;
    return res.json(`${offer*100/group.users.length} процент студентов получили оффер`) 
   }
      
    }catch (error) {
    console.log(error.toString());
  }
}
  


};