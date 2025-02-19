const express =require('express')
const router =express.Router();

router.get('/test',(req,res)=>{
res.json({message:'GET api/post route'})
});
module.exports = router;
