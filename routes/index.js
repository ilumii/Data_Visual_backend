const router = require('express').Router();
const boroughRoute = require('./borough');

router.use('/borough', boroughRoute);

router.use((req, res, next) => {
    res.status(200).send("Default API route.");
})


module.exports = router;