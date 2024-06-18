const { createuser, getuserById, getuser, updateuser, deleteuser, login, forgetpassword } = require("./user.controller");
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

router.post("/",upload.single('image'),createuser); 
router.post("/login",upload.none(),login);
router.post("/forgetpassword",upload.none(), forgetpassword);
router.get("/", getuser);
router.get("/:id", getuserById);
router.put("/",upload.single('image'), updateuser);
router.delete("/:id", deleteuser);


module.exports = router;
