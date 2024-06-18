const { createmessage, getmessageById, getmessage, updatemessage, deletemessage } = require("./message.controller");
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


router.post("/", upload.none(), createmessage);
router.get("/", getmessage);
router.get("/:id", getmessageById);
router.put("/", upload.none(), updatemessage);
router.delete("/:id", deletemessage);

module.exports = router;
