import express, { Router } from "express"

const router = express.Router()

router.get("/login",(req,res)=>{
    res.render("login")
})

export default router;