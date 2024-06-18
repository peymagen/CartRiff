const { create, getuserById, getuser, updateuser, deleteuser, getUserByUserEmail,updateUserpassword } = require("./user.service");

const { genSaltSync, hashSync, compareSync }  = require("bcrypt");

module.exports = {
    createuser: (req, res) => {
        const body = req.body;
        //using multer only one line 
        body.image = req.file.destination + '/' + req.file.filename;
        //for password
        const salt =  genSaltSync(10);
        body.password = hashSync(body.password,salt)
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    message: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getuserById: (req, res) => {
        const id = req.params.id;
        getuserById(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    message: "Record not found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getuser: (req, res) => {
        getuser((err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    updateuser: (req, res) => {
        const body = req.body;
        //using multer only one line 
        body.image = req.file.destination + '/' + req.file.filename;
        const salt =  genSaltSync(10);
        body.password = hashSync(body.password,salt)
        updateuser(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "Updated successfully"
            });
        });
    },
    deleteuser: (req, res) => {
        const id = req.params.id;
        deleteuser(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "user deleted successfully"
            });
        });
    },
    login: (req, res) => {
        const { email, password } = req.body; // Destructure email and password from req.body
        getUserByUserEmail(email, (err, results) => {
          if (err) {
            console.log(err);
            return res.json({
              success: 0,
              data: "An error occurred"
            });
          }
    
          if (!results || !results[0]) {
            return res.json({
              success: 0,
              data: "Invalid email or password"
            });
          }
    
          const result = compareSync(password, results[0].password);
          if (result) {
            results[0].password = undefined; // Remove password from the response
            return res.json({
              success: 1,
              message: "Login successful",
              userData: results[0] // Send user data without token
            });
          } else {
            return res.json({
              success: 0,
              data: "Invalid email or password"
            });
          }
        });
      },
    
      forgetpassword: (req, res) => {
        const body = req.body;
        getUserByUserEmail(body.email, (err, results) => {
            if (err) {
                return res.status(500).json({
                    success: 0,
                    message: "An error occurred"
                });
            }

            if (!results || !results[0]) {
                return res.status(404).json({
                    success: 0,
                    message: "User not found"
                });
            }
            const salt =  genSaltSync(10);
            body.password = hashSync(body.password,salt)
            // Update 
            updateUserpassword(body, (err, result) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({
                        success: 0,
                        message: "An error occurred"
                    });
                }
                return res.status(200).json({
                    success: 1,
                    message: "Password Updated successfully"
                    
                });
            });
        });
    }
};