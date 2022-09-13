const { Router } = require("express");
const {
  groupscontroller,
} = require("../controllers/groups.controller");
const router = Router();

router.post("/groups", groupscontroller.createGroup);

router.delete("/groups/:id", groupscontroller.deleteGroupById);

router.patch("/groups/:id", groupscontroller.changeGroupById);
router.get("/groups", groupscontroller.getGroups);
router.patch("/groups/add/:id", groupscontroller.addUsersToGroup);
router.patch("/groups/delete/:id", groupscontroller.deleteUsersToGroup);
router.get("/groups/week", groupscontroller.getGroupsByWeek);
router.get("/groups/finish", groupscontroller.getGroupsFinish);
router.get("/groups/:idGroup/:idCategory", groupscontroller.getPersent);
module.exports = router;