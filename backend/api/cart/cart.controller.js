const { create, getcartById, getcart, updatecart, deletecart } = require("./cart.service");

module.exports = {
    createcart: (req, res) => {
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
    getcartById: (req, res) => {
        const id = req.params.id;
        getcartById(id, (err, results) => {
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
    getcart: (req, res) => {
        getcart((err, results) => {
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
    updatecart: (req, res) => {
        const body = req.body;
        body.image = req.file.destination +'/'+req.file.filename;
        updatecart(body, (err, results) => {
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
    deletecart: (req, res) => {
        const id = req.params.id;
        deletecart(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "cart deleted successfully"
            });
        });
    }
};
