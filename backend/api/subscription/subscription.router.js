const { createsubscription, getsubscriptionById, getsubscription, updatesubscription, deletesubscription } = require("./subscription.controller");
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



router.post("/", upload.none(), createsubscription);
router.get("/", getsubscription);
router.get("/:id", getsubscriptionById);
router.put("/", upload.none(), updatesubscription);
router.delete("/:id", deletesubscription);

module.exports = router;
