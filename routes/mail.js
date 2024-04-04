var express = require("express");
var router = express.Router();

/* GET mails listing. We want to query database to find users ID using the username
we get from front end, after we get id we would use id to find the mails that has 
the id that are either sender or recipient */
router.get("/", function (req, res, next) {
    /* const userID = await prisma.user.findUnique({
        where: {
            username: req.params.username,
        },
        select: {
            id: true
        }
    })
   /* const mail = await prisma.mail.findMany({
        where: {

        }
    }) */
  res.send("Hello world");
});

module.exports = router;