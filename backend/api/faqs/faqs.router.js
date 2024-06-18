const { createfaqs, getfaqsById, getfaqs, updatefaqs, deletefaqs } = require("./faqs.controller");
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


router.post("/", upload.none(), createfaqs);
router.get("/", getfaqs);
router.get("/:id", getfaqsById);
router.put("/", upload.none(), updatefaqs);
router.delete("/:id", deletefaqs);

module.exports = router;
