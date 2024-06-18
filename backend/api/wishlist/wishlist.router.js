const { createwishlist, getwishlistById, getwishlist, updatewishlist, deletewishlist } = require("./wishlist.controller");
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

router.post("/",upload.single('image'),createwishlist);
router.get("/", getwishlist);
router.get("/:id", getwishlistById);
router.put("/",upload.single('image'),updatewishlist);
router.delete("/:id", deletewishlist);

module.exports = router;
