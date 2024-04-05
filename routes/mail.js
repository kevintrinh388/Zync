var express = require("express");
var router = express.Router();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

router.get("/:username", async function (req, res, next) {
    const userId = await prisma.user.findUnique({
        where: {
            username: req.params.username,
        },
        select: {
            id: true
        }
    }).then(data => data.id);

   const mail = await prisma.mail.findMany({
        where: {
            OR: [
                {
                    senderId: userId
                },
                {
                    recipientId: userId
                }
            ]
        },
        select: {
            id: true,
            body: true
        }
    })
  res.send(mail);
});

module.exports = router;