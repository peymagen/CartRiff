const { create, getnotificationById, getnotification, updatenotification, deletenotification } = require("./notification.service");

module.exports = {
    createnotification: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    notification: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getnotificationById: (req, res) => {
        const id = req.params.id;
        getnotificationById(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    notification: "Record not found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getnotification: (req, res) => {
        getnotification((err, results) => {
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
    updatenotification: (req, res) => {
        const body = req.body;
        updatenotification(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                notification: "Updated successfully"
            });
        });
    },
    deletenotification: (req, res) => {
        const id = req.params.id;
        deletenotification(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                notification: "notification deleted successfully"
            });
        });
    }
};
