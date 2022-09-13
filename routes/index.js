const { Router } = require("express");
const router = Router();

router.use(require("./categories.route"));
router.use(require("./groups.route"));
router.use(require("./notes.route"));
router.use(require("./users.route"));


module.exports = router;