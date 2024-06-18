const { create, getbillingById, getbilling, updatebilling, deletebilling } = require("./billing.service");

module.exports = {
    createbilling: (req, res) => {
        const body = req.body;
        //body.image = req.file.destination +'/'+req.file.filename;
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
    getbillingById: (req, res) => {
        const id = req.params.id;
        getbillingById(id, (err, results) => {
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
    getbilling: (req, res) => {
        getbilling((err, results) => {
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
    updatebilling: (req, res) => {
        const body = req.body;
       // body.image = req.file.destination +'/'+req.file.filename;
        updatebilling(body, (err, results) => {
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
    deletebilling: (req, res) => {
        const id = req.params.id;
        deletebilling(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                message: "billing deleted successfully"
            });
        });
    }
};
