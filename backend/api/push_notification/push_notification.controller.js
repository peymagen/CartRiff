const { create, getpush_notificationById, getpush_notification, updatepush_notification, deletepush_notification } = require("./push_notification.service");

module.exports = {
    createpush_notification: (req, res) => {
        const body = req.body;
        create(body, (err, results) => {
            if (err) {
                console.log(err);
                return res.status(500).json({
                    success: 0,
                    push_notification: "Database connection error"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getpush_notificationById: (req, res) => {
        const id = req.params.id;
        getpush_notificationById(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            if (!results) {
                return res.json({
                    success: 0,
                    push_notification: "Record not found"
                });
            }
            return res.json({
                success: 1,
                data: results
            });
        });
    },
    getpush_notification: (req, res) => {
        getpush_notification((err, results) => {
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
    updatepush_notification: (req, res) => {
        const body = req.body;
        updatepush_notification(body, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                push_notification: "Updated successfully"
            });
        });
    },
    deletepush_notification: (req, res) => {
        const id = req.params.id;
        deletepush_notification(id, (err, results) => {
            if (err) {
                console.log(err);
                return;
            }
            return res.json({
                success: 1,
                push_notification: "push_notification deleted successfully"
            });
        });
    }
};
