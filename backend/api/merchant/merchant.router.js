const { createmerchant, getmerchantById, getmerchant, updatemerchant, deletemerchant } = require("./merchant.controller");
const router = require("express").Router();


const multer = require("multer");


const upload = multer({ 
    storage: multer.diskStorage({
        destination: function(req, file,cb){
            cb(null, "uploads")
        },
        filename: function (req, file, cb){
            cb(null, file.fieldname + "-"+ Date.now()+".jpg");
        }
    })
}); 

router.post("/",upload.single('image'),createmerchant);
router.get("/", getmerchant);
router.get("/:id", getmerchantById);
router.put("/",upload.single('image'),updatemerchant);
router.delete("/:id", deletemerchant);

module.exports = router;
