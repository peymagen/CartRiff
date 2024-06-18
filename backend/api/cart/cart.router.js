const { createcart, getcartById, getcart, updatecart, deletecart } = require("./cart.controller");
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

router.post("/",upload.single('image'),createcart);
router.get("/", getcart);
router.get("/:id", getcartById);
router.put("/",upload.single('image'),updatecart);
router.delete("/:id", deletecart);

module.exports = router;
