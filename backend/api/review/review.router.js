const { createreview, getreviewById, getreview, updatereview, deletereview } = require("./review.controller");
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


router.post("/", upload.none(), createreview);
router.get("/", getreview);
router.get("/:id", getreviewById);
router.put("/", upload.none(), updatereview);
router.delete("/:id", deletereview);

module.exports = router;
