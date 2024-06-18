const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO push_notification ( title, message, sent_to ) VALUES ( ?, ?, ?)`,
            [data.title,data.message,data.sent_to],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getpush_notification: (callBack) => {
        pool.query(
            `SELECT * FROM push_notification`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getpush_notificationById: (id, callBack) => {
        pool.query(
            `SELECT * FROM push_notification WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatepush_notification: (data, callBack) => {
        pool.query(
            `UPDATE push_notification SET title = ?, message = ?, sent_to = ? WHERE id = ?`,
            [data.title,data.message,data.sent_to,data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deletepush_notification: (id, callBack) => {
        pool.query(
            `DELETE FROM push_notification WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results); 
            }
        );
    }
};
