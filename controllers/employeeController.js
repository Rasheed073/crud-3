const express = require('express')

var router = express.Router()

router.get('/',(req,res)=>{
    res.json('sample text')
})

module.exports = router