const { createnotification, getnotificationById, getnotification, updatenotification, deletenotification } = require("./notification.controller");
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


router.post("/", upload.none(), createnotification);
router.get("/", getnotification);
router.get("/:id", getnotificationById);
router.put("/", upload.none(), updatenotification);
router.delete("/:id", deletenotification);

module.exports = router;
