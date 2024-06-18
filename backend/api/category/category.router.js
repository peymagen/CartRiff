const { createcategory, getcategoryById, getcategory, updatecategory, deletecategory } = require("./category.controller");
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



router.post("/", upload.none(), createcategory);
router.get("/", getcategory);
router.get("/:id", getcategoryById);
router.put("/", upload.none(), updatecategory);
router.delete("/:id", deletecategory);

module.exports = router;
