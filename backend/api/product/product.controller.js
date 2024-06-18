const { create, getproductById, getproduct, updateproduct, deleteproduct } = require("./product.service");

module.exports = {
    createproduct: (req, res) => {
        const body = req.body;
        body.image = req.file.destination +'/'+req.file.filename;
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
    getproductById: (req, res) => {
        const id = req.params.id;
        getproductById(id, (err, results) => {
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
    getproduct: (req, res) => {
        getproduct((err, results) => {
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
    updateproduct: (req, res) => {
        const body = req.body;
        body.image = req.file.destination +'/'+req.file.filename;
        updateproduct(body, (err, results) => {
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
    deleteproduct: (req, res) => {
        const id = req.params.id;
        deleteproduct(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "product deleted successfully"
            });
        });
    }
};
