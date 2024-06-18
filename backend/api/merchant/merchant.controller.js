const { create, getmerchantById, getmerchant, updatemerchant, deletemerchant } = require("./merchant.service");

module.exports = {
    createmerchant: (req, res) => {
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
    getmerchantById: (req, res) => {
        const id = req.params.id;
        getmerchantById(id, (err, results) => {
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
    getmerchant: (req, res) => {
        getmerchant((err, results) => {
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
    updatemerchant: (req, res) => {
        const body = req.body;
        body.image = req.file.destination +'/'+req.file.filename;
        updatemerchant(body, (err, results) => {
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
    deletemerchant: (req, res) => {
        const id = req.params.id;
        deletemerchant(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "merchant deleted successfully"
            });
        });
    }
};
