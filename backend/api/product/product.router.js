const { createproduct, getproductById, getproduct, updateproduct, deleteproduct } = require("./product.controller");
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

router.post("/",upload.single('image'),createproduct);
router.get("/", getproduct);
router.get("/:id", getproductById);
router.put("/",upload.single('image'),updateproduct);
router.delete("/:id", deleteproduct);

module.exports = router;
