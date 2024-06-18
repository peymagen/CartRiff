const pool = require("../../config/database");

module.exports = {
    create: (data, callBack) => {
        pool.query(
            `INSERT INTO message ( from_user, to_user, message ) VALUES ( ?, ?, ?)`,
            [data.from_user,data.to_user,data.message],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getmessage: (callBack) => {
        pool.query(
            `SELECT * FROM message`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    getmessageById: (id, callBack) => {
        pool.query(
            `SELECT * FROM message WHERE id = ?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    updatemessage: (data, callBack) => {
        pool.query(
            `UPDATE message SET from_user = ?, to_user = ?, message = ? WHERE id = ?`,
            [data.from_user,data.to_user,data.message,data.id],
            (error, results, fields) => {
                if (error) {
                    return callBack(error);
                }
                return callBack(null, results);
            }
        );
    },
    deletemessage: (id, callBack) => {
        pool.query(
            `DELETE FROM message WHERE id = ?`,
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
