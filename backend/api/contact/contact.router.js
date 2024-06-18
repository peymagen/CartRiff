const { createcontact, getcontactById, getcontact, updatecontact, deletecontact } = require("./contact.controller");
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


router.post("/", upload.none(), createcontact);
router.get("/", getcontact);
router.get("/:id", getcontactById);
router.put("/", upload.none(), updatecontact);
router.delete("/:id", deletecontact);

module.exports = router;
