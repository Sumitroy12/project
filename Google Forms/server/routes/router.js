var router = require('express').Router()

const userRouter = require('./userRouter')
const FormRouter = require('./FormRouter')


router.use('/user', userRouter)
router.use('/form', FormRouter)

router.get('/', (req, res)=>{
    res.send("Router.js working fine")
})


module.exports = router;