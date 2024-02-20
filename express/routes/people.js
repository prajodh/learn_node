const express = require("express");
let router = express.Router()
let {people_1,people_2,people_3} = require("../controllers/people")

router.post("/",people_1)

router.post("/people",people_2)

router.put("/:id",people_3)


module.exports = router