const express =  require('express')
const router = express.Router()

router.get("/", (req, res) =>{
    res.json("hello word")
});

router.post("/", (req,res) => {
    
})

module.exports = router