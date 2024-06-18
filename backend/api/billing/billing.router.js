const { createbilling, getbillingById, getbilling, updatebilling, deletebilling } = require("./billing.controller");
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

router.post("/",upload.none(),createbilling);
router.get("/", getbilling);
router.get("/:id", getbillingById);
router.put("/",upload.none(),updatebilling);
router.delete("/:id", deletebilling);

module.exports = router;
