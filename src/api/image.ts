import express, { Request, Response, Router } from "express";
import { check, validationResult } from "express-validator";

const router = express.Router();

const upload = require("../middleware/image");


/**
 *  @route Post api/image
 *  @desc image upload
 *  @access Public
 */
router.post(
    "/",
    upload.single('image'),
    async(req: Request, res: Response)=>{
        try{
            console.log("successfully uploaded"); 
            res.json({ "msg" : "success!"})
        }catch(err){
            console.error(err.message);
            return res.status(500).send("Server error");
        }
        
    }
)

module.exports = router;