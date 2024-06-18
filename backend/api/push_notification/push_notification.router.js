const { createpush_notification, getpush_notificationById, getpush_notification, updatepush_notification, deletepush_notification } = require("./push_notification.controller");
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


router.post("/", upload.none(), createpush_notification);
router.get("/", getpush_notification);
router.get("/:id", getpush_notificationById);
router.put("/", upload.none(), updatepush_notification);
router.delete("/:id", deletepush_notification);

module.exports = router;
